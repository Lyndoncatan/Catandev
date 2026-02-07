"use client"

import Link from "next/link"
import { Search } from "lucide-react"

import { ModeToggle } from "@/components/theme-toggle"

export function Navbar() {
    return (
        <header className="flex items-center justify-between py-8 px-4 md:px-8 relative z-50 max-w-7xl mx-auto w-full">
            <Link href="/" className="flex items-center gap-2 group">
                {/* Geometric Logo */}
                <div className="h-8 w-8 rounded-lg border border-white/20 flex items-center justify-center bg-white/5 group-hover:border-[var(--accent-color)] transition-colors">
                    <div className="h-4 w-4 bg-[var(--accent-color)] rounded-sm transform rotate-45"></div>
                </div>
                <span className="font-bold text-lg tracking-tight hidden md:block">CATANDEV</span>
            </Link>

            <div className="flex items-center gap-8">
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors hover:translate-y-[-2px] duration-300">
                        Home
                    </Link>
                    <Link href="/projects" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors hover:translate-y-[-2px] duration-300">
                        Projects
                    </Link>
                    <Link href="/about" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors hover:translate-y-[-2px] duration-300">
                        About
                    </Link>
                    <Link href="/contact" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors hover:translate-y-[-2px] duration-300">
                        Contact
                    </Link>
                </nav>

                <div className="w-px h-6 bg-white/10 hidden md:block"></div>

                <div className="flex items-center gap-6">
                    <div className="relative group hidden md:block">
                        <Search className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-transparent border-b border-white/10 py-1 pl-6 pr-4 text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)] outline-none focus:border-[var(--accent-color)] transition-all w-32 focus:w-48"
                        />
                    </div>



                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}

