'use client';

import { Merriweather } from "next/font/google";
import { EnvelopeClosedIcon, LinkedInLogoIcon, DrawingPinIcon } from "@radix-ui/react-icons";

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Information */}
            <div>
              <h1 className={`text-4xl lg:text-5xl text-[#2E3142] mb-6 ${merriweather.className}`}>
                Contact Us
              </h1>
              
              <p className="text-lg text-[#2E3142]/80 mb-6">
                Feel free to use the form or send us an email. We're here to help healthcare providers on their journey.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-3 text-lg text-[#2E3142]">
                  <EnvelopeClosedIcon className="h-5 w-5 text-[#526B61]" />
                  <a href="mailto:info@providerscoachproject.org" className="hover:text-[#526B61] transition-colors">
                    info@providerscoachproject.org
                  </a>
                </div>
                <div className="flex items-center gap-3 text-lg text-[#2E3142]">
                  <DrawingPinIcon className="h-5 w-5 text-[#526B61]" />
                  <span>Based in California • Serving Providers Nationwide</span>
                </div>
                <div>
                  <a 
                    href="https://www.linkedin.com/company/the-providers-coach-project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#526B61] hover:text-[#3A5548] transition-colors"
                  >
                    <LinkedInLogoIcon className="h-5 w-5" />
                    <span>Follow us on LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-[#2E3142] mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#526B61] focus:border-transparent"
                      placeholder="First"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-[#2E3142] mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#526B61] focus:border-transparent"
                      placeholder="Last"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#2E3142] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#526B61] focus:border-transparent"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#2E3142] mb-2">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#526B61] focus:border-transparent"
                    placeholder="xxx-xxx-xxxx"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#2E3142] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#526B61] focus:border-transparent"
                    placeholder="Type your message ..."
                  />
                </div>

                <button
                  type="submit"
                  className="px-8 py-3 bg-[#526B61] text-white text-lg font-medium rounded-full hover:bg-[#3A5548] transition-all duration-300 ease-in-out"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 