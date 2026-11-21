import { landingSections } from "@/lib/navigation";
import { products } from "@/lib/products";

import { ProductCarousel } from "../product-carousel";

export function OurProducts() {
  return (
    <section
      id={landingSections.favorites.id}
      className="products section-pad section-anchor"
      aria-labelledby="products-title"
      tabIndex={-1}
    >
      <span id={landingSections.favorites.legacyId} className="anchor-alias" aria-hidden="true" />
      <ProductCarousel products={products} />
    </section>
  );
}
