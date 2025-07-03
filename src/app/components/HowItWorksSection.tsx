'use client';

import Image from "next/image";
import { BsCameraVideoFill } from "react-icons/bs";
import { MdOutlineSchedule } from "react-icons/md";
import { FaUserMd, FaStethoscope, FaUserNurse, FaHospitalUser } from "react-icons/fa";
import { Merriweather } from "next/font/google";
import { CirclePair } from "~/components/ui/circle-pair";

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});


export default function HowItWorksSection() {
  const coachingFeatures = [
    {
      title: "Virtual Sessions",
      description: "45-minute confidential coaching via Zoom",
      icon: BsCameraVideoFill
    },
    {
      title: "Flexible Scheduling",
      description: "Book sessions when you need them—no long-term commitment",
      icon: MdOutlineSchedule
    },
    {
      title: "Expert Guidance",
      description: "ICF-certified physician coaches who understand healthcare",
      icon: FaUserMd
    }
  ];

  const whoWeServe = [
    {
      title: "Physicians",
      description: "seeking work-life harmony",
      icon: FaStethoscope
    },
    {
      title: "Physician Associates",
      description: "building confidence",
      icon: FaUserMd
    },
    {
      title: "Nurse Practitioners",
      description: "navigating career transitions",
      icon: FaUserNurse
    },
    {
      title: "MD and PA Students",
      description: "managing burnout",
      icon: FaHospitalUser
    }
  ];

  return (
    <>
      {/* How It Works Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#E8F1FF] to-[#C4D6ED] relative overflow-hidden text-[#010103]">
      {/* Circle Decorations - hidden on smaller screens */}
      <div className="absolute bottom-4 left-28 hidden lg:block">
        <CirclePair color="bg-[#C4D6ED]" />
      </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          {/* Mobile: Title first */}
          <div className="lg:hidden text-center mb-8">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#010103] ${merriweather.className}`}>
              How it Works
            </h2>
          </div>

          {/* Main Content with Image */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 sm:gap-10 lg:gap-20">
            {/* Left Column - Content */}
            <div className="flex-1 max-w-xl order-2 lg:order-1">
              {/* Desktop: Title here */}
              <h2 className={`hidden lg:block text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-8 sm:mb-10 md:mb-12 mt-4 sm:mt-8 md:mt-16 text-left ${merriweather.className}`}>
                How it Works
              </h2>

              <div className="mt-6 sm:mt-8 space-y-6 sm:space-y-8 font-sans">
                {coachingFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4">
                    <div className="text-3xl sm:text-4xl flex-shrink-0">
                      <feature.icon className="w-9 h-9 sm:w-10 sm:h-10" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-1">{feature.title}</h3>
                      <p className="text-lg sm:text-xl text-[#010103]/80">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative w-[280px] h-[340px] sm:w-[320px] sm:h-[390px] md:w-[380px] md:h-[460px] lg:w-[480px] lg:h-[580px]">
                <Image
                  src="/product_showcase.png"
                  alt="Healthcare Provider Coach"
                  fill
                  className="object-cover rounded-2xl shadow-lg"
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 380px, 480px"
                  style={{ objectPosition: 'center' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#C4D6ED] pt-8 sm:pt-12 md:pt-15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-[#010103]">
          <div className="max-w-xl">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-8 sm:mb-10 md:mb-12 text-center lg:text-left ${merriweather.className}`}>
              Who <span className="">We Serve</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {whoWeServe.map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center p-6 sm:p-8 rounded-xl bg-white/80 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-3 sm:mb-4">
                  <item.icon size={40} className="sm:w-12 sm:h-12" />
                </div>
                <h4 className="text-xl sm:text-2xl mb-2">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 