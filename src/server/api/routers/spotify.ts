// @ts-nocheck

import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import OpenAI from "openai";
import { env } from "~/env";
import { TRPCError } from "@trpc/server";
import SpotifyWebApi from "spotify-web-api-node";
import { headers } from "next/headers";
import { playlists } from "~/server/db/schema";

// Configuration
const PLAYLIST_CONFIG = {
  SEARCH_LIMIT: 5,     // Limit tracks per search
  TOTAL_TRACKS: 20,    // Final playlist size
  MIN_POPULARITY: 30   // Minimum track popularity
};

// Updated system prompt with context-aware artist selection
const SYSTEM_PROMPT = `You are a music recommendation system. Return ONLY raw JSON without any markdown formatting.

Analyze the input carefully:
1. If it mentions "going to X's concert" or "seeing X live", focus primarily on that artist's songs
2. If it asks for "artists like X" or "similar to X", then suggest related artists
3. For general mood/activity requests, provide a diverse artist selection

Format your response as:
{
  "primary_artist": "main artist name if specified in request, null otherwise",
  "artists": ["4-6 artists based on context"],
  "genres": ["3-4 specific music genres"],
  "mood_terms": ["3-4 descriptive terms"],
  "context_terms": ["2-3 specific terms"]
}

Example 1: "going to a Drake concert"
{
  "primary_artist": "Drake",
  "artists": ["Drake", "Drake & Future", "Drake & 21 Savage"],
  "genres": ["Hip Hop", "Rap", "R&B"],
  "mood_terms": ["energetic", "confident", "hype"],
  "context_terms": ["concert", "live performance"]
}

Example 2: "artists like Drake"
{
  "primary_artist": null,
  "artists": ["J. Cole", "Travis Scott", "Future", "21 Savage", "The Weeknd"],
  "genres": ["Hip Hop", "Rap", "R&B"],
  "mood_terms": ["confident", "melodic", "atmospheric"],
  "context_terms": ["similar artists", "recommendations"]
}`;

// Initialize APIs
const openai = new OpenAI({ apiKey: env.OPENAI_API_KEY });
const spotifyApi: SpotifyWebApi = new SpotifyWebApi({
  clientId: env.SPOTIFY_CLIENT_ID,
  clientSecret: env.SPOTIFY_CLIENT_SECRET,
});

// Schema definitions
const PlaylistInput = z.object({
  prompt: z.string(),
  trackCount: z.number().min(1).max(50).optional().default(PLAYLIST_CONFIG.TOTAL_TRACKS),
});

interface UserContext {
  language: string;
  region: string;
  preferredMarket?: string;
}

interface KeywordResponse {
  artists: string[];
  genres: string[];
  local_terms: string[];
  mood_terms: string[];
}

// Add this utility function at the top level
const sanitizeInput = (input: string): string => {
  return input
    .normalize("NFKD") // Normalize unicode characters
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .trim()
    .replace(/\s+/g, ' ') // Replace multiple spaces
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .slice(0, 100); // Increased length limit for better context
};

// Add safe JSON parsing
const parseOpenAIResponse = (content: string): KeywordResponse => {
  try {
    // Remove any markdown formatting if present
    const jsonString = content.replace(/```json\n?|\n?```/g, '').trim();
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("[OpenAI] JSON parsing error:", error);
    // Fallback response if parsing fails
    return {
      artists: ["Error parsing response"],
      genres: ["alternative"],
      mood_terms: ["neutral"],
      context_terms: ["general"]
    };
  }
};

// Add track deduplication function
const dedupeTracks = (tracks: SpotifyApi.TrackObjectFull[]): SpotifyApi.TrackObjectFull[] => {
  const seen = new Set<string>();
  return tracks.filter(track => {
    // Create a unique key using track ID and name (as backup)
    const key = track.id || `${track.name}-${track.artists.map(a => a.name).join('-')}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};

// Add relevance scoring function
const getRelevanceScore = (
  track: SpotifyApi.TrackObjectFull,
  keywords: KeywordResponse
): number => {
  let score = 0;
  const trackArtists = track.artists.map(a => a.name.toLowerCase());
  
  // Check if any of the track's artists are in our keywords
  const isRelevantArtist = keywords.artists.some(artist => 
    trackArtists.some(trackArtist => 
      trackArtist.includes(artist.toLowerCase()) ||
      artist.toLowerCase().includes(trackArtist)
    )
  );

  // Heavily weight tracks by relevant artists
  if (isRelevantArtist) {
    score += 100;
  }

  // Add popularity score (0-80)
  score += track.popularity * 0.8;

  return score;
};

// Update weightTracks to use relevance scoring
const weightTracks = (
  tracks: SpotifyApi.TrackObjectFull[], 
  keywords: KeywordResponse
): SpotifyApi.TrackObjectFull[] => {
  // First deduplicate
  const uniqueTracks = dedupeTracks(tracks);
  
  // Sort by relevance score
  return uniqueTracks.sort((a, b) => {
    const aScore = getRelevanceScore(a, keywords);
    const bScore = getRelevanceScore(b, keywords);
    return bScore - aScore;
  });
};

export const spotifyRouter = createTRPCRouter({
  generatePlaylist: protectedProcedure
    .input(PlaylistInput)
    .mutation(async ({ input, ctx }) => {
      const userContext = await getUserContext(ctx);
      console.log("[Spotify] User context:", userContext);

      try {
        // Get access token from session
        const token = ctx.session?.user?.accessToken;
        if (!token) {
          throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "No Spotify access token found"
          });
        }

        // Set the access token before making any Spotify API calls
        spotifyApi.setAccessToken(token);
        console.log("[Spotify] Access token set successfully");

        // 1. First, get better keywords from OpenAI
        const completion = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: input.prompt }
          ],
          temperature: 0.7,
          max_tokens: 150,
          response_format: { type: "json_object" }
        });

        const keywords = parseOpenAIResponse(completion.choices[0]?.message?.content ?? "{}");
        console.log("[OpenAI] Generated keywords:", keywords);

        // Validate and clean search terms
        const sanitizeSearchTerm = (term: string) => {
          return encodeURIComponent(term.trim()).slice(0, 100);
        };

        // Enhanced search strategy with reduced limits
        const searchStrategies = {
          byPrimaryArtist: async (artist: string) => {
            try {
              return await spotifyApi.searchTracks(`artist:"${artist}"`, {
                limit: 15, // Increased limit for primary artist
                market: userContext.preferredMarket ?? 'US'
              });
            } catch (error) {
              console.warn(`[Spotify] Failed to search primary artist ${artist}:`, error);
              return null;
            }
          },
          byArtist: async (artist: string) => {
            try {
              if (!artist.trim()) return null;
              return await spotifyApi.searchTracks(`artist:"${sanitizeSearchTerm(artist)}"`, {
                limit: PLAYLIST_CONFIG.SEARCH_LIMIT,
                market: userContext.preferredMarket ?? 'US'
              });
            } catch (error) {
              console.warn(`[Spotify] Failed to search by artist ${artist}:`, error);
              return null;
            }
          },

          byGenreAndMood: async (genre: string, mood: string) => {
            try {
              if (!genre.trim()) return null;
              const searchQuery = mood.trim() 
                ? `${sanitizeSearchTerm(genre)} ${sanitizeSearchTerm(mood)}`
                : sanitizeSearchTerm(genre);
              
              return await spotifyApi.searchTracks(searchQuery, {
                limit: PLAYLIST_CONFIG.SEARCH_LIMIT,
                market: userContext.preferredMarket ?? 'US'
              });
            } catch (error) {
              console.warn(`[Spotify] Failed to search by genre/mood ${genre}/${mood}:`, error);
              return null;
            }
          },

          byContext: async (term: string) => {
            try {
              if (!term.trim()) return null;
              return await spotifyApi.searchTracks(sanitizeSearchTerm(term), {
                limit: 10,
                market: userContext.preferredMarket ?? 'US'
              });
            } catch (error) {
              console.warn(`[Spotify] Failed to search by context ${term}:`, error);
              return null;
            }
          }
        };

        // Combine results with error handling
        const searchResults = await Promise.all([
          ...(keywords.primary_artist ? [searchStrategies.byPrimaryArtist(keywords.primary_artist)] : []),
          ...keywords.artists.map(artist => searchStrategies.byArtist(artist)),
          ...keywords.genres.map(genre => 
            searchStrategies.byGenreAndMood(genre, keywords.mood_terms[0] ?? '')
          ),
          ...keywords.mood_terms.map(mood => searchStrategies.byContext(mood))
        ]);

        // Weight and process results
        const allTracks = weightTracks(
          searchResults.flatMap(result => result?.body.tracks?.items ?? []),
          keywords
        );

        console.log("\n[Spotify] All tracks found:");
        allTracks.forEach((track, index) => {
          console.log(`${index + 1}. "${track.name}" by ${track.artists.map(a => a.name).join(", ")}`);
          console.log(`   Popularity: ${track.popularity}`);
        });

        // Filter out irrelevant tracks before final selection
        const selectedTracks = allTracks
          .filter(track => {
            // Keep track if it's by one of our target artists
            const isRelevantArtist = keywords.artists.some(artist =>
              track.artists.some(trackArtist =>
                trackArtist.name.toLowerCase().includes(artist.toLowerCase()) ||
                artist.toLowerCase().includes(trackArtist.name.toLowerCase())
              )
            );
            
            return isRelevantArtist && track.popularity >= PLAYLIST_CONFIG.MIN_POPULARITY;
          })
          .slice(0, PLAYLIST_CONFIG.TOTAL_TRACKS);

        console.log("\n[Spotify] Final playlist tracks:");
        selectedTracks.forEach((track, index) => {
          console.log(`${index + 1}. "${track.name}" by ${track.artists.map(a => a.name).join(", ")}`);
        });

        // After selecting tracks...
        try {
          // Get current user's ID first
          const me = await spotifyApi.getMe();
          const userId = me.body.id;
          
          if (!userId) {
            throw new TRPCError({
              code: "INTERNAL_SERVER_ERROR",
              message: "Could not get user ID"
            });
          }

          // Create playlist with proper parameters
          const playlistName = `Melos: ${sanitizeInput(input.prompt)}`;
          const playlistDescription = `Created by Melos AI based on: ${input.prompt.trim().slice(0, 100)}`;
          
          // Create playlist using promise-based approach
          const playlist = await new Promise((resolve, reject) => {
            spotifyApi
              .createPlaylist(playlistName, {
                description: playlistDescription,
                public: false,
                collaborative: false
              })
              .then(response => resolve(response))
              .catch(error => reject(new Error(error?.message ?? "Failed to create playlist")));
          });

          if (!playlist || !playlist.body || !playlist.body.id) {
            throw new TRPCError({
              code: "INTERNAL_SERVER_ERROR",
              message: "Failed to create playlist"
            });
          }

          // Add tracks in batches
          const trackUris = selectedTracks
            .filter(track => track && track.uri)
            .map(track => track.uri);

          if (trackUris.length === 0) {
            throw new TRPCError({
              code: "INTERNAL_SERVER_ERROR",
              message: "No valid tracks found"
            });
          }

          // Add tracks in smaller batches with promise handling
          const batchSize = 10;
          for (let i = 0; i < trackUris.length; i += batchSize) {
            const batch = trackUris.slice(i, Math.min(i + batchSize, trackUris.length));
            await new Promise((resolve, reject) => {
              spotifyApi
                .addTracksToPlaylist(playlist.body.id, batch)
                .then(response => resolve(response))
                .catch(error => reject(new Error(error?.message ?? "Failed to add tracks")));
            });
          }

          await ctx.db.insert(playlists).values({
            userId: ctx.session.user.id,
            prompt: input.prompt,
            playlistUrl: playlist.body.external_urls.spotify,
            keywords: JSON.stringify(keywords), // Store the OpenAI response
          });

          return {
            playlistUrl: playlist.body.external_urls.spotify,
            tracks: selectedTracks.map(track => ({
              name: track.name,
              artists: track.artists.map(a => a.name).join(", ")
            }))
          };
        } catch (error) {
          console.error("[Spotify] Playlist creation error:", error);
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: error instanceof Error ? error.message : "Failed to create playlist"
          });
        }

      } catch (error) {
        console.error("[Spotify] Error generating playlist:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: error instanceof Error ? error.message : "Failed to generate playlist",
        } as const);
      }
    })
});

async function getUserContext(ctx: Context): Promise<UserContext> {
  // Get language/region from session if available
  const userLanguage = ctx.session.user?.language;
  const userRegion = ctx.session.user?.region;

  if (userLanguage && userRegion) {
    return {
      language: userLanguage,
      region: userRegion,
      preferredMarket: userRegion
    };
  }

  // Fallback to Accept-Language header
  const headersList = headers();
  const acceptLanguage = headersList.get("accept-language");
  const [language, region] = (acceptLanguage ?? "en-US").split("-");

  return {
    language: language ?? "en",
    region: region ?? "US",
    preferredMarket: region
  };
}

function selectTracks(allTracks: SpotifyApi.TrackObjectFull[]): SpotifyApi.TrackObjectFull[] {
  const categorizedTracks = {
    popular: allTracks.filter(t => t.popularity > 60),
    medium: allTracks.filter(t => t.popularity >= 30 && t.popularity <= 60),
    discovery: allTracks.filter(t => t.popularity < 30)
  };

  const targetCounts = {
    popular: Math.floor(PLAYLIST_CONFIG.MIN_TRACKS * PLAYLIST_CONFIG.POPULARITY_WEIGHTS.HIGH),
    medium: Math.floor(PLAYLIST_CONFIG.MIN_TRACKS * PLAYLIST_CONFIG.POPULARITY_WEIGHTS.MEDIUM),
    discovery: Math.ceil(PLAYLIST_CONFIG.MIN_TRACKS * PLAYLIST_CONFIG.POPULARITY_WEIGHTS.LOW)
  };

  return [
    ...shuffleArray(categorizedTracks.popular).slice(0, targetCounts.popular),
    ...shuffleArray(categorizedTracks.medium).slice(0, targetCounts.medium),
    ...shuffleArray(categorizedTracks.discovery).slice(0, targetCounts.discovery)
  ];
}

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Improved track deduplication and filtering
function processTracks(tracks: SpotifyApi.TrackObjectFull[]): SpotifyApi.TrackObjectFull[] {
  const trackSet = new Set<string>();
  
  return tracks
    .filter(track => {
      if (!track?.id || trackSet.has(track.id)) return false;
      trackSet.add(track.id);
      return (
        track.popularity >= PLAYLIST_CONFIG.MIN_POPULARITY &&
        !track.explicit // Optional: filter explicit content
      );
    })
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, PLAYLIST_CONFIG.TOTAL_TRACKS);
}

// Optimized search strategy with batching
const batchSearchTracks = async (
  terms: string[], 
  spotifyApi: SpotifyWebApi,
  market: string
): Promise<SpotifyApi.TrackObjectFull[]> => {
  const batchSize = 3; // Avoid rate limits
  const results: SpotifyApi.TrackObjectFull[] = [];
  
  for (let i = 0; i < terms.length; i += batchSize) {
    const batch = terms.slice(i, i + batchSize);
    const searches = batch.map(term => 
      spotifyApi.searchTracks(sanitizeInput(term), {
        limit: PLAYLIST_CONFIG.SEARCH_LIMIT,
        market
      }).catch(error => {
        console.warn(`Search failed for term "${term}":`, error);
        return null;
      })
    );

    const batchResults = await Promise.all(searches);
    results.push(...batchResults
      .filter(Boolean)
      .flatMap(result => result?.body.tracks?.items ?? []));
  }

  return results;
};