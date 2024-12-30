import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { Frameworks } from "@/components/sections/frameworks";
import { HeroSection } from "@/components/sections/hero-section";
import { Showcase } from "@/components/sections/showcase";
import { StartBuilding } from "@/components/sections/start-building-section";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Frameworks />
      <StartBuilding />
      <Showcase />
      <Footer />
    </>
  );
}
