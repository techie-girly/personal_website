"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Download, Mail, Linkedin, Github, MapPin, Calendar, Award, TrendingUp } from "lucide-react"
import { ExperienceCard } from "@/components/experience-card"
import ProjectSlider from "@/components/project-slider"
import { getImagePath } from "@/lib/utils-path"
import { getCompanyLogoPath } from "@/lib/company-images"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")
  const [isScrolling, setIsScrolling] = useState(false)

  const aboutRef = useRef<HTMLElement>(null)
  const educationRef = useRef<HTMLElement>(null)
  const experienceRef = useRef<HTMLElement>(null)
  const achievementsRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        document.getElementById("navbar")?.classList.add("bg-white/95", "shadow-lg", "backdrop-blur-md")
      } else {
        document.getElementById("navbar")?.classList.remove("bg-white/95", "shadow-lg", "backdrop-blur-md")
      }

      if (!isScrolling) {
        const scrollPosition = window.scrollY + 100

        if (
          aboutRef.current &&
          scrollPosition >= aboutRef.current.offsetTop &&
          scrollPosition < (experienceRef.current?.offsetTop || Number.POSITIVE_INFINITY)
        ) {
          setActiveSection("about")
        } else if (
          experienceRef.current &&
          scrollPosition >= experienceRef.current.offsetTop &&
          scrollPosition < (educationRef.current?.offsetTop || Number.POSITIVE_INFINITY)
        ) {
          setActiveSection("experience")
        } else if (
          educationRef.current &&
          scrollPosition >= educationRef.current.offsetTop &&
          scrollPosition < (projectsRef.current?.offsetTop || Number.POSITIVE_INFINITY)
        ) {
          setActiveSection("education")
        } else if (
          projectsRef.current &&
          scrollPosition >= projectsRef.current.offsetTop &&
          scrollPosition < (achievementsRef.current?.offsetTop || Number.POSITIVE_INFINITY)
        ) {
          setActiveSection("projects")
        } else if (
          achievementsRef.current &&
          scrollPosition >= achievementsRef.current.offsetTop &&
          scrollPosition < (contactRef.current?.offsetTop || Number.POSITIVE_INFINITY)
        ) {
          setActiveSection("achievements")
        } else if (contactRef.current && scrollPosition >= contactRef.current.offsetTop) {
          setActiveSection("contact")
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isScrolling])

  const scrollToSection = (sectionId: string) => {
    setIsScrolling(true)
    setActiveSection(sectionId)

    let ref
    switch (sectionId) {
      case "about":
        ref = aboutRef
        break
      case "projects":
        ref = projectsRef
        break
      case "experience":
        ref = experienceRef
        break
      case "education":
        ref = educationRef
        break
      case "achievements":
        ref = achievementsRef
        break
      case "contact":
        ref = contactRef
        break
      default:
        ref = null
    }

    if (ref?.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80,
        behavior: "smooth",
      })
    }

    setTimeout(() => {
      setIsScrolling(false)
    }, 1000)
  }

  return (
    <main className="min-h-screen bg-white text-black bg-pattern flex flex-col">
      {/* Navigation */}
      <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <div className="flex bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg">
            <button
              onClick={() => scrollToSection("about")}
              className={`nav-link ${activeSection === "about" ? "active text-brown-700" : "text-black"}`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className={`nav-link ${activeSection === "experience" ? "active text-brown-700" : "text-black"}`}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className={`nav-link ${activeSection === "education" ? "active text-brown-700" : "text-black"}`}
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`nav-link ${activeSection === "projects" ? "active text-brown-700" : "text-black"}`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("achievements")}
              className={`nav-link ${activeSection === "achievements" ? "active text-brown-700" : "text-black"}`}
            >
              Achievements
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`nav-link ${activeSection === "contact" ? "active text-brown-700" : "text-black"}`}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        style={{ y: heroY, opacity: heroOpacity }}
        className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative pt-20 overflow-hidden order-1"
      >
        {/* Clean background without blobs */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-brown-50 to-brown-100"></div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center mb-6 mt-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="w-44 h-44 rounded-full overflow-hidden border-4 border-brown-200 shadow-2xl mb-8 mt-3 relative"
            >
              <Image
                src={getImagePath("images/shivangi-profile.jpg") || "/placeholder.svg"}
                alt="Shivangi Chamoli"
                fill
                className="object-cover object-top"
                priority
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="font-heading text-5xl md:text-6xl font-bold leading-[1.2] pb-1 text-black mb-4 bg-gradient-to-r from-brown-600 to-brown-800 bg-clip-text text-transparent"
            >
              Shivangi Chamoli
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-2 text-xl text-gray-700 font-bold mb-6"
            >
              <TrendingUp size={20} className="text-brown-500" />
              Data & Marketing Analytics Professional
            </motion.div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="h-0.5 bg-gradient-to-r from-brown-300 to-brown-500 rounded-full mb-8"
            ></motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed text-lg"
            >
              I turn experimentation and performance data into decision-ready insights that drive measurable
              impact across digital and customer initiatives.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="flex flex-col sm:flex-row gap-8 mb-8"
            >
              <a
                href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary font-bold min-w-[220px] flex items-center justify-center gap-2 group"
              >
                <Download size={18} className="group-hover:animate-bounce" />
                Download Resume
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="btn-outline font-bold min-w-[220px] flex items-center justify-center gap-2 group"
              >
                <Mail size={18} className="group-hover:animate-pulse" />
                Contact Me
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="flex flex-nowrap items-center justify-center gap-8 mt-4 mb-4"
            >
              <a
                href="https://linkedin.com/in/shivangichamoli"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brown-500 p-3 rounded-full shadow-lg transition-all hover:scale-110 hover:bg-brown-600"
                aria-label="LinkedIn"
              >
                <Linkedin className="text-white" size={32} />
              </a>
              <a
                href="https://github.com/techie-girly"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brown-500 p-3 rounded-full shadow-lg transition-all hover:scale-110 hover:bg-brown-600"
                aria-label="GitHub"
              >
                <Github className="text-white" size={32} />
              </a>
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="bg-brown-500 p-3 rounded-full shadow-lg transition-all hover:scale-110 hover:bg-brown-600"
                aria-label="Email"
              >
                <Mail className="text-white" size={32} />
              </button>
            </motion.div>

          </motion.div>
        </div>

      </motion.section>

      {/* Education Section */}
      <section ref={educationRef} id="education" className="py-20 px-4 bg-white order-4">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-heading font-semibold mb-12 text-center text-black"
          >
            Education
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-brown-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="p-8 flex flex-col items-center text-center">
                <div className="w-32 h-32 mb-6 flex items-center justify-center mx-auto transform group-hover:scale-110 transition-transform duration-300 bg-white rounded-lg shadow-sm overflow-hidden">
                  <Image
                    src={getImagePath(getCompanyLogoPath("University of Connecticut") || "images/uconn-logo.jpeg") || "/placeholder.svg"}
                    alt="University of Connecticut Logo"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <p className="text-xl font-bold text-black mb-2">University of Connecticut</p>
                <h3 className="text-brown-700 font-semibold mb-1">
                  M.S. in Business Analytics & Project Management
                </h3>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <Calendar size={16} />
                  <span>Aug 2023 - Dec 2024</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={16} />
                  <span>Hartford, CT, USA</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-brown-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="p-8 flex flex-col items-center text-center">
                <div className="w-32 h-32 mb-6 flex items-center justify-center mx-auto transform group-hover:scale-110 transition-transform duration-300 bg-white rounded-lg shadow-sm overflow-hidden">
                  <Image
                    src={getImagePath(getCompanyLogoPath("Savitribai Phule Pune University") || "images/uop-logo.jpeg") || "/placeholder.svg"}
                    alt="Savitribai Phule Pune University Logo"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <p className="text-xl font-bold text-black mb-2">Savitribai Phule Pune University</p>
                <h3 className="text-brown-700 font-semibold mb-1">
                  B.E. in Information Technology
                </h3>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <Calendar size={16} />
                  <span>Aug 2017 - Jul 2021</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={16} />
                  <span>Pune, MH, India</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section - Timeline */}
      <section ref={experienceRef} id="experience" className="py-20 px-4 bg-brown-50 order-3">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-heading font-semibold mb-12 text-center text-black"
          >
            Experience
          </motion.h2>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ExperienceCard
                logo={getCompanyLogoPath("Yamaha Corporation") || "images/yamaha-logo.png"}
                logoAlt="Yamaha Corporation Logo"
                title="Marketing Data Analyst"
                company="Yamaha Corporation"
                location="Jersey City, NJ, USA"
                duration="Jul 2025 – Present"
                featured={true}
                responsibilities={[
                  "Deliver campaign performance dashboards in Looker to track KPIs such as conversion rate, CAC and LTV, enabling senior executives to make faster, data-driven investment decisions.",
                  "Conduct A/B testing and digital performance analysis, using Google Analytics 4 and GTM tracking, UTM tagging, driving a 15% lift in lead-to-conversion rates for high-priority campaigns.",
                  "Collaborate with CRM, paid media, and creative teams to streamline reporting workflows, reducing manual effort and accelerating delivery of insights by 19%.",
                  "Build ETL pipelines with Impravado to ingest data from sources like CRM, web analytics, and paid media platforms into Snowflake, enabling accurate and centralized campaign performance reporting.",
                  "Execute advanced SQL queries in Google BigQuery to process 1M+ rows of cross-channel ad and eCommerce data, cut reporting time by 13%.",
                ]}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <ExperienceCard
                logo={getCompanyLogoPath("Kahana") || "images/kahana-logo.png"}
                logoAlt="Kahana Logo"
                title="Data Analyst"
                company="Kahana"
                location="New York, NY, USA"
                duration="Jan 2025 – Jun 2025"
                responsibilities={[
                  "Developing full-funnel campaign dashboards in Looker using GA4 and GTM to track traffic, engagement, and conversion performance.",
                  "Implemented UTM tagging and GTM tracking to evaluate campaign ROI across Google and social ads, resulting in a 20% increase in conversion rates.",
                  "Collaborate with marketing and product teams to identify growth opportunities through data-driven insights.",
                  "Create and maintain automated reporting systems to track key marketing metrics and KPIs.",
                ]}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ExperienceCard
                logo={getCompanyLogoPath("Potoo Solutions") || "images/potoo-logo.jpeg"}
                logoAlt="Potoo Solutions Logo"
                title="Marketing Analytics Intern"
                company="Potoo Solutions"
                location="Norwalk, CT, USA"
                duration="May 2024 – Nov 2024"
                responsibilities={[
                  "Analyzed sales and digital campaign performance data from ERP systems and SQL databases to uncover consumer behavior patterns, enabling marketing teams to respond 8% faster to emerging product and market trends.",
                  "Developed real-time dashboards to monitor digital promotion effectiveness on Amazon, providing actionable insights that reduced customer acquisition costs by 12% and improved campaign targeting.",
                  "Investigated and resolved platform violations on Amazon and Walmart, enhancing brand protection, ensuring pricing accuracy, and driving a consistent shopper experience across eCommerce channels.",
                  "Conducted competitive analysis to identify market opportunities and threats, informing strategic decision-making.",
                ]}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <ExperienceCard
                logo={getCompanyLogoPath("Accenture") || "images/accenture-logo.png"}
                logoAlt="Accenture Logo"
                title="Business Intelligence Analyst"
                company="Accenture"
                location="Pune, MH, India"
                duration="Aug 2021 – Jul 2023"
                responsibilities={[
                  "Created and optimized SQL queries to analyze large-scale consumer and sales data, enabling real-time insights into retail performance, inventory health, and customer purchasing behavior.",
                  "Led end-to-end execution of multi-channel marketing campaigns, including audience segmentation, email copywriting, and A/B testing, increasing conversion rates by 15%.",
                  "Designed automated reporting pipelines in Salesforce Marketing Cloud to track campaign performance, increasing efficiency by 13% and accelerating time-to-insight.",
                  "Developed and maintained Tableau dashboards to visualize regional product sales, category performance, and retail KPIs, reducing reporting effort by 40%.",
                ]}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ExperienceCard
                logo={getCompanyLogoPath("The Sparks Foundation") || "images/tsf-logo.png"}
                logoAlt="The Sparks Foundation Logo"
                title="Data Analyst"
                company="The Sparks Foundation"
                location="Pune, India"
                duration="Jan 2021 – Jun 2021"
                isLast={true}
                responsibilities={[
                  "Devised Excel reports for resource planning using functions (VLOOKUP, XLOOKUP, INDEX-MATCH, PivotTables, Conditional Formatting), accelerating team response time by 30%.",
                  "Performed exploratory data analysis, leveraging Python in Jupyter Notebooks to enhance data workflows, improve decision-making, and increase data processing efficiency by 20%.",
                  "Collaborated with cross-functional teams to implement data-driven solutions for nonprofit initiatives.",
                  "Created visualization reports to communicate complex data findings to non-technical stakeholders.",
                ]}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-20 px-4 bg-white order-2">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-heading font-semibold mb-12 text-center text-black"
          >
            About Me
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-brown-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src={getImagePath("images/shivangi-profile.jpg") || "/placeholder.svg"}
                    alt="Profile"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>

                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-brown-500 to-brown-600 text-white p-6 rounded-xl shadow-xl">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold">4+</div>
                      <div className="text-sm opacity-90">Years</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">MS</div>
                      <div className="text-sm opacity-90">Analytics</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-3xl font-heading font-semibold text-black">Data & Marketing Analyst</h3>

                <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
                  <p>
                    Hello, I'm Shivangi Chamoli - a Data & Marketing Analyst with a Master's in Business Analytics and
                    Project Management from the University of Connecticut. With 4+ years of experience across
                    E-Commerce, Retail, CPG, and SaaS, I bring a cross-industry lens to solving real business problems.
                  </p>
                  <p>
                    Currently, I work at Kahana, a forward-thinking B2B SaaS company revolutionizing enterprise browsing
                    with AI and cybersecurity. I thrive at the intersection of data, technology, and marketing, where
                    curiosity meets measurable impact.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} id="projects" className="py-20 px-4 bg-brown-50 order-5">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-heading font-semibold mb-12 text-center text-black"
          >
            Featured Projects
          </motion.h2>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <ProjectSlider />
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section ref={achievementsRef} id="achievements" className="py-20 px-4 bg-white order-6">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-heading font-semibold mb-12 text-center text-black"
          >
            Achievements
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-brown-50 rounded-2xl p-8 shadow-xl achievement-card hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-16 w-16 bg-gradient-to-r from-brown-400 to-brown-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Award className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-medium text-black mb-3">L'Oréal Brandstorm 2024</h3>
              <p className="text-gray-700 leading-relaxed">
                Pitched a tech-enabled MVP in L'Oréal Brandstorm 2024 using Figma with product strategy and go-to-market
                planning.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-brown-50 rounded-2xl p-8 shadow-xl achievement-card hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-16 w-16 bg-gradient-to-r from-brown-400 to-brown-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <TrendingUp className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-medium text-black mb-3">Global Experiential Learning Program</h3>
              <p className="text-gray-700 leading-relaxed">
                Awarded scholarship for the Global Experiential Learning Program in London for International Corporate
                Exchange.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-brown-50 rounded-2xl p-8 shadow-xl achievement-card hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-16 w-16 bg-gradient-to-r from-brown-400 to-brown-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <TrendingUp className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-medium text-black mb-3">Campaign Optimization Achievement</h3>
              <p className="text-gray-700 leading-relaxed">
                Led multi-channel marketing campaign optimization that increased conversion rates by 15% and improved
                campaign profitability by 12%.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-brown-50 rounded-2xl p-8 shadow-xl achievement-card hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-16 w-16 bg-gradient-to-r from-brown-400 to-brown-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <TrendingUp className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-medium text-black mb-3">Dashboard Development</h3>
              <p className="text-gray-700 leading-relaxed">
                Developed and maintained Tableau dashboards to visualize regional product sales, category performance,
                and retail KPIs, reducing reporting effort by 40%.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="py-20 px-4 bg-brown-50 order-7">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-heading font-semibold mb-4 text-center text-black"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-gray-700 mb-12 max-w-2xl mx-auto text-lg"
          >
            I'm always open to discussing new projects, opportunities, or partnerships. Feel free to reach out to me.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-6 items-center group">
                <div className="bg-gradient-to-r from-brown-400 to-brown-600 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail className="text-white" size={28} />
                </div>
                <div>
                  <p className="text-gray-600 text-sm font-medium mb-1">Email</p>
                  <a
                    href="mailto:shivangichamoli12@gmail.com"
                    className="text-gray-800 hover:text-brown-500 transition-colors text-lg font-medium"
                  >
                    shivangichamoli12@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-6 items-center group">
                <div className="bg-gradient-to-r from-brown-400 to-brown-600 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Linkedin className="text-white" size={28} />
                </div>
                <div>
                  <p className="text-gray-600 text-sm font-medium mb-1">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/shivangichamoli"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-brown-500 transition-colors text-lg font-medium"
                  >
                    linkedin.com/in/shivangichamoli
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="py-16 px-4 bg-white order-8">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-brown-50 p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center"
          >
            <p className="text-gray-700 italic mb-4 text-xl leading-relaxed">
              "The most powerful person in the world is the storyteller."
            </p>
            <p className="text-gray-600 font-medium">— Steve Jobs</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-brown-600 to-brown-800 text-white py-12 order-9">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://linkedin.com/in/shivangichamoli"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/techie-girly"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail size={20} />
            </button>
          </div>
          <p className="opacity-90">© {new Date().getFullYear()} Shivangi Chamoli. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
