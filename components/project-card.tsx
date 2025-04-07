"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
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
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg?height=400&width=600"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-[#1a3b5d] mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full bg-[#4ade80] hover:bg-[#22c55e] text-white">
          <Link href={project.url} target="_blank" className="flex items-center justify-center gap-2">
            View Project <ExternalLink className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

