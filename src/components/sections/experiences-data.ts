import type { ImageMetadata } from "astro";
import appquantLogo from "@/assets/companies/appquant.webp";
import kynatechLogo from "@/assets/companies/kynatech.webp";
import pioneerLogo from "@/assets/companies/pioneer-dev-ai.webp";
import thorneLogo from "@/assets/companies/thorne-consulting.webp";

export interface Experience {
  title: string;
  period: string;
  company: string;
  companyLogo?: ImageMetadata;
  companyLink?: string;
  employmentType: string;
  location: string;
  workMode: string;
  descriptions: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    title: "Full-Stack Engineer",
    period: "September 2026 - Present",
    company: "Thorne Consulting",
    companyLink: "https://thorneconsultingco.com/",
    companyLogo: thorneLogo,
    employmentType: "Full-time",
    location: "Houston, Texas, United States",
    workMode: "Remote",
    descriptions: [
      "Building a modern, AI-powered Career and Education Platform that reimagines how K-12 students explore career paths, build practical skills, and prepare for the workplace through interactive experiences. Working across a cutting-edge stack of Next.js, Prisma, Mastra, Inngest, and other distributed services, while optimizing Voice AI and LLM outputs for natural, engaging interactions.",
    ],
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
  },
  {
    title: "Full-Stack Engineer",
    period: "March 2026 - Present",
    company: "Pioneer Dev AI",
    companyLink: "https://pioneerdev.ai/",
    companyLogo: pioneerLogo,
    employmentType: "Full-time",
    location: "Boulder, Colorado, United States",
    workMode: "Remote",
    descriptions: [
      "Building AI and SaaS products for startups across different industries, contributing to multiple projects spanning frontend, backend, and DevOps. Shipping with Next.js, React Router, Fastify, Astro, Prisma, PostgreSQL, Cloudflare, Fly.io, and other modern technologies and integrations.",
    ],
    technologies: [
      "Next.js",
      "Prisma",
      "Supabase",
      "tRPC",
      "Trigger.dev",
      "Cloudflare",
      "Redis",
      "Sentry",
      "Langfuse",
      "Infisical",
      "AI Generation",
    ],
  },
  {
    title: "Software Developer",
    period: "May 2025 - Feb 2026",
    company: "AppQuant Technologies Inc.",
    companyLogo: appquantLogo,
    employmentType: "Full-time",
    location: "Pasig City, Philippines",
    workMode: "Remote",
    descriptions: [
      "As one of the Founding Engineers at a startup, led the development and infrastructure of a modern AI-powered CRM, from its web platform to its backend APIs. Built on Next.js, Prisma, PostgreSQL (Supabase), and Vercel, integrating third-party services such as Stripe, Twilio, Resend, ElevenLabs, and OpenAI.",
    ],
    technologies: [
      "Next.js",
      "Supabase",
      "Prisma",
      "Vercel",
      "OpenAI",
      "Elevenlabs",
      "Stripe",
      "Resend",
      "Twilio",
      "Shadcn",
    ],
  },
  {
    title: "Software Developer Intern",
    period: "October 2024 - November 2024",
    company: "Kynatech",
    companyLogo: kynatechLogo,
    companyLink: "https://kynatech.ph/",
    employmentType: "Internship",
    location: "Taguig City, Philippines",
    workMode: "Remote",
    descriptions: [
      "Built a full-stack Timesheet Application under the mentorship of senior engineers, turning complex Figma designs into responsive, pixel-accurate interfaces. Collaborated within a multidisciplinary team of designers, developers, QA testers, DevOps engineers, and project managers delivering web and mobile products.",
    ],
    technologies: ["Next.js", "Supabase", "Prisma", "Shadcn"],
  },
];
