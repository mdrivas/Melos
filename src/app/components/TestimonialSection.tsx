"use client";

import { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import { Button } from "~/components/ui/button";

interface Testimonial {
  prompt: string;
  playlist: string;
  userName: string;
  playlistName: string;
}

const testimonials: Testimonial[] = [
  {
    prompt: "Need some upbeat K-pop for my morning workout 🏋️‍♀️",
    playlist: "https://open.spotify.com/playlist/your_playlist_id_1",
    userName: "Sarah K.",
    playlistName: "K-pop Workout Boost"
  },
  {
    prompt: "My girlfriend is from Hong Kong and she loves isoknock",
    playlist: "https://open.spotify.com/playlist/5yu479gMLhE57CgiEcPZpa?si=JkkVcL7pQ1OmWx5C9qui2Q",
    userName: "Mattheos D.",
    playlistName: "Isoknock Vibes"
  },
  {
    prompt: "90s hip hop and R&B for a house party 🎉",
    playlist: "https://open.spotify.com/playlist/your_playlist_id_3",
    userName: "Alex T.",
    playlistName: "90s Party Mix"
  }
];

function TestimonialCard({ prompt, playlist, userName, playlistName }: Testimonial) {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 shadow-lg">
        <Quote className="h-5 w-5 text-zinc-500 mb-3" />
        <p className="text-sm text-zinc-400 mb-4 italic">&ldquo;{prompt}&rdquo;</p>
        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0">
            <p className="text-sm font-medium leading-none text-zinc-200">{userName}</p>
            <p className="text-xs text-zinc-500 mt-1">{playlistName}</p>
          </div>
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="shrink-0 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"
          >
            <a href={playlist} target="_blank" rel="noopener noreferrer">
              Listen
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-4">
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold text-center text-zinc-100">
          See what others are creating
        </h2>
        
        <div className="relative">
          <TestimonialCard 
            {...testimonials[currentIndex]!} 
          />
          
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'w-8 bg-purple-500' 
                    : 'w-4 bg-zinc-800 hover:bg-zinc-700'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 