import { getProviders } from "next-auth/react";
import { getServerAuthSession } from "~/server/auth";
import { redirect } from "next/navigation";
import { Music4, Sparkles, Waves } from "lucide-react";

export default async function SignIn() {
  const session = await getServerAuthSession();
  if (session) redirect("/");

  const providers = await getProviders();

  return (
    <main className="h-screen bg-gradient-to-b from-zinc-900 to-black overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-4 top-1/4 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute -right-4 top-1/2 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="relative h-full container mx-auto flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md space-y-8 text-center">
          {/* Logo and Brand */}
          <div className="space-y-4">
            <div className="flex justify-center items-center gap-3">
              <Music4 className="h-12 w-12 text-purple-400" />
              <Waves className="h-10 w-10 text-violet-400" />
              <Sparkles className="h-8 w-8 text-fuchsia-400" />
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-white">
              Melos
            </h1>
            <p className="text-lg text-zinc-400">
              Your AI-powered music companion
            </p>
          </div>

          {/* Auth Providers */}
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-zinc-800" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-zinc-900 px-2 text-zinc-500">
                  Continue with
                </span>
              </div>
            </div>

            <div className="space-y-3">
              {Object.values(providers ?? {}).map((provider) => (
                <a
                  key={provider.id}
                  href={`/api/auth/signin/${provider.id}`}
                  className="flex w-full items-center justify-center gap-3 rounded-lg bg-zinc-800/50 px-6 py-4 text-base font-medium text-white hover:bg-zinc-800 transition-all duration-200 border border-zinc-700/50 hover:border-zinc-700"
                >
                  {provider.id === "spotify" && (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                  )}
                  Sign in with {provider.name}
                </a>
              ))}
            </div>
          </div>

          {/* Footer */}
          <p className="text-sm text-zinc-500">
            By signing in, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </main>
  );
} 