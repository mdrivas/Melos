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
            A nonprofit organization dedicated to providing <span className="font-bold">no-cost</span> coaching to healthcare providers
          </p>
          <Link 
            href="/schedule"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Schedule a Session
          </Link>
        </div>
      </section>

      {/* Full Background Image Section */}
      <section className="relative h-[60vh] bg-white">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/background.jpg)',
            backgroundSize: '60%',
            backgroundPosition: 'center 40%',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            The Provider's Coach Project was founded for YOU!
          </h2>
          <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-8">
            <p>
              Our coaches partner with you and guide you to feel empowered, set goals, take action, gain clarity and live with intention.
            </p>
            <p>
              Our mission is to offer <span className="font-bold">no cost</span>, 1:1 development coaching to physicians, physician associates and nurse practitioners, empowering you to navigate through your careers with confidence and resolve. Through personalized coaching, we aim to heal the culture of medicine by helping healthcare providers thrive both personally and professionally.
            </p>
            <p>
              Our Physician Development Coaches are certified by the International Coaching Federation (ICF). The ICF certification ensures your coach has met stringent education and experience requirements, demonstrating a thorough understanding of coaching competencies that set the standard of the profession. Coaches adhere to strict ethical guidelines as part of the ICF mission to protect and serve coaching clients.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Meet Our Founder</h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/founder.jpg"
                    alt="Paula Drivas"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3 text-gray-700">
                <h3 className="text-2xl font-semibold mb-4 text-indigo-800">Paula Drivas</h3>
                <p className="mb-4 leading-relaxed">
                  Throughout my medical career, I have witnessed firsthand the immense dedication and sacrifices that healthcare providers make - often at the expense of our own well-being. Divorce, depression, anxiety, imposter syndrome, substance abuse, alienation, and guilt are but a few of the consequences many face.
                </p>
                <Link 
                  href="/about"
                  className="text-indigo-600 font-semibold hover:text-indigo-700"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Take the Next Step?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Schedule your free coaching session today
          </p>
          <Link 
            href="/schedule"
            className="inline-block bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Book Your Session
          </Link>
        </div>
      </section>
    </main>
  );
}
