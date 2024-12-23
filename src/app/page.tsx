import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import {
  Hero,
  HerosubTitle,
  HeroTitle,
} from "@/components/sections/home-pageHero";

export default function Home() {
  return (
    <>
      <Header />

      <Container className="py-[10rem]">
        <Hero>
          <HeroTitle>
            Build in a weekend <br className="hidden md:block" />
            <span className="text-brand">Scale to millions</span>
          </HeroTitle>

          <HerosubTitle>
            Supabase is an open source Firebase alternative.
            <br className="hidden md:block" />
            Start your project with a Postgres database, Authentication, instant
            APIs, Edge <br className="hidden md:block" /> Functions, Realtime
            subscriptions, Storage, and Vector embeddings.
          </HerosubTitle>

          <div className="space-x-5">
            <Button size="large">Start Your Project</Button>
            <Button size="large" variant="secondary">
              Request a demo
            </Button>
          </div>
        </Hero>
      </Container>

      <Footer />
    </>
  );
}
