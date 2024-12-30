import { Betashares } from "@/components/icon/betashares-icon";
import { ChatBaseIcon } from "@/components/icon/chatbase-icon";
import { GithubIcon } from "@/components/icon/github-icon";
import { HumataIcon } from "@/components/icon/humata-icon";
import { KreaIcon } from "@/components/icon/krea-icon";
import { LoopIcon } from "@/components/icon/loop-icon";
import { MobbinIcon } from "@/components/icon/mobbin-icon";
import { OnePassword } from "@/components/icon/onepassword-icon";
import { Pika } from "@/components/icon/pika-icon";
import { PwcIcon } from "@/components/icon/pwc-icon";
import { ResendIcon } from "@/components/icon/resend-icon";
import { UdioIcon } from "@/components/icon/udio-icon";
import { MozillaIcon } from "@/components/icon/mozilla-icon";

import { ReactIcon } from "@/components/icon/react-icon";
import { NextJsIcon } from "@/components/icon/nextjs-icon";
import { AnyFrameworkIcon } from "@/components/icon/any-framework-icon";
import { FlutterIcon } from "@/components/icon/flutter-icon";
import { KotlinIcon } from "@/components/icon/kotlin-icon";
import { SvelteIcon } from "@/components/icon/svelte-icon";
import { SolidJs } from "@/components/icon/solidjs-icon";
import { VueIcon } from "@/components/icon/vue-icons";
import { NuxtIcon } from "@/components/icon/nuxt-icon";
import { RefineIcon } from "@/components/icon/refine-icon";
import { Stripe } from "@/components/icon/stripe";
import { Triangle } from "@/components/icon/triangle";
import { ChatGpt } from "@/components/icon/chat-gpt";
import { LangChain } from "@/components/icon/langchain";
import { Expo } from "@/components/icon/expo";

export const navlinks = [
  { title: "Product" },
  { title: "Developers" },
  { title: "Enterprise" },
  { title: "Pricing" },
  { title: "Docs" },
  { title: "Blog" },
];

export const footerLinks = [
  {
    title: "Product",
    subtitles: [
      "Database",
      "Auth",
      "Functions",
      "Realtime",
      "Storage",
      "Vector",
      "Cron",
      "Pricing",
      "Launch Week",
    ],
  },
  {
    title: "Resources",
    subtitles: [
      "Support",
      "System Status",
      "Become a Partner",
      "Integrations",
      "Brand Assets / Logos",
      "Security and Compliance",
      "DPA",
      "SOC2",
      "HIPAA",
    ],
  },
  {
    title: "Developers",
    subtitles: [
      "Documentation",
      "Changelog",
      "Contributing",
      "Open Source",
      "SupaSquad",
      "DevTo",
      "RSS",
    ],
  },
  {
    title: "Company",
    subtitles: [
      "Blog",
      "Customer Stories",
      "Careers",
      "Company",
      "Events & Webinars",
      "General Availability",
      "Terms of Service",
      "Privacy Policy",
      "Privacy Settings",
      "Acceptable Use Policy",
      "Support Policy",
      "Service Level Agreement",
      "Humans.txt",
      "Lawyers.txt",
      "Security.txt",
    ],
  },
];

export const icons = [
  { component: Betashares, id: 1 },
  { component: ChatBaseIcon, id: 2 },
  { component: GithubIcon, id: 3 },
  { component: HumataIcon, id: 4 },
  { component: KreaIcon, id: 5 },
  { component: LangChain, id: 6 },
  { component: LoopIcon, id: 7 },
  { component: MobbinIcon, id: 8 },
  { component: OnePassword, id: 9 },
  { component: Pika, id: 10 },
  { component: PwcIcon, id: 11 },
  { component: ResendIcon, id: 12 },
  { component: UdioIcon, id: 13 },
  { component: MozillaIcon, id: 14 },
];

export const frameworkIcons = [
  { component: ReactIcon, id: 1, title: "React" },
  { component: NextJsIcon, id: 2, title: "Next.js" },
  { component: AnyFrameworkIcon, id: 3, title: "RedwoodJS" },
  { component: FlutterIcon, id: 4, title: "Flutter" },
  { component: KotlinIcon, id: 5, title: "Kotlin" },
  { component: SvelteIcon, id: 6, title: "Svelte" },
  { component: SolidJs, id: 7, title: "SolidJS" },
  { component: VueIcon, id: 8, title: "Vue" },
  { component: NuxtIcon, id: 9, title: "Nuxt" },
  { component: RefineIcon, id: 10, title: "Refine" },
];

export const starterKit = [
  {
    title: "Stripe Subscriptions Starter",
    description:
      "The all-in-one subscription starter kit for high-performance SaaS applications, powered by Stripe, Supabase, and Vercel.",
    image: [NextJsIcon, Stripe, Triangle],
    link: "View Template",
  },
  {
    title: "Next.js Starter",
    description:
      "A Next.js App Router template configured with cookie-based auth using Supabase, TypeScript, and Tailwind CSS.",
    image: [NextJsIcon, Triangle],
    link: "View Template",
  },
  {
    title: "AI Chatbot",
    description:
      "An open-source AI chatbot app template built with Next.js, the Vercel AI SDK, OpenAI, and Supabase.",
    image: [NextJsIcon, ChatGpt, Triangle],
    link: "View Template",
  },
  {
    title: "LangChain + Next.js Starter",
    description:
      "Starter template and example use-cases for LangChain projects in Next.js, including chat, agents, and retrieval.",
    image: [LangChain, NextJsIcon],
    link: "View Template",
  },
  {
    title: "Flutter User Management",
    description:
      "Get started with Supabase and Flutter by building a user management app with auth, file storage, and database.",
    image: [FlutterIcon],
    link: "View Template",
  },
  {
    title: "Expo React Native Starter",
    description:
      "An extended version of create-t3-turbo implementing authentication on both the web and mobile applications.",
    image: [Expo],
    link: "View Template",
  },
];
