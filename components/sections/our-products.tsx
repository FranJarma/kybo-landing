import { landingSections } from "@/lib/navigation";
import { products } from "@/lib/products";

import { ProductCarousel } from "../product-carousel";
import styles from "../product-carousel.module.css";

export function OurProducts() {
  return (
    <section
      id={landingSections.favorites.id}
      className={`products section-anchor ${styles.section}`}
      aria-labelledby="products-title"
      tabIndex={-1}
    >
      <span id={landingSections.favorites.legacyId} className="anchor-alias" aria-hidden="true" />
      <ProductCarousel products={products} />
    </section>
  );
}
