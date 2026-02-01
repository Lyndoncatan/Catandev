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
      image: "/images/weathery.png",
      url: "https://weathery-forecast.vercel.app/",
    },
    {
      id: 2,
      title: "Catan Coffee",
      description: "A coffee shop website with online ordering system",
      image: "/images/catan-coffee.png",
      url: "https://catan-coffee.vercel.app/",
    },
    {
      id: 3,
      title: "Albumoto",
      description: "album collection",
      image: "/images/albumoto.png",
      url: "https://albumoto.vercel.app/",
    },
    {
      id: 4,
      title: "Wonder Game",
      description: "Interactive gaming platform with multiple game options",
      image: "/images/wonder-game.png",
      url: "https://wonder-game.vercel.app/",
    },
    {
      id: 5,
      title: "Data Tracker",
      description: "Analytics and data tracking application",
      image: "/images/data-tracker.png",
      url: "https://data-tracker-three.vercel.app/",
    },

    {
      id: 6,
      title: "Elemento",
      description: "Frontend Pixel game,typescript,css,javascript",
      image: "/images/elemento.png",
      url: "https://elemento-game-blush.vercel.app/",
    },

    {
      id: 7,
      title: "Hellodie",
      description: "Frontend Ecommerce Web,typescript,css,javascript",
      image: "/images/hellodie.png",
      url: "https://hellodie-website.vercel.app/",
    },

    {
      id: 8,
      title: "Lhood",
      description: "Frontend Ecommerce Web,typescript,css,javascript",
      image: "/images/lhood.png",
      url: "https://l-hood-shop.vercel.app/",
    },

    {
      id: 9,
      title: "Todo List",
      description: "Frontend Web,typescript,css,javascript",
      image: "/images/todolist.png",
      url: "https://todo-list-app-zeta-silk.vercel.app/",
    },

    {
      id: 10,
      title: "Audio Forensic",
      description: "Frontend API'S Web,typescript,css,javascript",
      image: "/images/audioforensic.png",
      url: "https://audio-forensic-model.vercel.app/",
    },

    {
      id: 11,
      title: "3rd version Audio Forensic",
      description: "Frontend API'S Web,typescript,css,javascript",
      image: "/images/3rdveraudio.png",
      url: "https://3rd-ver-audio-forensic-model.vercel.app/",
    },

    {
      id: 12,
      title: "Online Examination",
      description: "Frontend With Supabase Login Authentication ",
      image: "/images/Onlineexamination.png",
      url: "https://onlin-examination.vercel.app/",
    },

    {
      id: 13,
      title: "14ver Audio Forensic",
      description: "Fullstack Python Librosa ",
      image: "/images/14vaudioforensic.png",
      url: "https://one4ver-audio-forensic-detector-igmp.onrender.com/",
    },

    {
      id: 14,
      title: "SMS Fisher",
      description: "Fullstack Python  ",
      image: "/images/sms-fisher.png",
      url: "https://sms-fisher.netlify.app",

    },

    {
      id: 15,
      title: "Compliler ",
      description: "javascript complier  ",
      image: "/images/compiler.png",
      url: "https://compiler-project-mauve.vercel.app/",

    },

    {
      id: 16,
      title: "1stver Animal emotion Scanner ",
      description: "Fullstack Python  ",
      image: "/images/animal-emotion.png",
      url: "https://animal-emotion-detector.onrender.com/",

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

