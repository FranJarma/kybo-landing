"use client";

import { type CarouselProduct, productCategories, type ProductCategory } from "@/lib/products";

import styles from "./product-carousel.module.css";

export type ProductFilter = ProductCategory | "all";

export function ProductCategoryFilters({
  onSelect,
  products,
  selected,
}: {
  onSelect: (category: ProductFilter) => void;
  products: readonly CarouselProduct[];
  selected: ProductFilter;
}) {
  const categories = [{ id: "all" as const, label: "Todos" }, ...productCategories];
  return (
    <div className={styles.filters} role="group" aria-label="Filtrar productos por categoría">
      {categories.map(category => (
        <button
          key={category.id}
          type="button"
          aria-pressed={selected === category.id}
          onClick={event => {
            onSelect(category.id);
            event.currentTarget.scrollIntoView({ block: "nearest", inline: "nearest" });
          }}
        >
          {category.label} ·{" "}
          {category.id === "all"
            ? products.length
            : products.filter(product => product.category === category.id).length}
        </button>
      ))}
    </div>
  );
}
