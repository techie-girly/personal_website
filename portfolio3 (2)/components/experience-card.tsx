"use client"

import { useState } from "react"
import Image from "next/image"
import { getImagePath } from "@/lib/utils-path"

interface ExperienceCardProps {
  logo: string
  logoAlt: string
  title: string
  company: string
  location: string
  duration: string
  responsibilities: string[]
  isLast?: boolean
  featured?: boolean
}

const PLACEHOLDER_LOGO = "/placeholder-logo.svg"

export function ExperienceCard({
  logo,
  logoAlt,
  title,
  company,
  location,
  duration,
  responsibilities,
  featured = false,
}: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [logoFailed, setLogoFailed] = useState(false)
  const logoSrc = logoFailed ? PLACEHOLDER_LOGO : getImagePath(logo) || PLACEHOLDER_LOGO

  return (
    <article
      className={`group bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
        featured
          ? "border-2 border-brown-300 shadow-xl hover:shadow-2xl"
          : "border border-brown-100 shadow-lg hover:shadow-2xl"
      }`}
      onClick={() => setIsExpanded((prev) => !prev)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          setIsExpanded((prev) => !prev)
        }
      }}
      tabIndex={0}
      role="button"
      aria-expanded={isExpanded}
    >
      <div className="p-6 md:p-7">
        <div className="flex flex-col sm:flex-row sm:items-start gap-5">
          <div
            className={`relative flex-shrink-0 rounded-xl overflow-hidden ${
              featured
                ? "w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-brown-50 to-white border-2 border-brown-400 shadow-lg ring-2 ring-brown-100"
                : "w-20 h-20 md:w-24 md:h-24 bg-white border border-brown-200 shadow-sm"
            }`}
          >
            <Image
              src={logoSrc}
              alt={logoAlt}
              fill
              className="object-contain p-0"
              onError={() => setLogoFailed(true)}
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 mb-2">
              <h3 className="text-xl font-semibold text-black">{title}</h3>
              <span className="inline-flex items-center justify-center rounded-md bg-brown-100 text-brown-700 font-semibold text-base px-3 py-1 whitespace-nowrap sm:ml-3">
                {duration}
              </span>
            </div>
            <p className="text-gray-600">
              {company}, {location}
            </p>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ease-out ${
            isExpanded
              ? "max-h-[800px] opacity-100 mt-5"
              : "max-h-0 opacity-0 mt-0 group-hover:max-h-[800px] group-hover:opacity-100 group-hover:mt-5 group-focus-visible:max-h-[800px] group-focus-visible:opacity-100 group-focus-visible:mt-5"
          }`}
        >
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            {responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

export default ExperienceCard
