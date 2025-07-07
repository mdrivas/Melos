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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setVisible(false);
        setIsOpen(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
      <div className="max-w-[95%] mx-auto px-4">
        <div className="flex items-center justify-between h-20 border-b border-[#1473E6]/10">
          {/* Logo */}
          <Link href="/" className={`text-lg sm:text-xl lg:text-2xl font-bold tracking-wider text-[#010103] whitespace-nowrap ${merriweather.className} pr-5`}>
            The Provider's Coach Project
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-4 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-[#010103] transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`w-full h-0.5 bg-[#010103] transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`w-full h-0.5 bg-[#010103] transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-2 lg:space-x-4 xl:space-x-8 text-base lg:text-lg">
            <Link href="/" className="px-2 lg:px-3 py-2 text-[#2d3142]/80 hover:text-[#1473E6] transition-colors whitespace-nowrap">
              HOME
            </Link>
            <Link href="/about" className="px-2 lg:px-3 py-2 text-[#2d3142]/80 hover:text-[#1473E6] transition-colors whitespace-nowrap">
              ABOUT
            </Link>
            <Link href="/coaches" className="px-2 lg:px-3 py-2 text-[#2d3142]/80 hover:text-[#1473E6] transition-colors whitespace-nowrap">
              COACHES
            </Link>
            <Link href="/faq" className="px-2 lg:px-3 py-2 text-[#2d3142]/80 hover:text-[#1473E6] transition-colors whitespace-nowrap">
              FAQ
            </Link>
            <Link href="/resources" className="px-2 lg:px-3 py-2 text-[#2d3142]/80 hover:text-[#1473E6] transition-colors whitespace-nowrap">
              RESOURCES
            </Link>
            <Link href="/contact" className="px-2 lg:px-3 py-2 text-[#2d3142]/80 hover:text-[#1473E6] transition-colors whitespace-nowrap">
              CONTACT
            </Link>
            <Link 
              href="/comingSoon"
              className="px-4 lg:px-6 py-2 lg:py-2.5 bg-[#1473E6] text-white hover:bg-[#1B3B36] transition-colors rounded-full text-base whitespace-nowrap"
            >
              BOOK A SESSION
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="py-4 space-y-2 flex flex-col items-center text-lg">
            <Link href="/" onClick={closeMenu} className="w-full text-center py-3 text-[#2d3142]/80 hover:text-[#1473E6] transition-colors">
              HOME
            </Link>
            <Link href="/about" onClick={closeMenu} className="w-full text-center py-3 text-[#2d3142]/80 hover:text-[#1473E6] transition-colors">
              ABOUT
            </Link>
            <Link href="/coaches" onClick={closeMenu} className="w-full text-center py-3 text-[#2d3142]/80 hover:text-[#1473E6] transition-colors">
              COACHES
            </Link>
            <Link href="/faq" onClick={closeMenu} className="w-full text-center py-3 text-[#2d3142]/80 hover:text-[#1473E6] transition-colors">
              FAQ
            </Link>
            <Link href="/resources" onClick={closeMenu} className="w-full text-center py-3 text-[#2d3142]/80 hover:text-[#1473E6] transition-colors">
              RESOURCES
            </Link>
            <Link href="/contact" onClick={closeMenu} className="w-full text-center py-3 text-[#2d3142]/80 hover:text-[#1473E6] transition-colors">
              CONTACT
            </Link>
            <Link 
              href="/comingSoon"
              onClick={closeMenu}
              className="w-full max-w-xs text-center px-6 py-2.5 bg-[#1473E6] text-white hover:bg-[#1B3B36] transition-colors rounded-full"
            >
              BOOK A SESSION
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 