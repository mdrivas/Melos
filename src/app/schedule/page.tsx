"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: Element | null;
      }) => void;
    };
  }
}

export default function SchedulePage() {
  const CALENDLY_URL = 'https://calendly.com/pauladrivas';

  useEffect(() => {
    // Function to initialize Calendly
    const initCalendly = () => {
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: CALENDLY_URL,
          parentElement: document.querySelector('.calendly-inline-widget'),
        });
      }
    };

    // Try to initialize immediately if Calendly is already loaded
    initCalendly();

    // Also set up a listener for when the script loads
    const handleScriptLoad = () => {
      initCalendly();
    };

    window.addEventListener('calendly:ready', handleScriptLoad);

    return () => {
      window.removeEventListener('calendly:ready', handleScriptLoad);
    };
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
          data-url={CALENDLY_URL}
          style={{ 
            minWidth: '320px',
            height: '700px',
            maxWidth: '1200px'
          }} 
        />
        
        <Script 
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
          onLoad={() => {
            if (window.Calendly) {
              window.Calendly.initInlineWidget({
                url: CALENDLY_URL,
                parentElement: document.querySelector('.calendly-inline-widget'),
              });
            }
          }}
        />
      </div>
    </main>
  );
} 