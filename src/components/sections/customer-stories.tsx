import { Button } from "../button";
import { Container } from "../container";
import { SubTitle, Title } from "../title";
import { CustomerReview } from "../customer/customer-review";

export const CustomerStories = () => {
  return (
    <Container>
      <div className="flex flex-col space-y-8 lg:flex-row lg:items-end w-full lg:justify-between">
        <div className="space-y-5 text-center lg:text-left">
          <p className="text-sm font-medium text-secondary-text uppercase tracking-wider text-center lg:text-left">
            Customer Stories
          </p>

          <Title className="text-center lg:text-left">
            Infrastructure{" "}
            <span className="text-secondary-text">
              to <br /> innovate and scale with ease.
            </span>
          </Title>

          <SubTitle className="text-center lg:text-left">
            See how Supabase empowers companies of all sizes to accelerate their
            growth and <br /> streamline their work.
          </SubTitle>
        </div>

        <div className="space-x-3 mt-5 md:mt-0 flex item-center justify-center">
          <Button size="small">View all stories</Button>
          <Button size="small" variant="secondary">
            View Events
          </Button>
        </div>
      </div>
      <CustomerReview />
    </Container>
  );
};
