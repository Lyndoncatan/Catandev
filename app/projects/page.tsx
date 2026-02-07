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
    <div className="flex min-h-screen w-full flex-col p-4 md:p-8 relative overflow-hidden z-0 font-sans">
      {/* Geometric Background Mesh */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-[var(--accent-color)]/10 to-transparent blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl pt-8">
        <div className="mb-12 flex justify-between items-center">
          <Link href="/" className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors hover:translate-x-[-4px] duration-300 group">
            <div className="p-2 rounded-full border border-white/10 bg-white/5 group-hover:border-[var(--accent-color)] transition-colors">
              <ArrowLeft className="h-4 w-4" />
            </div>
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-medium text-[var(--text-primary)] mb-6 tracking-tight leading-none font-display">
            CATANDEV <span className="text-[var(--text-secondary)]">PROJECT</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl font-light border-l border-[var(--accent-color)] pl-6">
            A collection of my recent work in web development, design, and interactive experiences.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20"
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
          className="text-center pb-12 border-t border-white/10 pt-12"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          <p className="text-[var(--text-secondary)] mb-6">Ready to start your own project?</p>
          <Button
            asChild
            size="lg"
            className="rounded-none bg-white text-black hover:bg-gray-200 px-10 py-6 text-sm font-semibold tracking-wide hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

