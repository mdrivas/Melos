'use client';

import { Merriweather } from 'next/font/google';
import { GivebutterScriptLoader } from '~/components/GivebutterScriptLoader';

const merriweather = Merriweather({
    weight: ['300', '400', '700', '900'],
    subsets: ['latin'],
    display: 'swap',
  });
  
export default function DonatePage() {
  return (
    <main className="min-h-screen flex flex-col pt-20">
      <GivebutterScriptLoader />

      {/* Bottom blue section with content */}
      <div className="bg-[#E5EEF6] flex-grow py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Left side content */}
            <div className="space-y-6 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div>
                <h2 className={`text-4xl font-bold mb-6 text-[#1473E6] ${merriweather.className}`}>Help Us Empower Healthcare Providers</h2>
                <div className="h-1 w-24 bg-[#FFD559] rounded-full mb-6"></div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We deliver high-quality coaching to healthcare professionals: no barriers, no cost.
                </p>
              </div>

              <div className="">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Your donation helps us reach more providers and make care more proactive.
                </p>
              </div>

              <div className="pt-4">
                <p className="text-gray-800 text-lg font-semibold">
                  Thank you for supporting this mission.
                </p>
              </div>

              <div className="flex items-center space-x-2 pt-6 border-t border-gray-100">
                <span className="text-sm text-gray-500">
                  Organized by
                </span>
                <span className="text-sm font-medium text-gray-700">
                  The Provider's Coach Project
                </span>
              </div>
            </div>

            {/* Right side widget */}
            <div>
              <givebutter-widget id="gOAO4j"></givebutter-widget>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
