import { ProductCarousel } from "../ui/product-carousel";

const bubbleTeas = [
  {
    name: "No sé que es, pero sabe rico",
    description: "Té verde matcha con leche, dulce y refrescante. ",
    image: "/images/matcha.webp",
  },
  {
    name: "Se nos fué la cabeza",
    description: "Taro cremoso, con notas de vainilla y batata dulce (el caliente? GOD)",
    image: "/images/taro.webp",
  },
  {
    name: "Kybo, the original",
    description: "Té negro infusionado con leche y endulzado al punto perfecto",
    image: "/images/original-kybo.webp",
  },
];

export function BubbleTeas() {
  return (
    <section id="bubble-teas" className="w-full py-18 md:py-24">
      <div className="px-4 md:px-6">
        <ProductCarousel
          products={bubbleTeas}
          title="Nuestros Bubble Teas"
          description="Esto viene de TAIWAN, podés creer? Nosotros tampoco sabíamos... pero qué importa. El tema es que ahora lo tenés acá, y sí, es una f#cking locura. "
        />
      </div>
    </section>
  );
}
