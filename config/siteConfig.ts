export const DOMAIN_URL = "https://www.yatishchaubal.online"

export const SITE_CONFIG = {
  title: "Yatish Chaubal - Full Stack Developer Portfolio",
  description: "Portfolio of Yatish Chaubal, Seattle-based full-stack Developer. Specializing in Next.js, React, TypeScript, and Tailwind CSS.",
  url: DOMAIN_URL ?? "http://localhost:3000",
  siteName: "Yatish Chaubal",
  keywords: ["Yatish Chaubal","Yatish", "Next.js", "React", "TypeScript", "Full-Stack Developer", "Mumbai"],
  ogImage: "/assets/bg-home-poster-optimized.webp",
  logo: "/yatish-logo.png",
} as const

export const SITE_NAP = {
  name: "Yatish Chaubal",
  googleBusinessType: "LocalBusiness" as const,
  contact: "Yatish Chaubal",
  contactTitle: "Full Stack Developer",
  email: "chaubaly@gmail.com",
  phone: "+918551994340",
  profiles: {
    linkedIn: "https://www.linkedin.com/in/yatish-chaubal-03331b206/",
    github: "https://github.com/yats1304",
    x: "https://x.com/Yatish17948398",
  } as const,
  logo: "/yatish-logo.png",
  favicon: "/yatish-logo.png",
} as const

export const SITE_SLUGS = {
  home: "/",
  projects: "/projects",
  contact: "/#contact",
  about: "/#about-yatish-chaubal",
  resume: "/Resume%20(Yatish_Chaubal).pdf",
  projectLinks: {
    frovo: "/projects/frovo",
    arrowVision: "/projects/arrow-vision",
    klimate: "/projects/klimate",
    travel: "/projects/travel",
  },
} as const

const flattenSlugs = (obj: Record<string, string | Record<string, string>>): string[] => {
  return Object.values(obj).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))
}

export const ALL_PAGES: string[] = Object.values(SITE_SLUGS).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))
