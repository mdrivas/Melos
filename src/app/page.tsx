import { Button } from "~/components/ui/button";
import { getServerAuthSession } from "~/server/auth";
import { PlaylistGenerator } from "~/app/components/PlaylistGenerator";
import { Music4, Sparkles } from "lucide-react";
import { TestimonialSection } from "~/app/components/TestimonialSection";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black overflow-hidden">
      {session && (
        <div className="absolute right-3 top-3 sm:right-4 sm:top-4">
          <Button
            variant="ghost"
            size="sm"
            className="text-zinc-300 hover:text-white hover:bg-zinc-800/50 transition-all"
            asChild
          >
            <a href="/api/auth/signout">Sign out</a>
          </Button>
        </div>
      )}
      
      <div className="relative container mx-auto flex flex-col py-6 sm:py-10">
        <div className="w-full max-w-xl mx-auto text-center space-y-6 sm:space-y-8 px-4 pt-8 sm:pt-12">
          <div className="space-y-2 sm:space-y-3">
            <div className="flex justify-center items-center">
              <Music4 className="h-10 w-10 sm:h-14 sm:w-14 text-purple-400" />
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-none px-2 flex flex-wrap justify-center items-center gap-x-3 gap-y-2">
              <span>Your perfect playlist,</span>
              <span className="bg-gradient-to-r from-violet-300 via-purple-400 to-purple-700 bg-clip-text text-transparent inline-flex items-center gap-2">
                powered by AI
                <Sparkles className="h-4 w-4 sm:h-6 sm:w-6 text-purple-400" />
              </span>
            </h1>
          </div>
          
          <p className="text-sm sm:text-base text-zinc-400 max-w-sm mx-auto px-2">
            Tell us how you&apos;re feeling or what you&apos;re doing, and we&apos;ll create the perfect playlist for your moment.
          </p>

          {session ? (
            <PlaylistGenerator className="mt-6 sm:mt-8" />
          ) : (
            <a
              href="/api/auth/signin/spotify"
              className="mt-6 sm:mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 px-6 py-3 sm:px-8 sm:py-4 text-base font-medium text-white transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              Sign in with Spotify
            </a>
          )}
        </div>

        {!session && (
          <div className="mt-8 sm:mt-12">
            <TestimonialSection />
          </div>
        )}
      </div>
    </main>
  );
}
