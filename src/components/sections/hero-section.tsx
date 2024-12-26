import { Button, Highlight } from "../button";
import { Container } from "../container";
import { Hero, HerosubTitle, HeroTitle } from "../home-pageHero";
import { ArrowRight } from "../icon/arrow-right";
import { Marquee } from "../marquee";
import { icons } from "@/utils/constant";

export const HeroSection = () => {
  return (
    <div>
      <Container className="py-[12rem]">
        <Hero className="pt-[2rem]">
          <Button
            variant="quaternary"
            size="cta"
            className="space-x-2 group mb-8"
          >
            <Highlight>Launch Week 13</Highlight>
            <p className="pr-3 flex items-center gap-3">
              Learn more
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 tranisiton-[translate] duration-200" />
            </p>
          </Button>

          <HeroTitle className=" tracking-normal">
            Build in a weekend <br className="hidden md:block" />
            <span className="text-brand">Scale to millions</span>
          </HeroTitle>

          <HerosubTitle className="my-3 lg:mb-0">
            Supabase is an open source Firebase alternative.
            <br className="hidden md:block" />
            Start your project with a Postgres database, Authentication, instant
            APIs, Edge <br className="hidden md:block" /> Functions, Realtime
            subscriptions, Storage, and Vector embeddings.
          </HerosubTitle>

          <div className="space-x-2 mt-5 mb-18">
            <Button size="medium">Start Your Project</Button>
            <Button size="medium" variant="secondary">
              Request a demo
            </Button>
          </div>

          <Marquee className="flex items-center max-w-[70rem] mx-auto my-5 overflow-hidden  [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <div className="flex animate-infinite-scroll [--animation-delay:50s]">
              {icons.map((icon) => (
                <div
                  key={icon.id}
                  className=" flex items-center mx-8 max-w-none"
                >
                  <icon.component className="w-auto h-auto" />
                </div>
              ))}
              {icons.map((icon) => (
                <div
                  key={icon.id}
                  className=" flex items-center mx-8 max-w-none"
                >
                  <icon.component className="w-auto h-auto" />
                </div>
              ))}
            </div>
          </Marquee>

          <p className="text-sm text-seconday-text">
            Trusted by fast-growing companies worldwide
          </p>
        </Hero>
      </Container>
    </div>
  );
};
