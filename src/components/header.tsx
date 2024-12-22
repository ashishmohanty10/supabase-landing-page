import Link from "next/link";
import { Button } from "./button";
import { Container } from "./container";
import { Github } from "./icon/github";
import { Logo } from "./icon/logo";
import { navlinks } from "@/utils/constant";

export const Header = () => {
  return (
    <header className="w-full border-b border-tranparent-border ">
      <Container className="w-full h-navigation-height flex items-center justify-between">
        <div className="flex items-center">
          <Logo />

          <div className="flex space-x-4 pl-8">
            {navlinks.map((link, idx) => (
              <ul key={idx}>
                <li className="text-sm hover:text-green transition-colors">
                  {link.title}
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div className="gap-2 flex items-center">
          <Button variant="tertiary" size="small">
            <Link
              href="/"
              className="flex items-center gap-x-1 text-seconday-text hover:text-offWhite"
            >
              <Github />
              75.2k
            </Link>
          </Button>
          <Button size="small" variant="secondary">
            Sign in
          </Button>
          <Button size="small">Start your project</Button>
        </div>
      </Container>
    </header>
  );
};
