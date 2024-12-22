import { Container } from "@/components/container";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />

      <Container>
        <div>hero content</div>
      </Container>
      <Container>
        <footer>footer</footer>
      </Container>
    </>
  );
}
