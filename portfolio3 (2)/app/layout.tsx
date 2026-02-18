import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Shivangi Chamoli | Data & Marketing Analyst",
  description: "Professional portfolio showcasing data and marketing analytics expertise",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans">{children}</body>
    </html>
  )
}
