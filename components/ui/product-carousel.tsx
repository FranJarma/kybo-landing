"use client";

import Image from "next/image";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/useIsMobile";
import clsx from "clsx";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

interface Product {
  name: string;
  description: string;
  image: string;
}

interface ProductCarouselProps {
  products: Product[];
  title: string;
  description: string;
}

export function ProductCarousel({ products, title, description }: ProductCarouselProps) {
  const isMobile = useIsMobile();
  const scrollRef = useRef<HTMLDivElement>(null);

  const productsToRender = isMobile
    ? products
    : [...products, ...products, ...products, ...products];

  const scrollBy = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = 300;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="mb-6 flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-kybo-blue text-3xl font-bold md:text-4xl">{title}</h2>
          <p className="mx-auto max-w-[700px] text-lg text-gray-500 md:text-xl">{description}</p>
        </div>
      </div>

      <div className="group relative w-full overflow-hidden">
        <div
          ref={scrollRef}
          className={clsx(
            "flex gap-6 px-4",
            isMobile
              ? "hide-scrollbar snap-x snap-mandatory overflow-x-auto scroll-smooth"
              : "animate-scroll",
          )}
        >
          {productsToRender.map((product, index) => (
            <div
              key={index}
              className={clsx("w-[250px] flex-shrink-0 md:w-[300px]", isMobile && "snap-start")}
            >
              <Card className="flex h-full flex-col overflow-hidden shadow transition-all hover:shadow-lg">
                <div className="relative aspect-[4/3] w-full bg-[#f8f9fa]">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <CardContent className="flex flex-grow flex-col p-4">
                  <h3 className="text-kybo-blue text-lg font-bold">{product.name}</h3>
                  <p className="text-md mt-2 text-gray-500">{product.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {isMobile && (
        <div className="mt-4 flex justify-center gap-4">
          <Button
            className="bg-kybo-blue hover:bg-kybo-orange w-10 cursor-pointer rounded-full text-white"
            onClick={() => scrollBy("left")}
            variant="outline"
          >
            <BiChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            className="bg-kybo-blue hover:bg-kybo-orange w-10 cursor-pointer rounded-full text-white"
            onClick={() => scrollBy("right")}
            variant="outline"
          >
            <BiChevronRight className="h-6 w-6" />
          </Button>
        </div>
      )}
    </div>
  );
}
