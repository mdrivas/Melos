'use client';

import Link from "next/link";
import { FaInstagram, FaLinkedin, FaYoutube, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#D4E6FF] border-t border-[#1473E6]/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Logo and Info Column */}
          <div className="flex flex-col items-start">
            <div className="mb-6">
              <Link href="/" className="text-3xl font-semibold tracking-wide text-[#2d3142]">
                The Provider's
                <br />
                Coach Project
              </Link>
            </div>
            <p className="text-[#2d3142]/80 mb-6 text-lg">
              Based in California • Serving Providers Nationwide
            </p>
            <a 
              href="mailto:info@providerscoachproject.org" 
              className="text-[#2d3142]/80 hover:text-[#1473E6] transition-colors mb-6 flex items-center text-lg"
            >
              info@providerscoachproject.org
            </a>
            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold text-[#2d3142] mb-4 text-xl">Social Media</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/company/providerscoachproject/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#1473E6] hover:text-[#1B3B36] transition-colors"
                >
                  <FaLinkedin size={24} />
                </a>
                <div className="relative group">
                  <a className="text-[#1473E6] hover:text-[#1B3B36] transition-colors cursor-not-allowed opacity-70">
                    <FaInstagram size={24} />
                  </a>
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#2d3142] text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Coming Soon
                  </span>
                </div>
                <div className="relative group">
                  <a className="text-[#1473E6] hover:text-[#1B3B36] transition-colors cursor-not-allowed opacity-70">
                    <FaYoutube size={24} />
                  </a>
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#2d3142] text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Coming Soon
                  </span>
                </div>
                <div className="relative group">
                  <a className="text-[#1473E6] hover:text-[#1B3B36] transition-colors cursor-not-allowed opacity-70">
                    <FaTiktok size={24} />
                  </a>
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#2d3142] text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-[#2d3142] mb-6">Quick Links</h3>
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-[#2d3142]/80 hover:text-[#1473E6] transition-colors">
                HOME
              </Link>
              <Link href="/about" className="text-[#2d3142]/80 hover:text-[#1473E6] transition-colors">
                ABOUT
              </Link>
              <Link href="/faq" className="text-[#2d3142]/80 hover:text-[#1473E6] transition-colors">
                FAQ
              </Link>
              <Link href="/resources" className="text-[#2d3142]/80 hover:text-[#1473E6] transition-colors">
                RESOURCES
              </Link>
              <Link href="/contact" className="text-[#2d3142]/80 hover:text-[#1473E6] transition-colors">
                CONTACT
              </Link>
            </nav>
          </div>

          {/* Book a Session CTA */}
          <div className="flex flex-col">
            <h3 className="text-2xl lg:text-2xl font-bold text-[#2d3142] mb-4">
              Ready to transform your practice?
            </h3>
            <p className="text-[#2d3142]/80 mb-6 text-lg">
              Take the first step towards a more fulfilling medical career.
            </p>
            <Link 
              href="/comingSoon"
              className="bg-[#1473E6] text-white px-8 py-4 rounded lg:text-lg text-center hover:bg-[#1B3B36] transition-colors "
            >
              BOOK A SESSION
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#1473E6]/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#2d3142]/60 text-sm">
              © {currentYear} The Provider's Coach Project
            </p>
          </div>
          <p className="text-[#2d3142]/60 text-sm">Resources and links are provided for informational purposes only. Inclusion does not constitute endorsement or financial relationship.</p>
        </div>
      </div>
    </footer>
  );
} 