import { HeroV2 } from "../components/HeroV2"
import { ProjectsSection } from "../components/ProjectsSection"
import { AboutSectionV2 } from "../components/AboutSectionV2"
import { ServicesSectionV2 } from "../components/ServicesSectionV2"
import { RecruiterContact } from "../components/RecruiterContact"
import { Metadata } from "next"
import { SITE_CONFIG, SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description:
    "Explore the full-stack developer portfolio of Yatish Chaubal, building fast, scalable, and modern web applications with React, Next.js, Node.js, and Tailwind CSS. Discover production-ready dashboards, SaaS platforms, and responsive user experiences crafted with clean code and seamless API integrations.",
  authors: [{ name: "Yatish Chaubal" }],
  creator: "Yatish Chaubal",
  alternates: {
    canonical: SITE_SLUGS.home,
  },
}

const PortfolioPage: React.FC = () => {
  return (
    <main className="overflow-hidden">
      <script
        id="id-site-schema"
        type="application/ld+json"
      />
      <HeroV2 />
      <div className="border-b border-gray-200" />
      <ProjectsSection />
      <AboutSectionV2 />
      <ServicesSectionV2 />
      <RecruiterContact />
      {/* <FAQSection /> */}
    </main>
  )
}
export default PortfolioPage
