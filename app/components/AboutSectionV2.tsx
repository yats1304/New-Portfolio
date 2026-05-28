import clsx from "clsx"
import profilePhoto from "../images/profile.webp"
import { Text, Typography } from "../ui/Elements"
import { AnimatedH2 } from "./ui/AnimatedH2"
import { ImageReveal } from "./ImageReveal"
import { MotionDiv } from "../utils/lazy-ui"

export const AboutSectionV2 = ({ className = "" }: { className?: string }) => {
  return (
    <section id="about-yatish-chaubal" className={clsx("border-y border-gray-200 bg-white", className)}>
      <div className="inside-container relative z-2">
        {/* HEADLINE */}
        <AnimatedH2>
          <span className="text-slate-500">About</span>
          <br />
          Yatish Chaubal
        </AnimatedH2>
        <div className="flex flex-col-reverse gap-12 md:flex-row md:gap-16">
          {/* ---------------- left column ---------------- */}

          <div className="flex flex-[1_0_0px] flex-col gap-6">
            {/* portrait + overlay icons */}

            <ImageReveal src={profilePhoto} alt="Yatish Chaubal" className="custom-shadow aspect-4/4.5" />

            {/* name + role */}
            <MotionDiv
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <Text as="h2" size="lg" className="font-medium">
                Yatish Chaubal
              </Text>
              <p className="text-sm text-gray-500">Full-Stack Developer</p>
            </MotionDiv>
          </div>
          {/* ---------------- right column ---------------- */}
          <Typography as="article" size="lg" className="flex-[1.5_0_0px] space-y-8 text-slate-500">
            <p>
              <strong className="font-semibold text-slate-900">
                I build end-to-end products, not just interfaces
              </strong>
              . Currently working as a Software Developer at Frovo. From database schema design and REST APIs to responsive frontends, auth flows,
              background jobs, and deployments. I enjoy owning the full lifecycle - shipping fast,
              measuring impact, and refining based on real user feedback.
            </p>

            <p>
              <strong className="font-semibold text-slate-900">
                I care about developer experience as much as user experience
              </strong>
              . I build reusable systems, typed APIs, clean abstractions, and tooling that keeps
              teams moving quickly without accumulating unnecessary complexity.
            </p>
          </Typography>
        </div>
      </div>
    </section>
  )
}
