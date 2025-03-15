"use client";

import { frameworkIcons } from "@/utils/constant";
import { Container } from "../container";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export const Frameworks = () => {
  const [name, setName] = useState("any framework");
  return (
    <Container className="flex items-center justify-between max-w-[120rem] mx-auto py-16">
      <div>
        <p className="text-2xl leading-tight text-secondary-text">
          Use Supabase with
        </p>

        <AnimatePresence mode="wait">
          <motion.p
            key={name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
              duration: 0.15,
            }}
            className="text-2xl leading-tight"
          >
            {name}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="[&_svg]:text-secondary-text flex items-center gap-2">
        {frameworkIcons.map((icon) => (
          <motion.div
            key={icon.id}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="cursor-pointer max-w-16"
            onMouseEnter={() => setName(icon.title)}
          >
            <icon.component className="hover:text-offWhite hover:border  p-3 w-full h-full rounded-xl transition-colors" />
          </motion.div>
        ))}
      </div>
    </Container>
  );
};
