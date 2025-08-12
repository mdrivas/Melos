'use client';

import { FaHandHoldingHeart, FaUserMd, FaShareAlt, FaTimes, FaCheck } from 'react-icons/fa';
import { Merriweather } from "next/font/google";
import { CircleTriplet } from "~/components/ui/circle-triplet";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export default function SupportMissionSection() {
  const router = useRouter();
  const [showShareModal, setShowShareModal] = useState(false);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const shareContent = {
    email: {
      subject: "Free Coaching for Healthcare Providers — Thought You'd Want to Know",
      body: `Hi [Name],

I wanted to share a great new resource I just discovered. It's called The Provider's Coach Project. They're offering free, one-on-one coaching sessions for healthcare providers like us. It's created by providers, for providers, to help with burnout, career clarity, work-life balance, and navigating the stress of medicine.

They officially launch on September 1, but you can learn more here: providerscoachproject.org

Thought you might be interested too!

Take care,
[Your Name]`
    },
    social: "Calling all healthcare providers — check out The Provider's Coach Project offering free one-on-one coaching for doctors, PAs, and NPs. A beautiful mission to support well-being in medicine. Launching August 1! providerscoachproject.org",
    link: "providerscoachproject.org"
  };

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(type);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleShareClick = () => {
    setShowShareModal(true);
  };

  const supportOptions = [
    {
      icon: FaHandHoldingHeart,
      title: "Donate",
      description: "Help us expand our reach and make coaching accessible to more healthcare providers in need.",
      onClick: () => router.push('/donate')
    },
    {
      icon: FaUserMd,
      title: "Volunteer as a Coach",
      description: "Join our mission if you're a certified physician development coach passionate about supporting fellow providers."
    },
    {
      icon: FaShareAlt,
      title: "Spread the Word",
      description: "Share our mission with colleagues who might benefit from professional coaching and support.",
      onClick: handleShareClick
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 relative bg-gradient-to-b from-[#E9F1FF] via-[#FFF8E7] to-[#F9D2BE] to-100% relative">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative">
        <div className="absolute top-6 -left-10 hidden lg:block">
          <CircleTriplet color="bg-[#C4D6ED]/60" />
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-[#2d3142] px-4 ${merriweather.className}`}>
            Support Our Mission
          </h2>
          <p className="text-lg sm:text-xl text-[#2d3142]/90 leading-relaxed max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 px-4">
            We're committed to making coaching available to every provider who needs it — but we need your help.
          </p>
          
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-16 sm:mb-20 md:mb-28">
            {supportOptions.map((item, index) => (
              <div 
                key={index} 
                onClick={item.onClick}
                className={`bg-[#D4E6FF]/90 text-[#010103] backdrop-blur-sm rounded-xl px-6 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center ${item.onClick ? "cursor-pointer" : ""}`}
              >
                <div className="mb-6 sm:mb-8">
                  <item.icon className="w-10 h-10 sm:w-12 sm:h-12" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center">{item.title}</h3>
                <p className="text-base sm:text-lg text-center leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Setting Sun positioned to appear behind the footer - responsive sizing */}
          <div className="absolute bottom-0 left-0 right-0 -mb-28 sm:-mb-40 md:-mb-48 overflow-hidden pointer-events-none">
            <div className="relative h-[300px] sm:h-[400px] md:h-[450px] w-full">
              <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] rounded-full bg-[#FFD559] opacity-90" />
            </div>
          </div>
        </div>
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className={`text-2xl sm:text-3xl font-bold text-[#2d3142] ${merriweather.className}`}>
                  📣 Spread the Word
                </h3>
                <button
                  onClick={() => setShowShareModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <FaTimes className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <p className="text-lg text-[#2d3142]/90 mb-8 leading-relaxed">
                Thank you for helping us share The Provider's Coach Project with your colleagues and friends. 
                Together, we can support the well-being of healthcare providers everywhere.
              </p>

              <p className="text-base text-[#2d3142]/80 mb-8">
                Choose a message below to easily copy and share:
              </p>

              {/* Email/Text Message Option */}
              <div className="mb-8 p-6 bg-[#F8FAFF] rounded-lg border border-[#D4E6FF]">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">📧</span>
                  <h4 className="text-xl font-semibold text-[#2d3142]">Email or Text Message to a Friend</h4>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-medium text-[#2d3142]/70 mb-2">Subject:</p>
                  <p className="text-sm text-[#2d3142] bg-white p-3 rounded border italic">
                    {shareContent.email.subject}
                  </p>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-medium text-[#2d3142]/70 mb-2">Body:</p>
                  <div className="text-sm text-[#2d3142] bg-white p-3 rounded border whitespace-pre-line">
                    {shareContent.email.body}
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(`Subject: ${shareContent.email.subject}\n\n${shareContent.email.body}`, 'email')}
                  className="flex items-center px-6 py-3 bg-[#1473E6] text-white rounded-full hover:bg-[#0056b3] transition-colors"
                >
                  {copiedItem === 'email' ? <FaCheck className="mr-2" /> : null}
                  {copiedItem === 'email' ? 'Copied!' : 'Copy Message'}
                </button>
              </div>

              {/* Social Media Option */}
              <div className="mb-8 p-6 bg-[#F8FAFF] rounded-lg border border-[#D4E6FF]">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">📱</span>
                  <h4 className="text-xl font-semibold text-[#2d3142]">Social Media Post</h4>
                </div>
                <p className="text-sm text-[#2d3142]/70 mb-3">Post this on your LinkedIn, Facebook, or Instagram:</p>
                <div className="text-sm text-[#2d3142] bg-white p-3 rounded border mb-4 italic">
                  "{shareContent.social}"
                </div>
                <button
                  onClick={() => copyToClipboard(shareContent.social, 'social')}
                  className="flex items-center px-6 py-3 bg-[#1473E6] text-white rounded-full hover:bg-[#0056b3] transition-colors"
                >
                  {copiedItem === 'social' ? <FaCheck className="mr-2" /> : null}
                  {copiedItem === 'social' ? 'Copied!' : 'Copy Post Text'}
                </button>
              </div>

              {/* Link Option */}
              <div className="mb-6 p-6 bg-[#F8FAFF] rounded-lg border border-[#D4E6FF]">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🔗</span>
                  <h4 className="text-xl font-semibold text-[#2d3142]">Copy Our Share Link</h4>
                </div>
                <p className="text-sm text-[#2d3142]/70 mb-3">Share this link anywhere — email, text, Slack, or social media:</p>
                <div className="text-sm text-[#2d3142] bg-white p-3 rounded border mb-4 font-mono">
                  {shareContent.link}
                </div>
                <button
                  onClick={() => copyToClipboard(shareContent.link, 'link')}
                  className="flex items-center px-6 py-3 bg-[#1473E6] text-white rounded-full hover:bg-[#0056b3] transition-colors"
                >
                  {copiedItem === 'link' ? <FaCheck className="mr-2" /> : null}
                  {copiedItem === 'link' ? 'Copied!' : 'Copy Link'}
                </button>
              </div>

              {/* Footer */}
              <div className="text-center pt-6 border-t border-[#D4E6FF]">
                <p className="text-base text-[#2d3142]/80 leading-relaxed">
                  Thank you for helping us spread the word and champion a healthier, more supported culture in healthcare. 
                  Your voice matters. <span className="text-[#FFD559]">🌞</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
} 