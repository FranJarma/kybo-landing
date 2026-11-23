import Image from "next/image";
import type { CSSProperties } from "react";

import type { CarouselProduct } from "@/lib/products";

import styles from "./product-carousel.module.css";

export function ProductCard({ product }: { product: CarouselProduct }) {
  return (
    <li
      className={styles.card}
      data-product-id={product.id}
      style={{ "--product-color": product.color } as CSSProperties}
    >
      <svg className={styles.cardOutline} aria-hidden="true" focusable="false">
        <rect className={styles.cardTrace} x="2" y="2" rx="14" pathLength="1" />
      </svg>
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
          sizes="(min-width: 1376px) 350px, (min-width: 1024px) calc((100vw - 326px) / 3), (min-width: 640px) calc((100vw - 252px) / 2), calc(100vw - 98px)"
        />
      </div>
      <p>{product.description}</p>
    </li>
  );
}
