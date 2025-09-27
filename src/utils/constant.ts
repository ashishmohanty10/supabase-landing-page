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
import { Archive, Clock8, Database, Fingerprint, RefreshCw } from "lucide-react";

interface NavItem {
  title: string;
  href?: string;
  desc?: string;
  icon?: React.ElementType;
}

interface NavColumn {
  heading: string;
  items: NavItem[];
}

interface NavLink {
  title: string;
  href?: string;
  megaMenu?: { columns: NavColumn[] };
}

import {
  Brain,
  CalendarClock,
  SendHorizonal,
  Sparkles,
  BookOpen,
  Puzzle,
  Layout,
  History,
  LifeBuoy,
  Code2,
  Github,
  Users,
  Briefcase,
  Calendar,
  FileText,
  Bot,
  MousePointerClick,
  User,
  Laptop,
  Server,
  Trophy,
  Building2,
  Factory,
  Shuffle,
  ArrowLeftRight,
} from "lucide-react";

export const navLinks: NavLink[] = [
  {
    title: "Product",
    megaMenu: {
      columns: [
        {
          heading: "",
          items: [
            { title: "Database", desc: "Fully portable Postgres database", icon: Database },
            { title: "Authentication", desc: "User Management out of the box", icon: Fingerprint },
            { title: "Storage", desc: "Serverless storage for any media", icon: Archive },
            { title: "Edge Functions", desc: "Deploy code globally on the edge", icon: RefreshCw },
            { title: "Realtime", desc: "Synchronize and broadcast events", icon: Clock8 },
          ],
        },
        {
          heading: "Modules",
          items: [
            { title: "Vector", desc: "AI toolkit to manage embeddings", icon: Brain },
            { title: "Cron", desc: "Schedule and manage recurring Jobs", icon: CalendarClock },
            { title: "Queues", desc: "Durable Message Queues", icon: SendHorizonal },
            { title: "Features", desc: "Explore everything Supabase offers", icon: Sparkles },
          ],
        },
      ],
    },
  },
  {
    title: "Developers",
    megaMenu: {
      columns: [
        {
          heading: "",
          items: [
            { title: "Documentation", icon: BookOpen },
            { title: "Integrations", icon: Puzzle },
            { title: "Supabase UI", icon: Layout },
            { title: "Changelog", icon: History },
            { title: "Support", icon: LifeBuoy },
          ],
        },
        {
          heading: "Resources",
          items: [
            { title: "Open Source", icon: Code2 },
            { title: "GitHub Discussions", icon: Github },
            { title: "Become a Partner", icon: Users },
            { title: "Careers", icon: Briefcase },
            { title: "Events & Webinars", icon: Calendar },
          ],
        },
        {
          heading: "Blog",
          items: [
            { title: "Processing large jobs…", icon: FileText },
            { title: "Defense in Depth…", icon: FileText },
          ],
        },
      ],
    },
  },
  {
    title: "Solutions",
    megaMenu: {
      columns: [
        {
          heading: "Skill Level",
          items: [
            { title: "AI Builders", icon: Bot },
            { title: "No Code", icon: MousePointerClick },
            { title: "Beginners", icon: User },
            { title: "Developers", icon: Laptop },
            { title: "Postgres Devs", icon: Server },
          ],
        },
        {
          heading: "Who It's For",
          items: [
            { title: "Hackathon Contestants", icon: Trophy },
            { title: "Startups", icon: Building2 },
            { title: "Enterprise", icon: Factory },
            { title: "Innovation Teams", icon: Sparkles },
          ],
        },
        {
          heading: "Migration",
          items: [
            { title: "Switch from Firebase", icon: Shuffle },
            { title: "Switch from Neon", icon: ArrowLeftRight },
          ],
        },
      ],
    },
  },
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
  // { component: LangChain, id: 6 },
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

export const testimonials = [
  {
    id: "1",
    username: "john_doe",
    displayName: "John Doe",
    profileImage: "https://example.com/profiles/john_doe.jpg",
    content:
      "This product is amazing! It changed the way I work. Highly recommended! #Productivity",
    timestamp: "2025-01-01T10:00:00Z",
    likes: 120,
    retweets: 35,
  },
  {
    id: "2",
    username: "jane_smith",
    displayName: "Jane Smith",
    profileImage: "https://example.com/profiles/jane_smith.jpg",
    content:
      "Exceptional service and support! I'm very impressed with the team behind this. 👏 #CustomerLove",
    timestamp: "2025-01-01T11:00:00Z",
    likes: 85,
    retweets: 15,
  },
  {
    id: "3",
    username: "tech_guru",
    displayName: "Tech Guru",
    profileImage: "https://example.com/profiles/tech_guru.jpg",
    content:
      "Hands down the best solution in the market right now. A must-try for tech enthusiasts. 🚀 #Innovation",
    timestamp: "2025-01-01T12:00:00Z",
    likes: 200,
    retweets: 50,
  },
  {
    id: "4",
    username: "creative_mind",
    displayName: "Creative Mind",
    profileImage: "https://example.com/profiles/creative_mind.jpg",
    content:
      "Your platform makes it so easy to bring my ideas to life. Thank you for making creativity accessible! 🎨 #DesignTools",
    timestamp: "2025-01-01T12:30:00Z",
    likes: 140,
    retweets: 25,
  },
  {
    id: "5",
    username: "dev_harry",
    displayName: "Harry the Developer",
    profileImage: "https://example.com/profiles/dev_harry.jpg",
    content:
      "I've never been this productive before. Your tool is a game-changer for developers like me. #CodingLife",
    timestamp: "2025-01-01T13:00:00Z",
    likes: 300,
    retweets: 60,
  },
  {
    id: "6",
    username: "laura_travels",
    displayName: "Laura Travels",
    profileImage: "https://example.com/profiles/laura_travels.jpg",
    content:
      "A must-have for every traveler! Your app makes planning trips so much easier. 🌍✈️ #TravelTips",
    timestamp: "2025-01-01T14:00:00Z",
    likes: 250,
    retweets: 70,
  },
  {
    id: "7",
    username: "finance_wizard",
    displayName: "Finance Wizard",
    profileImage: "https://example.com/profiles/finance_wizard.jpg",
    content:
      "Managing my expenses has never been simpler. Kudos to the team for building such an intuitive app. 💸 #FinanceManagement",
    timestamp: "2025-01-01T15:00:00Z",
    likes: 180,
    retweets: 40,
  },
  {
    id: "8",
    username: "health_nut",
    displayName: "Health Nut",
    profileImage: "https://example.com/profiles/health_nut.jpg",
    content:
      "Your app is a lifesaver for tracking my fitness journey. Love the user-friendly design. 🏋️‍♀️ #HealthGoals",
    timestamp: "2025-01-01T15:30:00Z",
    likes: 220,
    retweets: 55,
  },
  {
    id: "9",
    username: "writer_ash",
    displayName: "Ash the Writer",
    profileImage: "https://example.com/profiles/writer_ash.jpg",
    content:
      "Thanks to your platform, my writing has reached a whole new audience. You're doing great work! ✍️ #WritingCommunity",
    timestamp: "2025-01-01T16:00:00Z",
    likes: 90,
    retweets: 20,
  },
  {
    id: "10",
    username: "foodie_mark",
    displayName: "Mark the Foodie",
    profileImage: "https://example.com/profiles/foodie_mark.jpg",
    content:
      "Your recommendation engine is spot-on! Found some amazing restaurants thanks to you. 🍔🍕 #FoodieLife",
    timestamp: "2025-01-01T16:30:00Z",
    likes: 150,
    retweets: 35,
  },
  {
    id: "11",
    username: "game_master",
    displayName: "Game Master",
    profileImage: "https://example.com/profiles/game_master.jpg",
    content:
      "The level of detail in your product is unreal! It's like it was built for gamers by gamers. 🎮 #Gaming",
    timestamp: "2025-01-01T17:00:00Z",
    likes: 320,
    retweets: 75,
  },
  {
    id: "12",
    username: "mom_life",
    displayName: "Busy Mom",
    profileImage: "https://example.com/profiles/mom_life.jpg",
    content:
      "Finally, a product that understands what busy moms need. You saved me so much time. 🍼 #MomLife",
    timestamp: "2025-01-01T18:00:00Z",
    likes: 100,
    retweets: 20,
  },
  {
    id: "13",
    username: "artist_emily",
    displayName: "Emily the Artist",
    profileImage: "https://example.com/profiles/artist_emily.jpg",
    content:
      "I'm obsessed with how smooth your app is. It lets me focus on creating without any distractions. 🎨 #ArtTools",
    timestamp: "2025-01-01T19:00:00Z",
    likes: 210,
    retweets: 45,
  },
  {
    id: "14",
    username: "startup_joe",
    displayName: "Joe the Entrepreneur",
    profileImage: "https://example.com/profiles/startup_joe.jpg",
    content:
      "Your software streamlined our business processes and saved us hours each week. 🚀 #StartupLife",
    timestamp: "2025-01-01T20:00:00Z",
    likes: 400,
    retweets: 100,
  },
  {
    id: "15",
    username: "sports_fan",
    displayName: "Sports Fanatic",
    profileImage: "https://example.com/profiles/sports_fan.jpg",
    content:
      "Never miss a game with your amazing sports tracking feature. Truly a fan's dream! 🏀⚽ #SportsLover",
    timestamp: "2025-01-01T21:00:00Z",
    likes: 300,
    retweets: 85,
  },
  {
    id: "16",
    username: "code_geek",
    displayName: "Code Geek",
    profileImage: "https://example.com/profiles/code_geek.jpg",
    content:
      "Your tool has been instrumental in upskilling me as a developer. Keep up the great work! 👨‍💻 #DevTools",
    timestamp: "2025-01-01T22:00:00Z",
    likes: 500,
    retweets: 120,
  },
  {
    id: "17",
    username: "book_lover",
    displayName: "Avid Reader",
    profileImage: "https://example.com/profiles/book_lover.jpg",
    content:
      "Thank you for the personalized book recommendations. My reading list is never-ending now! 📚 #Bookworm",
    timestamp: "2025-01-01T23:00:00Z",
    likes: 170,
    retweets: 35,
  },
  {
    id: "18",
    username: "nature_lover",
    displayName: "Nature Explorer",
    profileImage: "https://example.com/profiles/nature_lover.jpg",
    content:
      "I love the eco-friendly approach of your brand. We need more companies like yours. 🌿 #Sustainability",
    timestamp: "2025-01-02T00:00:00Z",
    likes: 220,
    retweets: 60,
  },
  {
    id: "19",
    username: "pet_parent",
    displayName: "Happy Pet Parent",
    profileImage: "https://example.com/profiles/pet_parent.jpg",
    content:
      "Your pet care tips have been so helpful. My furry friend and I are grateful! 🐶🐾 #PetLover",
    timestamp: "2025-01-02T01:00:00Z",
    likes: 130,
    retweets: 20,
  },
  {
    id: "20",
    username: "music_fan",
    displayName: "Music Fan",
    profileImage: "https://example.com/profiles/music_fan.jpg",
    content:
      "I discovered so many great songs thanks to your app. Can't live without it! 🎶 #MusicLovers",
    timestamp: "2025-01-02T02:00:00Z",
    likes: 280,
    retweets: 70,
  },
];

export const customerStories = [
  {
    main: {
      img: ChatBaseIcon,
      text: "Maergo's Express Delivery: How Supabase Helped Achieve Scalability, Speed, and Cost Saving",
    },

    side: {
      image1: Betashares,
      image2: LoopIcon,
    },
  },
  {
    main: {
      img: Expo,
      text: "Scaling securely: one million users in 7 months protected with Supabase Auth",
    },

    side: {
      image1: LoopIcon,
      image2: MozillaIcon,
    },
  },
  {
    main: {
      img: KreaIcon,
      text: "Bootstrapped founder builds an AI app with Supabase and scales to $1M in 5 months.",
    },

    side: {
      image1: ChatGpt,
      image2: PwcIcon,
    },
  },
];
