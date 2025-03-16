import { getServerAuthSession } from "~/server/auth";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section with Yellow-Blue Gradient */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-yellow-50 to-blue-50">
        <div className="absolute inset-0 z-0">
          {/* Add decorative wave and sun */}
          <div className="absolute bottom-0 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-blue-100">
              <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,112C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
          {/* Sun */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-yellow-300 rounded-full opacity-75"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-900">
            The Provider's Coach Project
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
           No-Cost Coaching for Healthcare Providers by Healthcare Providers
          </p>
          <Link 
            href="/schedule"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Book a Session
          </Link>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-900">
            Why We Exist
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="text-xl text-gray-700 leading-relaxed space-y-6">
              <p className="mb-6">
                <span className="font-semibold text-blue-900">Healthcare professionals are struggling</span> to stay happy at work. Many are exhausted or facing burn out. Others are navigating work-life balance or considering career changes.
              </p>
              
              <p className="mb-6">
                To continue thriving, we believe every provider deserves <span className="font-semibold text-blue-900">support, clarity, and a path forward</span>—without financial barriers or stigma. We created The Provider's Coach Project, a <span className="font-semibold text-blue-900">nonprofit organization offering no cost, confidential coaching</span> to help you reconnect with your purpose, set healthy boundaries, and build a career that sustains you.
              </p>
              
              <p className="text-2xl font-medium text-blue-900 text-center italic">
                We're here for you—because when providers thrive, healthcare is better for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Quote Bubbles Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Left Quote */}
            <div className="flex justify-start">
              <div className="relative bg-white rounded-2xl p-6 shadow-lg max-w-2xl transform hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute -left-3 top-1/2 w-6 h-6 bg-white transform rotate-45 -translate-y-1/2" />
                <p className="text-lg text-gray-700 italic">
                  "I'm feeling burned out and exhausted—how can I regain my passion for medicine?"
                </p>
              </div>
            </div>

            {/* Right Quote */}
            <div className="flex justify-end">
              <div className="relative bg-white rounded-2xl p-6 shadow-lg max-w-2xl transform hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute -right-3 top-1/2 w-6 h-6 bg-white transform rotate-45 -translate-y-1/2" />
                <p className="text-lg text-gray-700 italic">
                  "I'm at a career crossroads—should I change specialties, take on a leadership role, or leave clinical practice?"
                </p>
              </div>
            </div>

            {/* Left Quote */}
            <div className="flex justify-start">
              <div className="relative bg-white rounded-2xl p-6 shadow-lg max-w-2xl transform hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute -left-3 top-1/2 w-6 h-6 bg-white transform rotate-45 -translate-y-1/2" />
                <p className="text-lg text-gray-700 italic">
                  "How can I create a better work-life balance without feeling guilty or compromising my career?"
                </p>
              </div>
            </div>

            {/* Right Quote */}
            <div className="flex justify-end">
              <div className="relative bg-white rounded-2xl p-6 shadow-lg max-w-2xl transform hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute -right-3 top-1/2 w-6 h-6 bg-white transform rotate-45 -translate-y-1/2" />
                <p className="text-lg text-gray-700 italic">
                  "I struggle with confidence and imposter syndrome—how can I become a stronger, more effective leader?"
                </p>
              </div>
            </div>

            {/* Left Quote */}
            <div className="flex justify-start">
              <div className="relative bg-white rounded-2xl p-6 shadow-lg max-w-2xl transform hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute -left-3 top-1/2 w-6 h-6 bg-white transform rotate-45 -translate-y-1/2" />
                <p className="text-lg text-gray-700 italic">
                  "My workplace is toxic—but I don't know if I should leave or try to change my environment—what should I do?"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Philosophy Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-900">
            Our Coaching Philosophy
          </h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
            <p>
              Physician coaching is a relationship between two medical professionals—a conversation among individuals with shared experiences. Our goal is to create a <span className="font-semibold text-blue-900">sacred and safe space</span> for exploration and self-discovery.
            </p>
            <p className="mt-6">
              Our work is <span className="font-semibold text-blue-900">client-centered, action-oriented, and forward-looking</span>. No matter what is happening in your life, we see you as whole and complete. We have faith in you and your ability to align with your values, rediscover your purpose, and live with intention.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works & Who We Coach Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* How It Works */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">How It Works</h2>
              <ul className="space-y-4 max-w-2xl mx-auto">
                {[
                  "30-minute virtual coaching sessions via Zoom",
                  "No commitment—schedule sessions as needed",
                  "Judgment-free, confidential support",
                  "Physician coaches certified by the International Coaching Federation"
                ].map((step) => (
                  <li key={step} className="flex items-center space-x-3">
                    <span className="text-blue-600 text-2xl">•</span>
                    <span className="text-lg text-gray-700">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who We Coach */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">Who We Coach</h2>
              <p className="text-lg text-gray-700 text-center mb-8">
                We support physicians, physician associates, and nurse practitioners at any career stage.
              </p>

              <h3 className="text-2xl font-semibold text-blue-900 text-center mb-6">What Coaching Can Help With</h3>
              
              <ul className="space-y-4 max-w-2xl mx-auto">
                {[
                  "Feeling overworked, exhausted, or disconnected from your purpose",
                  "Setting boundaries and reclaiming personal time",
                  "Exploring career transitions and leadership opportunities",
                  "Navigating workplace stress, gaslighting, or toxic environments",
                  "Rediscovering fulfillment in medicine"
                ].map((item) => (
                  <li key={item} className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-900">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "Coaching helped me step back and see my career in a new light. I feel more in control, less stressed, and finally have a plan for moving forward.",
                author: "Emergency Medicine Physician"
              },
              {
                quote: "I was on the verge of quitting medicine. This coaching gave me the clarity and confidence I needed to make changes that actually work for me.",
                author: "Primary Care Nurse Practitioner"
              },
              {
                quote: "For the first time in years, I feel like I have options. Coaching helped me see a way out of burnout and into a career that aligns with my values.",
                author: "Cardiothoracic Surgery Physician Associate"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <div className="text-blue-600 mb-4">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-700 mb-4 italic">{testimonial.quote}</p>
                <p className="text-blue-900 font-semibold">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Our Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
              Support Our Mission
            </h2>
            <p className="text-xl text-gray-700 mb-12">
              We're committed to making coaching available to every provider who needs it—but we need your help.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: "💙",
                  title: "Donate",
                  description: "Help us expand our reach"
                },
                {
                  icon: "💙",
                  title: "Volunteer as a Coach",
                  description: "Join us if you're a certified physician development coach"
                },
                {
                  icon: "💙",
                  title: "Spread the Word",
                  description: "Share with colleagues who might benefit"
                }
              ].map((item, index) => (
                <div key={index} className="bg-blue-50 rounded-xl p-6 shadow-md transform hover:-translate-y-1 transition-all duration-300">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 to-blue-100 scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-900">Contact Us</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <div className="text-3xl mb-4">📩</div>
                <a href="mailto:info@providerscoachproject.org" className="text-blue-600 hover:text-blue-800 transition-colors">
                  info@providerscoachproject.org
                </a>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl mb-4">📱</div>
                <div className="flex space-x-4">
                  {/* Add your social media links here */}
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">LinkedIn</a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">Twitter</a>
                </div>
              </div>
            </div>

            <Link 
              href="/schedule"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Book a Session →
            </Link>
          </div>
        </div>
      </section>

      {/* End of main */}
    </main>
  );
}
