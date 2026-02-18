"use client"

import type { ReactNode } from "react"

interface TabButtonProps {
  children: ReactNode
  active: boolean
  onClick: () => void
}

export function TabButton({ children, active, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative px-2 py-1 text-sm transition-colors ${
        active ? "text-primary-600 font-medium" : "text-text-secondary hover:text-text-primary"
      }`}
    >
      {children}
      {active && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500"></span>}
    </button>
  )
}
