import { RESUME_PDF } from "@/config/siteConfig"
import { MotionDiv } from "@/app/utils/lazy-ui"

export const ResumePDFViewer = () => {
  return (
    <section className="border-t border-gray-200">
      <div className="xxs:px-5.5 mx-auto w-full max-w-6xl px-2.5 py-10 md:px-11 md:py-14">
        <MotionDiv
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-gray-200 shadow-lg"
        >
          {/* Toolbar */}
          <div className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3 sm:px-5">
            <div className="flex items-center gap-2 text-slate-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              <span className="text-sm font-medium text-slate-700">Resume_Yatish_Chaubal.pdf</span>
            </div>

            <div className="flex items-center gap-2">
              {/* Open in new tab — primary action on iOS Safari where iframes don't render PDFs */}
              <a
                href={RESUME_PDF}
                target="_blank"
                rel="noopener"
                className="bubble-hover inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition-all duration-300 hover:translate-y-0.5 hover:shadow-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                <span className="hidden sm:inline">Open</span>
              </a>

              <a
                href={RESUME_PDF}
                download="Resume_Yatish_Chaubal.pdf"
                className="bubble-hover inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition-all duration-300 hover:translate-y-0.5 hover:shadow-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download
              </a>
            </div>
          </div>

          {/* PDF iframe — visible on all devices.
              aspect-ratio matches A4 (1 : √2 ≈ 1 : 1.4142) so the iframe
              automatically sizes to show one full resume page on any screen width. */}
          <div className="bg-slate-50">
            <iframe
              src={`${RESUME_PDF}#toolbar=0&navpanes=0&scrollbar=0`}
              className="w-full"
              style={{ aspectRatio: "1 / 1.4142", display: "block" }}
              title="Yatish Chaubal Resume"
            />
          </div>
        </MotionDiv>
      </div>
    </section>
  )
}
