import { getServerAuthSession } from "~/server/auth";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-indigo-900">
            The Provider's Coach Project
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
            Empowering healthcare providers through personalized, no-cost development coaching
          </p>
          <Link 
            href="/schedule"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Schedule a Session
          </Link>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-indigo-900">Our Mission</h2>
          <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
            <p className="mb-6">
              At The Provider's Coach Project, we believe that no healthcare provider should navigate their career challenges alone. Our mission is to offer no cost, one-on-one development coaching to physicians, physician associates and nurse practitioners, empowering them to navigate through their careers with confidence and resolve.
            </p>
            <p>
              Through personalized coaching, we aim to heal the culture of medicine by helping healthcare providers thrive both personally and professionally.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-indigo-900">Our Services</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-indigo-800">
                Professional Development Coaching
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>• One-on-one, virtual 30-minute coaching sessions</li>
                <li>• ICF Certified Physician Development Coach</li>
                <li>• Personalized guidance and support</li>
                <li>• No cost to healthcare providers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-indigo-900">Meet Our Founder</h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/founder.jpg" // Add founder's image
                    alt="Paula Drivas"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3 text-gray-700">
                <h3 className="text-2xl font-semibold mb-4 text-indigo-800">Paula Drivas</h3>
                <p className="mb-4">
                  Healthcare provider and master certified physician development coach, with over 30 years of clinical and administrative experience in Emergency Medicine, Primary Care, Urgent Care, Cardiothoracic Surgery and Orthopedic Surgery.
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
      <section className="py-20 bg-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Take the Next Step?</h2>
          <p className="text-xl mb-8 text-indigo-100">
            Schedule your free 30-minute coaching session today
          </p>
          <Link 
            href="/schedule"
            className="inline-block bg-white text-indigo-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-50 transition-colors"
          >
            Book Your Session
          </Link>
        </div>
      </section>
    </main>
  );
}
