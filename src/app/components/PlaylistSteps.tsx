"use client";

import { useState } from "react";
import { MessageSquareText, PlayCircle, Headphones } from "lucide-react";
import { Button } from "~/components/ui/button";
import { PlaylistGenerator } from "./PlaylistGenerator";

export function PlaylistSteps() {
  const [showPrompt, setShowPrompt] = useState(false);

  if (showPrompt) {
    return <PlaylistGenerator className="mt-6 sm:mt-8" />;
  }

  return (
    <div className="w-full max-w-3xl mx-auto mb-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: <MessageSquareText className="h-6 w-6 text-purple-400" />,
            title: "1. Input Prompt",
            description: "Describe your mood or activity"
          },
          {
            icon: <PlayCircle className="h-6 w-6 text-violet-400" />,
            title: "2. Generate Playlist",
            description: "Let AI curate your perfect mix"
          },
          {
            icon: <Headphones className="h-6 w-6 text-fuchsia-400" />,
            title: "3. Listen & Enjoy",
            description: "Open in Spotify and vibe"
          }
        ].map((step, i) => (
          <div key={i} className="flex flex-col items-center text-center p-4 rounded-lg bg-zinc-800/20 border border-zinc-700/30">
            {step.icon}
            <h3 className="mt-3 font-medium text-white">{step.title}</h3>
            <p className="mt-1 text-sm text-zinc-400">{step.description}</p>
          </div>
        ))}
      </div>
      
      <Button
        onClick={() => setShowPrompt(true)}
        className="mt-8 mx-auto block bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700"
      >
        Let&apos;s do it!
      </Button>
    </div>
  );
} 