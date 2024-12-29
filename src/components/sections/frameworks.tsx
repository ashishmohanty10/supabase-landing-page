"use client";

import { frameworkIcons } from "@/utils/constant";
import { Container } from "../container";
import { useState } from "react";
import { cn } from "@/utils/utils";

export const Frameworks = () => {
  const [name, setName] = useState("any framework");
  return (
    <>
      <Container className="flex items-center justify-between max-w-[120rem] mx-auto py-16">
        <div>
          <p className="text-xl leading-tight text-secondary-text">
            Use Supabase with
          </p>

          <p className={cn("text-xl leading-tight", name && "animate-fade-in [--animation-delay:40s]")}>{name}</p>
        </div>

        <div className="[&_svg]:text-secondary-text flex items-center gap-2">
          {frameworkIcons.map((icon) => (
            <div
              key={icon.id}
              className="cursor-pointer max-w-16"
              onMouseEnter={() => setName(icon.title)}
            >
              <icon.component className="hover:text-offWhite hover:border hover:border-transparent-border p-3 w-full h-full rounded-xl" />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};
