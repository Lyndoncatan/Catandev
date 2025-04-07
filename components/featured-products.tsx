import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

const products = [
  {
    id: 1,
    name: "Signature Espresso",
    description: "Our signature blend with notes of chocolate and caramel.",
    price: "$4.50",
    image: "/images/espresso.jpg",
  },
  {
    id: 2,
    name: "Vanilla Latte",
    description: "Smooth espresso with steamed milk and vanilla syrup.",
    price: "$5.25",
    image: "/images/vanilla-latte.jpg",
  },
  {
    id: 3,
    name: "Cold Brew",
    description: "Slow-steeped for 24 hours for a smooth, rich flavor.",
    price: "$4.75",
    image: "/images/cold-brew.jpg",
  },
  {
    id: 4,
    name: "Caramel Macchiato",
    description: "Espresso with steamed milk and caramel drizzle.",
    price: "$5.50",
    image: "/images/caramel-macchiato.jpg",
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Featured Drinks</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular handcrafted beverages, made with premium ingredients and expert care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="font-bold text-lg">{product.price}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild className="w-full bg-[#3c2a21] hover:bg-[#5c4033] text-white">
                  <Link href="/menu">Order Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-[#3c2a21] hover:bg-[#5c4033] text-white">
            <Link href="/menu">View Full Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

