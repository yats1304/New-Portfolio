import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import { hirenest } from "@/app/data/project-data"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "Yatish Chaubal - HireNest AI-Powered Job Portal",
  description:
    "HireNest is a full-stack microservices recruitment platform featuring AI career guidance (Gemini 2.5 Flash), AI resume analysis, Kafka-driven event architecture, Redis caching, Razorpay subscriptions, and AWS EC2 deployment.",
  keywords: [
    "Yatish Chaubal",
    "HireNest",
    "Job Portal",
    "Microservices",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Kafka",
    "Redis",
    "Docker",
    "AWS",
    "Gemini AI",
    "Full-Stack",
  ],
  alternates: {
    canonical: SITE_SLUGS.projectLinks.hirenest,
  },
}

const HirenestPage: React.FC = () => {
  return (
    <>
      <ProjectDisplay projectData={hirenest} />
    </>
  )
}

export default HirenestPage
