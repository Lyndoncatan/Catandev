"use client"

import { motion } from "framer-motion"
import { Monitor, Mouse, Keyboard, Laptop, Cpu, Smartphone, Code, Server, Database, Globe } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export function FloatingIcons() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const containerRef = useRef(null)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX - window.innerWidth / 2) / 50,
                y: (e.clientY - window.innerHeight / 2) / 50,
            })
        }
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    const icons = [
        { Icon: Monitor, x: "10%", y: "20%", delay: 0, size: 48 },
        { Icon: Mouse, x: "85%", y: "15%", delay: 1, size: 32 },
        { Icon: Keyboard, x: "75%", y: "60%", delay: 2, size: 56 },
        { Icon: Laptop, x: "15%", y: "70%", delay: 1.5, size: 48 },
        { Icon: Cpu, x: "50%", y: "10%", delay: 0.5, size: 36 },
        { Icon: Smartphone, x: "80%", y: "80%", delay: 2.5, size: 40 },
        { Icon: Code, x: "20%", y: "45%", delay: 3, size: 32 },
        { Icon: Server, x: "40%", y: "85%", delay: 1.2, size: 44 },
        { Icon: Database, x: "60%", y: "30%", delay: 2.2, size: 40 },
        { Icon: Globe, x: "90%", y: "50%", delay: 0.8, size: 52 },
    ]

    return (
        <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {icons.map((item, index) => (
                <motion.div
                    key={index}
                    drag
                    dragConstraints={containerRef}
                    whileHover={{ scale: 1.2, opacity: 0.8 }}
                    whileDrag={{ scale: 1.1, cursor: "grabbing" }}
                    className="absolute text-[var(--text-secondary)]/20 cursor-grab pointer-events-auto hover:text-[var(--text-primary)] transition-colors"
                    style={{
                        left: item.x,
                        top: item.y,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, -5, 0],
                        x: mousePosition.x * (index + 1), // Parallax effect
                    }}
                    transition={{
                        y: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: item.delay,
                        },
                        rotate: {
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: item.delay,
                        },
                    }}
                >
                    <item.Icon size={item.size} strokeWidth={1} />
                </motion.div>
            ))}
        </div>
    )
}
