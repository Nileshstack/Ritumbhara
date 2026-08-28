import Destinations from "@/components/Destinations";
import EmailCapture from "@/components/EmailCapture";
import FAQ from "@/components/FAQ";
import FeaturedProperties from "@/components/FeaturedProperties";
import Hero from "@/components/Hero";
import RitumbharaStandard from "@/components/RitumbharaStandard";
import Testimonials from "@/components/Testimonials";
import TrustStrip from "@/components/TrustStrip";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
      <Destinations />    
      <TrustStrip />
      <FeaturedProperties />
      <RitumbharaStandard />
      <Testimonials />
      <EmailCapture />
      <FAQ />
    </div>
  );
}
