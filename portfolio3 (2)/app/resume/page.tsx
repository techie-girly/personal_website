"use client"

import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Resume() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        className="max-w-2xl w-full mx-auto relative z-10"
      >
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden p-8">
          <div className="flex justify-between items-center mb-6">
            <Link
              href="/"
              className="inline-flex items-center text-text-secondary hover:text-primary-500 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Link>

            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary-300 shadow-lg">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/shivangi-profile.jpg`}
                  alt="Shivangi Chamoli"
                  width={96}
                  height={96}
                  className="object-cover object-top"
                />
              </div>
            </div>

            <Link
              href="#"
              className="inline-flex items-center bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Download size={16} className="mr-2" />
              Download PDF
            </Link>
          </div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-heading font-semibold mb-6 text-gradient"
          >
            Resume
          </motion.h1>

          <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
            {/* Professional Summary */}
            <motion.section variants={item}>
              <h2 className="text-xl font-heading font-semibold border-b border-gray-200 pb-2 mb-4 text-gradient">
                Professional Summary
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Data & Marketing Analyst with expertise in SQL, Python, and visualization tools. Skilled in transforming
                complex data into actionable insights. Passionate about using data to drive business decisions and
                improve processes.
              </p>
            </motion.section>

            {/* Experience */}
            <motion.section variants={item}>
              <h2 className="text-xl font-heading font-semibold border-b border-gray-200 pb-2 mb-4 text-gradient">
                Experience
              </h2>

              <div className="space-y-6">
                <div className="bg-background p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex justify-between">
                    <h3 className="font-medium text-lg text-primary-600">Data Analyst</h3>
                    <span className="text-text-secondary">Jan 2023 - Present</span>
                  </div>
                  <p className="text-text-secondary italic">Tech Company, Los Angeles, CA</p>
                  <ul className="list-disc list-inside mt-2 text-text-secondary space-y-1">
                    <li>Analyze user behavior data to identify trends and opportunities for product improvement</li>
                    <li>Create and maintain dashboards using Tableau to visualize KPIs for executive team</li>
                    <li>Collaborate with cross-functional teams to define metrics and success criteria</li>
                    <li>Develop and automate reporting processes, saving 10+ hours per week</li>
                  </ul>
                </div>

                <div className="bg-background p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex justify-between">
                    <h3 className="font-medium text-lg text-primary-600">Data Analysis Intern</h3>
                    <span className="text-text-secondary">May 2022 - Dec 2022</span>
                  </div>
                  <p className="text-text-secondary italic">Marketing Agency, Los Angeles, CA</p>
                  <ul className="list-disc list-inside mt-2 text-text-secondary space-y-1">
                    <li>Assisted in analyzing campaign performance data across multiple channels</li>
                    <li>Built Excel models to forecast campaign results based on historical data</li>
                    <li>Conducted A/B testing analysis to optimize landing page conversion rates</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Education */}
            <motion.section variants={item}>
              <h2 className="text-xl font-heading font-semibold border-b border-gray-200 pb-2 mb-4 text-gradient">
                Education
              </h2>
              <div className="bg-background p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex justify-between">
                  <h3 className="font-medium text-lg text-primary-600">Bachelor of Science in Data Science</h3>
                  <span className="text-text-secondary">2018 - 2022</span>
                </div>
                <p className="text-text-secondary italic">University of California, Los Angeles (UCLA)</p>
                <p className="mt-2 text-text-secondary">GPA: 3.8/4.0</p>
              </div>
            </motion.section>

            {/* Skills */}
            <motion.section variants={item}>
              <h2 className="text-xl font-heading font-semibold border-b border-gray-200 pb-2 mb-4 text-gradient">
                Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-background p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="font-medium mb-2 text-lg text-primary-600">Technical</h3>
                  <ul className="list-disc list-inside text-text-secondary space-y-1">
                    <li>SQL (MySQL, PostgreSQL)</li>
                    <li>Python (Pandas, NumPy, Matplotlib)</li>
                    <li>Excel (Advanced)</li>
                    <li>Tableau</li>
                    <li>Google Analytics</li>
                  </ul>
                </div>
                <div className="bg-background p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="font-medium mb-2 text-lg text-primary-600">Soft Skills</h3>
                  <ul className="list-disc list-inside text-text-secondary space-y-1">
                    <li>Data Storytelling</li>
                    <li>Problem Solving</li>
                    <li>Critical Thinking</li>
                    <li>Communication</li>
                    <li>Team Collaboration</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Certifications */}
            <motion.section variants={item}>
              <h2 className="text-xl font-heading font-semibold border-b border-gray-200 pb-2 mb-4 text-gradient">
                Certifications
              </h2>
              <div className="bg-background p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>Google Data Analytics Professional Certificate</li>
                  <li>Microsoft Certified: Data Analyst Associate</li>
                  <li>Tableau Desktop Specialist</li>
                </ul>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </motion.div>
    </main>
  )
}
