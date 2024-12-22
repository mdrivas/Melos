import { Button } from "~/components/ui/button";
import { getServerAuthSession } from "~/server/auth";
import { PlaylistGenerator } from "~/app/components/PlaylistGenerator";
import { Music4, Sparkles, Waves } from "lucide-react";
import { TestimonialSection } from "~/app/components/TestimonialSection";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main className="h-screen bg-gradient-to-b from-zinc-900 to-black overflow-hidden">
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
      
      <div className="relative h-full container mx-auto flex flex-col justify-between py-8 sm:py-10">
        <div className="flex-1 flex items-center justify-center mb-4">
          <div className="w-full max-w-xl text-center space-y-8 sm:space-y-10 px-4">
            <div className="space-y-2 sm:space-y-3">
              <div className="flex justify-center items-center gap-3">
                <Music4 className="h-10 w-10 sm:h-12 sm:w-12 text-purple-400" />
                <Waves className="h-8 w-8 sm:h-10 sm:w-10 text-violet-400" />
                <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-fuchsia-400" />
              </div>
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-none px-2 flex flex-wrap justify-center items-center gap-x-3 gap-y-2">
                <span>Your perfect playlist,</span>
                <span className="bg-gradient-to-r from-violet-300 via-purple-400 to-purple-700 bg-clip-text text-transparent inline-flex items-center gap-2">
                  powered by AI
                  <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 hidden sm:inline text-purple-400" />
                </span>
              </h1>
            </div>
            
            <p className="text-sm sm:text-base text-zinc-400 max-w-sm mx-auto px-2">
              Tell us how you&apos;re feeling or what you&apos;re doing, and we&apos;ll create the perfect playlist for your moment.
            </p>

            {session ? (
              <PlaylistGenerator className="mt-8 sm:mt-10" />
            ) : (
              <Button
                asChild
                size="lg"
                className="mt-8 sm:mt-10 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white transition-all duration-300 shadow-lg hover:shadow-purple-500/25 font-medium px-6 py-5 sm:px-8 sm:py-6 text-sm sm:text-base"
              >
                <a href="/api/auth/signin">Sign in with Spotify to continue</a>
              </Button>
            )}
          </div>
        </div>

        {!session && (
          <div className="flex-none -mt-8">
            <TestimonialSection />
          </div>
        )}
      </div>
    </main>
  );
}
