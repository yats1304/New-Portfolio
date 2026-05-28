import { WorkHero } from "./WorkHero"
import { ProjectsStatic } from "./ProjectsStatic"
import { RecruiterContact } from "@/app/components/RecruiterContact"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "Yatish Chaubal - Projects & Case Studies",
  description: "Featured work by Yatish Chaubal: production Next.js + TypeScript systems, React Zero-UI, and selected client builds. Outcomes, scope, and links.",
  keywords: ["Yatish Chaubal", "Projects", "Next.js", "React", "TypeScript", "Mumbai"],
  alternates: {
    canonical: SITE_SLUGS.projects,
  },
}
const page = () => {
  return (
    <main className="relative z-1">
      <script
        id="id-projects-schema"
        type="application/ld+json"
      />
      <WorkHero />
      <ProjectsStatic />
      <RecruiterContact />
    </main>
  )
}

export default page
