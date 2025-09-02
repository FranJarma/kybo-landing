import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Product } from "../types";

type ProductCarouselProps = {
  description: string;
  products: Product[];
  title: string;
};

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="flex h-full flex-col overflow-hidden shadow transition-all hover:shadow-lg">
      <div className="relative aspect-square w-full bg-[#f8f9fa]">
        <span className="bg-kybo-orange text-md absolute top-2 right-2 z-10 rounded-full px-3 py-1 leading-5 font-semibold tracking-wider text-white">
          {product.category}
        </span>
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="flex flex-grow flex-col gap-4 p-4">
        <h3 className="text-kybo-blue text-lg font-bold">{product.name}</h3>
        <p className="text-md mt-2 text-gray-500">{product.description}</p>
      </CardContent>
    </Card>
  );
}

function ProductMobileList({ products }: { products: Product[] }) {
  return (
    <div className="hide-scrollbar overflow-x-auto px-4 md:hidden">
      <div className="flex snap-x snap-mandatory flex-nowrap gap-6 scroll-smooth pb-4">
        {products.map((product, index) => (
          <div key={index} className="min-w-[250px] snap-start">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductDesktopList({ products }: { products: Product[] }) {
  const repeated = Array(10).fill(products).flat();

  return (
    <div className="hidden overflow-hidden md:block">
      <div className="animate-scroll flex gap-6 px-4">
        {repeated.map((product, index) => (
          <div key={index} className="w-[300px] flex-shrink-0">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProductCarousel({ description, products, title }: ProductCarouselProps) {
  return (
    <div className="w-full">
      <div className="mb-6 flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-kybo-blue text-3xl font-bold md:text-4xl">{title}</h2>
          <p className="mx-auto max-w-[700px] text-lg text-gray-500 md:text-xl">{description}</p>
        </div>
      </div>

      <ProductMobileList products={products} />
      <ProductDesktopList products={products} />
    </div>
  );
}
