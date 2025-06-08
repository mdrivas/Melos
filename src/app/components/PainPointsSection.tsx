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
    "I'm feeling burned out and exhausted. How can I regain my passion for medicine?",
    "I'm at a career crossroads. Should I change specialties, take on a leadership role, or leave clinical practice?",
    "How can I create a better work-life balance without feeling guilty or compromising my career?",
    "My workplace is toxic, but I don't know if I should leave or try to change my environment. What should I do?"
  ];

  // Create individual refs and inView states for each quote
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const refs = [ref1, ref2, ref3, ref4];

  const isInView1 = useInView(ref1, { once: true, margin: "-100px" });
  const isInView2 = useInView(ref2, { once: true, margin: "-100px" });
  const isInView3 = useInView(ref3, { once: true, margin: "-100px" });
  const isInView4 = useInView(ref4, { once: true, margin: "-100px" });
  const inViewStates = [isInView1, isInView2, isInView3, isInView4];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#C4D6ED] to-[#C4D6ED] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative">
        {/* Circle Decorations - hidden on smaller screens */}
        <div className="absolute top-16 -left-20 hidden lg:block">
          <CircleTriplet color="bg-[#D4E6FF]/80" />
        </div>
        <div className="absolute bottom-16 -right-20 hidden lg:block">
          <CirclePair color="bg-white/60" />
        </div>

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#2d3142] tracking-tight mb-6 px-4 ${merriweather.className}`}>
          What Brings Providers to Coaching
          </h2>
        </div>

        {/* Quotes Container */}
        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
          {quotes.map((quote, index) => (
            <motion.div 
              key={index}
              ref={refs[index]}
              className={`flex flex-col sm:flex-row items-center gap-4 sm:gap-6 ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
              initial={animationConfig.initial}
              animate={inViewStates[index] ? animationConfig.animate : animationConfig.initial}
              transition={{
                duration: defaultAnimationSettings.duration,
                delay: index * defaultAnimationSettings.delay,
                ease: "easeOut"
              }}
            >
              {/* Doctor Icon */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
                <Image
                  src="/icons/doctor-male-icon.png"
                  alt="Doctor Icon"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Quote Bubble */}
              <div className={`flex-1 relative bg-white rounded-2xl p-4 sm:p-6 shadow-lg transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto
                ${index % 2 === 0 ? 'sm:rounded-l-2xl' : 'sm:rounded-r-2xl'}`}
              >
                <div className={`absolute hidden sm:block ${index % 2 === 0 ? 'sm:-left-3' : 'sm:-right-3'} top-1/2 w-6 h-6 bg-white transform rotate-45 -translate-y-1/2`} />
                <p className="text-lg sm:text-xl text-[#2E3142] leading-relaxed font-sans">
                  "{quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 