"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import { api } from "~/trpc/react";
import { cn } from "~/lib/utils";
import { useToast } from "~/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "~/components/ui/dialog";
import { Loader2 } from "lucide-react";

interface PlaylistGeneratorProps {
  className?: string;
}

interface PlaylistData {
  playlistUrl: string;
  tracks?: Array<{
    name: string;
    artists: string;
  }>;
}

export function PlaylistGenerator({ className }: PlaylistGeneratorProps) {
  const [prompt, setPrompt] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [playlistData, setPlaylistData] = useState<PlaylistData | null>(null);
  const { toast } = useToast();
  
  const generatePlaylist = api.spotify.generatePlaylist.useMutation({
    onSuccess: (data) => {
      if (!data?.playlistUrl) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to get playlist URL"
        });
        return;
      }

      setPlaylistData({
        playlistUrl: data.playlistUrl,
        tracks: data.tracks
      });
      setShowModal(true);
      setPrompt(""); // Clear input
    },
    onError: (error) => {
      console.error("Playlist generation error:", error);
      
      if (error.message.includes("access token expired") || 
          error.message.includes("No Spotify access token found")) {
        toast({
          variant: "destructive",
          title: "Session Expired",
          description: "Your Spotify session has expired. Please sign in again.",
          action: (
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.location.href = "/api/auth/signin"}
              className="bg-white text-black hover:bg-gray-100"
            >
              Sign In
            </Button>
          ),
        });
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: error.message || "Failed to generate playlist. Please try again."
        });
      }
    }
  });

  const handleSubmit = () => {
    const trimmedPrompt = prompt.trim();
    if (!trimmedPrompt) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter a prompt"
      });
      return;
    }

    generatePlaylist.mutate({ prompt: trimmedPrompt });
  };

  return (
    <>
      <div className={cn("space-y-6 w-full", className)}>
        <Textarea
          placeholder="e.g., 'I'm feeling energetic and want to work out' or 'Need some calm music for studying'"
          value={prompt}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setPrompt(e.target.value)}
          className="min-h-[120px] sm:min-h-[100px] w-full resize-none bg-zinc-800/50 border-zinc-700/50 text-white placeholder:text-zinc-300/50 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl text-sm sm:text-base transition-all"
          disabled={generatePlaylist.isPending}
        />
        
        <Button 
          className="w-full rounded-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white transition-all duration-300 shadow-lg hover:shadow-purple-500/25 font-medium py-6 text-base sm:text-lg disabled:opacity-50"
          size="lg"
          onClick={handleSubmit}
          disabled={generatePlaylist.isPending || !prompt.trim()}
        >
          {generatePlaylist.isPending ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Creating your perfect playlist...
            </>
          ) : (
            "Generate Playlist"
          )}
        </Button>
      </div>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="fixed left-1/2 top-1/2 w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-zinc-800 bg-zinc-950/95 text-zinc-50 sm:w-full sm:max-w-[400px] [&>button]:hidden">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-center">
              <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Your Playlist is Ready! 🎉
              </span>
            </DialogTitle>
            <DialogDescription className="text-center text-zinc-300 mt-2">
              Click below to open your personalized playlist on Spotify.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6 space-y-4">
            <Button 
              asChild 
              className="w-full rounded-xl bg-[#1DB954] hover:bg-[#1ed760] text-white font-bold py-6 text-lg transition-all duration-300 shadow-lg hover:shadow-[#1DB954]/25"
            >
              <a href={playlistData?.playlistUrl} target="_blank" rel="noopener noreferrer">
                Open in Spotify
              </a>
            </Button>
            <Button
              variant="outline"
              onClick={() => setShowModal(false)}
              className="w-full rounded-xl border-zinc-800 bg-transparent text-zinc-200 hover:bg-zinc-800/50 py-6 text-lg font-medium"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
} 