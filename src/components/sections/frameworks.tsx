"use client";

import { frameworkIcons } from "@/utils/constant";
import { Container } from "../container";
import { useState } from "react";
import { cn } from "@/utils/utils";

export const Frameworks = () => {
  const [name, setName] = useState("");
  return (
    <>
      <Container className="flex items-center justify-between max-w-[120rem] mx-auto py-16">
        <div>
          <p className="text-xl leading-tight text-seconday-text">
            Use Supabase with
          </p>

          <p className={cn("text-xl leading-tight")}>{name}</p>
        </div>

        <div className="[&_svg]:text-seconday-text flex items-center gap-2">
          {frameworkIcons.map((icon) => (
            <div
              key={icon.id}
              className="cursor-pointer"
              onMouseEnter={() => setName(icon.title)}
            >
              <icon.component className="hover:text-offWhite hover:border p-3 w-full h-full" />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};
