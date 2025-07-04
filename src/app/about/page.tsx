import { Pacifico, Merriweather } from "next/font/google";
import Image from "next/image";
import { CirclePair } from "~/components/ui/circle-pair";
import { CircleTriplet } from "~/components/ui/circle-triplet";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-20 overflow-x-hidden">
      {/* Mission & Vision Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#D4E6FF] via-[#E8F1FF] to-white relative overflow-hidden">
        <div className="absolute top-14 right-16 hidden lg:block">
          <CircleTriplet color="bg-[#E8F1FF]" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
            {/* Mission Statement */}
            <div>
              <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#2E3142] mb-6 sm:mb-8 text-center ${merriweather.className}`}>
                Our Mission
              </h2>
              <div className="max-w-5xl mx-auto px-4">
                <p className="text-base sm:text-lg md:text-xl leading-[1.7] sm:leading-[1.8] text-[#2E3142] indent-4 sm:indent-8 mx-auto">
                  The Provider's Coach Project is dedicated to supporting the wellbeing, career fulfillment, and resilience 
                  of healthcare providers by offering no-cost development coaching. Our mission is to help providers 
                  gain clarity, align with their values, and take control of their career paths. By providing accessible 
                  coaching, we aim to heal the professional culture of medicine and empower providers to thrive both 
                  personally and professionally.
                </p>
              </div>
            </div>

            {/* Vision Statement */}
            <div>
              <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#2E3142] mb-6 sm:mb-8 text-center ${merriweather.className}`}>
                Our Vision
              </h2>
              <div className="max-w-5xl mx-auto px-4">
                <p className="text-base sm:text-lg md:text-xl leading-[1.7] sm:leading-[1.8] text-[#2E3142] indent-4 sm:indent-8 mx-auto">
                  We envision a healthcare system where every provider feels valued, supported, and 
                  empowered to practice with purpose and joy. By making coaching accessible to all 
                  healthcare providers, we strive to transform the healthcare landscape, ensuring 
                  those who care for others receive the care and guidance they need to flourish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-[#F8FBFF] to-[#E8F1FF] relative overflow-hidden">
        <div className="absolute top-5 left-20 hidden lg:block">
          <CirclePair color="bg-[#E8F1FF]" />
        </div>
        
        <div className="absolute bottom-44 right-12 hidden lg:block">
          <CircleTriplet color="bg-[#E8F1FF]" />
        </div>
        
        <div className="absolute top-1/4 right-20 hidden lg:block">
          <CirclePair color="bg-[#E8F1FF]" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#2E3142] mb-12 sm:mb-16 text-center ${merriweather.className}`}>
            Board of Directors
          </h2>
          <div className="flex flex-col gap-12 sm:gap-16 md:gap-20 max-w-6xl mx-auto">
           
            {/* Gita Mehta */}
            <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12">
              <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 relative rounded-full overflow-hidden flex-shrink-0 border-4 border-[#D4E6FF]">
                <Image
                  src="/BOD_images/gita.jpg"
                  alt="Gita Mehta, MD, FACP"
                  fill
                  className="object-cover object-[0_20%]"
                />
              </div>
              <div>
                <h3 className={`text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#2E3142] mb-4 sm:mb-6 text-center md:text-left ${merriweather.className}`}>
                  Gita Mehta, MD, FACP
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-base sm:text-lg md:text-xl leading-[1.6] sm:leading-[1.8] text-[#2E3142]">
                    Gita Mehta, MD, FACP, is Emeritus Professor at University of California San Diego 
                    (UCSD) in the Department of Medicine. She served as a clinician-educator in the 
                    Division of General Internal Medicine for over 25 years. With a continued strong 
                    commitment to the profession and medical education, she sought and received a 
                    Fulbright Grant to India in 2018, where she worked with local faculty to create 
                    a professionalism program for learners in the participating medical institution.
                  </p>
                  <p className="text-base sm:text-lg md:text-xl leading-[1.6] sm:leading-[1.8] text-[#2E3142]">
                    She is faculty at the Academy of Healthcare Communication (achonline.org) through 
                    which she continues to participate in mentoring and guiding trainees and delivering 
                    external-facing workshops. She is a certified Health and Well-being coach, and a 
                    physician development coach. She now provides coaching for faculty physicians at 
                    UCSD and continues to develop and present communication and wellness workshops for 
                    undergraduate students and faculty physicians.
                  </p>
                </div>
              </div>
            </div>

            {/* Maureen C. Regan */}
            <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12">
              <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 relative rounded-full overflow-hidden flex-shrink-0 border-4 border-[#D4E6FF]">
                <Image
                  src="/BOD_images/maureen_regan.jpeg"
                  alt="Maureen C. Regan, MBA, PA-C, FACHE, DFAAPA"
                  fill
                  className="object-cover object-[0_20%]"
                />
              </div>
              <div>
                <h3 className={`text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#2E3142] mb-4 sm:mb-6 text-center md:text-left ${merriweather.className}`}>
                  Maureen C. Regan, MBA, PA-C, FACHE, DFAAPA
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-base sm:text-lg md:text-xl leading-[1.6] sm:leading-[1.8] text-[#2E3142]">
                    Maureen received her bachelor's in biology and an MBA in Executive Management from 
                    St. John's University. She received her license to practice medicine as a PA in 1985. 
                    In addition to her clinical experience as a Surgery and Trauma PA, she is humbled 
                    and honored to have served a year in the rescue and recovery efforts at Ground Zero. 
                    Maureen has served for many years as a healthcare administrator at large academic 
                    medical centers in NYS with responsibility for LCME and ACGME medical education, 
                    clinical inpatient and ambulatory operations, and Ambulatory Surgery Center Business 
                    Development.
                  </p>
                  <p className="text-base sm:text-lg md:text-xl leading-[1.6] sm:leading-[1.8] text-[#2E3142]">
                    Maureen has served in numerous leadership roles in professional organizations and is 
                    a 4 term Past President of the New York State Society of PAs and NYSSPA President-elect. 
                    She is also a longtime delegate to the American Academy of Physician Associates. She 
                    has provided testimony to the NYS Legislature regarding healthcare opportunities in NYS. 
                    She is a Fellow of the American College of Healthcare Executives, a Fellow of the 
                    American Academy of PAs and a Delegate to the American Academy of PAs. She was honored 
                    to be one of the 25 Healthcare Heroes identified by the NYC St. Patrick's Day Committee 
                    representing the PA profession, recognized for their work during the COVID pandemic. 
                    Joined by law enforcement and other healthcare colleagues, Maureen marched with the 
                    Grand Marshal in the 2022 St. Patrick's Day Parade.
                  </p>
                </div>
              </div>
            </div>

            {/* Dr. Andrea Austin */}
            <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12">
              <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 relative rounded-full overflow-hidden flex-shrink-0 border-4 border-[#D4E6FF]">
                <Image
                  src="/BOD_images/andrea_austin.jpg"
                  alt="Andrea Austin, MD"
                  fill
                  className="object-cover object-[0_20%]"
                />
              </div>
              <div>
                <h3 className={`text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#2E3142] mb-4 sm:mb-6 text-center md:text-left ${merriweather.className}`}>
                  Andrea Austin, MD
                </h3>
                <p className="text-base sm:text-lg md:text-xl leading-[1.6] sm:leading-[1.8] text-[#2E3142]">
                  Dr. Andrea Austin is an emergency physician, simulation educator, and certified 
                  Physician Development Coach (ICF Level 1). Her service in the military and work 
                  on the front lines of emergency medicine gave her a firsthand understanding of 
                  burnout and moral injury in healthcare. Through coaching, she unlocked a renewed 
                  sense of agency, fueling her passion for helping others do the same. She hosts 
                  the Heartline: Changemaking in Healthcare podcast and authored Revitalized: A 
                  Guidebook to Following Your Healing Heartline, which explores overcoming trauma, 
                  compassion fatigue, and moral injury to thrive while working in healthcare.
                </p>
              </div>
            </div>

            {/* Dr. Kris Pyles-Sweet */}
            <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12">
              <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 relative rounded-full overflow-hidden flex-shrink-0 border-4 border-[#D4E6FF]">
                <Image
                  src="/BOD_images/kris_pyles_sweet.JPG"
                  alt="Kris Pyles-Sweet, DMSc, PA-C"
                  fill
                  className="object-cover object-[0_20%]"
                />
              </div>
              <div>
                <h3 className={`text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#2E3142] mb-4 sm:mb-6 text-center md:text-left ${merriweather.className}`}>
                  Kris Pyles-Sweet, DMSc, PA-C
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-base sm:text-lg md:text-xl leading-[1.6] sm:leading-[1.8] text-[#2E3142]">
                    Dr. Kris Pyles-Sweet is a board-certified Physician Associate and healthcare 
                    leader with over two decades of experience in primary care, geriatrics, wellness, 
                    and home-based medicine. As founder of multiple medical practices, she has 
                    firsthand insight into the operational and emotional challenges healthcare 
                    providers face, particularly in high-demand, under-resourced environments.
                  </p>
                  <p className="text-base sm:text-lg md:text-xl leading-[1.6] sm:leading-[1.8] text-[#2E3142]">
                    Holding a Doctorate in Medical Science with a focus on Leadership, Dr. Sweet is 
                    a passionate advocate for clinician well-being, professional sustainability, and 
                    policy-driven solutions to healthcare burnout. She currently serves as 
                    Secretary-Treasurer of the American Academy of Physician Associates and has served 
                    on numerous national committees focused on governance, advocacy, and professional 
                    advancement.
                  </p>
                  <p className="text-base sm:text-lg md:text-xl leading-[1.6] sm:leading-[1.8] text-[#2E3142]">
                    A published author, educator, and national speaker, Dr. Sweet brings to the board 
                    a deep understanding of burnout's systemic roots, a commitment to fostering 
                    resilience, and a clear voice for change in clinician culture.
                  </p>
                </div>
              </div>
            </div>

            {/* Elias Drivas */}
            <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12">
              <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 relative rounded-full overflow-hidden flex-shrink-0 border-4 border-[#D4E6FF]">
                <Image
                  src="/BOD_images/elias_drivas.jpeg"
                  alt="Elias Drivas"
                  fill
                  className="object-cover object-[0%_0%]"
                />
              </div>
              <div>
                <h3 className={`text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#2E3142] mb-4 sm:mb-6 text-center md:text-left ${merriweather.className}`}>
                  Elias Drivas
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-base sm:text-lg md:text-xl leading-[1.6] sm:leading-[1.8] text-[#2E3142]">
                    Elias Drivas is a senior IT executive with over 20 years of experience leading 
                    transformative technology initiatives across cybersecurity, infrastructure, 
                    identity management, and enterprise service delivery. As Director of IT at 
                    Chargie LLC, he brings a strategic, execution-driven approach to advancing 
                    cybersecurity maturity, cloud modernization, and operational excellence. He 
                    has led enterprise-wide efforts including Microsoft 365 tenant migrations, 
                    Okta identity governance, data center consolidations, and cloud storage 
                    transitions—strengthening cybersecurity through Zero Trust frameworks, 
                    phishing-resistant MFA, and FedRAMP-compliant implementations while minimizing 
                    disruption and enhancing business continuity.
                  </p>
                  <p className="text-base sm:text-lg md:text-xl leading-[1.6] sm:leading-[1.8] text-[#2E3142]">
                    Prior to Chargie, Elias held senior leadership roles at Wedbush Securities and 
                    Baker Tilly. At Baker Tilly, he led geographically dispersed teams through 
                    multiple merger integrations, implemented enterprise-wide ITSM processes, and 
                    built strategic partnerships across business units. At Wedbush, he oversaw 
                    identity governance, audit compliance, and national IT service delivery. Elias 
                    holds PMP and ITIL v4 Foundation certifications, with a professional focus on 
                    aligning technology with business strategy, strengthening cybersecurity 
                    frameworks, and scaling IT services for growth and compliance.
                  </p>
                </div>
              </div>
            </div>

            {/* Alexandros Drivas */}
            <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12">
              <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 relative rounded-full overflow-hidden flex-shrink-0 border-4 border-[#D4E6FF]">
                <Image
                  src="/BOD_images/alexandros_drivas.jpg"
                  alt="Alexandros Drivas"
                  fill
                  className="object-cover object-[center_5%]"
                />
              </div>
              <div>
                <h3 className={`text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#2E3142] mb-4 sm:mb-6 text-center md:text-left ${merriweather.className}`}>
                  Alexandros Drivas, MS
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-base sm:text-lg md:text-xl leading-[1.6] sm:leading-[1.8] text-[#2E3142]">
                    Alexandros Drivas is a biomedical engineer and software developer with expertise 
                    in medical devices and digital health platforms. He holds an M.S. in Biomedical 
                    Engineering from Columbia University and has played a key role in the development of FDA Class II 
                    medical devices used in oncology and global clinical trials. As an early engineer at 
                    Athelas, he helped scale both software and hardware systems, including machine 
                    learning-enabled diagnostics, embedded firmware, and HIPAA-compliant tools. At 
                    the Provider's Coach Project, Alexandros serves as Technical Lead, overseeing 
                    the creation of a secure, user-friendly coaching platform designed to support 
                    and empower healthcare providers.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Founder's Message Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#E8F1FF] via-[#F8FBFF] to-white relative overflow-hidden">
        <div className="absolute top-20 left-16 hidden lg:block">
          <CircleTriplet color="bg-[#E8F1FF]" />
        </div>
        
        <div className="absolute bottom-24 right-24 hidden lg:block">
          <CirclePair color="bg-[#E8F1FF]" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#2E3142] mb-12 sm:mb-16 text-center ${merriweather.className}`}>
            A Message from our Founder
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="space-y-6 sm:space-y-8">
              <div className="mb-8 sm:mb-12">
                <Image
                  src="/BOD_images/paula_drivas_founder.jpeg"
                  alt="Paula Drivas"
                  width={300}
                  height={300}
                  className="rounded-2xl mx-auto w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 object-cover"
                />
              </div>
              <p className="text-base sm:text-lg md:text-xl leading-[1.6] sm:leading-[1.8] text-[#2E3142] indent-4 sm:indent-8">
                Throughout my medical career, I have witnessed firsthand the immense dedication and 
                sacrifices that healthcare providers make - often at the expense of our own well-being. 
                Divorce, depression, anxiety, imposter syndrome, substance abuse, alienation, and guilt 
                are but a few of the consequences many face.
              </p>
              <p className="text-base sm:text-lg md:text-xl leading-[1.6] sm:leading-[1.8] text-[#2E3142] indent-4 sm:indent-8">
                We endure perpetual high stress levels dealing with critical patients and complex 
                diagnoses. We endure compassion fatigue and emotional exhaustion, witnessing chronic 
                patient suffering. We endure the stigmas around seeking help and the perception that 
                healthcare providers should always be strong and capable. We endure long working hours, 
                demanding schedules and toxic work environments that contribute to burnout and lack of 
                personal time.
              </p>
              <p className="text-base sm:text-lg md:text-xl leading-[1.6] sm:leading-[1.8] text-[#2E3142] indent-4 sm:indent-8">
                No longer wanting to accept these behaviors as our collective reality, I searched for 
                ways to change the culture of medicine, to help heal the profession that I still love 
                and so many have dedicated their lives to. Fueled by my desire for change, I trained 
                with the Physician Coaching Institute and became a Master Certified Physician Coach. 
                Throughout this journey I have met and worked with so many fascinating, caring and 
                diverse individuals who share my passion for healing. Some chose to embark on the 
                entrepreneurial track and formed for-profit coaching businesses. Their personalized 
                coaching programs offer deep experiences tailored to the client's needs. Other 
                colleagues chose to partner with their institutions and offer coaching as part of 
                their Wellness programs.
              </p>
              <p className="text-base sm:text-lg md:text-xl leading-[1.6] sm:leading-[1.8] text-[#2E3142] indent-4 sm:indent-8">
                My journey led me to create The Provider's Coach Project, a nonprofit 501(c)3 
                organization offering no-cost coaching to healthcare professionals seeking guidance, 
                clarity and support throughout their career. I wanted to remove barriers to coaching 
                and make it accessible to everyone. You may find the answer to a question you've been 
                mulling over after just one visit. Or you may choose to dive deeper on a topic and 
                visit more often. Either way, my hope is that The Provider's Coach Project supports 
                you to feel empowered, set goals, take action, gain clarity and live with intention, 
                both personally and professionally.
              </p>
              <p className="text-base sm:text-lg md:text-xl leading-[1.6] sm:leading-[1.8] text-[#2E3142]">
                Life begins with that first breath!
              </p>
              <p className="text-base sm:text-lg md:text-xl leading-[1.6] sm:leading-[1.8] text-[#2E3142]">
                I invite you to take a deep breath and choose to begin your coaching journey today!
              </p>
              <p className={`text-2xl sm:text-3xl md:text-4xl text-[#2E3142] ${pacifico.className}`}>
                Paula
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 