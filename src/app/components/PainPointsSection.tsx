'use client';

import Image from "next/image";
import { Merriweather } from "next/font/google";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CirclePair } from "~/components/ui/circle-pair";
import { CircleTriplet } from "~/components/ui/circle-triplet";

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

// Animation configuration - can be adjusted
const animationConfig = {
  initial: {
    opacity: 0,
    y: 50,  // Reduced from 100 to make the movement more subtle
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

// Customizable animation settings
const defaultAnimationSettings = {
  duration: 0.6,    // Duration of the animation in seconds
  delay: 0.2,       // Delay between each item's animation
};

export default function PainPointsSection() {
  const quotes = [
    "I'm feeling burned out and exhausted—how can I regain my passion for medicine?",
    "I'm at a career crossroads—should I change specialties, take on a leadership role, or leave clinical practice?",
    "How can I create a better work-life balance without feeling guilty or compromising my career?",
    "My workplace is toxic—but I don't know if I should leave or try to change my environment—what should I do?"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#C4D6ED] to-[#C4D6ED] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative">
        {/* Circle Decorations */}
        <div className="absolute top-16 -left-20">
          <CircleTriplet color="bg-[#D4E6FF]/80" />
        </div>
        <div className="absolute bottom-16 -right-20">
          <CirclePair color="bg-white/60" />
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-6xl text-[#2d3142] tracking-tight mb-6 ${merriweather.className}`}>
          What Brings Providers to Coaching
          </h2>
        </div>

        {/* Quotes Container */}
        <div className="max-w-5xl mx-auto space-y-12">
          {quotes.map((quote, index) => {
            const containerRef = useRef(null);
            const isInView = useInView(containerRef, { once: true, margin: "-100px" });
            
            return (
              <motion.div 
                key={index}
                ref={containerRef}
                className={`flex items-center gap-6 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                initial={animationConfig.initial}
                animate={isInView ? animationConfig.animate : animationConfig.initial}
                transition={{
                  duration: defaultAnimationSettings.duration,
                  delay: index * defaultAnimationSettings.delay,
                  ease: "easeOut"
                }}
              >
                {/* Doctor Icon */}
                <div className="relative w-20 h-20 flex-shrink-0">
                  <Image
                    src="/icons/doctor-male-icon.png"
                    alt="Doctor Icon"
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Quote Bubble */}
                <div className={`flex-1 relative bg-white rounded-2xl p-6 shadow-lg transform hover:-translate-y-1 transition-all duration-300
                  ${index % 2 === 0 ? 'rounded-l-2xl' : 'rounded-r-2xl'}`}
                >
                  <div className={`absolute ${index % 2 === 0 ? '-left-3' : '-right-3'} top-1/2 w-6 h-6 bg-white transform rotate-45 -translate-y-1/2`} />
                  <p className="text-2xl text-[#2E3142] leading-relaxed font-sans">
                    "{quote}"
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 