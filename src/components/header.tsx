"use client";

import Link from "next/link";
import { Button } from "./button";
import { Container } from "./container";
import { Github } from "./icon/github";
import { Logo } from "./icon/logo";
import { navlinks } from "@/utils/constant";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isNavbarOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 backdrop-blur-md z-50 w-full border-b border-transparent-border bg-background/60">
      <Container className="w-full h-navigation-height flex items-center justify-between w-full">
        <div className="flex space-x-2 items-center justify-between lg:justify-start w-full">
          <Logo />

          {/* desktop */}
          <div className="lg:flex space-x-5 pl-8 hidden lg:block">
            {navlinks.map((link, idx) => (
              <ul key={idx}>
                <li className="text-sm hover:text-green transition-colors flex items-center gap-1">
                  <p>{link.title}</p>
                  {(idx === 0 || idx === 1) && <ChevronDown size={12} />}
                </li>
              </ul>
            ))}
          </div>

          {/* mobile */}
          <div
            className="transition-transform lg:hidden"
            onClick={isNavbarOpen}
          >
            <div className="flex item-centers gap-x-2">
              <Button variant="tertiary" size="small">
                <Link
                  href="/"
                  className="flex items-center gap-x-1 text-secondary-text hover:text-offWhite"
                >
                  <Github className="w-6 h-6" />
                  75.2k
                </Link>
              </Button>
              {isOpen ? (
                <X className="absolute z-40 top-5 right-4" />
              ) : (
                <Menu />
              )}
            </div>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="fixed top-0 right-0 h-screen w-[250px] bg-background backdrop-blur-2xl z-30"
                >
                  <div className="py-16">
                    {navlinks.map((link, idx) => (
                      <ul
                        key={idx}
                        className="text-center py-3 text-lg font-medium"
                      >
                        <li className="">
                          <p>{link.title}</p>
                        </li>
                      </ul>
                    ))}

                    <div className="flex flex-col px-5 space-y-2">
                      <Button size="small" variant="secondary">
                        Sign in
                      </Button>
                      <Button size="small">Start your project</Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="lg:flex items-center gap-x-2 hidden w-full lg:justify-end">
          <Button variant="tertiary" size="small">
            <Link
              href="/"
              className="flex items-center gap-x-1 text-secondary-text hover:text-offWhite"
            >
              <Github className="w-6 h-6" />
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
