export default function FAQPage() {
  const faqs = [
    {
      question: "What is physician coaching, and how can it help me?",
      answer: "Physician coaching is a structured, confidential process that helps healthcare providers navigate challenges, clarify their values, and achieve personal and professional fulfillment. It can help address burnout, work-life balance, leadership skills, career transitions, and overall well-being. Coaching is not therapy or mentorship—it's a collaborative partnership focused on growth, self-discovery, and action."
    },
    {
      question: "What is The Provider's Coach Project, and who is it for?",
      answer: "The Provider's Coach Project is a nonprofit organization dedicated to offering free one-on-one coaching to healthcare providers, including physicians, physician associates, and nurse practitioners. Our mission is to support those struggling with burnout, stress, or career dissatisfaction by providing a safe space to explore solutions and regain joy in their profession."
    },
    {
      question: "How does the coaching process work?",
      answer: "Coaching sessions are conducted virtually via Zoom and last 45 minutes. Providers can book sessions as needed. The process includes values clarification, goal-setting, and personalized strategies to help you navigate your professional and personal challenges. The focus is on creating sustainable changes that align with your values and aspirations."
    },
    {
      question: "How is The Provider's Coach Project funded, and is there any cost to participate?",
      answer: "The coaching services are completely free for healthcare providers. The Provider's Coach Project is funded through grants and fundraising efforts. Our goal is to make coaching accessible to all providers, regardless of their financial situation, to foster a healthier and more resilient healthcare workforce."
    },
    {
      question: "How do I sign up for a coaching session?",
      answer: "You can sign up for a coaching session by visiting our website and selecting an available time slot that works for you. The process is simple—just fill out a brief intake form, and you'll receive a Zoom link for your session. There's no long-term commitment; you can book sessions as needed based on your schedule and needs."
    },
    {
      question: "Is coaching confidential?",
      answer: "Yes, coaching sessions are confidential. Occasionally, sessions may be recorded for quality review purposes, but client identities are always kept private. Only the audio is reviewed—your face will not be visible in any recordings. These recordings help ensure the highest coaching standards and are never shared outside of the quality review process."
    }
  ];

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-blue-100 to-blue-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 text-center mb-16">
            Frequently Asked Questions
          </h1>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="mb-8 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h2 className="text-xl font-semibold text-blue-900 mb-3">
                  {faq.question}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Still have questions? We're here to help.
            </p>
            <a 
              href="/schedule" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Schedule a Session →
            </a>
          </div>
        </div>
      </section>
    </>
  );
} 