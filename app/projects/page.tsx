"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import AnimatedNavbar from "@/components/animated-navbar"
import { motion } from "framer-motion"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Weathery",
      description: "A weather forecast application with analytics dashboard",
      image: "/images/weathery.jpeg",
      url: "https://weathery-forecast.vercel.app/",
    },
    {
      id: 2,
      title: "Catan Coffee",
      description: "A coffee shop website with online ordering system",
      image: "/images/catan-coffee.jpeg",
      url: "https://catan-coffee.vercel.app/",
    },
    {
      id: 3,
      title: "Albumoto",
      description: "Music album collection and management application",
      image: "/images/albumoto.jpg",
      url: "https://albumoto.vercel.app/",
    },
    {
      id: 4,
      title: "Wonder Game",
      description: "Interactive gaming platform with multiple game options",
      image: "/images/wonder-game.jpg",
      url: "https://wonder-game.vercel.app/",
    },
    {
      id: 5,
      title: "Data Tracker",
      description: "Analytics and data tracking application",
      image: "/images/data-tracker.jpg",
      url: "https://data-tracker-three.vercel.app/",
    },

    {
      id: 6,
      title: "Elemento",
      description: "Frontend Pixel game,typescript,css,javascript",
      image: "/images/data-tracker.jpg",
      url: "https://elemento-game-blush.vercel.app/",
    },
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  return (
    <div className="min-h-screen bg-[#fdf6e3] bg-grid-pattern">
      <AnimatedNavbar />

      <div className="container mx-auto px-4 py-32">
        <Link href="/" className="inline-flex items-center gap-2 text-[#1a3b5d] mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <motion.h1
          className="text-4xl font-bold text-[#1a3b5d] mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-[#4ade80] hover:bg-[#22c55e] text-white shadow-lg shadow-[#4ade80]/20 transition-all duration-300"
          >
            <Link href="/">Back to Home</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

