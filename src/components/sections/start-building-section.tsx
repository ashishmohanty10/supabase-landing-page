import { starterKit } from "@/utils/constant";
import { Button } from "../button";
import { Container } from "../container";
import { Github } from "../icon/github";
import { SubTitle, Title } from "../title";
import { MoveUpRight } from "lucide-react";

export const StartBuilding = () => {
  return (
    <Container className="flex flex-col items-center py-16">
      <div className="mb-6 space-y-4">
        <Title>Start building in seconds</Title>

        <SubTitle className="text-md text-secondary-text">
          Kickstart your next project with templates built by us and our
          community.
        </SubTitle>
      </div>

      <div className="flex items-center gap-x-2 mb-10">
        <Button size="medium" variant="secondary" className="hidden md:block">
          View all examples
        </Button>
        <Button
          size="medium"
          variant="secondary"
          className="hidden md:block flex item-center gap-x-2"
        >
          <Github className="w-5 h-5" />{" "}
          <span className="ml-1 mt-1">Official GitHub Library</span>
        </Button>

        <Button size="small" variant="secondary" className="md:hidden">
          View all examples
        </Button>
        <Button size="small" variant="secondary" className="md:hidden">
          <Github className="w-5 h-5" />{" "}
          <span className="ml-1 mt-1">Official GitHub Library</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full justify-between gap-5 pt-5 max-w-[120rem] mx-auto">
        {starterKit.map((data, idx) => (
          <div
            className="border border-transparent-border rounded-2xl group flex flex-col justify-between"
            key={idx}
          >
            <div className="flex items-center justify-center gap-4 py-8 ">
              {data.image.map((Logo, idx) => (
                <Logo key={idx} className="text-secondary-text w-14 h-14" />
              ))}
            </div>

            <div className="border-t rounded-b-2xl border-transparent-border bg-tertiary-color p-5">
              <h3 className="text-md mb-2">{data.title}</h3>
              <p className="text-xs text-secondary-text">{data.description}</p>

              <button className="pt-5 text-xs flex items-center gap-2">
                <span className="text-secondary-text group-hover:text-offWhite transition-colors">
                  {data.link}
                </span>
                <MoveUpRight size={12} className="text-secondary-text" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
