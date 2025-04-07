import { Card, CardContent } from "@/components/ui/card"
import { Thermometer, Droplets, Wind, CloudRain, Sun, CloudSnow, CloudFog } from "lucide-react"
import type { JSX } from "react"

interface WeatherCardProps {
  title: string
  value: string
  description: string
  icon: string
}

export default function WeatherCard({ title, value, description, icon }: WeatherCardProps) {
  const getIcon = (): JSX.Element => {
    switch (icon) {
      case "thermometer":
        return <Thermometer className="h-8 w-8 text-[#3498db]" />
      case "droplets":
        return <Droplets className="h-8 w-8 text-[#3498db]" />
      case "wind":
        return <Wind className="h-8 w-8 text-[#3498db]" />
      case "cloud-rain":
        return <CloudRain className="h-8 w-8 text-[#3498db]" />
      case "sun":
        return <Sun className="h-8 w-8 text-[#3498db]" />
      case "cloud-snow":
        return <CloudSnow className="h-8 w-8 text-[#3498db]" />
      case "cloud-fog":
        return <CloudFog className="h-8 w-8 text-[#3498db]" />
      default:
        return <Thermometer className="h-8 w-8 text-[#3498db]" />
    }
  }

  return (
    <Card className="bg-white">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-sm font-medium text-gray-500">{title}</h3>
            <p className="text-2xl font-bold mt-1">{value}</p>
            <p className="text-sm text-gray-500 mt-1">{description}</p>
          </div>
          <div>{getIcon()}</div>
        </div>
      </CardContent>
    </Card>
  )
}

