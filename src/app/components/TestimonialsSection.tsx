'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaQuoteLeft } from 'react-icons/fa';
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});
interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials: Testimonial[] = [
    {
      quote: "Coaching helped me step back and see my career in a new light. I feel more in control, less stressed, and finally have a plan for moving forward.",
      author: "JESSICA",
      role: "Emergency Medicine Physician",
      image: "/icons/doctor-male-icon.png"
    },
    {
      quote: "I was on the verge of quitting medicine. This coaching gave me the clarity and confidence I needed to make changes that actually work for me.",
      author: "SARAH",
      role: "Primary Care Nurse Practitioner",
      image: "/icons/doctor-male-icon.png"
    },
    {
      quote: "For the first time in years, I feel like I have options. Coaching helped me see a way out of burnout and into a career that aligns with my values.",
      author: "MICHAEL",
      role: "Cardiothoracic Surgery Physician Associate",
      image: "/icons/doctor-male-icon.png"
    }
  ];

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, [testimonials.length]);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered, nextTestimonial]);

  // Get visible testimonials - responsive logic
  const getVisibleTestimonials = () => {
    // On mobile (assumed), show only one testimonial
    // On desktop, show two testimonials
    return [
      testimonials[currentIndex]!,
      testimonials[(currentIndex + 1) % testimonials.length]!
    ];
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#C4D6ED] to-[#E9F1FF] to-100% relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-8 sm:mb-10 md:mb-12 text-[#2E3142] px-4 ${merriweather.className}`}>
          What Our Clients Say
        </h2>

        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Buttons - Hidden on mobile, positioned better on desktop */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 sm:-translate-x-12 lg:-translate-x-16 bg-[#1473E6] hover:bg-[#2C5E55] text-white p-2 sm:p-3 rounded-full transition-colors z-10 hidden sm:block"
            aria-label="Previous testimonial"
          >
            <IoIosArrowBack className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
          </button>

          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 sm:translate-x-12 lg:translate-x-16 bg-[#1473E6] hover:bg-[#2C5E55] text-white p-2 sm:p-3 rounded-full transition-colors z-10 hidden sm:block"
            aria-label="Next testimonial"
          >
            <IoIosArrowForward className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
          </button>

          {/* Testimonials Container - Single column on mobile, dual on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {/* Mobile: Show one testimonial, Desktop: Show two */}
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg transform transition-all duration-300 hover:-translate-y-2">
              <div className="mb-4 sm:mb-6">
                <FaQuoteLeft className="text-[#2E3142] text-3xl sm:text-4xl" />
              </div>
              <p className="text-[#2E3142] text-lg sm:text-xl leading-relaxed mb-6 sm:mb-8">
                {testimonials[currentIndex]!.quote}
              </p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 sm:w-16 sm:h-16">
                  <Image
                    src={testimonials[currentIndex]!.image}
                    alt={testimonials[currentIndex]!.author}
                    fill
                    className="rounded-full object-contain"
                  />
                </div>
                <div className="ml-3 sm:ml-4">
                  <p className="font-bold text-[#2E3142] text-lg sm:text-xl">
                    {testimonials[currentIndex]!.author}
                  </p>
                  <p className="text-[#2E3142] text-sm sm:text-md">
                    {testimonials[currentIndex]!.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Second testimonial - only visible on desktop */}
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hidden lg:block">
              <div className="mb-4 sm:mb-6">
                <FaQuoteLeft className="text-[#2E3142] text-3xl sm:text-4xl" />
              </div>
              <p className="text-[#2E3142] text-lg sm:text-xl leading-relaxed mb-6 sm:mb-8">
                {testimonials[(currentIndex + 1) % testimonials.length]!.quote}
              </p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 sm:w-16 sm:h-16">
                  <Image
                    src={testimonials[(currentIndex + 1) % testimonials.length]!.image}
                    alt={testimonials[(currentIndex + 1) % testimonials.length]!.author}
                    fill
                    className="rounded-full object-contain"
                  />
                </div>
                <div className="ml-3 sm:ml-4">
                  <p className="font-bold text-[#2E3142] text-lg sm:text-xl">
                    {testimonials[(currentIndex + 1) % testimonials.length]!.author}
                  </p>
                  <p className="text-[#2E3142] text-sm sm:text-md">
                    {testimonials[(currentIndex + 1) % testimonials.length]!.role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#1B3B36] w-4' 
                    : 'bg-[#1B3B36]/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-6 sm:hidden">
            <button 
              onClick={prevTestimonial}
              className="bg-[#1473E6] hover:bg-[#2C5E55] text-white p-3 rounded-full transition-colors"
              aria-label="Previous testimonial"
            >
              <IoIosArrowBack size={20} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="bg-[#1473E6] hover:bg-[#2C5E55] text-white p-3 rounded-full transition-colors"
              aria-label="Next testimonial"
            >
              <IoIosArrowForward size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 