"use client";

import Link from "next/link";
import { Button } from "./button";
import { Container } from "./container";
import { Github } from "./icon/github";
import { Logo } from "./icon/logo";
import { navLinks } from "@/utils/constant";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const isNavbarOpen = () => {
    setIsOpen(!isOpen);
  };

  const parentVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  const dropdownVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
  };

  return (
    <header className="fixed top-0 backdrop-blur-md z-50 w-full border-b border-transparent-border bg-background/60">
      <Container className="h-navigation-height flex items-center justify-between w-full">
        <div className="flex space-x-2 items-center justify-between lg:justify-start w-full">
          <Logo />

          {/* desktop */}
          <div className="lg:flex space-x-5 pl-8 hidden relative">
            {navLinks.map((link, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveIdx(activeIdx === idx ? null : idx)}
                onMouseLeave={() => setActiveIdx(null)}
              >
                <ul className="group">
                  <li className="text-sm hover:text-green transition-colors flex items-center gap-1">
                    <p>{link.title}</p>
                    {link.megaMenu && (
                      <ChevronDown
                        size={12}
                        className="group-hover:rotate-180 transition-transform"
                      />
                    )}
                  </li>
                </ul>
                <AnimatePresence mode="wait">
                  {activeIdx != null && activeIdx === idx && link.megaMenu && (
                    <motion.div
                      key={link.title}
                      variants={dropdownVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.3 }}
                      className="absolute w-[450px] h-fit bg-black z-50 top-6 p-4 rounded-md border border-transparent-border grid grid-cols-2 text-md font-medium"
                    >
                      {link.megaMenu?.columns.map((item, idx) => (
                        <motion.div key={idx}>
                          {item?.heading && (
                            <div className="mt-3 mb-1 text-secondary-text">{item.heading}</div>
                          )}
                          <div>
                            {item.items.map((text, idx) => (
                              <motion.div
                                key={idx}
                                variants={childVariants}
                                className="flex items-center justify-start gap-x-3 mb-4 hover:text-green hover:transition-colors cursor-pointer"
                              >
                                <div>
                                  {text.icon ? (
                                    <text.icon className="size-4 text-green-500" />
                                  ) : null}
                                </div>

                                <div>{text.title}</div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* mobile */}
          <div className="transition-transform lg:hidden">
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
                <X className="absolute z-40 top-5 right-4" onClick={isNavbarOpen} />
              ) : (
                <Menu onClick={isNavbarOpen} />
              )}
            </div>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="fixed top-0 right-0 h-screen w-full bg-background/95 backdrop-blur-2xl z-30 overflow-y-auto no-scrollbar"
                >
                  <motion.div
                    className="py-16"
                    variants={parentVariants}
                    initial="hidden"
                    animate="show"
                  >
                    {navLinks.map((link, idx) => (
                      <motion.div variants={childVariants} className="text-left px-5" key={idx}>
                        <ul
                          className={`text-left py-3 text-lg font-medium hover:text-green transition-colors cursor-pointer ${
                            activeIdx === idx ? "text-green transition-colors" : ""
                          }`}
                          onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
                        >
                          <li className="flex items-center justify-between hover:transparent-border">
                            <p>{link.title}</p>
                            {link.megaMenu && (
                              <ChevronDown
                                size={12}
                                className={`${
                                  activeIdx === idx
                                    ? "rotate-180 transition-transform text-green"
                                    : ""
                                }`}
                              />
                            )}
                          </li>
                        </ul>

                        {activeIdx !== null && activeIdx === idx && (
                          <motion.div
                            variants={parentVariants}
                            initial="hidden"
                            animate="show"
                            className="text-left text-md transition-transform"
                          >
                            {link.megaMenu?.columns.map((item, idx) => (
                              <div key={idx} className="text-offWhite/80 text-sm">
                                {item?.heading && (
                                  <div className="mt-3 mb-1 text-secondary-text">
                                    {item.heading}
                                  </div>
                                )}
                                {item.items.map((text, idx) => (
                                  <motion.div
                                    key={idx}
                                    variants={childVariants}
                                    className="flex items-center justify-start gap-x-3 mb-2 hover:text-green hover:transition-colors cursor-pointer"
                                  >
                                    <div>
                                      {text.icon ? (
                                        <text.icon className="size-4 text-green-500" />
                                      ) : null}
                                    </div>

                                    <div>{text.title}</div>
                                  </motion.div>
                                ))}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </motion.div>
                    ))}

                    <div className="flex flex-col px-5 space-y-2">
                      <Button size="small" variant="secondary">
                        Sign in
                      </Button>
                      <Button size="small">Start your project</Button>
                    </div>
                  </motion.div>
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
