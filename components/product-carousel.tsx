"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useId, useState } from "react";

import { useProductRail } from "@/hooks/use-product-rail";
import { type CarouselProduct, productCategories } from "@/lib/products";

import { ProductCard } from "./product-card";
import styles from "./product-carousel.module.css";
import { ProductCategoryFilters, type ProductFilter } from "./product-category-filters";

function ProductRail({
  category,
  products,
}: {
  category: string;
  products: readonly CarouselProduct[];
}) {
  const id = useId();
  const { move, position, rail } = useProductRail(products.length);

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
          onClick={() => move("previous")}
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
          data-lenis-prevent-horizontal
          tabIndex={0}
          aria-label={`Productos de ${category}`}
          onKeyDown={event => {
            if (event.altKey || event.ctrlKey || event.metaKey) return;
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault();
              move(event.key === "ArrowLeft" ? "previous" : "next");
            } else if (event.key === "Home" || event.key === "End") {
              event.preventDefault();
              move(event.key === "Home" ? "first" : "last");
            }
          }}
        >
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
        <button
          className={styles.next}
          onClick={() => move("next")}
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
  const [category, setCategory] = useState<ProductFilter>("all");
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
        <p>
          Una mordida, un sorbo y chao. <br className={styles.mobileBreak} />
          Encontrá ese sabor que te cambia el día.
        </p>
      </header>
      <ProductCategoryFilters products={products} selected={category} onSelect={setCategory} />
      <ProductRail key={category} products={filteredProducts} category={categoryLabel} />
      <div className={styles.customization}>
        <h3>Tu Kybo, a tu manera.</h3>
        <p>Elegí tus perlas, sumá tu salsa y encontrá tu combinación.</p>
      </div>
    </div>
  );
}
