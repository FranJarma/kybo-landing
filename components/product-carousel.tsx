"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

import { Product } from "./types";
type ProductCarouselProps = { description: string; products: Product[]; title: string };
export function ProductCarousel({ description, products, title }: ProductCarouselProps) {
  const rail = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });
  const update = () => {
    const el = rail.current;
    if (el)
      setEdges({
        start: el.scrollLeft < 4,
        end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
      });
  };
  const move = (direction: number) => {
    const el = rail.current;
    if (el)
      el.scrollBy({
        left: direction * ((el.firstElementChild?.getBoundingClientRect().width ?? 320) + 24),
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
  };
  return (
    <div>
      <div className="section-heading">
        <div>
          <h2 id="products-title">{title}</h2>
          <p>{description}</p>
        </div>
        <div className="carousel-controls">
          <button
            className="round-button"
            onClick={() => move(-1)}
            disabled={edges.start}
            aria-label="Productos anteriores"
            aria-controls="product-list"
          >
            <ArrowLeft />
          </button>
          <button
            className="round-button"
            onClick={() => move(1)}
            disabled={edges.end}
            aria-label="Productos siguientes"
            aria-controls="product-list"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
      <ul
        id="product-list"
        ref={rail}
        onScroll={update}
        className="product-rail"
        tabIndex={0}
        aria-label="Nuestros nueve productos; desplazate para explorar"
      >
        {products.map(product => (
          <li key={product.name} className="product-card">
            <div className="product-photo">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width:700px) 80vw, 360px"
              />
            </div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
