'use client';

import { Merriweather } from "next/font/google";
import Link from "next/link";

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export default function ContactSuccessPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className={`text-4xl lg:text-5xl text-[#2E3142] mb-6 ${merriweather.className}`}>
            Thank You for Reaching Out!
          </h1>
          
          <p className="text-lg text-[#2E3142]/80 mb-8">
            We've received your message and will get back to you shortly. We appreciate your interest in connecting with us.
          </p>

          <Link
            href="/"
            className="inline-block px-8 py-3 bg-[#1473E6] text-white text-lg font-medium rounded-full hover:bg-[#3A5548] transition-all duration-300 ease-in-out"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
} 