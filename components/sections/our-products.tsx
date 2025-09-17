import { ProductCarousel } from "../product-carousel";
import { CategoryEnum, Product } from "../types";

const ourProducts: Product[] = [
  {
    name: "Kybo cream",
    description: "Masa de vainilla o choco, con crema chantilly y toppings",
    image: "/images/kybocream.webp",
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
    description: "El famoso y popular: jamón y queso.",
    image: "/images/classic.webp",
    category: CategoryEnum.SALTY_WAFFLE,
  },
  {
    name: "Distinto",
    description: "Jamón crudo, rúcula y queso.",
    image: "/images/distinto.webp",
    category: CategoryEnum.SALTY_WAFFLE,
  },
  {
    name: "Pinky",
    description: "Mortadella, crema de pesto, tomate y queso.",
    image: "/images/pinky.webp",
    category: CategoryEnum.SALTY_WAFFLE,
  },
  {
    name: "Matcha Iced Latte",
    description: "Té verde matcha con leche, dulce y refrescante.",
    image: "/images/matchaicedlatte.webp",
    category: CategoryEnum.BUBBLE_AND_JELLY,
  },
  {
    name: "Coffee Iced Latte",
    description: "Café de especialidad con leche, especial para tu pre entreno.",
    image: "/images/coffeeicedlatte.webp",
    category: CategoryEnum.BUBBLE_AND_JELLY,
  },
  {
    name: "Taro Iced Latte",
    description: "Taro cremoso, con notas de vainilla y batata dulce.",
    image: "/images/taroicedlatte.webp",
    category: CategoryEnum.BUBBLE_AND_JELLY,
  },
  {
    name: "Kybo Tea",
    description: "Té Chai infusionado con leche y endulzado al punto perfecto.",
    image: "/images/kybotea.webp",
    category: CategoryEnum.BUBBLE_AND_JELLY,
  },
  {
    name: "Bubble Sunrise",
    description:
      "Té chai con mucho hielo, pulpa de frutos rojos, jugo de naranja y perlas explosivas de mango.",
    image: "/images/mangobubblesunrise.webp",
    category: CategoryEnum.EXPLOSIVE_TEA,
  },
  {
    name: "Blueberry Bubble",
    description:
      "Té chai con mucho hielo, pulpa de maracuyá, jugo de naranja y perlas explosivas de arándanos.",
    image: "/images/blueberrybubble.webp",
    category: CategoryEnum.EXPLOSIVE_TEA,
  },
];

export function OurProducts() {
  return (
    <section id="nuestros-productos" className="bg-kybo-blue/5 w-full py-32 md:py-48">
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
