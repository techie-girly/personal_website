"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, Linkedin, Github } from "lucide-react"
import Image from "next/image"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: "", email: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000)
    }, 1500)
  }

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
          <h1 className="text-4xl font-heading font-bold text-text-primary">Shivangi Chamoli</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-heading font-semibold text-primary-600 mb-6">Get In Touch</h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-text-secondary">
                <Mail className="mr-3 text-primary-500" size={20} />
                <a href="mailto:shivangichamoli12@gmail.com" className="hover:text-primary-500 transition-colors">
                  shivangichamoli12@gmail.com
                </a>
              </div>
              <div className="flex items-center text-text-secondary">
                <Linkedin className="mr-3 text-primary-500" size={20} />
                <a
                  href="https://linkedin.com/in/shivangichamoli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-500 transition-colors"
                >
                  linkedin.com/in/shivangichamoli
                </a>
              </div>
              <div className="flex items-center text-text-secondary">
                <Github className="mr-3 text-primary-500" size={20} />
                <a
                  href="https://github.com/techie-girly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-500 transition-colors"
                >
                  github.com/techie-girly
                </a>
              </div>
              <div className="flex items-center text-text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="0"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-3 text-primary-500"
                >
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z"></path>
                </svg>
                <a
                  href="https://medium.com/@shivangichamoli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-500 transition-colors"
                >
                  medium.com/@shivangichamoli
                </a>
              </div>
            </div>

            <p className="text-text-secondary">
              I'm always open to discussing new projects, opportunities, or partnerships.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-text-secondary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background border border-gray-200 rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-text-secondary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background border border-gray-200 rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-text-secondary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-background border border-gray-200 rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium py-2 px-4 rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-primary-300 disabled:opacity-50 hover:shadow-md"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitSuccess && (
                <p className="mt-4 text-green-600 text-center">Message sent successfully! I'll get back to you soon.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
