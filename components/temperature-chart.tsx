"use client"

import { useEffect, useRef } from "react"

interface TemperatureChartProps {
  type: string
}

export default function TemperatureChart({ type }: TemperatureChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!chartRef.current) return

    const canvas = chartRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Set dimensions
    const width = canvas.width
    const height = canvas.height
    const padding = 40

    // Draw axes
    ctx.strokeStyle = "#ccc"
    ctx.lineWidth = 1

    // X-axis
    ctx.beginPath()
    ctx.moveTo(padding, height - padding)
    ctx.lineTo(width - padding, height - padding)
    ctx.stroke()

    // Y-axis
    ctx.beginPath()
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, height - padding)
    ctx.stroke()

    // Generate data based on chart type
    let data: number[] = []
    let labels: string[] = []

    if (type === "daily") {
      data = [28, 30, 32, 31, 29, 28, 27]
      labels = ["6AM", "9AM", "12PM", "3PM", "6PM", "9PM", "12AM"]
    } else if (type === "weekly") {
      data = [29, 30, 32, 31, 28, 27, 29]
      labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    } else if (type === "monthly") {
      data = [26, 27, 29, 31, 32, 30, 28, 27, 26, 25, 27, 28]
      labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    }

    // Draw chart
    const chartWidth = width - padding * 2
    const chartHeight = height - padding * 2
    const barWidth = chartWidth / data.length - 10

    // Draw bars
    ctx.fillStyle = "#3498db"

    data.forEach((value, index) => {
      const x = padding + index * (chartWidth / data.length) + (chartWidth / data.length - barWidth) / 2
      const barHeight = (value - 20) * (chartHeight / 20) // Scale the bar height (assuming temp range 20-40°C)
      const y = height - padding - barHeight

      // Draw bar
      ctx.fillRect(x, y, barWidth, barHeight)

      // Draw value
      ctx.fillStyle = "#333"
      ctx.font = "12px Arial"
      ctx.textAlign = "center"
      ctx.fillText(`${value}°C`, x + barWidth / 2, y - 5)

      // Draw label
      ctx.fillText(labels[index], x + barWidth / 2, height - padding + 15)

      ctx.fillStyle = "#3498db"
    })

    // Draw Y-axis labels
    ctx.fillStyle = "#666"
    ctx.textAlign = "right"

    for (let temp = 20; temp <= 40; temp += 5) {
      const y = height - padding - (temp - 20) * (chartHeight / 20)
      ctx.fillText(`${temp}°C`, padding - 5, y + 4)

      // Draw horizontal grid line
      ctx.strokeStyle = "#eee"
      ctx.beginPath()
      ctx.moveTo(padding, y)
      ctx.lineTo(width - padding, y)
      ctx.stroke()
    }
  }, [type])

  return <canvas ref={chartRef} width={800} height={400} className="w-full h-auto"></canvas>
}

