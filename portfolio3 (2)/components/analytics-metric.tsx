import type { ReactNode } from "react"

interface AnalyticsMetricProps {
  label: string
  value: string
  icon: ReactNode
}

export function AnalyticsMetric({ label, value, icon }: AnalyticsMetricProps) {
  return (
    <div className="bg-gray-800/60 backdrop-blur-sm p-4 rounded-lg flex items-center">
      <div className="mr-3 text-blue-400">{icon}</div>
      <div>
        <div className="text-2xl font-bold text-white">{value}</div>
        <div className="text-sm text-gray-400">{label}</div>
      </div>
    </div>
  )
}
