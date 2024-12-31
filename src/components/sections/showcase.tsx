import { Container } from "../container";
import { Title } from "../title";

export function Showcase() {
  return (
    <>
      <Container className="py-16">
        <Title className="">
          Stay productive and manage your app <br />
          <span className="text-secondary-text">
            without leaving the dashboard
          </span>
        </Title>
      </Container>
    </>
  );
}
