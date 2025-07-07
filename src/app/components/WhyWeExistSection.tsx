'use client';

import { Merriweather } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { CircleTriplet } from "~/components/ui/circle-triplet";
import { CirclePair } from "~/components/ui/circle-pair";

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export default function WhyWeExistSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#D4E6FF] to-[#E8F1FF] relative overflow-hidden">
      {/* Circle Decorations - hidden on very small screens */}
      <div className="absolute top-16 right-20 hidden md:block">
        <CirclePair color="bg-[#FFD559]" />
      </div>

      <div className="absolute bottom-20 right-16 hidden lg:block">
        <CircleTriplet color="bg-[#D4E6FF]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Mobile: Title first */}
        <div className="lg:hidden text-center mb-8">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#2E3142] ${merriweather.className}`}>
            Why We <span className="">Exist</span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 sm:gap-10 lg:gap-20 mt-8 sm:mt-16 md:mt-24">
          {/* Left Column - Image */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="relative w-[280px] h-[340px] sm:w-[320px] sm:h-[390px] md:w-[380px] md:h-[460px] lg:w-[480px] lg:h-[580px]">
              <Image
                src="/cartoon_founder_3.png"
                alt="Healthcare Provider Coach"
                fill
                className="object-cover rounded-2xl shadow-lg"
                sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 380px, 480px"
                style={{ objectPosition: 'center 15%' }}
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="flex-1 max-w-xl pt-0 lg:pt-4 text-[#2E3142]">
            {/* Desktop: Title here */}
            <h1 className={`hidden lg:block text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 sm:mb-8 text-left ${merriweather.className}`}>
              Why We <span className="">Exist</span>
            </h1>
            
            <div className="mt-4 sm:mt-6 space-y-6 sm:space-y-8 font-sans text-center lg:text-left">
              <p className="text-lg sm:text-xl leading-[1.7] sm:leading-[1.8]">
                Many healthcare professionals are facing burnout, struggling with 
                work-life balance, or questioning their career path. 
                We believe every provider deserves support without stigma or financial barriers.
              </p>
              
              <p className="text-lg sm:text-xl leading-[1.7] sm:leading-[1.8]">
                The Provider's Coach Project offers no-cost, confidential coaching to help you 
                reconnect with your purpose, set boundaries, and build a sustainable career.
              </p>

              <p className="text-lg sm:text-xl leading-[1.7] sm:leading-[1.8] font-semibold">
                We're here for you — because when providers thrive, healthcare is better for everyone.
              </p>
            </div>
            
            <div className="flex justify-center lg:justify-start">
              <Link 
                href="#booking"
                className="inline-block mt-8 sm:mt-10 md:mt-12 px-8 sm:px-10 py-3 sm:py-4 bg-[#1473E6] text-white text-lg sm:text-xl font-sans rounded-full hover:bg-[#3A5548] transition-all duration-300 ease-in-out hover:shadow-lg hover:transform hover:-translate-y-0.5"
              >
                BOOK A SESSION
              </Link>
            </div>
          </div>
        </div>  
      </div>
    </section>
  );
} 