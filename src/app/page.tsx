import { Header } from "@/components/header";
import { CTA } from "@/components/sections/cta";
import { CustomerStories } from "@/components/sections/customer-stories";
import { Footer } from "@/components/sections/footer";
import { Frameworks } from "@/components/sections/frameworks";
import { HeroSection } from "@/components/sections/hero-section";
import { VideoShowcase } from "@/components/sections/video-showcase";
import { StartBuilding } from "@/components/sections/start-building-section";
import { Testimonial } from "@/components/sections/testimonial";
import { Showcase } from "@/components/sections/showcase";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Showcase />
      <Frameworks />
      <CustomerStories />
      <StartBuilding />
      <VideoShowcase />
      <Testimonial />
      <CTA />
      <Footer />
    </>
  );
}
