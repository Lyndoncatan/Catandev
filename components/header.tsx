"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/coffee-cup-logo.png" alt="Catan Coffee Logo" width={40} height={40} />
            <div>
              <div className="text-sm font-light">Catan</div>
              <div className="text-xl font-bold tracking-wider">COFFEE</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link href="/menu" className="hover:text-gray-300 transition-colors">
              Menu
            </Link>
            <Link href="/locations" className="hover:text-gray-300 transition-colors">
              Locations
            </Link>
            <Link href="/about" className="hover:text-gray-300 transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/cart" className="hover:text-gray-300 transition-colors">
              <ShoppingCart className="h-6 w-6" />
              <span className="sr-only">Cart</span>
            </Link>
            <Button asChild className="hidden md:inline-flex bg-white text-black hover:bg-gray-200">
              <Link href="/order">Order Online</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="hover:text-gray-300 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="hover:text-gray-300 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Menu
            </Link>
            <Link
              href="/locations"
              className="hover:text-gray-300 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Locations
            </Link>
            <Link
              href="/about"
              className="hover:text-gray-300 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-gray-300 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="bg-white text-black hover:bg-gray-200 mt-2">
              <Link href="/order" onClick={() => setMobileMenuOpen(false)}>
                Order Online
              </Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}

