'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { Merriweather } from 'next/font/google';

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export function NavBar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-sm ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
      <div className="max-w-[95%] mx-auto px-4">
        <div className="flex items-center justify-between h-24 border-b border-[#526B61]/10 text-xl font-sans">
          <Link href="/" className={`text-2xl font-bold tracking-wider text-[#010103] ${merriweather.className}`}>
            The Provider's Coach Project
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="px-4 py-2 text-[#2d3142]/80 hover:text-[#526B61] transition-colors"
            >
              HOME
            </Link>
            <Link 
              href="/about" 
              className="px-4 py-2 text-[#2d3142]/80 hover:text-[#526B61] transition-colors"
            >
              ABOUT
            </Link>
            <Link 
              href="/faq" 
              className="px-4 py-2 text-[#2d3142]/80 hover:text-[#526B61] transition-colors group relative"
            >
              FAQ
              <span className="inline-block ml-1 transform group-hover"></span>
            </Link>
            <Link 
              href="/resources" 
              className="px-4 py-2 text-[#2d3142]/80 hover:text-[#526B61] transition-colors"
            >
              RESOURCES
            </Link>
            <Link 
              href="/contact"
              className="px-4 py-2 text-[#2d3142]/80 hover:text-[#526B61] transition-colors"
            >
              CONTACT
            </Link>
            <Link 
              href="/comingSoon"
              className="px-8 py-3 bg-[#1473E6] text-white hover:bg-[#1B3B36] transition-colors rounded"
            >
              BOOK A SESSION
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 