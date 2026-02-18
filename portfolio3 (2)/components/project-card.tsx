import Image from "next/image"

interface ProjectMetric {
  label: string
  value: string
}

interface ProjectCardProps {
  project: {
    title: string
    description: string
    image: string
    tags: string[]
    metrics?: ProjectMetric[]
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="h-48 relative">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>

        {project.metrics && (
          <div className="grid grid-cols-3 gap-2 mb-4">
            {project.metrics.map((metric, index) => (
              <div key={index} className="bg-gray-700/50 p-2 rounded text-center">
                <div className="text-lg font-bold text-white">{metric.value}</div>
                <div className="text-xs text-gray-400">{metric.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <a
          href="#"
          className="inline-block px-4 py-2 border border-blue-500 text-blue-300 rounded hover:bg-blue-900/30 transition-colors"
        >
          View Details
        </a>
      </div>
    </div>
  )
}
