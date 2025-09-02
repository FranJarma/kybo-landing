import { CategoryEnum, Product } from "../types";
import { ProductCarousel } from "../ui/product-carousel";

const ourProducts: Product[] = [
  {
    name: "Frutella",
    description:
      "Masa de vainilla o choco, servido con Nutella, frutas frescas y bañado con crema chantilly",
    image: "/images/frutella.webp",
    category: CategoryEnum.SWEET_WAFFLE,
  },
  {
    name: "Banana Split",
    description:
      "Masa de vainilla o choco, con crema chantilly, dulce de leche y rodajas de banana",
    image: "/images/bananasplit.webp",
    category: CategoryEnum.SWEET_WAFFLE,
  },
  {
    name: "Frozono",
    description: "Masa de vainilla o choco, con helado y topppings",
    image: "/images/frozono.webp",
    category: CategoryEnum.SWEET_WAFFLE,
  },
  {
    name: "Classic",
    description: "El famoso y popular: jamón y queso",
    image: "/images/classic.webp",
    category: CategoryEnum.SALTY_WAFFLE,
  },
  {
    name: "Distinto",
    description: "Jamón crudo, rúcula y queso",
    image: "/images/distinto.webp",
    category: CategoryEnum.SALTY_WAFFLE,
  },
  {
    name: "+ Fit que Fat",
    description: "Huevo y palta con un toque de pimienta negra y aceite de oliva",
    image: "/images/masfitquefat.webp",
    category: CategoryEnum.SALTY_WAFFLE,
  },
  {
    name: "Pinky",
    description: "Mortadella, crema de pesto y tomate",
    image: "/images/pinky.webp",
    category: CategoryEnum.SALTY_WAFFLE,
  },
  {
    name: "Matcha Iced Latte",
    description: "Té verde matcha con leche, dulce y refrescante. ",
    image: "/images/matchaicedlatte.webp",
    category: CategoryEnum.BUBBLE_AND_JELLY,
  },
  {
    name: "Taro Iced Latte",
    description: "Taro cremoso, con notas de vainilla y batata dulce (el caliente? GOD)",
    image: "/images/taroicedlatte.webp",
    category: CategoryEnum.BUBBLE_AND_JELLY,
  },
  {
    name: "Kybo Tea",
    description: "Té negro infusionado con leche y endulzado al punto perfecto",
    image: "/images/kybotea.webp",
    category: CategoryEnum.BUBBLE_AND_JELLY,
  },
  {
    name: "Mango Bubble Sunrise",
    description:
      "Té de ceylon con jugo de durazno fresco, pulpa de frutilla y perlas explosivas de mango",
    image: "/images/mangobubblesunrise.webp",
    category: CategoryEnum.SUMMER_WITH_KYBO,
  },
  {
    name: "Blueberry Bubble Passion",
    description:
      "Té de ceylon con jugo de naranja fresco, pulpa de maracuyá y perlas explosivas de arándanos",
    image: "/images/kybotea.webp",
    category: CategoryEnum.SUMMER_WITH_KYBO,
  },
];

export function OurProducts() {
  return (
    <section id="nuestros-productos" className="bg-kybo-blue/5 w-full py-18 md:py-24">
      <div className="px-4 md:px-6">
        <ProductCarousel
          products={ourProducts}
          title="Nuestros productos"
          description="Una mordida y/o sorbo y chao. Se te reinicia el cerebro, encima con combinaciones que ni tu abuela se animaría a mezclar, pero nosotros sí."
        />
      </div>
    </section>
  );
}
