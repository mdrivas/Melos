'use client';

import { Merriweather } from "next/font/google";
import Link from "next/link";
import { CircleTriplet } from "~/components/ui/circle-triplet";
import { CirclePair } from "~/components/ui/circle-pair";

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export default function CoachesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Circle Decorations - hidden on very small screens */}
      <div className="absolute top-16 left-20 hidden md:block">
        <CirclePair color="bg-[#FFD559]" />
      </div>

      <div className="absolute bottom-20 right-16 hidden lg:block">
        <CircleTriplet color="bg-[#D4E6FF]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Mobile: Title first */}
        <div className="text-center mb-8">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#2E3142] ${merriweather.className}`}>
            Our <span className="">Coaches</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mt-8 sm:mt-12">
          <div className="text-[#2E3142] text-left">
            <p className="text-lg sm:text-xl leading-[1.7] sm:leading-[1.8] font-sans">
              Our coaches are International Coaching Federation (ICF)-certified and experienced in supporting healthcare professionals like you. 
              They're trained in active listening, burnout recovery, and work-life balance to help you reconnect with your purpose, 
              set healthy boundaries, and thrive in your career.
            </p>
            
            <div className="flex justify-center">
              <Link 
                href="/coaches"
                className="inline-flex items-center mt-8 sm:mt-10 px-8 sm:px-10 py-3 sm:py-4 bg-[#1473E6] text-white text-lg sm:text-xl font-sans rounded-full hover:bg-[#3A5548] transition-all duration-300 ease-in-out hover:shadow-lg hover:transform hover:-translate-y-0.5"
              >
                Learn More <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
