import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import { travel } from "@/app/data/project-data"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "Yatish Chaubal - Projects Hilink Travel App",
  description: "A frontend build of the Hilink travel and camping app website — built with React and Tailwind CSS to practice UI development.",
  keywords: ["Yatish Chaubal", "Travel App", "Hilink", "React", "Tailwind CSS", "Frontend", "UI"],
  alternates: {
    canonical: SITE_SLUGS.projectLinks.travel,
  },
}

const TravelPage: React.FC = () => {
  return (
    <>
      <ProjectDisplay projectData={travel} />
    </>
  )
}

export default TravelPage