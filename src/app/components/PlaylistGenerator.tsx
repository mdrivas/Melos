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
  url: string;
}

export function PlaylistGenerator({ className }: PlaylistGeneratorProps) {
  const [prompt, setPrompt] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [playlistData, setPlaylistData] = useState<PlaylistData | null>(null);
  
  const generatePlaylist = api.spotify.generatePlaylist.useMutation<{ playlistUrl: string }>({
    onSuccess: (data) => {
      setPlaylistData({
        url: data.playlistUrl,
      } as PlaylistData);
      setShowModal(true);
      setPrompt(""); // Clear input
    },
    onError: (error) => {
      if (error.message.includes("access token expired")) {
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
          description: error.message
        });
      }
    }
  });

  const { toast } = useToast();

  return (
    <>
      <div className={cn("space-y-6 w-full", className)}>
        <Textarea
          placeholder="e.g., &apos;I&apos;m feeling energetic and want to work out&apos; or &apos;Need some calm music for studying&apos;"
          value={prompt}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setPrompt(e.target.value)}
          className="min-h-[120px] sm:min-h-[100px] w-full resize-none bg-zinc-800/50 border-zinc-700/50 text-white placeholder:text-zinc-300/50 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl text-sm sm:text-base transition-all"
          disabled={generatePlaylist.isPending}
        />
        
        <Button 
          className="w-full rounded-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white transition-all duration-300 shadow-lg hover:shadow-purple-500/25 font-medium py-6 text-base sm:text-lg disabled:opacity-50"
          size="lg"
          onClick={() => generatePlaylist.mutate({ prompt })}
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
        <DialogContent className="bg-zinc-900 border-none relative overflow-hidden sm:max-w-md
          before:absolute before:w-[200%] before:h-[200%] before:-left-[50%] before:-top-[50%] before:animate-spin-slow before:bg-gradient-conic before:from-purple-500/20 before:via-violet-500/20 before:to-fuchsia-500/20
          after:absolute after:inset-[1px] after:rounded-lg after:bg-zinc-900">
          <DialogHeader className="relative z-10">
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent animate-gradient">
              Your Playlist is Ready! 🎉
            </DialogTitle>
            <DialogDescription className="text-zinc-300">
              Click below to open your personalized playlist on Spotify.
            </DialogDescription>
          </DialogHeader>
          <div className="relative z-10 space-y-4">
            <Button 
              asChild 
              className="w-full bg-[#1DB954] hover:bg-[#1ed760] text-white font-bold py-6 text-lg transition-all duration-300 shadow-lg hover:shadow-[#1DB954]/25"
            >
              <a href={playlistData?.url} target="_blank" rel="noopener noreferrer">
                Open in Spotify
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
} 