import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import { arrowVision } from "@/app/data/project-data"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "Yatish Chaubal - Projects ArrowVision Digital Agency",
  description: "How I co-founded and built the full web platform for ArrowVision — a digital agency offering design, development, marketing, and brand design services.",
  keywords: ["Yatish Chaubal", "ArrowVision", "Digital Agency", "Next.js", "Web Design", "UI/UX", "Jaipur"],
  alternates: {
    canonical: SITE_SLUGS.projectLinks.arrowVision,
  },
}

const ArrowVisionPage: React.FC = () => {
  return (
    <>
      <ProjectDisplay projectData={arrowVision} />
    </>
  )
}

export default ArrowVisionPage