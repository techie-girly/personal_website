/**
 * Company/org logo paths. Image names follow: {prefix}-*.{ext}
 * The letters before the first '-' match the company key used in the experience/education sections.
 */
export const COMPANY_LOGO_IMAGES: Record<string, string> = {
  accenture: "images/accenture-logo.png",
  kahana: "images/kahana-logo.png",
  potoo: "images/potoo-logo.jpeg",
  tsf: "images/tsf-logo.png",
  uconn: "images/uconn-logo.jpeg",
  uop: "images/uop-logo.jpeg",
  yamaha: "images/yamaha-logo.png",
} as const

/** Company display name → image key (prefix before first '-' in filename) */
export const COMPANY_NAME_TO_KEY: Record<string, string> = {
  "Yamaha Corporation": "yamaha",
  Kahana: "kahana",
  "Potoo Solutions": "potoo",
  Accenture: "accenture",
  "The Sparks Foundation": "tsf",
  "University of Connecticut": "uconn",
  "Savitribai Phule Pune University": "uop",
}

export function getCompanyLogoPath(companyName: string): string | undefined {
  const key = COMPANY_NAME_TO_KEY[companyName]
  return key ? COMPANY_LOGO_IMAGES[key] : undefined
}
