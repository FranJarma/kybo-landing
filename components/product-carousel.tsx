"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

import { type CarouselProduct, productCategories, type ProductCategory } from "@/lib/products";

import styles from "./product-carousel.module.css";

function ProductCard({ product }: { product: CarouselProduct }) {
  return (
    <li className={styles.card}>
      <h3>{product.name}</h3>
      <div className={styles.visual}>
        <span
          className={styles.circle}
          style={{ backgroundColor: product.color }}
          aria-hidden="true"
        />
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1440px) 352px, (min-width: 1024px) 28vw, (min-width: 640px) 40vw, 85vw"
        />
      </div>
      <p>{product.description}</p>
    </li>
  );
}

function ProductRail({
  category,
  products,
}: {
  category: string;
  products: readonly CarouselProduct[];
}) {
  const rail = useRef<HTMLUListElement>(null);
  const id = useId();
  const [position, setPosition] = useState({ start: true, end: true, first: 1, last: 1 });

  useEffect(() => {
    const element = rail.current;
    if (!element) return;
    const update = () => {
      const card = element.firstElementChild;
      if (!card) return;
      const gap = Number.parseFloat(getComputedStyle(element).columnGap) || 0;
      const step = card.getBoundingClientRect().width + gap;
      const first = Math.round(element.scrollLeft / step) + 1;
      const visible = Math.round((element.clientWidth + gap) / step);
      const nextPosition = {
        start: element.scrollLeft < 2,
        end: element.scrollLeft + element.clientWidth >= element.scrollWidth - 2,
        first,
        last: Math.min(products.length, first + visible - 1),
      };
      setPosition(current =>
        current.start === nextPosition.start &&
        current.end === nextPosition.end &&
        current.first === nextPosition.first &&
        current.last === nextPosition.last
          ? current
          : nextPosition,
      );
    };
    const observer = new ResizeObserver(update);
    observer.observe(element);
    element.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      observer.disconnect();
      element.removeEventListener("scroll", update);
    };
  }, [products]);

  const move = (direction: number) => {
    const element = rail.current;
    if (!element) return;
    const gap = Number.parseFloat(getComputedStyle(element).columnGap) || 0;
    element.scrollBy({
      left: direction * (element.clientWidth + gap),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  };

  return (
    <>
      <div
        className={styles.carousel}
        role="region"
        aria-roledescription="carrusel"
        aria-label={category}
      >
        <button
          className={styles.previous}
          onClick={() => move(-1)}
          disabled={position.start}
          aria-label="Productos anteriores"
          aria-controls={id}
        >
          <ArrowLeft aria-hidden="true" />
        </button>
        <ul
          id={id}
          ref={rail}
          className={styles.rail}
          tabIndex={0}
          aria-label={`Productos de ${category}`}
          onKeyDown={event => {
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault();
              move(event.key === "ArrowLeft" ? -1 : 1);
            }
          }}
        >
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
        <button
          className={styles.next}
          onClick={() => move(1)}
          disabled={position.end}
          aria-label="Productos siguientes"
          aria-controls={id}
        >
          <ArrowRight aria-hidden="true" />
        </button>
      </div>
      <p className={styles.status} role="status" aria-live="polite" aria-atomic="true">
        <span aria-hidden="true">Recorré la carta · {products.length} opciones</span>
        <span className={styles.srOnly}>
          {category}: productos {position.first} a {position.last} de {products.length}.
        </span>
      </p>
    </>
  );
}

export function ProductCarousel({ products }: { products: readonly CarouselProduct[] }) {
  const [category, setCategory] = useState<ProductCategory | "all">("all");
  const categories = [{ id: "all" as const, label: "Todos" }, ...productCategories];
  const filteredProducts =
    category === "all" ? products : products.filter(product => product.category === category);
  const categoryLabel = categories.find(item => item.id === category)!.label;
  return (
    <div className={styles.container}>
      <header className={styles.heading}>
        <h2 id="products-title">
          ¿Cuál te tienta <span>hoy?</span>
        </h2>
        <p>Una mordida, un sorbo y chao. Encontrá ese sabor que te cambia el día.</p>
      </header>
      <div className={styles.filters} role="group" aria-label="Filtrar productos por categoría">
        {categories.map(item => (
          <button
            key={item.id}
            type="button"
            aria-pressed={category === item.id}
            onClick={event => {
              setCategory(item.id);
              event.currentTarget.scrollIntoView({ block: "nearest", inline: "nearest" });
            }}
          >
            {item.label} ·{" "}
            {item.id === "all"
              ? products.length
              : products.filter(product => product.category === item.id).length}
          </button>
        ))}
      </div>
      <ProductRail key={category} products={filteredProducts} category={categoryLabel} />
      <div className={styles.customization}>
        <h3>Tu Kybo, a tu manera.</h3>
        <p>Elegí tus perlas, sumá tu salsa y encontrá tu combinación.</p>
      </div>
    </div>
  );
}
