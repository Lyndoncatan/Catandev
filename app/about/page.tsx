"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import AnimatedNavbar from "@/components/animated-navbar"
import { motion } from "framer-motion"

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
          About Me
        </motion.h1>

        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <div>
            <h2 className="text-3xl font-bold text-[#1a3b5d] mb-6">My Story</h2>
            <p className="text-lg text-[#1a3b5d] mb-6">
              Hi, I'm Lyndon Domini Catan, a 22-year-old web developer born on January 16, 2003, based in Marikina City,
              Philippines.
            </p>
            <p className="text-lg text-[#1a3b5d] mb-6">
              I specialize in creating interactive web designs with a focus on frontend development. My passion lies in
              building modern, responsive, and user-friendly web applications using the latest technologies.
            </p>
            <p className="text-lg text-[#1a3b5d]">
              I believe that great web development is about more than just code—it's about understanding your business
              goals and creating solutions that help you achieve them.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image src="/images/team.jpg" alt="Lyndon Domini Catan" fill className="object-cover" />
          </div>
        </motion.div>

        <motion.div
          className="mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-[#1a3b5d] mb-8 text-center">My Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-16 w-16 bg-[#4ade80] rounded-full flex items-center justify-center mb-6 mx-auto transform transition-transform duration-300 hover:rotate-12">
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1a3b5d] mb-4 text-center">Quality</h3>
              <p className="text-[#1a3b5d] text-center">
                I take pride in my work and strive to deliver high-quality solutions that exceed expectations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-16 w-16 bg-[#4ade80] rounded-full flex items-center justify-center mb-6 mx-auto transform transition-transform duration-300 hover:rotate-12">
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
              <h3 className="text-xl font-bold text-[#1a3b5d] mb-4 text-center">Innovation</h3>
              <p className="text-[#1a3b5d] text-center">
                I stay up-to-date with the latest technologies and best practices to deliver innovative solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-16 w-16 bg-[#4ade80] rounded-full flex items-center justify-center mb-6 mx-auto transform transition-transform duration-300 hover:rotate-12">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1a3b5d] mb-4 text-center">Collaboration</h3>
              <p className="text-[#1a3b5d] text-center">
                I work closely with my clients to understand their needs and goals, ensuring the best possible outcome.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-[#1a3b5d] mb-8 text-center">My Skills</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[#1a3b5d] mb-6">Frontend Development</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-[#1a3b5d] font-medium">HTML/CSS</span>
                      <span className="text-[#4ade80] font-medium">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#4ade80] h-2 rounded-full" style={{ width: "95%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-[#1a3b5d] font-medium">JavaScript</span>
                      <span className="text-[#4ade80] font-medium">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#4ade80] h-2 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-[#1a3b5d] font-medium">React</span>
                      <span className="text-[#4ade80] font-medium">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#4ade80] h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-[#1a3b5d] font-medium">Next.js</span>
                      <span className="text-[#4ade80] font-medium">80%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#4ade80] h-2 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#1a3b5d] mb-6">Design & Tools</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-[#1a3b5d] font-medium">Responsive Design</span>
                      <span className="text-[#4ade80] font-medium">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#4ade80] h-2 rounded-full" style={{ width: "95%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-[#1a3b5d] font-medium">UI/UX Design</span>
                      <span className="text-[#4ade80] font-medium">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#4ade80] h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-[#1a3b5d] font-medium">Git/GitHub</span>
                      <span className="text-[#4ade80] font-medium">80%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#4ade80] h-2 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-[#1a3b5d] font-medium">API Integration</span>
                      <span className="text-[#4ade80] font-medium">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#4ade80] h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-12 px-6 font-medium bg-[#4ade80] text-white rounded-md hover:bg-[#22c55e] transition-colors"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

