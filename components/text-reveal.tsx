"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface TextRevealProps {
    text: string
    className?: string
    delay?: number
}

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"

export function TextReveal({ text, className, delay = 0 }: TextRevealProps) {
    const [displayText, setDisplayText] = useState("")
    const [isRevealed, setIsRevealed] = useState(false)

    useEffect(() => {
        let timeout: NodeJS.Timeout
        let iteration = 0

        // Start delay
        const startTimeout = setTimeout(() => {
            const interval = setInterval(() => {
                setDisplayText(
                    text
                        .split("")
                        .map((letter, index) => {
                            if (index < iteration) {
                                return text[index]
                            }

                            return characters[Math.floor(Math.random() * characters.length)]
                        })
                        .join("")
                )

                if (iteration >= text.length) {
                    clearInterval(interval)
                    setIsRevealed(true)
                }

                iteration += 1 / 3
            }, 30)

            return () => clearInterval(interval)
        }, delay * 1000)

        return () => clearTimeout(startTimeout)
    }, [text, delay])

    return (
        <span className={className}>
            {displayText}
        </span>
    )
}
