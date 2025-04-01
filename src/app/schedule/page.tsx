"use client";

import { useState, useEffect } from 'react';
import Script from 'next/script';
import { CoachingAgreement } from '~/components/CoachingAgreement';
import { api } from "~/trpc/react";

const CALENDLY_URL = 'https://calendly.com/pcp-coaches/my-coaching-session'
;
// Define proper Calendly types
declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement | null;
        prefill?: {
          name?: string;
          email?: string;
          customAnswers?: Record<string, string>;
        };
      }) => void;
      showPopupWidget: (url: string) => void;
      closePopupWidget: () => void;
    };
  }
}

export default function SchedulePage() {
  const [showAgreement, setShowAgreement] = useState(false);
  const [signature, setSignature] = useState({
    name: '',
    date: '',
    agreed: false
  });

  const createAgreement = api.agreements.create.useMutation();

  // Function to intercept Calendly events
  const handleCalendlyEvent = (e: MessageEvent) => {
    if (e.data.event === 'calendly.date_and_time_selected') {
      setShowAgreement(true);
      if (window.Calendly?.closePopupWidget) {
        window.Calendly.closePopupWidget();
      }
    }
  };

  // Add event listener for Calendly events
  useEffect(() => {
    window.addEventListener('message', handleCalendlyEvent);
    return () => {
      window.removeEventListener('message', handleCalendlyEvent);
    };
  }, []);

  const handleAgreementSigned = async (signatureData: {
    name: string;
    email: string;
    date: string;
    agreed: boolean;
  }) => {
    try {
      await createAgreement.mutateAsync(signatureData);
      setSignature(signatureData);
      setShowAgreement(false);
      
      if (window.Calendly) {
        window.Calendly.showPopupWidget(CALENDLY_URL);
      }
    } catch (error) {
      console.error('Error saving agreement:', error);
      alert('There was an error saving your agreement. Please try again.');
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
          Schedule Your Coaching Session
        </h1>

        {showAgreement && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-blue-900">Coaching Agreement</h2>
                <button 
                  onClick={() => setShowAgreement(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <CoachingAgreement onSign={handleAgreementSigned} />
            </div>
          </div>
        )}

        <div 
          id="calendly-widget"
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
            const element = document.getElementById('calendly-widget');
            if (window.Calendly && element) {
              window.Calendly.initInlineWidget({
                url: CALENDLY_URL,
                parentElement: element,
                prefill: signature.agreed ? {
                  name: signature.name,
                  customAnswers: {
                    a1: `Agreement signed on: ${new Date(signature.date).toLocaleDateString()}`
                  }
                } : undefined
              });
            }
          }}
        />
      </div>
    </main>
  );
} 