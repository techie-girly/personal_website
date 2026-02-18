import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <main className="min-h-screen bg-background py-16 px-4">
      <div className="container-custom">
        <Link
          href="/"
          className="inline-flex items-center text-text-secondary hover:text-primary-500 mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>

        <div className="flex items-center gap-6 mb-8">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary-300 shadow-lg">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/shivangi-profile.jpg`}
              alt="Shivangi Chamoli"
              width={80}
              height={80}
              className="object-cover object-top"
            />
          </div>
          <h1 className="text-4xl font-heading font-semibold text-text-primary">About Me</h1>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm">
          <p className="text-text-secondary mb-6 leading-relaxed">
            I am Shivangi Chamoli, a Data & Marketing Analyst with extensive experience in analytics, project
            management, and product ownership. With a passion for transforming data into actionable insights, I have
            helped organizations make data-driven decisions that drive business growth and operational efficiency.
          </p>

          <p className="text-text-secondary mb-6 leading-relaxed">
            My technical expertise includes SQL, Tableau, Python, Google Analytics, and Advance Excel, allowing me to
            work with diverse data sources and create compelling visualizations that tell a story. I am adept at
            analyzing marketing data and providing insights that drive business growth and campaign optimization.
          </p>

          <p className="text-text-secondary mb-6 leading-relaxed">
            As a product owner, I bridge the gap between technical teams and business users, translating requirements
            into features that deliver value. My approach combines analytical rigor with creative problem-solving to
            address challenges in today's data-driven landscape.
          </p>

          <h2 className="text-2xl font-heading font-semibold text-text-primary mt-10 mb-4">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium text-primary-600">Senior Data Analyst</h3>
              <p className="text-text-secondary">Company Name | 2020 - Present</p>
              <ul className="list-disc list-inside text-text-secondary mt-2 space-y-1">
                <li>Lead data analytics initiatives across multiple departments</li>
                <li>Develop and maintain dashboards for executive decision-making</li>
                <li>Implement data governance practices and quality control measures</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium text-primary-600">Project Manager</h3>
              <p className="text-text-secondary">Previous Company | 2017 - 2020</p>
              <ul className="list-disc list-inside text-text-secondary mt-2 space-y-1">
                <li>Managed cross-functional teams to deliver projects on time and within budget</li>
                <li>Implemented Agile methodologies to improve project delivery efficiency</li>
                <li>Facilitated communication between technical teams and business stakeholders</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-heading font-semibold text-text-primary mt-10 mb-4">Education</h2>
          <div>
            <h3 className="text-xl font-medium text-primary-600">Master's in Data Science</h3>
            <p className="text-text-secondary">University Name | 2015 - 2017</p>
          </div>
        </div>
      </div>
    </main>
  )
}
