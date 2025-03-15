import { SubTitle, Title } from "../title";
import { Button } from "../button";
import { Container } from "../container";
import { MessageCircle } from "lucide-react";

import { TestimonialMarquee } from "../testimonial-marquee";

export function Testimonial() {
  return (
    <>
      <Container className="py-16">
        <Title>Join the community</Title>
        <SubTitle>
          Discover what our community has to say about their Supabase
          experience.
        </SubTitle>

        <div className="space-x-2 flex justify-center mt-8">
          <Button className="flex items-center gap-x-2" variant="secondary">
            Github discussion
            <MessageCircle size={16} className="text-secondary-text" />
          </Button>
          <Button className="flex items-center gap-x-2" variant="secondary">
            Discord
            <MessageCircle size={16} className="text-secondary-text" />
          </Button>
        </div>
      </Container>

      <TestimonialMarquee />
    </>
  );
}
