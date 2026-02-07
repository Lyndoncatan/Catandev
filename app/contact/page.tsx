"use client"

import Link from "next/link"
import { ArrowLeft, Mail, Phone, MapPin, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { GlassCard } from "@/components/glass-card"

export default function ContactPage() {
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
          className="mb-20 text-center md:text-left"
        >
          <h1 className="text-6xl md:text-8xl font-medium text-[var(--text-primary)] mb-6 tracking-tight leading-none">
            Contact <span className="text-[var(--text-secondary)]">Us.</span>
          </h1>
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-2xl font-light">
            Get in touch and let's bring your ideas to reality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            className="space-y-8"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <div className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-medium text-[var(--text-primary)] mb-8">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-[var(--text-secondary)]">Name</label>
                    <input type="text" id="name" className="w-full bg-transparent border-b border-white/20 py-3 text-[var(--text-primary)] focus:border-[var(--accent-color)] focus:outline-none transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-[var(--text-secondary)]">Email</label>
                    <input type="email" id="email" className="w-full bg-transparent border-b border-white/20 py-3 text-[var(--text-primary)] focus:border-[var(--accent-color)] focus:outline-none transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-[var(--text-secondary)]">Subject</label>
                  <input type="text" id="subject" className="w-full bg-transparent border-b border-white/20 py-3 text-[var(--text-primary)] focus:border-[var(--accent-color)] focus:outline-none transition-colors" placeholder="Project Inquiry" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-[var(--text-secondary)]">Message</label>
                  <textarea id="message" rows={4} className="w-full bg-transparent border-b border-white/20 py-3 text-[var(--text-primary)] focus:border-[var(--accent-color)] focus:outline-none transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
                </div>
                <Button className="w-full md:w-auto rounded-none bg-white text-black hover:bg-gray-200 px-10 py-6 text-sm font-semibold tracking-wide">
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            className="space-y-12"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <div className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-medium text-[var(--text-primary)] mb-8">Contact Info</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-[var(--accent-color)] mt-1" />
                  <div>
                    <h3 className="font-medium text-[var(--text-primary)]">Email</h3>
                    <p className="text-[var(--text-secondary)]">lyndoncatan75@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-[var(--accent-color)] mt-1" />
                  <div>
                    <h3 className="font-medium text-[var(--text-primary)]">Phone</h3>
                    <p className="text-[var(--text-secondary)]">09452807867</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-[var(--accent-color)] mt-1" />
                  <div>
                    <h3 className="font-medium text-[var(--text-primary)]">Address</h3>
                    <p className="text-[var(--text-secondary)]">Marikina City, Philippines</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Facebook className="h-6 w-6 text-[var(--accent-color)] mt-1" />
                  <div>
                    <h3 className="font-medium text-[var(--text-primary)]">Facebook</h3>
                    <Link href="https://www.facebook.com/dondon.catan.359/" target="_blank" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] underline decoration-1 underline-offset-4">
                      Dondon Catan
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h3 className="text-xl font-medium text-[var(--text-primary)] mb-4">Availability</h3>
              <p className="text-[var(--text-secondary)] max-w-sm">
                I'm available strictly for <span className="text-[var(--accent-color)]">Business Inquiries</span>.
                Feel free to reach out anytime.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
