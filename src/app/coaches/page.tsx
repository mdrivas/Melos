import { Merriweather } from "next/font/google";
import Image from "next/image";
import { CirclePair } from "~/components/ui/circle-pair";
import { CircleTriplet } from "~/components/ui/circle-triplet";

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

// Coach data array
const coaches = [
  {
    name: "Gita Mehta",
    credentials: "MD, FACP",
    title: "ICF Professional Certified Coach",
    imagePath: "/coach_images/Gita-Mehta.jpg",
    imagePosition: "object-[0_10%]",
    bio: [
      "Gita Mehta, MD, FACP, is Emeritus Professor at University of California San Diego (UCSD) in the Department of Medicine. She served as a clinician-educator in the Division of General Internal Medicine for over 25 years. With a continued strong commitment to the profession and medical education, she sought and received a Fulbright Grant to India in 2018, where she worked with local faculty to create a professionalism program for learners in the participating medical institution.",
      "She is faculty at the Academy of Healthcare Communication (achonline.org) through which she continues to participate in mentoring and guiding trainees and delivering external-facing workshops. She is a certified Health and Well-being coach, and a physician development coach. She now provides coaching for faculty physicians at UCSD and continues to develop and present communication and wellness workshops for undergraduate students and faculty physicians."
    ]
  },
  {
    name: "Nicola Chikkalingaiah",
    credentials: "MD",
    title: "ICF Professional Certified Coach",
    imagePath: "/coach_images/Nicola-Chikkalingaiah.jpg",
    imagePosition: "object-[0_0%]",
    bio: [
      "Originally from the UK, Nicola Chikkalingaiah received her bachelor's degree in English Literature and Asian Studies from Dartmouth College, her MD from the Warren Alpert Medical School of Brown University, and her residency training in Family Medicine at Oregon Health and Sciences University. After 15 years of practice, primarily in medically under-served communities, she left clinical medicine to care for a loved one with complex medical and mental health needs. In 2020, she began a new career as a medical writer and founded Orchard Medical Writing, LLC the following year. Nicola's interest in the wellbeing of healthcare professionals led her to become a Master Certified Physician Development Coach in 2024. She has found that the coaching approach, which assumes every individual to be inherently capable, resourceful, and creative, is ideally suited to supporting high-achieving professionals navigate overwhelm to find freedom and fulfillment."
    ]
  },
  {
    name: "Robert McGregor",
    credentials: "MD",
    title: "ICF Professional Certified Coach",
    imagePath: "/coach_images/Robert-McGregor.jpeg",
    imagePosition: "object-[0_20%]",
    bio: [
      `Robert McGregor retired from a 40 + year career as a pediatrician at the end of 2024, having also served as a medical educator, a pediatric residency director, an hospital administrator, department chair and most recently as Chief Medical Officer, reporting directly to the CEO, for the Akron Children's Hospital system throughout eastern Ohio. Physician Wellness and resiliency have been a big part of my career, having co-founded a barrier free, concierge, mental health non-profit (Akron Physician Wellness Initiative). I remain active at the Northeast Ohio Medical University, as Professor of Pediatrics. I enjoy feeding forward to any medical provider or trainee exploring transition or adjusting to changing roles in medicine through my role as a coach. Medical providers, especially those in transition are susceptible to the "imposter phenomenon" and I enjoy coaching clients through those times of self-doubt.`
    ]
  }
];

// Coach card component
const CoachCard = ({ coach }: { coach: typeof coaches[0] }) => (
  <div className="flex flex-col md:flex-row items-start gap-6 sm:gap-8 md:gap-12 lg:gap-16">
    <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 relative rounded-full overflow-hidden flex-shrink-0 border-4 border-[#D4E6FF] mx-auto md:mx-0">
      <Image
        src={coach.imagePath}
        alt={`${coach.name}, ${coach.credentials}`}
        fill
        className={`object-cover ${coach.imagePosition}`}
      />
    </div>
    <div className="flex-1 min-w-0">
      <h3 className={`text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#2E3142] mb-2 text-center md:text-left ${merriweather.className}`}>
        {coach.name}, {coach.credentials}
      </h3>
      <p className="text-lg text-[#1473E6] mb-3 text-center md:text-left">
        {coach.title}
      </p>
      <div className="space-y-3">
        {coach.bio.map((paragraph, index) => (
          <p key={index} className="text-base sm:text-lg leading-[1.6] text-[#2E3142]">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  </div>
);

export default function CoachesPage() {
  return (
    <main className="min-h-screen bg-white pt-20 overflow-x-hidden">
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#D4E6FF] via-[#E8F1FF] to-white relative overflow-hidden">
        <div className="absolute top-14 right-16 hidden lg:block">
          <CircleTriplet color="bg-[#E8F1FF]" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
            {/* Header */}
            <div>
              <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#2E3142] mb-6 sm:mb-8 text-center ${merriweather.className}`}>
                Our Coaches
              </h1>
              <div className="max-w-5xl mx-auto px-4">
                <p className="text-base sm:text-lg md:text-xl leading-[1.7] sm:leading-[1.8] text-[#2E3142] indent-4 sm:indent-8">
                  Our team of certified coaches understands the unique challenges of working in healthcare. 
                  With expertise in burnout prevention, career transitions, and personal growth, they're here 
                  to provide confidential, compassionate support.
                </p>
              </div>
            </div>

            {/* Coaches Section */}
            <div className="flex flex-col gap-10 sm:gap-12 md:gap-16 max-w-7xl mx-auto">
              {coaches.map((coach, index) => (
                <CoachCard key={coach.name} coach={coach} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
