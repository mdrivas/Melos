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
      prevIndex === testimonials.length - 2 ? 0 : prevIndex + 1
    );
  }, [testimonials.length]);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 2 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered, nextTestimonial]);

  // Get visible testimonials
  const visibleTestimonials = [
    testimonials[currentIndex]!,
    testimonials[(currentIndex + 1) % testimonials.length]!
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#C4D6ED] to-[#E9F1FF] to-100% relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Circle Decorations */}
        
        <h2 className={`text-4xl lg:text-6xl text-center mb-12 text-[#2E3142] ${merriweather.className}`}>
          What Our Clients Say
        </h2>

        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-[#526B62] hover:bg-[#2C5E55] text-white p-3 rounded-full transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <IoIosArrowBack size={28} />
          </button>

          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-[#526B62] hover:bg-[#2C5E55] text-white p-3 rounded-full transition-colors z-10"
            aria-label="Next testimonial"
          >
            <IoIosArrowForward size={28} />
          </button>

          {/* Testimonials Container */}
          <div className="grid grid-cols-2 gap-6">
            {visibleTestimonials.map((testimonial: Testimonial, index) => (
              <div 
                key={`${currentIndex}-${index}`}
                className="bg-white rounded-xl p-8 shadow-lg transform transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-6">
                  <FaQuoteLeft className="text-[#2E3142] text-4xl" />
                </div>
                <p className="text-[#2E3142] text-xl leading-relaxed mb-8">
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  <div className="relative w-16 h-16">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="rounded-full object-contain"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-[#2E3142] text-xl">
                      {testimonial.author}
                    </p>
                    <p className="text-[#2E3142] text-md">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: testimonials.length - 1 }).map((_, index) => (
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
        </div>
      </div>
    </section>
  );
} 