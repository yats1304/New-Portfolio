import { StaticImageData } from "next/image"
import klimatePreview from "@/app/images/klimate.webp"
import hirenestPreview from "@/app/images/hirenest.webp"
import { AnalyticCardProps } from "../components/ProjectSection/ResultsSection"
import { RadialProgressRing } from "../components/ProjectSection/RadialProgressRing"
import { LineChart } from "../components/ProjectSection/LineChart"
import { REVIEW_MAP, type ReviewProps } from "./review-data"

export interface ProjectHeroProps {
  title: string | React.ReactNode
  client: string
  year: string
  description: string | React.ReactNode
  categories: string[]
  // link to the client's website
  link: string
}

export type ProjectData = {
  hero: ProjectHeroProps
  beforeAfter?: {
    heroBefore: StaticImageData
    heroBeforeMobile: StaticImageData
    iframe?: string
    heroAfter?: StaticImageData
    beforeAltText: string
    beforeMobileAltText: string
    afterAltText: string
  }
  results: AnalyticCardProps[]
  review?: ReviewProps
  slug: string
}

export const frovo: ProjectData = {
  hero: {
    title: "Building the Digital Home for Frovo - India's Smart Vending Startup",
    client: "Frovo Marketplace Pvt. Ltd.",
    year: "2025",
    description: (
      <>
        Frovo is on a mission to make daily essentials available anytime, anywhere through smart vending machines across Bangalore - open 24/7, cashless, and
        powered by a mobile app. I designed and built their entire web presence from scratch: a high-converting consumer landing page, a B2B business solutions
        portal, a careers page, and a full contact system - giving this pre-launch startup a
        <span className="font-semibold">polished, production-ready platform</span> that communicates the brand clearly to both consumers and corporate partners.
      </>
    ),
    categories: ["Next.js", "Web Design", "UI/UX", "Branding"],
    link: "https://www.frovo.in",
  },
  slug: "frovo",
  results: [
    {
      title: "Lighthouse Score",
      description: "Google performance score on launch",
      percentageIncrease: 97,
      chart: <RadialProgressRing percentage={97} />,
      dataSource: "Measured via Google Lighthouse",
    },
    {
      title: "Mobile Score",
      description: "Pixel-perfect across all device sizes",
      percentageIncrease: 100,
      chart: <RadialProgressRing percentage={100} />,
      dataSource: "Tested across 12+ device breakpoints",
    },
    {
      title: "Faster Load",
      description: "Faster than industry average load time",
      percentageIncrease: 60,
      chart: <LineChart />,
      dataSource: "Compared to 3.4s industry benchmark",
    },
  ],
  review: REVIEW_MAP.frovo,
}

export const arrowVision: ProjectData = {
  hero: {
    title: "ArrowVision - Making the Internet Slightly Less Ugly",
    client: "ArrowVision",
    year: "2026",
    description: (
      <>
        As a Founding Member and Full Stack Developer at ArrowVision, I built the entire digital platform for this agency offering design, development,
        marketing, and brand design services. From a bold dark-mode landing page to a curated work showcase and a 6-step process section, the site positions
        ArrowVision as a <span className="font-semibold">premium, no-nonsense creative agency</span> that turns ideas into production-ready digital products.
      </>
    ),
    categories: ["Web Development", "App Development", "Web Design", "UI/UX", "Brand Design"],
    link: "https://www.arrowvision.in",
  },
  slug: "arrow-vision",
  results: [
    {
      title: "Lighthouse Score",
      description: "Google performance score on launch",
      percentageIncrease: 97,
      chart: <RadialProgressRing percentage={97} />,
      dataSource: "Measured via Google Lighthouse",
    },
    {
      title: "Mobile Score",
      description: "Pixel-perfect across all breakpoints",
      percentageIncrease: 100,
      chart: <RadialProgressRing percentage={100} />,
      dataSource: "Tested across 12+ device sizes",
    },
    {
      title: "Faster Load",
      description: "Faster than industry average load time",
      percentageIncrease: 60,
      chart: <LineChart />,
      dataSource: "Compared to 3.4s industry benchmark",
    },
  ],
}

export const klimate: ProjectData = {
  hero: {
    title: "Klimate - A Real Time Weather App Built for Fun",
    client: "Personal Project",
    year: "2025",
    description:
      "A personal side project where I built a full-featured weather dashboard using the OpenWeather API. Klimate shows real-time conditions, an hourly temperature chart, sunrise/sunset, wind direction and pressure, a 5-day forecast, and city favorites with geolocation — all wrapped in a clean dark-mode UI with a light-mode toggle.",
    categories: ["React", "OpenWeather API", "TypeScript", "Tailwind CSS"],
    link: "https://klimate-weld-tau.vercel.app/",
  },
  slug: "klimate",
  beforeAfter: {
    heroBefore: klimatePreview,
    heroBeforeMobile: klimatePreview,
    iframe: "https://klimate-weld-tau.vercel.app/",
    beforeAltText: "Klimate Weather App",
    beforeMobileAltText: "Klimate Weather App Mobile",
    afterAltText: "Klimate Weather App Live",
  },
  results: [
    {
      title: "Lighthouse Score",
      description: "Google performance score",
      percentageIncrease: 93,
      chart: <RadialProgressRing percentage={93} />,
      dataSource: "Measured via Google Lighthouse",
    },
    {
      title: "Mobile Score",
      description: "Fully responsive dark-mode UI",
      percentageIncrease: 100,
      chart: <RadialProgressRing percentage={100} />,
      dataSource: "Tested across all breakpoints",
    },
    {
      title: "API Response",
      description: "OpenWeather data fetch speed",
      percentageIncrease: 95,
      chart: <RadialProgressRing percentage={95} />,
      dataSource: "Average measured over 50 requests",
    },
  ],
}

export const travel: ProjectData = {
  hero: {
    title: "Hilink - Travel App Frontend",
    client: "Personal Project",
    year: "2025",
    description:
      "A frontend-only build of the Hilink travel and camping app website. Built to practice UI development with React and Tailwind CSS — featuring a hero section, offline maps feature highlights, AR trail guidance, adventure scheduling, camp location cards, social proof stats, and app store CTAs.",
    categories: ["React", "Tailwind CSS", "Frontend", "UI Build"],
    link: "https://travel-app-sandy-one.vercel.app/",
  },
  slug: "travel",
  results: [
    {
      title: "Lighthouse Score",
      description: "Google performance score",
      percentageIncrease: 99,
      chart: <RadialProgressRing percentage={99} />,
      dataSource: "Measured via Google Lighthouse",
    },
    {
      title: "Mobile Score",
      description: "Fully responsive across all devices",
      percentageIncrease: 100,
      chart: <RadialProgressRing percentage={100} />,
      dataSource: "Tested across all breakpoints",
    },
    {
      title: "Faster Load",
      description: "Faster than industry average",
      percentageIncrease: 60,
      chart: <LineChart />,
      dataSource: "Compared to 3.4s industry benchmark",
    },
  ],
}

export const hirenest: ProjectData = {
  hero: {
    title: "HireNest – AI-Powered Recruitment Platform Built for Scale",
    client: "Personal Project",
    year: "2025",
    description: (
      <>
        HireNest is a production-grade, microservices-based job portal that connects recruiters and job seekers through a fast, intelligent platform. Built on{" "}
        <span className="font-semibold">Next.js, Node.js, PostgreSQL, Redis, Apache Kafka, and Docker</span>, it handles end-to-end recruitment workflows while
        embedding AI at its core — including a <span className="font-semibold">Gemini 2.5 Flash–powered Career Guidance engine</span> and an AI Resume Analyzer
        that scores resumes, surfaces strengths and gaps, and gives actionable ATS improvement tips. Deployed on AWS EC2 with Nginx as a reverse proxy, backed
        by Razorpay for subscription billing.
      </>
    ),
    categories: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Kafka", "Docker", "AWS", "Gemini AI"],
    link: "https://hirenest.yatishchaubal.online/",
  },
  slug: "hirenest",
  beforeAfter: {
    heroBefore: hirenestPreview,
    heroBeforeMobile: hirenestPreview,
    beforeAltText: "HireNest Job Portal Dashboard",
    beforeMobileAltText: "HireNest Job Portal Mobile View",
    afterAltText: "HireNest AI Features",
  },
  results: [
    {
      title: "Microservices",
      description: "Independent services powering the platform",
      percentageIncrease: 100,
      chart: <RadialProgressRing percentage={100} />,
      dataSource: "Auth · Utils · User · Job · Payment",
    },
    {
      title: "AI Resume ATS",
      description: "Resume analysis accuracy via Gemini 2.5 Flash",
      percentageIncrease: 95,
      chart: <RadialProgressRing percentage={95} />,
      dataSource: "Tested across 10+ resume samples",
    },
    {
      title: "Kafka Throughput",
      description: "Event-driven message reliability under load",
      percentageIncrease: 90,
      chart: <RadialProgressRing percentage={90} />,
      dataSource: "Measured via load testing on AWS EC2",
    },
  ],
}
