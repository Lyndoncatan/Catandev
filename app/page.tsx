"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import ProjectCard from "@/components/project-card"
import AnimatedNavbar from "@/components/animated-navbar"
import { motion } from "framer-motion"

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Weathery",
      description: "Weather forecast application with analytics dashboard",
      image: "/images/weathery.jpeg",
      url: "https://weathery-forecast.vercel.app/",
    },
    {
      id: 2,
      title: "Catan Coffee",
      description: "Coffee shop website with online ordering system",
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

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <motion.span
                className="text-[#4ade80] inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Looking for
              </motion.span>
              <br />
              <motion.span
                className="text-white text-stroke inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                WEB DEVELOPERS?
              </motion.span>
            </h1>
          </motion.div>

          <motion.div
            className="max-w-2xl mx-auto mt-12"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            <p className="text-xl text-[#1a3b5d] mb-8">
              We are a team of passionate web developers specializing in creating modern, responsive, and user-friendly
              websites and web applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-[#4ade80] hover:bg-[#22c55e] text-white shadow-lg shadow-[#4ade80]/20 transition-all duration-300"
                >
                  <Link href="/contact">Hire Us</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-[#4ade80] text-[#4ade80] hover:bg-[#4ade80] hover:text-white transition-all duration-300"
                >
                  <Link href="/projects">View Our Work</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl font-bold text-[#1a3b5d] mb-4">Our Projects</h2>
            <p className="text-xl text-[#1a3b5d] max-w-2xl mx-auto">
              Check out some of our recent work and see how we can help bring your ideas to life.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
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
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="bg-[#4ade80] hover:bg-[#22c55e] text-white shadow-lg shadow-[#4ade80]/20 transition-all duration-300"
              >
                <Link href="/projects">View All Projects</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl font-bold text-[#1a3b5d] mb-4">Our Services</h2>
            <p className="text-xl text-[#1a3b5d] max-w-2xl mx-auto">
              We offer a wide range of web development services to help your business succeed online.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div
              variants={fadeInUp}
              className="bg-[#f8f9fa] p-8 rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-16 w-16 bg-[#4ade80] rounded-lg flex items-center justify-center mb-6 transform transition-transform duration-300 hover:rotate-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1a3b5d] mb-4">Web Development</h3>
              <p className="text-[#1a3b5d]">
                We build custom websites and web applications using the latest technologies and best practices.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-[#f8f9fa] p-8 rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-16 w-16 bg-[#4ade80] rounded-lg flex items-center justify-center mb-6 transform transition-transform duration-300 hover:rotate-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1a3b5d] mb-4">Responsive Design</h3>
              <p className="text-[#1a3b5d]">
                We create websites that look great and function perfectly on all devices, from desktops to smartphones.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-[#f8f9fa] p-8 rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-16 w-16 bg-[#4ade80] rounded-lg flex items-center justify-center mb-6 transform transition-transform duration-300 hover:rotate-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1a3b5d] mb-4">Performance Optimization</h3>
              <p className="text-[#1a3b5d]">
                We optimize your website for speed and performance to provide the best user experience.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-[#f8f9fa] p-8 rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-16 w-16 bg-[#4ade80] rounded-lg flex items-center justify-center mb-6 transform transition-transform duration-300 hover:rotate-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1a3b5d] mb-4">API Integration</h3>
              <p className="text-[#1a3b5d]">
                We connect your website with third-party services and APIs to extend functionality and automate
                processes.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#4ade80]">
        <div className="container mx-auto px-4 text-center">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your project and get a free consultation.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="bg-white text-[#4ade80] hover:bg-gray-100 shadow-lg shadow-[#4ade80]/20 transition-all duration-300"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a3b5d] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Image src="/images/catan-dev-logo.png" alt="Catan Dev Logo" width={80} height={80} className="mb-4" />
              <p className="text-gray-300 mb-4">
                We build modern, responsive, and user-friendly websites and web applications.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://github.com/Lyndoncatan"
                  target="_blank"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-gray-300 hover:text-white">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Responsive Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Performance Optimization
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    API Integration
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <address className="not-italic text-gray-300 space-y-2">
                <p>Marikina City</p>
                <p>Philippines</p>
                <p className="mt-4">Phone: 09452807867</p>
                <p>Email: lyndoncatan75@gmail.com</p>
              </address>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
            <p>© {new Date().getFullYear()} Lyndon Domini Catan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

