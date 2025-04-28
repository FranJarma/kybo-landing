"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface Product {
  name: string
  description: string
  image: string
}

interface ProductCarouselProps {
  products: Product[]
  title: string
  description: string
}

export function ProductCarousel({ products, title, description }: ProductCarouselProps) {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-[#013e5e] md:text-4xl">{title}</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">{description}</p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden group">
        <div className="flex animate-scroll gap-6 px-4">
          {[...products, ...products, ...products, ...products].map((product, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[250px] md:w-[300px]"
            >
              <Card className="h-full flex flex-col overflow-hidden shadow transition-all hover:shadow-lg">
                <div className="relative w-full aspect-[4/3] bg-[#f8f9fa]">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <CardContent className="flex flex-col flex-grow p-4">
                  <h3 className="text-lg font-bold text-[#013e5e]">{product.name}</h3>
                  <p className="mt-2 text-sm text-gray-500 line-clamp-2">{product.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
