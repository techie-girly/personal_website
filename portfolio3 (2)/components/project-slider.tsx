"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getImagePath } from "@/lib/utils-path"

interface Project {
  id: string
  title: string
  summary: string
  keyResults: string[]
  image: string
  demoLink?: string
  codeLink?: string
}

export default function ProjectSlider() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({})

  const projects: Project[] = [
    {
      id: "rfm-analysis",
      title: "Recency, Frequency & Monetary (RFM) Analysis in Excel",
      summary:
        "RFM analysis is a marketing technique used to segment customers based on their purchasing behavior: Recency (how recently they purchased), Frequency (how often they purchase), and Monetary (how much they spend).",
      keyResults: [
        "Identified top 20% high-value customers who contributed to 70% of revenue",
        "Flagged at-risk customers with high monetary value but low recency scores",
        "Visualized results using pivot tables and conditional formatting",
      ],
      image: "images/rfm-analysis-project.png",
      demoLink: "/projects/rfm-analysis",
      codeLink: "https://github.com/techie-girly/rfm-analysis",
    },
    {
      id: "sql-datawarehousing",
      title: "SQL Datawarehousing for Marketing Analytics",
      summary:
        "Designed a SQL-based marketing analytics project to evaluate campaign performance, customer acquisition efficiency, and lifetime value, enabling smarter marketing decisions.",
      keyResults: [
        "Customer Lifetime Value (LTV) by acquisition channel",
        "First-touch & last-touch marketing attribution",
        "Campaign ROI: ROAS, CPA, and conversion performance",
      ],
      image: "images/sql-datawarehouse-project.png",
      demoLink: "/projects/sql-datawarehousing",
      codeLink: "https://github.com/techie-girly/sql-datawarehousing",
    },
    {
      id: "tableau-marketing",
      title: "Tableau Dashboard: Marketing Funnel & Retention Analysis",
      summary:
        "Built an interactive Tableau dashboard to visualize the full customer journey—from campaign clicks to conversions and repeat purchases.",
      keyResults: [
        "Included funnel metrics, ROAS by campaign, customer retention cohorts",
        "Visualized LTV by acquisition channel",
        "Enabled marketing teams to identify high-performing channels",
      ],
      image: "images/tableau-dashboard-project.png",
      demoLink: "/projects/tableau-marketing",
      codeLink: "https://github.com/techie-girly/tableau-marketing",
    },
  ]

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1))
  }

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1))
  }

  const currentProject = projects[currentProjectIndex]
  const currentImageSrc = failedImages[currentProject.id] ? "/placeholder.svg" : getImagePath(currentProject.image)

  return (
    <div className="w-full">
      {/* Project Counter */}
      <div className="flex justify-center mb-6">
        <div className="bg-white px-4 py-2 rounded-full shadow-sm">
          <span className="font-medium">{currentProjectIndex + 1}</span>
          <span className="text-gray-500"> / {projects.length}</span>
        </div>
      </div>

      {/* Project Card */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-500">
        {/* Project Image */}
        <div className="aspect-video relative">
          <Image
            src={currentImageSrc}
            alt={currentProject.title}
            fill
            className="object-cover"
            onError={() => {
              setFailedImages((prev) => ({ ...prev, [currentProject.id]: true }))
            }}
          />
        </div>

        <div className="p-8">
          <h3 className="text-2xl font-heading font-semibold text-black mb-4">{currentProject.title}</h3>

          <p className="text-gray-700 mb-6">{currentProject.summary}</p>

          <div className="mb-8">
            <h4 className="font-medium text-gray-800 mb-2">Key Results:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {currentProject.keyResults.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={currentProject.demoLink || "#"} className="btn-primary flex items-center justify-center gap-2">
              <ExternalLink size={18} />
              Read More
            </Link>
            <a
              href={currentProject.codeLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center justify-center gap-2"
            >
              <Github size={18} />
              View Code
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={prevProject}
          className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition-all hover:bg-brown-50"
          aria-label="Previous project"
        >
          <ArrowLeft size={20} className="text-brown-500" />
        </button>
        <button
          onClick={nextProject}
          className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition-all hover:bg-brown-50"
          aria-label="Next project"
        >
          <ArrowRight size={20} className="text-brown-500" />
        </button>
      </div>
    </div>
  )
}
