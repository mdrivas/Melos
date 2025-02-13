import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-indigo-900 mb-12 text-center">
          About The Provider's Coach Project
        </h1>
        
        {/* Founder's Story */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="prose prose-lg">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-6">
              Meet Paula Drivas
            </h2>
            <div className="mb-8">
              <Image
                src="/founder.jpg"
                alt="Paula Drivas"
                width={400}
                height={400}
                className="rounded-2xl mx-auto mb-8"
              />
            </div>
            <p className="mb-6">
              I'm Paula Drivas, a healthcare provider and master certified physician development coach, 
              with over 30 years of clinical and administrative experience in Emergency Medicine, 
              Primary Care, Urgent Care, Cardiothoracic Surgery and Orthopedic Surgery.
            </p>
            <p className="mb-6">
              Throughout my career, coaching was either nonexistent or not well publicized, 
              and I didn't realize how transformative it could be. Like many in the medical field, 
              I dedicated myself to patient care, often at the expense of my own well-being.
            </p>
            <p className="mb-6">
              But everything changed when I became the victim of bullying and gaslighting in the workplace. 
              During this difficult time as I searched for support and answers, I turned to a physician 
              development coach- and it was lifechanging. My coach helped me reconnect with my values, 
              take a 360 degree view of my situation, and recognize that I held the answers. 
              I just needed the right support to bring them to light.
            </p>
            <p className="mb-6">
              That experience inspired me to give back. I wanted to help other healthcare providers 
              struggling to make career related decisions. To make this vision a reality, I trained 
              with the Physician Coaching Institute and became a Master Certified Physician Coach.
            </p>
            <p>
              Now through The Provider's Coach Project, I offer no-cost coaching to healthcare 
              professionals who need guidance, clarity and support. My goal is simple: to help heal 
              the professional culture of medicine and empower providers to thrive-both personally 
              and professionally.
            </p>
          </div>
        </div>

        {/* Credentials Section */}
        <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-6">
            Credentials & Experience
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li>• Master Certified Physician Coach</li>
            <li>• ICF Certified Coach</li>
            <li>• 30+ Years Clinical Experience</li>
            <li>• Emergency Medicine</li>
            <li>• Primary Care</li>
            <li>• Urgent Care</li>
            <li>• Cardiothoracic Surgery</li>
            <li>• Orthopedic Surgery</li>
          </ul>
        </div>
      </div>
    </main>
  );
} 