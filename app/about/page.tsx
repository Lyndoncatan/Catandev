"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Code, Database, Globe } from "lucide-react"
import { motion } from "framer-motion"
import { GlassCard } from "@/components/glass-card"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="flex min-h-screen w-full flex-col p-4 md:p-8 relative overflow-hidden z-0 font-sans">
      {/* Geometric Background Mesh */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-[var(--accent-color)]/10 to-transparent blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-6xl pt-8">
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors hover:translate-x-[-4px] duration-300">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-medium text-[var(--text-primary)] mb-6 tracking-tight leading-none">
            About <span className="text-[var(--text-secondary)]">Me.</span>
          </h1>
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-2xl font-light">
            Blending creativity with code to craft immersive digital experiences.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-16 items-start mb-24"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-8">
            <div className="border-l border-[var(--accent-color)] pl-6">
              <h2 className="text-2xl font-medium text-[var(--text-primary)] mb-4">My Story</h2>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
                Hi, I'm <span className="text-[var(--accent-color)]">Lyndon Domini Catan</span>, a 22-year-old web developer
                from Marikina City, Philippines.
              </p>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                I specialize in creating interactive web designs with a focus on frontend development. My passion lies in
                building modern, responsive, and user-friendly web applications using the latest technologies.
              </p>
            </div>

            <div className="p-6 border border-white/10 bg-white/5 backdrop-blur-sm">
              <p className="text-[var(--text-primary)] italic font-light">
                "I believe that great web development is about more than just code—it's about understanding your business
                goals and creating solutions that help you achieve them."
              </p>
            </div>
          </div>

          <div className="relative h-[500px] w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <Image src="/images/team.jpg" alt="Lyndon Domini Catan" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
          </div>
        </motion.div>

        <motion.div
          className="mb-24"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-4xl font-medium text-[var(--text-primary)] mb-12 text-center tracking-tight">My Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Quality", icon: Code, desc: "I take pride in my work and strive to deliver high-quality solutions." },
              { title: "Innovation", icon: Globe, desc: "Staying up-to-date with the latest tech to deliver innovative solutions." },
              { title: "Collaboration", icon: Database, desc: "Working closely with clients to ensure the best possible outcome." }
            ].map((item, index) => (
              <div key={index} className="border-t border-white/10 pt-6 hover:border-[var(--accent-color)] transition-colors duration-300 group">
                <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                  <item.icon className="h-8 w-8 text-[var(--text-primary)]" />
                </div>
                <h3 className="text-xl font-medium text-[var(--text-primary)] mb-2">{item.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center pb-20"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          <Button asChild size="lg" className="rounded-none bg-white text-black hover:bg-gray-200 px-10 py-8 text-sm font-semibold tracking-wide">
            <Link href="/contact">Let's Work Together</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
