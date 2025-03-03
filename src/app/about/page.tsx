import { Pacifico } from "next/font/google";
import Image from "next/image";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Mission Statement */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Our Mission</h2>
              <div className="prose prose-lg mx-auto text-gray-700">
                <p className="text-xl leading-relaxed">
                  The Provider's Coach Project is dedicated to supporting the wellbeing, career fulfillment and resilience of healthcare providers by offering no-cost development coaching. Our mission is to help providers gain clarity, align with their values and take control of their career paths. By providing accessible coaching we aim to heal the professional culture of medicine and empower providers to thrive both personally and professionally.
                </p>
              </div>
            </div>

            {/* Vision Statement */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Our Vision</h2>
              <div className="prose prose-lg mx-auto text-gray-700">
                <p className="text-xl leading-relaxed">
                  We envision a healthcare system where every provider feels valued, supported, and empowered to practice with purpose and joy. By making coaching accessible to all healthcare providers, we strive to transform the healthcare landscape, ensuring those who care for others receive the care and guidance they need to flourish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Message Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-blue-900 mb-12 text-center">
            A Message from our Founder
          </h1>
          
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg">
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
                Throughout my medical career, I have witnessed firsthand the immense dedication and sacrifices that healthcare providers make - often at the expense of our own well-being. Divorce, depression, anxiety, imposter syndrome, substance abuse, alienation, and guilt are but a few of the consequences many face.
              </p>
              <p className="mb-6">
                We endure perpetual high stress levels dealing with critical patients and complex diagnoses. We endure compassion fatigue and emotional exhaustion, witnessing chronic patient suffering. We endure the stigmas around seeking help and the perception that healthcare providers should always be strong and capable. We endure long working hours, demanding schedules and toxic work environments that contribute to burnout and lack of personal time.
              </p>
              <p className="mb-6">
                No longer wanting to accept these behaviors as our collective reality, I searched for ways to change the culture of medicine, to help heal the profession that I still love and so many have dedicated their lives to. Fueled by my desire for change, I trained with the Physician Coaching Institute and became a Master Certified Physician Coach. Throughout this journey I have met and worked with so many fascinating, caring and diverse individuals who share my passion for healing. Some chose to embark on the entrepreneurial track and formed for-profit coaching businesses. Their personalized coaching programs offer deep experiences tailored to the client's needs. Other colleagues chose to partner with their institutions and offer coaching as part of their Wellness programs.
              </p>
              <p className="mb-6">
                My journey led me to create The Provider's Coach Project, a nonprofit 501(c)3 organization offering no-cost coaching to healthcare professionals seeking guidance, clarity and support throughout their career. I wanted to remove barriers to coaching and make it accessible to everyone. You may find the answer to a question you've been mulling over after just one visit. Or you may choose to dive deeper on a topic and visit more often. Either way, my hope is that The Provider's Coach Project supports you to feel empowered, set goals, take action, gain clarity and live with intention, both personally and professionally.
              </p>
              <p className="mb-6">
                Life begins with that first breath!
              </p>
              <p className="mb-6">
                I invite you to take a deep breath and choose to begin your coaching journey today!
              </p>
              <p className={`text-2xl text-blue-900 ${pacifico.className}`}>
                Paula
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 