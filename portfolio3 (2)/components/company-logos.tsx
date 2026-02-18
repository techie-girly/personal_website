"use client"

import { useState } from "react"
import Image from "next/image"
import { getAssetPath } from "@/lib/utils-path"
import { COMPANY_LOGO_IMAGES } from "@/lib/company-images"

const PLACEHOLDER_LOGO = "/placeholder-logo.svg"

const COMPANY_ALT: Record<string, string> = {
  accenture: "Accenture",
  kahana: "Kahana",
  potoo: "Potoo",
  tsf: "The Sparks Foundation",
  uconn: "University of Connecticut",
  uop: "Savitribai Phule Pune University",
  yamaha: "Yamaha Corporation",
}

/** Order: experience first (yamaha → tsf), then education (uconn, uop) */
const LOGO_ORDER = ["yamaha", "kahana", "potoo", "accenture", "tsf", "uconn", "uop"] as const

function CompanyLogo({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false)
  const imgSrc = failed ? PLACEHOLDER_LOGO : getAssetPath(src)

  return (
    <div className="company-logo-container">
      <Image
        src={imgSrc}
        alt={alt}
        width={120}
        height={60}
        className="company-logo"
        onError={() => setFailed(true)}
      />
    </div>
  )
}

export function CompanyLogos() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {LOGO_ORDER.map((key) => {
        const src = COMPANY_LOGO_IMAGES[key]
        if (!src) return null
        return <CompanyLogo key={key} src={src} alt={COMPANY_ALT[key] || key} />
      })}
    </div>
  )
}
