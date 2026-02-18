"use client"

import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

interface SkillChartProps {
  skills: { name: string; value: number }[]
}

export function SkillChart({ skills }: SkillChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }

      const ctx = chartRef.current.getContext("2d")
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: "radar",
          data: {
            labels: skills.map((skill) => skill.name),
            datasets: [
              {
                label: "Skill Proficiency",
                data: skills.map((skill) => skill.value),
                backgroundColor: "rgba(14, 165, 233, 0.2)",
                borderColor: "rgba(14, 165, 233, 1)",
                borderWidth: 2,
                pointBackgroundColor: "rgba(14, 165, 233, 1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(14, 165, 233, 1)",
              },
            ],
          },
          options: {
            scales: {
              r: {
                angleLines: {
                  color: "rgba(100, 116, 139, 0.1)",
                },
                grid: {
                  color: "rgba(100, 116, 139, 0.1)",
                },
                pointLabels: {
                  color: "rgba(100, 116, 139, 0.7)",
                  font: {
                    size: 14,
                    family: "'Inter', sans-serif",
                  },
                },
                ticks: {
                  backdropColor: "transparent",
                  color: "rgba(100, 116, 139, 0.5)",
                  z: 100,
                },
                suggestedMin: 0,
                suggestedMax: 100,
              },
            },
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                titleColor: "rgba(30, 41, 59, 1)",
                bodyColor: "rgba(30, 41, 59, 1)",
                titleFont: {
                  size: 14,
                  family: "'Inter', sans-serif",
                },
                bodyFont: {
                  size: 14,
                  family: "'Inter', sans-serif",
                },
                padding: 10,
                displayColors: false,
                borderColor: "rgba(226, 232, 240, 1)",
                borderWidth: 1,
                callbacks: {
                  label: (context) => `Proficiency: ${context.raw}%`,
                },
              },
            },
          },
        })
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [skills])

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <canvas ref={chartRef} height="300"></canvas>
    </div>
  )
}
