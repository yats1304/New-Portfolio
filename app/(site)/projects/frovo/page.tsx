import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import { frovo } from "@/app/data/project-data"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "Yatish Chaubal - Projects Frovo Smart Vending",
  description: "How I designed and built the full web presence for Frovo - India's AI-powered smart vending startup - from consumer landing page to B2B solutions portal.",
  keywords: ["Yatish Chaubal", "Frovo", "Smart Vending", "Next.js", "Web Design", "UI/UX", "Bangalore", "Startup"],
  alternates: {
    canonical: SITE_SLUGS.projectLinks.frovo,
  },
}

const FrovoPage: React.FC = () => {
  return (
    <>
      <ProjectDisplay projectData={frovo} />
    </>
  )
}

export default FrovoPage