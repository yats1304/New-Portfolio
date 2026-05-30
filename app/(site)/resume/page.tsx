import { ResumeHero } from "./ResumeHero"
import { ResumePDFViewer } from "./ResumePDFViewer"
import { RecruiterContact } from "@/app/components/RecruiterContact"
import { Metadata } from "next"
import { DOMAIN_URL, SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "Yatish Chaubal — Resume",
  description:
    "View and download the resume of Yatish Chaubal, Full-Stack Developer specializing in React, Next.js, TypeScript, and Node.js.",
  authors: [{ name: "Yatish Chaubal" }],
  alternates: {
    canonical: DOMAIN_URL + SITE_SLUGS.resume,
  },
}

const ResumePage = () => {
  return (
    <main className="relative z-1">
      <script id="id-resume-schema" type="application/ld+json" />
      <ResumeHero />
      <ResumePDFViewer />
      <RecruiterContact />
    </main>
  )
}

export default ResumePage
