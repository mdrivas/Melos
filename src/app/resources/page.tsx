'use client';

import { Merriweather } from "next/font/google";
import { CirclePair } from "~/components/ui/circle-pair";
import { CircleTriplet } from "~/components/ui/circle-triplet";

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export default function ResourcesPage() {
  const resources = [
    {
      title: "Articles & Research",
      description: "We're curating a collection of valuable articles and research papers about physician coaching and wellness.",
    },
    {
      title: "Wellness Resources",
      description: "A carefully selected list of wellness resources specifically for healthcare providers.",
    },
    {
      title: "Professional Development",
      description: "Resources for professional growth and career development in healthcare.",
    },
    {
      title: "Community Resources",
      description: "Connect with other healthcare providers and find support in your local community.",
    }
  ];

  return (
    <main className="min-h-screen bg-white pt-24">
      <section className="py-20 bg-gradient-to-b from-[#D4E6FF] via-[#E8F1FF] to-white relative overflow-hidden">
        {/* Circle Decorations */}
        <div className="absolute top-14 right-16">
          <CircleTriplet color="bg-[#E8F1FF]" />
        </div>
        <div className="absolute bottom-20 left-16">
          <CirclePair color="bg-[#E8F1FF]" />
        </div>

        <div className="container mx-auto px-4">
          <h1 className={`text-5xl lg:text-6xl tracking-tight text-[#2E3142] text-center mb-8 ${merriweather.className}`}>
            Resources
          </h1>
          <p className="text-xl text-[#2E3142]/80 text-center max-w-5xl mx-auto mb-16">
            We're building a curated collection of resources to support healthcare providers in their personal and professional journey.
          </p>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {resources.map((resource, index) => (
                <div 
                  key={index}
                  className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <h2 className={`text-3xl text-[#2E3142] mb-4 ${merriweather.className}`}>
                    {resource.title}
                  </h2>
                  <p className="text-lg text-[#2E3142]/80 mb-6 min-h-[4rem] leading-relaxed">
                    {resource.description}
                  </p>
                  <span className="inline-block text-lg text-[#1473E6]/70 font-medium italic">
                    Coming Soon
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-20">
            <h2 className={`text-3xl text-[#2E3142] mb-4 ${merriweather.className}`}>
              Disclaimer
            </h2>
            <p className="text-lg text-[#2E3142]/70 leading-relaxed">
              The Provider's Coach Project is dedicated to supporting healthcare providers through no-cost coaching while also promoting the physician coaching profession and advocating for its role in healthcare. This resource page is provided for informational purposes only. Inclusion of coaching services or other resources does not constitute an endorsement or financial relationship. We believe in the value of physician coaching and its positive impact on healthcare professionals; however, we encourage individuals to conduct their own research and select services that best meet their needs. The Provider's Coach Project does not receive compensation for listing these resources.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 