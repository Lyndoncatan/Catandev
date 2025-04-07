import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Coffee Enthusiast",
    quote: "Catan Coffee has the best lattes I've ever tasted. The atmosphere is perfect for both work and relaxation.",
    avatar: "/images/avatar-1.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Food Blogger",
    quote:
      "Their commitment to quality is evident in every cup. The seasonal specials are always something to look forward to.",
    avatar: "/images/avatar-2.jpg",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Local Resident",
    quote: "I start every morning at Catan Coffee. The staff is friendly and they remember my order every time!",
    avatar: "/images/avatar-3.jpg",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#f8f5f0]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what coffee lovers have to say about their Catan Coffee experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-[#3c2a21] mb-4" />
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

