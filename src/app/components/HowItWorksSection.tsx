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
      title: "Healthcare Leaders",
      description: "managing burnout",
      icon: FaHospitalUser
    }
  ];

  return (
    <>
      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-[#E8F1FF] to-[#C4D6ED] relative overflow-hidden text-[#010103]">
      {/* Circle Decorations */}
      <div className="absolute bottom-4 left-28">
        <CirclePair color="bg-[#C4D6ED]" />
      </div>


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          {/* Main Content with Image */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">
            {/* Left Column - Content */}
            <div className="flex-1 max-w-xl">
              <h2 className={`text-4xl lg:text-6xl tracking-tight mb-12 mt-16 ${merriweather.className}`}>
                How it Works
              </h2>

              <div className="mt-8 space-y-8 font-sans">
                {coachingFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-4xl ">
                      <feature.icon size={42} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-1">{feature.title}</h3>
                      <p className="text-2xl text-[#010103]/80">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative w-[380px] h-[460px] lg:w-[480px] lg:h-[580px]">
                <Image
                  src="/product_showcase.png"
                  alt="Healthcare Provider Coach"
                  fill
                  className="object-cover rounded-2xl shadow-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  style={{ objectPosition: 'center' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20 bg-[#C4D6ED] pt-15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-[#010103]">
          <div className="max-w-xl">
            <h2 className={`text-4xl lg:text-6xl tracking-tight mb-12 ${merriweather.className}`}>
              Who <span className="">We Serve</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoWeServe.map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center p-8 rounded-xl bg-white/80 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="smb-4">
                  <item.icon size={48} />
                </div>
                <h4 className="text-2xl mb-2">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 