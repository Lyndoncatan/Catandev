"use client"

import Link from "next/link"
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedNavbar from "@/components/animated-navbar"
import { motion } from "framer-motion"

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
          Contact Us
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl font-bold text-[#1a3b5d] mb-6">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#1a3b5d] mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4ade80]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#1a3b5d] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4ade80]"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#1a3b5d] mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4ade80]"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#1a3b5d] mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4ade80]"
                  placeholder="Your message"
                ></textarea>
              </div>
              <Button className="w-full bg-[#4ade80] hover:bg-[#22c55e] text-white">Send Message</Button>
            </form>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-lg shadow-md"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-[#1a3b5d] mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-[#4ade80] mt-1" />
                <div>
                  <h3 className="font-medium text-[#1a3b5d]">Email</h3>
                  <p className="text-gray-600">lyndoncatan75@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-[#4ade80] mt-1" />
                <div>
                  <h3 className="font-medium text-[#1a3b5d]">Phone</h3>
                  <p className="text-gray-600">09452807867</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-[#4ade80] mt-1" />
                <div>
                  <h3 className="font-medium text-[#1a3b5d]">Address</h3>
                  <p className="text-gray-600">
                    Marikina City
                    <br />
                    Philippines
                  </p>
                </div>
              </div>
            </div>

           <div className="flex items-start gap-4 mt-6">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4ade80] mt-1" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.005 3.675 9.127 8.437 9.878v-6.989h-2.54v-2.729h2.54v-2.076c0-2.507 1.492-3.893 3.775-3.893 1.095 0 2.238.196 2.238.196v2.47h-1.261c-1.245 0-1.63.773-1.63 1.563v1.741h2.773l-.443 2.729h-2.33v6.989C18.325 21.127 22 17.005 22 12z"/>
  </svg>
  <div>
    <h3 className="font-medium text-[#1a3b5d]">Facebook</h3>
    <Link href="https://www.facebook.com/dondon.catan.359/" target="_blank" className="text-gray-600 hover:text-[#4ade80]">
      Dondon Catan
    </Link>
  </div>
</div>


            <div className="mt-12">
              <h3 className="text-xl font-bold text-[#1a3b5d] mb-4">About Me</h3>
              <p className="text-gray-600 mb-4">
                My name is Lyndon Domini Catan, 22 years old (born January 16, 2003). I specialize in creating
                interactive web designs with a focus on frontend development.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-[#1a3b5d] mb-4">Business Hours</h3>
              <p className="text-gray-600">
                I'm available anytime, any day of the week. Feel free to reach out whenever you need assistance with
                your web development project.
              </p>
            </div>

           


            <div className="mt-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61765.88291560813!2d121.06861955!3d14.6507073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b9f29940d7f5%3A0xdff25d631d96ee7e!2sMarikina%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1712507941123!5m2!1sen!2sph"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-md"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

