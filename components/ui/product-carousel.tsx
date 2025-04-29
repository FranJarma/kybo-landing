"use client"

import Image from "next/image"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/useIsMobile"
import clsx from "clsx"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"

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
  const isMobile = useIsMobile()
  const scrollRef = useRef<HTMLDivElement>(null)

  const productsToRender = isMobile
    ? products
    : [...products, ...products, ...products, ...products]

  const scrollBy = (direction: "left" | "right") => {
    const container = scrollRef.current
    if (!container) return
    const scrollAmount = 300
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

  return (
    <div className="w-full overflow-hidden">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-kybo-blue md:text-4xl">{title}</h2>
          <p className="text-lg mx-auto max-w-[700px] text-gray-500 md:text-xl">
            {description}
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden group">
        <div
          ref={scrollRef}
          className={clsx(
            "flex gap-6 px-4",
            isMobile
              ? "overflow-x-auto hide-scrollbar snap-x snap-mandatory scroll-smooth"
              : "animate-scroll"
          )}
        >
          {productsToRender.map((product, index) => (
            <div
              key={index}
              className={clsx(
                "flex-shrink-0 w-[250px] md:w-[300px]",
                isMobile && "snap-start"
              )}
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
                  <h3 className="text-lg font-bold text-kybo-blue">{product.name}</h3>
                  <p className="mt-2 text-md text-gray-500">{product.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {isMobile && (
        <div className="flex justify-center gap-4 mt-4">
          <Button className="rounded-full w-10 bg-kybo-blue text-white cursor-pointer hover:bg-kybo-orange" onClick={() => scrollBy("left")} variant="outline">
            <BiChevronLeft className="w-6 h-6" />
          </Button>
          <Button className="rounded-full w-10 bg-kybo-blue text-white cursor-pointer hover:bg-kybo-orange" onClick={() => scrollBy("right")} variant="outline">
            <BiChevronRight className="w-6 h-6" />
          </Button>
        </div>
      )}
    </div>
  )
}
