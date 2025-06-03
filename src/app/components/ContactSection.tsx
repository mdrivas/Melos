import Link from "next/link";

export default function ContactSection() {
  return (
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
                <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">LinkedIn</a>
                <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">Twitter</a>
              </div>
            </div>
          </div>

          <Link 
            href="/comingSoon"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Book a Session →
          </Link>
        </div>
      </div>
    </section>
  );
} 