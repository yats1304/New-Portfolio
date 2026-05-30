import { AnimatedElement } from "@/app/components/ui/AnimatedElement"
import { RESUME_PDF } from "@/config/siteConfig"

export const ResumeHero = () => {
  return (
    <div className="inside-container-large">
      <div className="flex flex-col items-center gap-6 max-md:px-5.5">
        <h1 className="xs:text-5xl text-center text-4xl leading-none font-medium tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
          <AnimatedElement element="span" offsetPx={20} fadeDirection="left" className="inline-block">
            My
          </AnimatedElement>{" "}
          <AnimatedElement element="span" offsetPx={20} delay={0.2} fadeDirection="left" className="inline-block text-slate-500">
            Resume
          </AnimatedElement>
        </h1>

        <AnimatedElement
          element="p"
          delay={0.4}
          className="max-w-xs text-center text-sm leading-tight tracking-tight text-slate-700 md:max-w-sm md:text-base"
        >
          Full-stack developer specializing in React, Next.js, Node.js &amp; TypeScript.
          View the PDF below or download a copy.
        </AnimatedElement>

        <AnimatedElement element="div" delay={0.6} className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={RESUME_PDF}
            download="Resume_Yatish_Chaubal.pdf"
            className="bubble-hover inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white shadow-xl shadow-black/20 transition-all duration-300 hover:translate-y-0.5 hover:shadow-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download PDF
          </a>
          <a
            href={RESUME_PDF}
            target="_blank"
            rel="noopener"
            className="bubble-hover inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-slate-900 shadow-md transition-all duration-300 hover:translate-y-0.5 hover:shadow-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Open in New Tab
          </a>
        </AnimatedElement>
      </div>
    </div>
  )
}
