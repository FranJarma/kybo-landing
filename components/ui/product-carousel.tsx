"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

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
  const carouselRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = () => {
    if (!carouselRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10) // -10 para un pequeño margen
  }

  useEffect(() => {
    checkScrollButtons()
    window.addEventListener("resize", checkScrollButtons)
    return () => window.removeEventListener("resize", checkScrollButtons)
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return

    const scrollAmount = direction === "left" ? -320 : 320
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })

    // Actualizar estado de botones después del desplazamiento
    setTimeout(checkScrollButtons, 300)
  }

  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-[#013e5e] md:text-4xl/tight">{title}</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">{description}</p>
        </div>
      </div>

      <div className="relative">
        {/* Botón izquierdo */}
        <Button
          variant="outline"
          size="icon"
          className={`absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-1/2 rounded-full bg-white shadow-md border-[#013e5e] text-[#013e5e] hover:bg-[#013e5e] hover:text-white ${
            !canScrollLeft ? "opacity-0 pointer-events-none" : "opacity-100"
          } transition-opacity duration-200`}
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Anterior</span>
        </Button>

        {/* Contenedor del carrusel */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto pb-6 pt-2 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onScroll={checkScrollButtons}
        >
          <div className="flex gap-4 px-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-[420px] snap-start max-w-[400px]"
              >
                <Card className="overflow-hidden transition-all hover:shadow-lg h-full">
                  {/* Imagen en contenedor fijo */}
                  <div className="w-full h-[280px] overflow-hidden bg-[#f8f9fa]">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-fill transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4 flex flex-col justify-between h-[calc(100%-280px)]">
                    <div className="text-balance">
                      <h3 className="font-bold text-[#013e5e]">{product.name}</h3>
                      <p className="mt-2 text-sm text-gray-500 line-clamp-2">{product.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Botón derecho */}
        <Button
          variant="outline"
          size="icon"
          className={`absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-1/2 rounded-full bg-white shadow-md border-[#013e5e] text-[#013e5e] hover:bg-[#013e5e] hover:text-white ${
            !canScrollRight ? "opacity-0 pointer-events-none" : "opacity-100"
          } transition-opacity duration-200`}
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Siguiente</span>
        </Button>
      </div>
    </div>
  )
}
