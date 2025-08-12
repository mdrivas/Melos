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
            <div className="space-y-8">
              <div>
                <h2 className={`text-4xl font-bold mb-4 ${merriweather.className}`}>Support Our Mission</h2>
                <p className="text-gray-700 text-lg mb-4">
                  The Provider's Coach Project provides no-cost, high-quality coaching to healthcare professionals.
                </p>
              </div>

              <div>
                <p className="text-gray-700 text-lg mb-4">
                  Your donation helps us reach more providers and make care more proactive.
                </p>
              </div>

              <div>
                <p className="text-gray-700 text-lg mb-4">
                  Every dollar goes toward expanding access, improving our platform, and supporting those who need it most.
                </p>
              </div>

              <div>
                <p className="text-gray-700 text-lg font-medium">
                  Thank you for supporting this mission.
                </p>
              </div>

              <div className="text-sm text-gray-600 mt-8">
                Organized by The Provider's Coach Project
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
