import { Check } from "lucide-react";
import { Container } from "../container";
import { Title } from "../title";
import { Button } from "../button";

export function CTA() {
  return (
    <>
      <Container className="flex flex-col justify-between mb-5 space-y-10 py-10">
        <Title>
          <span className="text-secondary-text mr-2">Build in a weekend,</span>
          scale to millions
        </Title>

        <div className="space-x-2 mt-5 mb-18 flex justify-center">
          <Button size="medium">Start Your Project</Button>
          <Button size="medium" variant="secondary">
            Request a demo
          </Button>
        </div>
      </Container>

      <div className="bg-black w-full text-center p-5 flex items-center justify-center gap-20 py-10">
        <p className="text-sm">
          We protect your data.
          <span className="text-brand">More on Security</span>
        </p>

        <p className="flex items-center gap-x-3 text-sm">
          <Check size={16} />
          SOC2 Type 2 Certified
        </p>

        <p className="flex items-center gap-x-3 text-sm">
          <Check size={16} />
          HIPAA Compliant
        </p>
      </div>
    </>
  );
}
