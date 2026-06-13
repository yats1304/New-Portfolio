import clsx from "clsx"
import { Icon } from "./Icon"
import { Text } from "../ui/Elements"
import { AnimatedH2 } from "./ui/AnimatedH2"
import type { Variants } from "motion"
import { MotionUl, MotionLi } from "../utils/lazy-ui"
import type { IconType } from "react-icons"
import { FaHtml5 } from "react-icons/fa"
import { FaAws } from "react-icons/fa6"
import { DiRedis } from "react-icons/di"
import { BiLogoCss3 } from "react-icons/bi"
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiGithub,
  SiPostman,
  SiFigma,
  SiApachekafka,
  SiDocker,
  SiNginx,
  SiRazorpay,
} from "react-icons/si"

type TechItem = { name: string; icon: IconType }

const frontendTech: TechItem[] = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: BiLogoCss3 },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Redux", icon: SiRedux },
]

const backendTech: TechItem[] = [
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MySQL", icon: SiMysql },
  { name: "Redis", icon: DiRedis },
]

const devOpsTech: TechItem[] = [
  { name: "Docker", icon: SiDocker },
  { name: "AWS EC2", icon: FaAws },
  { name: "Nginx", icon: SiNginx },
  { name: "Apache Kafka", icon: SiApachekafka },
]

const toolsTech: TechItem[] = [
  { name: "Prisma", icon: SiPrisma },
  { name: "Mongoose", icon: SiMongoose },
  { name: "Razorpay", icon: SiRazorpay },
  { name: "GitHub", icon: SiGithub },
  { name: "Postman", icon: SiPostman },
  { name: "Figma", icon: SiFigma },
]

const services = [
  { name: "Full Stack Development", src: "magic-wand" },
  { name: "Frontend Development", src: "paint-bucket" },
  { name: "REST API Integration", src: "web" },
  { name: "Admin Dashboards", src: "boxes" },
  { name: "Database Design", src: "planet" },
  { name: "Responsive UI/UX", src: "world" },
]

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const container2 = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.5,
    },
  },
}

const element = {
  hidden: {
    opacity: 0,
    x: -40,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
  },
}

const element2: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
}

function TechGroup({ label, items }: { label: string; items: TechItem[] }) {
  return (
    <div className="flex flex-col gap-4">
      <Text size="sm" className="text-slate-400">
        {label}
      </Text>
      <MotionUl className="flex flex-wrap gap-3" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0 }}>
        {items.map(({ name, icon: Ic }) => (
          <MotionLi key={name} variants={element}>
            <div className="group relative">
              <input placeholder={name} type="checkbox" className="peer hidden" id={name} />
              <label
                htmlFor={name}
                className="button-shadow flex h-13 w-13 cursor-pointer items-center justify-center rounded-xl border border-gray-200 bg-white peer-checked:translate-y-0.5 peer-checked:shadow-none hover:translate-y-0.5"
              >
                <Ic size={28} />
              </label>
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 rounded-full bg-black px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition delay-100 duration-300 group-hover:opacity-100 peer-checked:opacity-100">
                {name}
              </span>
            </div>
          </MotionLi>
        ))}
      </MotionUl>
    </div>
  )
}

export const ServicesSectionV2: React.FC = ({ className = "" }: { className?: string }) => {
  return (
    <section id="technologies" className={clsx("inside-container relative z-2 items-start justify-center md:flex-row md:items-center", className)}>
      {/*  LEFT COLUMN  */}
      <div className="flex h-full flex-col gap-10 max-md:w-full md:flex-[2_0_0px]">
        <AnimatedH2>
          Engineering <br />
          <span className="text-slate-500">Toolkit</span>
        </AnimatedH2>

        <TechGroup label="Frontend" items={frontendTech} />
        <TechGroup label="Backend & Databases" items={backendTech} />
        <TechGroup label="DevOps & Cloud" items={devOpsTech} />
        <TechGroup label="Tools" items={toolsTech} />
      </div>

      {/*  RIGHT COLUMN  */}
      <MotionUl
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        variants={container2}
        className="grid flex-[1_0_0px] grid-cols-2 gap-8 md:grid-cols-1"
      >
        {services.map(({ name, src }) => (
          <MotionLi key={name} variants={element2} className="flex items-center gap-3">
            <span className="button-shadow flex aspect-square h-10 w-10 items-center justify-center rounded-full bg-black">
              <Icon name={src} width={25} height={30} className="object-contain invert" />
            </span>
            <Text as="span" size="sm">
              {name}
            </Text>
          </MotionLi>
        ))}
      </MotionUl>
    </section>
  )
}
