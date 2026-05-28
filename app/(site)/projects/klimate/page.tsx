import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import { klimate } from "@/app/data/project-data"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "Yatish Chaubal - Projects Klimate Weather App",
  description: "A real-time weather dashboard built with the OpenWeather API — featuring city search, favorites, geolocation, hourly charts, and a 5-day forecast in a clean dark-mode UI.",
  keywords: ["Yatish Chaubal", "Klimate", "Weather App", "OpenWeather API", "React", "TypeScript", "Tailwind CSS"],
  alternates: {
    canonical: SITE_SLUGS.projectLinks.klimate,
  },
}

const KlimatePage: React.FC = () => {
  return (
    <>
      <ProjectDisplay projectData={klimate} />
    </>
  )
}

export default KlimatePage