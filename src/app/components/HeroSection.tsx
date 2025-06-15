'use client';

import { Merriweather } from 'next/font/google';
import { useState } from 'react';

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export default function HeroSection() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate loading time - remove this in production and replace with actual navigation logic
    setTimeout(() => {
      window.location.href = '/comingSoon';
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section className="relative min-h-[90vh] sm:min-h-[calc(100vh-0px)] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-8 sm:pt-20 md:pt-24 bg-gradient-to-b from-[#C4D6ED] via-[#C4D6ED] to-[#C4D6ED] overflow-x-hidden">
      {/* Sun background - responsive sizing */}
      <div className="absolute top-[36%] sm:top-[46%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[210px] h-[210px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] rounded-full bg-[#FFD559]" />
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-48 sm:h-60 md:h-72 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-48 sm:h-60 md:h-72"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="#D4E6FF"
          />
        </svg>
      </div>
      
      {/* Content container */}
      <div className={`relative w-full max-w-5xl mx-auto text-center z-10 flex flex-col space-y-8 md:space-y-12 text-[#010103] mt-0 sm:mt-8 ${merriweather.className}`}>
        {/* Title centered in sun */}
        <div className="relative h-[200px] sm:h-[250px] md:h-[280px] lg:h-[320px] flex items-center justify-center w-full mt-[-40px] sm:mt-0">
          <h1 className="tracking-wide">
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight block">
              The Provider's<br className="hidden sm:block" /> Coach Project
            </span>
          </h1>
        </div>

        {/* Bottom content */}
        <div className="w-full px-2">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-[1.5rem] leading-[1.6] sm:leading-[1.8] font-sans max-w-4xl mx-auto mb-6 sm:mb-8">
            A non-profit offering no-cost coaching 
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            for healthcare providers by healthcare providers
          </p>
          
          <div className="mt-4 sm:mt-6 md:mt-8">
            <button 
              onClick={handleClick}
              disabled={isLoading}
              className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-[#1473E6] text-white text-lg sm:text-xl rounded-full font-medium font-sans hover:bg-[#3A5548] transition-all duration-300 ease-in-out hover:shadow-lg hover:transform hover:-translate-y-0.5 disabled:opacity-80 disabled:cursor-not-allowed min-w-[180px] sm:min-w-[200px]"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Loading...
                </div>
              ) : (
                'BOOK A SESSION'
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 