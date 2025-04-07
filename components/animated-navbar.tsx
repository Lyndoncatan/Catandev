"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Github, Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

export default function AnimatedNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "PROJECT", path: "/projects" },
    { name: "ABOUT US", path: "/about" },
    { name: "CONTACT US", path: "/contact" },
  ]

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  }

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  }

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-6"}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div initial="hidden" animate="visible" variants={logoVariants} className="flex items-center gap-2">
          <Link href="/">
            <Image src="/images/catan-dev-logo.png" alt="Catan Dev Logo" width={60} height={60} className="h-auto" />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden md:flex items-center gap-8"
          initial="hidden"
          animate="visible"
          variants={navVariants}
        >
          {navItems.map((item) => (
            <motion.div key={item.name} variants={itemVariants}>
              <Link
                href={item.path}
                className={`relative px-2 py-1 font-medium group ${pathname === item.path ? "text-[#4ade80]" : "text-[#1a3b5d]"}`}
              >
                <span>{item.name}</span>
                <span
                  className={`absolute left-0 bottom-0 h-0.5 w-0 bg-[#4ade80] transition-all duration-300 group-hover:w-full ${pathname === item.path ? "w-full" : ""}`}
                ></span>
              </Link>
            </motion.div>
          ))}
          <motion.div variants={itemVariants}>
            <Link
              href="https://github.com/Lyndoncatan"
              target="_blank"
              className="relative p-2 text-[#1a3b5d] hover:text-[#4ade80] transition-colors duration-300 group"
            >
              <Github className="h-6 w-6" />
              <span className="absolute inset-0 rounded-full border border-transparent group-hover:border-[#4ade80] transition-all duration-300"></span>
            </Link>
          </motion.div>
        </motion.nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#1a3b5d] hover:text-[#4ade80] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`py-2 px-4 rounded-md transition-colors ${pathname === item.path ? "bg-[#4ade80]/10 text-[#4ade80]" : "text-[#1a3b5d] hover:bg-gray-100"}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="https://github.com/Lyndoncatan"
              target="_blank"
              className="py-2 px-4 rounded-md text-[#1a3b5d] hover:bg-gray-100 flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </Link>
          </nav>
        </motion.div>
      )}
    </header>
  )
}

