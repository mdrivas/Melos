import { Button } from "~/components/ui/button";
import { getServerAuthSession } from "~/server/auth";
import { PlaylistGenerator } from "~/app/components/PlaylistGenerator";
import { Music4, Sparkles } from "lucide-react";
import { TestimonialSection } from "~/app/components/TestimonialSection";
import { SpotifyAuthButton } from "~/app/components/SpotifyAuthButton";
import { SignOutButton } from "~/app/components/SignOutButton";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black overflow-hidden">
      {session && (
        <div className="absolute right-3 top-3 sm:right-4 sm:top-4">
          <SignOutButton />
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
            <SpotifyAuthButton />
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
