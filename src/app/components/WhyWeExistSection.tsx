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
    <section className="py-20 bg-gradient-to-b from-[#D4E6FF] to-[#E8F1FF] relative overflow-hidden">
      {/* Circle Decorations */}
      <div className="absolute top-16 right-20">
        <CirclePair color="bg-[#FFD559]" />
      </div>

      <div className="absolute bottom-20 right-16">
        <CircleTriplet color="bg-[#D4E6FF]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-20 mt-24">
          {/* Left Column - Image */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="relative w-[380px] h-[460px] lg:w-[480px] lg:h-[580px]">
              <Image
                src="/cartoon_founder_3.png"
                alt="Healthcare Provider Coach"
                fill
                className="object-cover rounded-2xl shadow-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                style={{ objectPosition: 'center 15%' }}
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="flex-1 max-w-xl pt-4 lg:pt-0 text-[#2E3142]">
            <h1 className={`text-5xl lg:text-6xl tracking-tight mb-8 ${merriweather.className}`}>
              Why We <span className="">Exist</span>
            </h1>
            
            <div className="mt-6 space-y-8 font-sans">
              <p className="text-xl leading-[1.8]">
                Many healthcare professionals are facing burnout, struggling with 
                work-life balance, or questioning their career path. 
                We believe every provider deserves support without stigma or financial barriers.
              </p>
              
              <p className="text-xl leading-[1.8]">
                The Provider's Coach Project offers free, confidential coaching to help you 
                reconnect with your purpose, set boundaries, and build a sustainable career.
              </p>

              <p className="text-xl leading-[1.8] font-semibold">
                We're here for you — because when providers thrive, healthcare is better for everyone.
              </p>
            </div>
            
            <Link 
              href="#booking"
              className="inline-block mt-12 px-10 py-4 bg-[#1473E6] text-white text-xl font-sans rounded-full hover:bg-[#3A5548] transition-all duration-300 ease-in-out hover:shadow-lg hover:transform hover:-translate-y-0.5"
            >
              BOOK A SESSION
            </Link>
          </div>
        </div>  
      </div>
    </section>
  );
} 