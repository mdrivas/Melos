import { FaHandHoldingHeart, FaUserMd, FaShareAlt } from 'react-icons/fa';
import { Merriweather } from "next/font/google";
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
    <section className="py-12 sm:py-16 md:py-20 relative bg-gradient-to-b from-[#E9F1FF] via-[#FFF8E7] to-[#F9D2BE] to-100% relative">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative">
        <div className="absolute top-6 -left-10 hidden lg:block">
          <CircleTriplet color="bg-[#C4D6ED]/60" />
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-[#2d3142] px-4 ${merriweather.className}`}>
            Support Our Mission
          </h2>
          <p className="text-lg sm:text-xl text-[#2d3142]/90 leading-relaxed max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 px-4">
            We're committed to making coaching available to every provider who needs it — but we need your help.
          </p>
          
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-16 sm:mb-20 md:mb-28">
            {supportOptions.map((item, index) => (
              <div 
                key={index} 
                className="bg-[#D4E6FF]/90 text-[#010103] backdrop-blur-sm rounded-xl px-6 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center"
              >
                <div className="mb-6 sm:mb-8">
                  <item.icon className="w-10 h-10 sm:w-12 sm:h-12" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center">{item.title}</h3>
              </div>
            ))}
          </div>

          {/* Setting Sun positioned to appear behind the footer - responsive sizing */}
          <div className="absolute bottom-0 left-0 right-0 -mb-28 sm:-mb-40 md:-mb-48 overflow-hidden pointer-events-none">
            <div className="relative h-[300px] sm:h-[400px] md:h-[450px] w-full">
              <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] rounded-full bg-[#FFD559] opacity-90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 