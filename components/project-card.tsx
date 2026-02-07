import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { SpotlightCard } from "@/components/spotlight-card"
import { Button } from "@/components/ui/button"

interface Project {
  id: number
  title: string
  description: string
  image: string
  url: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <SpotlightCard className="h-full flex flex-col p-0 overflow-hidden border-white/10 bg-white/5 hover:border-[var(--accent-color)]/50 transition-colors group">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg?height=400&width=600"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
      </div>

      <div className="p-6 flex flex-col flex-1 relative z-10">
        <h3 className="text-xl font-medium text-[var(--text-primary)] mb-2 font-display">{project.title}</h3>
        <p className="text-[var(--text-secondary)] mb-6 flex-1 text-sm leading-relaxed">{project.description}</p>

        <Button asChild className="w-full bg-white/10 hover:bg-[var(--accent-color)] text-[var(--text-primary)] hover:text-black mt-auto backdrop-blur-sm border border-white/10 hover:border-[var(--accent-color)] transition-all duration-300 rounded-lg group/btn">
          <Link href={project.url} target="_blank" className="flex items-center justify-center gap-2">
            View Project
            <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
          </Link>
        </Button>
      </div>
    </SpotlightCard>
  )
}

