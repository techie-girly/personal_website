"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { getImagePath } from "@/lib/utils-path"

export default function Projects() {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({})

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4 hero-pattern bg-wave">
      <div className="absolute inset-0 bg-gradient-radial from-primary-50 to-background opacity-70 z-0 bg-grid-gradient"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full mx-auto relative z-10"
      >
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden p-8">
          <Link
            href="/"
            className="inline-flex items-center text-text-secondary hover:text-primary-500 mb-6 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>

          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary-300 shadow-lg">
              <Image
                src={getImagePath("images/shivangi-profile.jpg") || "/placeholder.svg"}
                alt="Shivangi Chamoli"
                width={96}
                height={96}
                className="object-cover object-top"
              />
            </div>
          </div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-heading font-semibold mb-8 text-gradient text-center"
          >
            Projects
          </motion.h1>

          <motion.div variants={container} initial="hidden" animate="show" className="grid gap-8">
            {/* Project 1 - RFM Analysis */}
            <motion.div
              variants={item}
              className="bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="aspect-video relative">
                <Image
                  src={failedImages["rfm-analysis"] ? "/placeholder.svg" : getImagePath("images/rfm-analysis-project.png")}
                  alt="RFM Analysis project showing customer segmentation dashboard"
                  width={800}
                  height={400}
                  className="object-cover"
                  onError={() => {
                    setFailedImages((prev) => ({ ...prev, "rfm-analysis": true }))
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-heading font-semibold text-gradient">
                    Recency, Frequency & Monetary (RFM) Analysis in Excel
                  </h2>
                  <Link
                    href="#"
                    className="text-primary-500 hover:text-primary-600 transition-colors transform hover:scale-110"
                  >
                    <ExternalLink size={18} />
                  </Link>
                </div>
                <p className="text-text-secondary mt-2 leading-relaxed">
                  RFM analysis to segment customers based on purchasing behavior, identifying top 20% high-value
                  customers who contributed to 70% of revenue and flagging at-risk customers.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-primary-50 px-3 py-1 rounded-full text-sm font-medium text-primary-600">
                    Excel
                  </span>
                  <span className="bg-primary-50 px-3 py-1 rounded-full text-sm font-medium text-primary-600">
                    Customer Segmentation
                  </span>
                  <span className="bg-primary-50 px-3 py-1 rounded-full text-sm font-medium text-primary-600">
                    Data Analysis
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Project 2 - SQL Data Warehousing */}
            <motion.div
              variants={item}
              className="bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="aspect-video relative">
                <Image
                  src={
                    failedImages["sql-datawarehousing"]
                      ? "/placeholder.svg"
                      : getImagePath("images/sql-datawarehouse-project.png")
                  }
                  alt="SQL data warehousing project showing database schema"
                  width={800}
                  height={400}
                  className="object-cover"
                  onError={() => {
                    setFailedImages((prev) => ({ ...prev, "sql-datawarehousing": true }))
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-heading font-semibold text-gradient">
                    SQL Data Warehousing for Marketing Analytics
                  </h2>
                  <Link
                    href="#"
                    className="text-primary-500 hover:text-primary-600 transition-colors transform hover:scale-110"
                  >
                    <ExternalLink size={18} />
                  </Link>
                </div>
                <p className="text-text-secondary mt-2 leading-relaxed">
                  Designed a SQL-based marketing analytics project to evaluate campaign performance, customer
                  acquisition efficiency, and lifetime value, enabling smarter marketing decisions.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-primary-50 px-3 py-1 rounded-full text-sm font-medium text-primary-600">SQL</span>
                  <span className="bg-primary-50 px-3 py-1 rounded-full text-sm font-medium text-primary-600">
                    Data Warehousing
                  </span>
                  <span className="bg-primary-50 px-3 py-1 rounded-full text-sm font-medium text-primary-600">
                    Marketing Analytics
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Project 3 - Tableau Dashboard */}
            <motion.div
              variants={item}
              className="bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="aspect-video relative">
                <Image
                  src={
                    failedImages["tableau-marketing"]
                      ? "/placeholder.svg"
                      : getImagePath("images/tableau-dashboard-project.png")
                  }
                  alt="Tableau dashboard showing marketing funnel analysis"
                  width={800}
                  height={400}
                  className="object-cover"
                  onError={() => {
                    setFailedImages((prev) => ({ ...prev, "tableau-marketing": true }))
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-heading font-semibold text-gradient">
                    Tableau Dashboard: Marketing Funnel & Retention Analysis
                  </h2>
                  <Link
                    href="#"
                    className="text-primary-500 hover:text-primary-600 transition-colors transform hover:scale-110"
                  >
                    <ExternalLink size={18} />
                  </Link>
                </div>
                <p className="text-text-secondary mt-2 leading-relaxed">
                  Built an interactive Tableau dashboard to visualize the full customer journey—from campaign clicks to
                  conversions and repeat purchases, including funnel metrics and ROAS by campaign.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-primary-50 px-3 py-1 rounded-full text-sm font-medium text-primary-600">
                    Tableau
                  </span>
                  <span className="bg-primary-50 px-3 py-1 rounded-full text-sm font-medium text-primary-600">
                    Data Visualization
                  </span>
                  <span className="bg-primary-50 px-3 py-1 rounded-full text-sm font-medium text-primary-600">
                    Customer Journey
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  )
}
