import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { Frameworks } from "@/components/sections/frameworks";
import { HeroSection } from "@/components/sections/hero-section";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Frameworks />
      <Footer />
    </>
  );
}
