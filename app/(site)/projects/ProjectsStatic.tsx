import { StaticImageData } from "next/image"
import { Card } from "@/app/components/ProjectCard/Card"
import frovoPreview from "@/app/images/frovo.webp"
import arrowVisionPreview from "@/app/images/arrow-vision.webp"
import klimatePreview from "@/app/images/klimate.webp"
import travelPreview from "@/app/images/travel.webp"
import { Link } from "@/app/utils/Link"

type StaticProject = {
  id: string
  src: StaticImageData
  alt: string
  color: string
  type: string
  text: string
  href: string
  dataText: string
  ariaLabel: string
  isExternal: boolean
}

export const STATIC_PROJECTS: StaticProject[] = [
  {
    id: "frovo",
    src: frovoPreview,
    alt: "Frovo Preview",
    color: "#6C47FF",
    type: "Portfolio Website",
    text: "View Project",
    href: "#",
    dataText: "View Project",
    ariaLabel: "View Frovo Portfolio Project",
    isExternal: false,
  },
  {
    id: "arrow-vision",
    src: arrowVisionPreview,
    alt: "Arrow-Vision Preview",
    color: "#111111",
    type: "Portfolio Website",
    text: "View Project",
    href: "#",
    dataText: "View Project",
    ariaLabel: "View Arrow Vision Portfolio Project",
    isExternal: false,
  },
  {
    id: "klimate",
    src: klimatePreview,
    alt: "Klimate Preview",
    color: "#0EA5E9",
    type: "Weather Website",
    text: "View Project",
    href: "#",
    dataText: "View Project",
    ariaLabel: "View Klimate Weather Website Project",
    isExternal: false,
  },
  {
    id: "travel",
    src: travelPreview,
    alt: "Travel Preview",
    color: "#F97316",
    type: "Travel Frontend",
    text: "View Project",
    href: "#",
    dataText: "View Project",
    ariaLabel: "View Travel Frontend Project",
    isExternal: false,
  },
]

export const ProjectsStatic: React.FC = () => {
  return (
    <section className="border-t border-slate-200">
      <div className="inside-container-small">
        <div className="relative z-4 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-2">
          {STATIC_PROJECTS.map((project) => {
            const Tag = project.isExternal ? "a" : Link
            const tagProps = project.isExternal
              ? {
                  href: project.href,
                  target: "_blank",
                  rel: "nofollow noopener",
                  "data-text": project.dataText,
                  "aria-label": project.ariaLabel,
                }
              : {
                  href: project.href,
                  "data-text": project.dataText,
                  "aria-label": project.ariaLabel,
                  prefetch: true,
                }

            return (
              <Tag key={project.id} {...tagProps}>
                <Card src={project.src} alt={project.alt} color={project.color} type={project.type} reveal={false} text={project.text} />
              </Tag>
            )
          })}
        </div>
      </div>
    </section>
  )
}
