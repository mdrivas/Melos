'use client';

import { Merriweather } from "next/font/google";
import { CirclePair } from "~/components/ui/circle-pair";
import { CircleTriplet } from "~/components/ui/circle-triplet";
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

const renderAnswer = (answer: string | JSX.Element) => {
  if (typeof answer === 'string') {
    return answer;
  }
  return answer;
};

export default function FAQPage() {
  const faqs = [
    {
      question: "What is physician coaching, and how can it help me?",
      answer: "Physician coaching is a structured, confidential process that helps healthcare providers navigate challenges, clarify their values, and achieve personal and professional fulfillment. It can help address burnout, work-life balance, leadership skills, career transitions, and overall well-being. Coaching is not therapy or mentorship—it's a collaborative partnership focused on growth, self-discovery, and action."
    },
    {
      question: "What is The Provider's Coach Project, and who is it for?",
      answer: "The Provider's Coach Project is a non-profit organization dedicated to offering no-cost one-on-one coaching to healthcare providers, including physicians, physician associates, and nurse practitioners. Our mission is to support those struggling with burnout, stress, or career dissatisfaction by providing a safe space to explore solutions and regain joy in their profession."
    },
    {
      question: "How does the coaching process work?",
      answer: "Coaching sessions are conducted virtually via Zoom and last 45 minutes. Providers can book sessions as needed. The process includes values clarification, goal-setting, and personalized strategies to help you navigate your professional and personal challenges. The focus is on creating sustainable changes that align with your values and aspirations."
    },
    {
      question: "How is The Provider's Coach Project funded, and is there any cost to participate?",
      answer: "The coaching services are offered at no-cost to healthcare providers. The Provider's Coach Project is funded through grants and fundraising efforts. Our goal is to make coaching accessible to all providers, regardless of their financial situation, and to foster a healthier and more resilient healthcare workforce."
    },
    {
      question: "How do I sign up for a coaching session?",
      answer: (
        <>
          You can sign up for a coaching session by visiting our{' '}
          <a 
            href="/schedule" 
            className="text-[#1473E6] hover:text-[#3A5548] transition-colors underline"
          >
            scheduling page
          </a>
          {' '}and selecting an available time slot that works for you. The process is simple: just fill out a brief intake form, and you'll receive a Zoom link for your session. There's no long-term commitment; you can book sessions as needed based on your schedule and needs.
        </>
      )
    },
    {
      question: "Is coaching confidential?",
      answer: "Yes, coaching sessions are confidential. Occasionally, sessions may be recorded for quality review purposes, but client identities are always kept private. Only the audio is reviewed—your face will not be visible in any recordings. These recordings help ensure the highest coaching standards and are never shared outside of the quality review process."
    }
  ];

  return (
    <main className="min-h-screen bg-white pt-20 overflow-x-hidden">
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#D4E6FF] via-[#E8F1FF] to-white relative overflow-hidden">
        {/* Circle Decorations - hidden on smaller screens */}
        <div className="absolute top-14 right-16 hidden lg:block">
          <CircleTriplet color="bg-[#E8F1FF]" />
        </div>
        <div className="absolute bottom-20 left-16 hidden lg:block">
          <CirclePair color="bg-[#E8F1FF]" />
        </div>

        <div className="container mx-auto px-4">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#2E3142] text-center mb-12 sm:mb-16 ${merriweather.className}`}>
            Frequently Asked Questions
          </h1>

          <div className="max-w-6xl mx-auto">
            <Accordion.Root
              type="single"
              collapsible
              className="space-y-4 sm:space-y-6"
            >
              {faqs.map((faq, index) => (
                <Accordion.Item
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="group flex items-center justify-between w-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-left">
                      <span className="text-lg sm:text-xl lg:text-2xl text-[#2E3142] font-medium font-sans pr-4">
                        {faq.question}
                      </span>
                      <ChevronDownIcon
                        className="h-5 w-5 sm:h-6 sm:w-6 text-[#2E3142] transition-transform duration-300 group-data-[state=open]:rotate-180 flex-shrink-0"
                        aria-hidden
                      />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-5 md:pb-6">
                      <p className="text-base sm:text-lg md:text-xl leading-[1.6] sm:leading-[1.8] text-[#2E3142]">
                        {renderAnswer(faq.answer)}
                      </p>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <p className="text-lg sm:text-xl text-[#2E3142] mb-6 sm:mb-8">
              Still have questions? We're here to help.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-[#1473E6] text-white text-lg sm:text-xl font-sans rounded-full hover:bg-[#3A5548] transition-all duration-300 ease-in-out hover:shadow-lg hover:transform hover:-translate-y-0.5"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 