"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function SchedulePage() {
  useEffect(() => {
    // Reinitialize Calendly widget when component mounts
    // @ts-ignore
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/pauladrivas',
        parentElement: document.querySelector('.calendly-inline-widget'),
      });
    }
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-indigo-900 mb-8 text-center">
          Schedule Your Coaching Session
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center mb-12">
          Book your free 30-minute coaching session. Choose a time that works best for you.
        </p>
        
        {/* Calendly inline widget */}
        <div 
          className="calendly-inline-widget mx-auto rounded-xl overflow-hidden shadow-lg"
          data-url="https://calendly.com/YOUR_USERNAME/30min"
          style={{ 
            minWidth: '320px',
            height: '700px',
            maxWidth: '1200px'
          }} 
        />
        
        <Script 
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </div>
    </main>
  );
} 