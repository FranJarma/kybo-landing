import { landingSections } from "@/lib/navigation";

import { ProductCarousel } from "../product-carousel";
import { CategoryEnum, Product } from "../types";
const ourProducts: Product[] = [
  {
    name: "Kybo Shake",
    description: "El de la foto: Oreo. Un antojo para tomar bien frío.",
    image: "kybo-shake",
  },
  {
    name: "Bubble Sunrise",
    description: "Té chai, frutos rojos, naranja y perlas explosivas de mango.",
    image: "bubble-sunrise",
  },
  {
    name: "Blueberry Bubble",
    description: "Té chai, maracuyá, naranja y perlas explosivas de arándanos.",
    image: "blueberry-bubble",
  },
  {
    name: "Kybo Frozen",
    description: "El de la foto: mango y durazno. Bien fresco, bien Kybo.",
    image: "kybo-frozen",
  },
  {
    name: "Kybo Soft",
    description: "El de la foto: frutilla. Para darle una pausa dulce al día.",
    image: "kybo-soft",
  },
  {
    name: "Waffle de chipá",
    description: "Classic: el famoso y popular jamón y queso.",
    image: "waffle-chipa",
  },
  {
    name: "Taro Iced Latte",
    description: "Taro cremoso, con notas de vainilla y batata dulce.",
    image: "taro-iced-latte",
  },
  {
    name: "Matcha Iced Latte",
    description: "Té verde matcha con leche, dulce y refrescante.",
    image: "matcha-iced-latte",
  },
  {
    name: "Blue Matcha Iced Latte",
    description: "Tu próximo favorito puede ser azul. Descubrilo en el menú.",
    image: "blue-matcha-iced-latte",
  },
].map(p => ({
  ...p,
  image: `/images/products/${p.image}.webp`,
  category: CategoryEnum.BUBBLE_AND_JELLY,
}));
export function OurProducts() {
  return (
    <section
      id={landingSections.favorites.id}
      className="products section-pad section-anchor"
      aria-labelledby="products-title"
      tabIndex={-1}
    >
      <span id={landingSections.favorites.legacyId} className="anchor-alias" aria-hidden="true" />
      <div className="shell">
        <ProductCarousel
          products={ourProducts}
          title="¿Cuál te tienta hoy?"
          description="Una mordida, un sorbo y chao. Encontrá ese sabor que te cambia el día."
        />
      </div>
    </section>
  );
}
