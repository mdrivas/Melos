import { Merriweather, Inter } from 'next/font/google';
import HeroSection from "./components/HeroSection";
import WhyWeExistSection from "./components/WhyWeExistSection";
import PainPointsSection from "./components/PainPointsSection";
import HowItWorksSection from "./components/HowItWorksSection";
import TestimonialsSection from "./components/TestimonialsSection";
import SupportMissionSection from "./components/SupportMissionSection";

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-merriweather',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function Home() {
  return (
    <main className={`min-h-screen bg-white text-gray-900 ${merriweather.variable} ${inter.variable} font-sans`}>
      <HeroSection />
      <WhyWeExistSection />
      <HowItWorksSection />
      <PainPointsSection />
      <TestimonialsSection />
      <SupportMissionSection />
    </main>
  );
}
