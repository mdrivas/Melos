import { Pacifico } from "next/font/google";
import Image from "next/image";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-indigo-900 mb-12 text-center">
          A Message from our Founder…
        </h1>
        
        <div className="max-w-4xl mx-auto mb-16">
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
              No longer wanting to accept these behaviors as our collective reality, I searched for ways to change the culture of medicine, to help heal the profession that I still love and so many have dedicated their lives to. Fueled by my desire for change, I trained with the Physician Coaching Institute and became a Master Certified Physician Coach. Throughout this journey I have met and worked with so many fascinating, caring and interesting individuals who share my passion for healing. Some chose to embark on the entrepreneurial track and formed for-profit coaching businesses. Their personalized coaching programs offer deep experiences tailored to the client's needs. Other colleagues chose to partner with their institutions and offer coaching as part of their Wellness programs.
            </p>
            <p className="mb-6">
              My journey led me to create The Provider's Coach Project, a nonprofit 501(c)3 organization offering no-cost coaching to healthcare professionals seeking guidance, clarity and support throughout their career. I wanted to remove barriers to coaching and make it accessible to everyone. You may find the answer to a question you've been mulling over after just one visit. Or you may choose to dive deeper on a topic and visit more often. Either way, my hope is that The Provider's Coach Project will help guide you to feel empowered, set goals, take action, gain clarity and live with intention, both personally and professionally.
            </p>
            <p className="mb-6">
              Life begins with that first breath!
            </p>
            <p className="mb-6">
              I invite you to take a deep breath and choose to begin your coaching journey today!
            </p>
            <p className={`text-2xl text-black  ${pacifico.className}`}>
              Paula
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 