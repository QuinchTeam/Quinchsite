import type { ImageMetadata } from "astro";
import aniquinch from "@/assets/projects/aniquinch-1.webp";
import huefit from "@/assets/projects/huefit-1.webp";
import lemonlawmike from "@/assets/projects/lemonlawmike-1.webp";
import marrylymatch from "@/assets/projects/marrylymatch-1.webp";
import mythorneai from "@/assets/projects/mythorneai-1.webp";
import onlyfunds from "@/assets/projects/onlyfunds-1.webp";
import pasabuy from "@/assets/projects/pasabuy-1.webp";
import promptwise from "@/assets/projects/promptwise-1.webp";
import quinchool from "@/assets/projects/quinchool-1.webp";
import smilecare from "@/assets/projects/smilecare-1.webp";
import superproxy from "@/assets/projects/superproxy-1.webp";
import thryve from "@/assets/projects/thryve-1.webp";

type ProjectType = "Company" | "University" | "Personal";

interface Project {
  title: string;
  type: ProjectType;
  description: string;
  technologies: string[];
  draft?: boolean;
  images?: ImageMetadata[];
  websiteLink?: string;
  githubLink?: string;
}

const projects: Project[] = [
  {
    title: "MyThorneAI",
    type: "Company",
    description:
      "An AI-powered Career and Education Platform featuring interactive work simulations, Voice AI interview practice, an AI speech coach, and automated job discovery through web scraping.",
    technologies: [
      "Next.js",
      "Prisma",
      "Mastra",
      "Inngest",
      "OpenTelemetry",
      "BetterStack",
      "Dokploy",
      "Voice AI",
      "LLM",
    ],
    images: [mythorneai],
    websiteLink: "https://mythorneai.com/",
  },
  {
    title: "PromptWise",
    type: "Company",
    description:
      "An AI Creative Studio with guided workflows and all-in-one tools for generating images, videos, and audio that comes in classic, conversational, and node-based interfaces. It also includes specialized tools, centralized asset and prompt management.",
    technologies: [
      "Next.js",
      "Prisma",
      "PostgreSQL (Supabase)",
      "Trigger.dev",
      "Cloudflare",
      "AI Generation",
    ],
    images: [promptwise],
    websiteLink: "https://promptwise.com/",
  },
  {
    title: "Quinchool",
    type: "Personal",
    description:
      "A personal all-in-one toolkit that brings together the tools I use daily for life and work.",
    technologies: [
      "Next.js",
      "NestJS",
      "FastAPI",
      "Google Cloud Platform",
      "NeonDB",
      "OpenTelemetry",
      "Sentry",
      "Crawl4AI",
      "LLM",
      "Langfuse",
    ],
    images: [quinchool],
    websiteLink: "https://quinchool.quinchy.dev/",
    githubLink: "https://github.com/QuinchTeam/Quinchool",
  },
  {
    title: "Superproxy",
    type: "Company",
    description:
      "A modern Customer Relationship Management web application featuring a conversational AI Sales Agent that calls and engages with clients on users’ behalf, alongside quotations, invoices, call recordings, email management, currency conversion, and analytics.",
    technologies: [
      "Next.js",
      "Prisma",
      "PostgreSQL (Supabase)",
      "ElevenLabs",
      "OpenAI",
    ],
    images: [superproxy],
    websiteLink: "https://www.superproxy.ai/",
  },
  {
    title: "MarrylyMatch",
    type: "Company",
    description:
      "A matchmaking service platform that curates trusted women’s profiles from multiple partner dating sites through a dedicated ingestion pipeline.",
    technologies: [
      "React Router",
      "Fastify",
      "Astro",
      "Prisma",
      "PostgreSQL (PlanetScale)",
      "Redis",
      "Fly.io",
      "Cloudflare",
    ],
    images: [marrylymatch],
    websiteLink: "https://marrylymatch.com/",
  },
  {
    title: "Thryve",
    type: "Company",
    description:
      "A Dating site with gender-based profile discovery, profile management, liking and matching, an affiliate program, real-time messaging with voice and video calling.",
    technologies: ["Next.js", "Prisma", "PostgreSQL (Supabase)"],
    images: [thryve],
  },
  {
    title: "LemonLawMike",
    type: "Company",
    description:
      "An SEO-focused site for a California lemon law firm that helps drivers pursue buybacks, replacements, or cash settlements for defective vehicles.",
    technologies: ["Astro", "Cloudflare", "Amplitude", "Resend"],
    images: [lemonlawmike],
    websiteLink: "https://lemonlawmike.com/",
  },
  {
    title: "HueFit",
    type: "University",
    description:
      "A modern E-commerce mobile application featuring AI-powered and AR virtual fitting, skin tone-based outfit color matching, and a web-based system for inventory and order management.",
    technologies: [
      "Next.js",
      "Prisma",
      "PostgreSQL (Supabase)",
      "React Native Expo",
      "FastAPI",
    ],
    images: [huefit],
    githubLink: "https://github.com/quinchy/Hue-Fit",
  },
  {
    title: "PasaBuy",
    type: "University",
    description:
      "An Android Application with location based pasabuy request posts, community platform, and ordering.",
    technologies: ["Android Studio", "Java", "Firebase"],
    images: [pasabuy],
    githubLink: "https://github.com/quinchy/Pasabuy",
  },
  {
    title: "SmileCare",
    type: "University",
    description:
      "A Website for a local dental clinic with an appointment system dashboard.",
    technologies: ["Laravel", "MySQL", "Heroku"],
    images: [smilecare],
    githubLink:
      "https://github.com/quinchy/Donna-Mae-Jorge-Hollman-Dental-Clinic-Scheduling-System",
  },
  {
    title: "OnlyFunds",
    type: "University",
    description:
      "A Basic mock-up of a Desktop Banking Application for OOP course.",
    technologies: ["C#", "WinForms", "MySQL"],
    images: [onlyfunds],
    githubLink: "https://github.com/quinchy/BankingSystem",
  },
  {
    title: "AniQuinch",
    type: "University",
    description:
      "A Basic Website built using HTML and CSS only mimicking an e-commerce website.",
    technologies: ["HTML", "CSS"],
    images: [aniquinch],
    websiteLink: "https://quinchx.github.io/AniQuinch/",
    githubLink: "https://github.com/QuinchX/AniQuinch",
  },
];

const showDrafts = import.meta.env.DEV;
export const publishedProjects = projects.filter(
  (project) => showDrafts || !project.draft,
);
