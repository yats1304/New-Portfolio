import { StaticImageData } from "next/image"

export interface ReviewProps {
  quote: React.ReactNode
  name: string
  title: string
  img?: StaticImageData | string
  id?: string
}

export const REVIEWS = [
  {
    id: "frovo",
    name: "Karthickayan Manikandaraman",
    title: "Founder & CEO, Frovo",
    quote:
      "Yatish built our entire web platform from the ground up - from the consumer landing page to the B2B solutions portal and careers page. The site is fast, polished, and perfectly captures the Frovo brand. He delivered on time and was great to work with throughout.",
  },
] as const satisfies readonly ReviewProps[]

// O(1) lookup
export const REVIEW_MAP: Record<string, ReviewProps> = Object.fromEntries(REVIEWS.map((r) => [r.id, r]))

export function getReview(id: string) {
  return REVIEW_MAP[id]
}
