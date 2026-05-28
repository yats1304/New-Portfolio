"use client"
import { AnimatedCard, HeroOffset } from "./ProjectCard/AnimatedCard"
import frovoPreview from "@/app/images/frovo.webp"
import arrowVisionPreview from "@/app/images/arrow-vision.webp"
import klimatePreview from "@/app/images/klimate.webp"
import travelPreview from "@/app/images/travel.webp"
import clsx from "clsx"
import { useOffset } from "../hooks/useOffset"
import { useIsMobile } from "../hooks/useMediaQuery"
import { useRef, useEffect } from "react"
import { useScroll, useSpring } from "motion/react"
import { useUI } from "@react-zero-ui/core"

const ids = ["frovo", "arrow-vision", "klimate", "travel"]

export function ProjectsGrid({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const rawOffsets = useOffset(ids)
  const isMobile = useIsMobile()
  const isSmallScreen = useIsMobile(576)
  const responsiveScale = isMobile ? 0.34 : 0.8
  const [, setReveal] = useUI<"true" | "false">("reveal", "false")

  const { scrollYProgress } = useScroll({
    offset: isMobile ? ["start start", "10% start"] : ["start start", "15% start"],
  })
  const stiffness = isMobile ? 120 : 220
  const damping = isMobile ? 50 : 90

  const progress = useSpring(scrollYProgress, { stiffness, damping })

  const OFFSET_TUNING: Record<string, Partial<HeroOffset>> = {
    frovo: { rot: 9, s: responsiveScale, dx: isMobile ? 0 : -30, dy: isMobile ? 0 : -40 },
    "arrow-vision": { rot: -5, s: responsiveScale, dx: isMobile ? 0 : -60, dy: isMobile ? 0 : -40 },
    klimate: { rot: 5, s: responsiveScale, dx: isMobile ? 0 : -45, dy: isMobile ? 0 : -25 },
    travel: { rot: 12, s: responsiveScale, dx: isMobile ? 0 : -50, dy: isMobile ? 0 : -10 },
  }

  const offsets = Object.fromEntries(
    ids.map((id) => {
      const base = rawOffsets[id] ?? { x: 0, y: 0 }
      const t = OFFSET_TUNING[id]
      return [
        id,
        {
          x: (base.x ?? 0) + (t.dx ?? 0),
          y: (base.y ?? 0) + (t.dy ?? 0),
          rot: t.rot!,
          s: t.s ?? 1,
        },
      ]
    })
  )

  const triggerProgress = isMobile ? (isSmallScreen ? 0.15 : 0.2) : 0.5
  useEffect(() => {
    const unsubscribe = progress.on("change", (latest) => {
      if (latest >= triggerProgress) {
        setReveal("true") // Reveal ON
      } else {
        setReveal("false") // Reveal OFF
      }
    })

    return unsubscribe
  }, [progress, setReveal, triggerProgress])
  return (
    <section id="projects-grid" className={clsx("relative scroll-mt-36", className)} ref={ref}>
      <div className="relative z-4 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-2">
        <AnimatedCard
          key="frovo"
          src={frovoPreview}
          alt={"Frovo Preview"}
          offset={offsets["frovo"]}
          gridId="frovo"
          color="#6C47FF"
          type="Portfolio Website"
          progress={progress}
          dataText="View Project"
        />
        <AnimatedCard
          key="arrow-vision"
          src={arrowVisionPreview}
          alt={"Arrow-Vision Preview"}
          offset={offsets["arrow-vision"]}
          gridId="arrow-vision"
          color="#111111"
          type="Portfolio Website"
          progress={progress}
          dataText="View Project"
        />
        <AnimatedCard
          key="klimate"
          src={klimatePreview}
          alt={"Klimate Preview"}
          offset={offsets["klimate"]}
          gridId="klimate"
          color="#0EA5E9"
          type="Weather Website"
          progress={progress}
          dataText="View Project"
        />
        <AnimatedCard
          key="travel"
          src={travelPreview}
          alt={"Travel Preview"}
          offset={offsets["travel"]}
          gridId="travel"
          color="#F97316"
          type="Travel Frontend"
          progress={progress}
          dataText="View Project"
        />
      </div>
    </section>
  )
}
