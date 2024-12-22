import { Button } from "~/components/ui/button";
import { getServerAuthSession } from "~/server/auth";
import { PlaylistGenerator } from "~/app/components/PlaylistGenerator";
import { Music4, Sparkles } from "lucide-react";
import { TestimonialSection } from "~/app/components/TestimonialSection";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black">
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
      
      <div className="container mx-auto min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-lg text-center space-y-4 sm:space-y-6 px-4">
            <div className="space-y-3">
              <div className="flex justify-center">
                <Music4 className="h-12 w-12 text-purple-400" />
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-none px-2 flex flex-wrap justify-center items-center gap-x-3 gap-y-1">
                <span>Your perfect playlist,</span>
                <span className="bg-gradient-to-r from-violet-300 via-purple-400 to-purple-700 bg-clip-text text-transparent inline-flex items-center gap-2 relative">
                  powered by AI
                  <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 hidden sm:inline text-purple-400" />
                </span>
              </h1>
            </div>
            
            <p className="text-base text-zinc-400 max-w-sm mx-auto px-2">
              Tell us how you&apos;re feeling or what you&apos;re doing, and we&apos;ll create the perfect playlist for your moment.
            </p>

            {session ? (
              <PlaylistGenerator className="mt-6" />
            ) : (
              <Button
                asChild
                size="lg"
                className="mt-6 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white transition-all duration-300 shadow-lg hover:shadow-purple-500/25 font-medium px-8 py-6 text-base sm:text-lg"
              >
                <a href="/api/auth/signin">Sign in with Spotify to continue</a>
              </Button>
            )}
          </div>
        </div>

        {/* Testimonials section */}
        {!session && <TestimonialSection />}
      </div>
    </main>
  );
}
