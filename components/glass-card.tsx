"use client"

import { cn } from "@/lib/utils"
import { HTMLMotionProps, motion } from "framer-motion"

interface GlassCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode
    className?: string
}

export function GlassCard({ children, className, ...props }: GlassCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn(
                "relative overflow-hidden rounded-[2rem] border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-3xl transition-all duration-500",
                className
            )}
            {...props}
        >
            {/* Glossy reflection effect */}
            <div className="pointer-events-none absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-5 blur-2xl" />

            {children}
        </motion.div>
    )
}
