import { Pacifico } from "next/font/google";
import Image from "next/image";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

// Two-circle cluster component
const CirclePair = ({ 
  position, 
  baseColor = "yellow", 
  size = "lg",
  rotation = 0,
  overlap = "default"
}: { 
  position: string;
  baseColor?: "yellow" | "blue";
  size?: "sm" | "md" | "lg";
  rotation?: number;
  overlap?: "tight" | "default" | "loose";
}) => {
  const sizeMap = {
    sm: { main: "w-16 h-16", secondary: "w-12 h-12" },
    md: { main: "w-24 h-24", secondary: "w-20 h-20" },
    lg: { main: "w-32 h-32", secondary: "w-28 h-28" }
  };

  const colorMap = {
    yellow: {
      main: "bg-yellow-200",
      secondary: "bg-yellow-100"
    },
    blue: {
      main: "bg-blue-200",
      secondary: "bg-blue-100"
    }
  };

  // Overlap spacing configuration
  const overlapMap = {
    tight: { vertical: "-mt-24", horizontal: "ml-2" },    // More overlap
    default: { vertical: "-mt-28", horizontal: "ml-5" },  // Current spacing
    loose: { vertical: "-mt-16", horizontal: "ml-7" }     // Less overlap
  };

  return (
    <div className={`absolute ${position}`}>
      <div className={`${sizeMap[size].main} ${colorMap[baseColor].main} rounded-full opacity-80 transform rotate-${rotation}`}></div>
      <div className={`${sizeMap[size].secondary} ${colorMap[baseColor].secondary} rounded-full opacity-60 transform -rotate-${rotation} ${overlapMap[overlap].vertical} ${overlapMap[overlap].horizontal}`}></div>
    </div>
  );
};

// Three-circle cluster component
const CircleTriplet = ({ 
  position, 
  baseColor = "yellow", 
  size = "lg",
  rotation = 0,
  overlap = "default"
}: { 
  position: string;
  baseColor?: "yellow" | "blue";
  size?: "sm" | "md" | "lg";
  rotation?: number;
  overlap?: "tight" | "default" | "loose";
}) => {
  const sizeMap = {
    sm: { main: "w-16 h-16", secondary: "w-14 h-14", tertiary: "w-12 h-12" },
    md: { main: "w-24 h-24", secondary: "w-20 h-20", tertiary: "w-16 h-16" },
    lg: { main: "w-32 h-32", secondary: "w-28 h-28", tertiary: "w-24 h-24" }
  };

  const colorMap = {
    yellow: {
      main: "bg-yellow-200",
      secondary: "bg-yellow-100",
      tertiary: "bg-yellow-300"
    },
    blue: {
      main: "bg-blue-200",
      secondary: "bg-blue-100",
      tertiary: "bg-blue-300"
    }
  };

  // Overlap spacing configuration
  const overlapMap = {
    tight: { 
      secondary: { vertical: "-mt-24", horizontal: "ml-2" },
      tertiary: { vertical: "-mt-20", horizontal: "-ml-6" }
    },
    default: { 
      secondary: { vertical: "-mt-20", horizontal: "ml-4" },
      tertiary: { vertical: "-mt-16", horizontal: "-ml-8" }
    },
    loose: { 
      secondary: { vertical: "-mt-16", horizontal: "ml-6" },
      tertiary: { vertical: "-mt-12", horizontal: "-ml-10" }
    }
  };

  return (
    <div className={`absolute ${position}`}>
      <div className={`${sizeMap[size].main} ${colorMap[baseColor].main} rounded-full opacity-80 transform rotate-${rotation}`}></div>
      <div className={`${sizeMap[size].secondary} ${colorMap[baseColor].secondary} rounded-full opacity-60 transform -rotate-${rotation} ${overlapMap[overlap].secondary.vertical} ${overlapMap[overlap].secondary.horizontal}`}></div>
      <div className={`${sizeMap[size].tertiary} ${colorMap[baseColor].tertiary} rounded-full opacity-40 transform rotate-45 ${overlapMap[overlap].tertiary.vertical} ${overlapMap[overlap].tertiary.horizontal}`}></div>
    </div>
  );
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Mission & Vision Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        <CircleTriplet 
          position="top-14 right-16" 
          baseColor="yellow" 
          size="lg" 
          rotation={12}
          overlap="default"
        />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Mission Statement */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">Our Mission</h2>
              <div className="prose prose-lg mx-auto text-gray-700">
                <p className="text-lg leading-relaxed">
                  The Provider's Coach Project is dedicated to supporting the wellbeing, career fulfillment and resilience of healthcare providers by offering no-cost development coaching. Our mission is to help providers gain clarity, align with their values and take control of their career paths. By providing accessible coaching we aim to heal the professional culture of medicine and empower providers to thrive both personally and professionally.
                </p>
              </div>
            </div>

            {/* Vision Statement */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">Our Vision</h2>
              <div className="prose prose-lg mx-auto text-gray-700">
                <p className="text-lg leading-relaxed">
                  We envision a healthcare system where every provider feels valued, supported, and empowered to practice with purpose and joy. By making coaching accessible to all healthcare providers, we strive to transform the healthcare landscape, ensuring those who care for others receive the care and guidance they need to flourish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="py-16 bg-white relative overflow-hidden">
      <CirclePair 
          position="top-5 left-20" 
          baseColor="blue" 
          size="md" 
          rotation={12}
          overlap="default"
        />
        
        <CircleTriplet 
          position="bottom-44 right-12" 
          baseColor="blue" 
          size="md" 
          rotation={-12}
          overlap="loose"
        />
        
        <CirclePair 
          position="top-1/4 right-20" 
          baseColor="yellow" 
          size="md" 
          rotation={12}
          overlap="loose"
        />
        
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
            Board of Directors
          </h2>
          <div className="flex flex-col gap-16 max-w-4xl mx-auto">
           
            {/* Gita Mehta */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 relative rounded-full overflow-hidden flex-shrink-0 border-4 border-blue-200">
                <Image
                  src="/BOD_images/gita.jpg"
                  alt="Gita Mehta, MD, FACP"
                  fill
                  className="object-cover object-[0_20%]"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-3">Gita Mehta, MD, FACP</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Gita Mehta, MD, FACP, is Emeritus Professor at University of California San Diego (UCSD) in the Department of Medicine. She served as a clinician-educator in the Division of General Internal Medicine for over 25 years. With a continued strong commitment to the profession and medical education, she sought and received a Fulbright Grant to India in 2018, where she worked with local faculty to create a professionalism program for learners in the participating medical institution.
                </p>
                <p className="text-base text-gray-700 leading-relaxed mt-3">
                  She is faculty at the Academy of Healthcare Communication (achonline.org) through which she continues to participate in mentoring and guiding trainees and delivering external-facing workshops. She is a certified Health and Well-being coach, and a physician development coach. She now provides coaching for faculty physicians at UCSD and continues to develop and present communication and wellness workshops for undergraduate students and faculty physicians.
                </p>
              </div>
            </div>

            {/* Maureen C. Regan */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 relative rounded-full overflow-hidden flex-shrink-0 border-4 border-blue-200">
                <Image
                  src="/BOD_images/maureen_regan.jpeg"
                  alt="Maureen C. Regan, MBA, PA-C, FACHE, DFAAPA"
                  fill
                  className="object-cover object-[0_20%]"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-3">Maureen C. Regan, MBA, PA-C, FACHE, DFAAPA</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Maureen received her bachelor's in biology and an MBA in Executive Management from St. John's University. She received her license to practice medicine as a PA in 1985.  In addition to her clinical experience as a Surgery and Trauma PA, she is humbled and honored to have served a year in the rescue and recovery efforts at Ground Zero. Maureen has served for many years as a healthcare administrator at large academic medical centers in NYS with responsibility for LCME and ACGME medical education, clinical inpatient and ambulatory operations, and Ambulatory Surgery Center Business Development.</p>
                <p className="text-base text-gray-700 leading-relaxed mt-3">
                  Maureen has served in numerous leadership roles in professional organizations and is a 4 term Past President of the New York State Society of PAs and NYSSPA President-elect. She is also a longtime delegate to the American Academy of Physician Associates. She has provided testimony to the NYS Legislature regarding healthcare opportunities in NYS. She is a Fellow of the American College of Healthcare Executives, a Fellow of the American Academy of PAs and a Delegate to the American Academy of PAs. She was honored to be one of the 25 Healthcare Heroes identified by the NYC St. Patrick's Day Committee representing the PA profession, recognized for their work during the COVID pandemic. Joined by law enforcement and other healthcare colleagues, Maureen marched with the Grand Marshal in the 2022 St. Patrick's Day Parade.
                </p>
              </div>
            </div>

            {/* Dr. Andrea Austin */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 relative rounded-full overflow-hidden flex-shrink-0 border-4 border-blue-200">
                <Image
                  src="/BOD_images/andrea_austin.jpg"
                  alt="Dr. Andrea Austin"
                  fill
                  className="object-cover object-[0_20%]"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-3">Dr. Andrea Austin</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                Dr. Andrea Austin is an emergency physician, simulation educator, and certified Physician Development Coach (ICF Level 1). Her service in the military and work on the front lines of emergency medicine gave her a firsthand understanding of burnout and moral injury in healthcare. Through coaching, she unlocked a renewed sense of agency, fueling her passion for helping others do the same. She hosts the Heartline: Changemaking in Healthcare podcast and authored Revitalized: A Guidebook to Following Your Healing Heartline, which explores overcoming trauma, compassion fatigue, and moral injury to thrive while working in healthcare.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Founder's Message Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <CircleTriplet 
          position="top-20 left-16" 
          baseColor="yellow" 
          size="lg" 
          rotation={45}
          overlap="tight"
        />
        
        <CirclePair 
          position="bottom-24 right-24" 
          baseColor="blue" 
          size="md" 
          rotation={-12}
          overlap="loose"
        />
        
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
            A Message from our Founder
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg">
              <div className="mb-8">
                <Image
                  src="/PaulaFounder.png"
                  alt="Paula Drivas"
                  width={400}
                  height={400}
                  className="rounded-2xl mx-auto mb-8"
                />
              </div>
              <p className="text-base text-gray-700 mb-4">
                Throughout my medical career, I have witnessed firsthand the immense dedication and sacrifices that healthcare providers make - often at the expense of our own well-being. Divorce, depression, anxiety, imposter syndrome, substance abuse, alienation, and guilt are but a few of the consequences many face.
              </p>
              <p className="text-base text-gray-700 mb-4">
                We endure perpetual high stress levels dealing with critical patients and complex diagnoses. We endure compassion fatigue and emotional exhaustion, witnessing chronic patient suffering. We endure the stigmas around seeking help and the perception that healthcare providers should always be strong and capable. We endure long working hours, demanding schedules and toxic work environments that contribute to burnout and lack of personal time.
              </p>
              <p className="text-base text-gray-700 mb-4">
                No longer wanting to accept these behaviors as our collective reality, I searched for ways to change the culture of medicine, to help heal the profession that I still love and so many have dedicated their lives to. Fueled by my desire for change, I trained with the Physician Coaching Institute and became a Master Certified Physician Coach. Throughout this journey I have met and worked with so many fascinating, caring and diverse individuals who share my passion for healing. Some chose to embark on the entrepreneurial track and formed for-profit coaching businesses. Their personalized coaching programs offer deep experiences tailored to the client's needs. Other colleagues chose to partner with their institutions and offer coaching as part of their Wellness programs.
              </p>
              <p className="text-base text-gray-700 mb-4">
                My journey led me to create The Provider's Coach Project, a nonprofit 501(c)3 organization offering no-cost coaching to healthcare professionals seeking guidance, clarity and support throughout their career. I wanted to remove barriers to coaching and make it accessible to everyone. You may find the answer to a question you've been mulling over after just one visit. Or you may choose to dive deeper on a topic and visit more often. Either way, my hope is that The Provider's Coach Project supports you to feel empowered, set goals, take action, gain clarity and live with intention, both personally and professionally.
              </p>
              <p className="text-base text-gray-700 mb-4">
                Life begins with that first breath!
              </p>
              <p className="text-base text-gray-700 mb-4">
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