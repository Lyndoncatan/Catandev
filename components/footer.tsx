import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/images/coffee-cup-logo.png" alt="Catan Coffee Logo" width={40} height={40} />
              <div>
                <div className="text-sm font-light">Catan</div>
                <div className="text-xl font-bold tracking-wider">COFFEE</div>
              </div>
            </Link>
            <p className="text-gray-400 mb-4">Crafting exceptional coffee experiences since 2010.</p>
            <div className="flex gap-4">
              <Link href="https://facebook.com" target="_blank" aria-label="Facebook" className="hover:text-gray-300">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" target="_blank" aria-label="Twitter" className="hover:text-gray-300">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com" target="_blank" aria-label="Instagram" className="hover:text-gray-300">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-400 hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-gray-400 hover:text-white transition-colors">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>123 Coffee Street</p>
              <p>San Francisco, CA 94103</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@catancoffee.com</p>
            </address>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Hours</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Monday - Friday: 6am - 8pm</li>
              <li>Saturday: 7am - 8pm</li>
              <li>Sunday: 7am - 7pm</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Catan Coffee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

