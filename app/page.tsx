"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Search, Info, Briefcase, Mail, Upload, FolderOpen } from "lucide-react"
import { ModeToggle } from "@/components/theme-toggle"
import { GlassCard } from "@/components/glass-card"
import { SpotlightCard } from "@/components/spotlight-card"
import { TextReveal } from "@/components/text-reveal"
import { Button } from "@/components/ui/button"
import { FloatingIcons } from "@/components/floating-icons"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[rgb(var(--background-rgb))] p-4 md:p-8 transition-colors duration-500"
    >
      {/* Interactive Mouse Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--foreground-rgb), 0.06), transparent 40%)`,
        }}
      />

      {/* Geometric Background Mesh - Theme aware */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,rgba(var(--foreground-rgb),0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--foreground-rgb),0.08)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        {/* Ambient bottom glow */}
        <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-[var(--accent-color)]/5 to-transparent blur-3xl"></div>
      </div>

      {/* Floating Tech Icons */}
      <FloatingIcons />

      <div className="flex min-h-screen w-full flex-col p-4 md:p-8 relative overflow-hidden z-10 font-sans pointer-events-none">

        {/* Main Content Area */}
        <main className="flex flex-1 flex-col justify-center relative z-20 px-4 md:px-0 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl md:text-8xl font-medium tracking-tight text-[var(--text-primary)] leading-[1.1] mb-8 font-display">
              <TextReveal text="Build with the best" /> <br />
              <span className="text-[var(--text-secondary)]">interactive experiences.</span>
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="border-l-2 border-[var(--accent-color)] pl-6 mb-12"
            >
              <h2
                className="text-2xl md:text-3xl font-light text-[var(--text-primary)] mb-2 font-display"
              >
                Lyndon Domini Catan
              </h2>
              <p className="text-[var(--text-secondary)] max-w-xl text-lg">
                Frontend Developer & Motion Graphics Designer. <br />
                Creating seamless digital products with <span className="text-[var(--accent-color)] underline decoration-1 underline-offset-4 decoration-dotted">precision</span> and <span className="text-[var(--text-primary)] font-medium">style</span>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button className="rounded-none bg-[var(--accent-color)] text-[var(--background-rgb)] hover:bg-[var(--accent-glow)] px-8 py-6 text-sm font-bold tracking-wide hover:shadow-[0_0_20px_rgba(var(--foreground-rgb),0.3)] transition-all duration-300" asChild>
                <Link href="/projects">Projects</Link>
              </Button>
              <Button variant="outline" className="rounded-none border-[var(--accent-color)]/20 text-[var(--accent-color)] hover:bg-[var(--accent-color)]/10 px-8 py-6 text-sm font-semibold tracking-wide hover:border-[var(--accent-color)] transition-all duration-300" asChild>
                <Link href="/contact">Contact</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Feature Grid (Bottom) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 border-t border-[var(--text-primary)]/10 pt-12"
          >
            <SpotlightCard>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[var(--text-primary)] font-medium font-display text-lg">
                  <div className="h-6 w-6 rounded-full border border-[var(--text-primary)] flex items-center justify-center p-1">
                    <div className="h-full w-full bg-[var(--text-primary)] rounded-full animate-pulse"></div>
                  </div>
                  Outperforms the rest
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Unparalleled real-time performance and interactive capabilities that keep users engaged longer.
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[var(--text-primary)] font-medium font-display text-lg">
                  <div className="h-6 w-6 rounded-full border border-[var(--text-primary)]/30 flex items-center justify-center">
                    <div className="h-2 w-2 bg-[var(--text-primary)] rounded-full"></div>
                  </div>
                  Private and secure
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Built with privacy-first architecture. No unwanted tracking, just pure, clean code.
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[var(--text-primary)] font-medium font-display text-lg">
                  <div className="h-6 w-6 rounded-full border border-[var(--text-primary)]/30 flex items-center justify-center">
                    <div className="h-2 w-2 bg-[var(--text-primary)] rounded-full"></div>
                  </div>
                  Most affordable
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  High quality development services that fit within your budget without compromising quality.
                </p>
              </div>
            </SpotlightCard>
          </motion.div>
        </main>
      </div>
    </div>
  )
}
