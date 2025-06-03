import { FaHandHoldingHeart, FaUserMd, FaShareAlt } from 'react-icons/fa';
import { Merriweather } from "next/font/google";
import { CirclePair } from "~/components/ui/circle-pair";
import { CircleTriplet } from "~/components/ui/circle-triplet";

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export default function SupportMissionSection() {
  const supportOptions = [
    {
      icon: FaHandHoldingHeart,
      title: "Donate",
      description: "Help us expand our reach and make coaching accessible to more healthcare providers in need."
    },
    {
      icon: FaUserMd,
      title: "Volunteer as a Coach",
      description: "Join our mission if you're a certified physician development coach passionate about supporting fellow providers."
    },
    {
      icon: FaShareAlt,
      title: "Spread the Word",
      description: "Share our mission with colleagues who might benefit from professional coaching and support."
    }
  ];

  return (
    <section className="py-20 relative bg-gradient-to-b from-[#E9F1FF] via-[#FFF8E7] to-[#F9D2BE] to-100% relative">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative">
        <div className="absolute top-6 -left-10">
          <CircleTriplet color="bg-[#C4D6ED]/60" />
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <h2 className={`text-4xl lg:text-6xl font-bold mb-6 text-[#2d3142] ${merriweather.className}`}>
          Support Our Mission
          </h2>
          <p className="text-2xl text-[#2d3142]/90 leading-relaxed max-w-4xl mx-auto mb-12">
            We're committed to making coaching available to every provider who needs it—but we need your help.
          </p>
          
          <div className="relative z-10 grid md:grid-cols-3 gap-12 mb-28">
            {supportOptions.map((item, index) => (
              <div 
                key={index} 
                className="bg-[#C4D6ED]/90 text-[#010103] backdrop-blur-sm rounded-xl px-10 py-12 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center"
              >
                <div className="mb-8">
                  <item.icon size={48} />
                </div>
                <h3 className="text-2xl font-semibold mb-6 text-center">{item.title}</h3>
              </div>
            ))}
          </div>

          {/* Setting Sun positioned to appear behind the footer */}
          <div className="absolute bottom-0 left-0 right-0 -mb-48 overflow-hidden pointer-events-none">
            <div className="relative h-[450px] w-full">
              <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] rounded-full bg-[#FFD559] opacity-90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 