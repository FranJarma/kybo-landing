import { ProductCarousel } from "../ui/product-carousel";

const bubbleWaffles = [
    {
      name: "No lo entenderías",
      description: "Masa de choco oreo, servido con Nutella, frutas frescas y bañado con crema chantilly (una locura)",
      image: "/images/no-lo-entenderias.webp"
    },
    {
      name: "Éste (por fa)",
      description: "Masa dulce, con crema chantilly y mermelada casera de frutos rojos",
      image: "/images/este-porfa.webp"
    },
    {
      name: "Tranqui, pero va",
      description: "Masa común o de chipa, jamón natural & queso fundido",
      image: "/images/tranqui-pero-va.webp"
    },
    {
      name: "¿Esto está chequeado?",
      description: "Masa común o de chipa, jamón ibérico, tomate cherry y queso fundido",
      image: "/images/esto-esta-chequeado.webp"
    },
    {
      name: "Dos, please",
      description: "Huevo y palta con un toque de pimienta negra.",
      image: "/images/dos-please.webp"
    }
];

export function BubbleWaffles() {
    return (
        <section id="bubble-waffles" className="w-full py-12 md:py-24 bg-[#013e5e]/5">
            <div className="px-4 md:px-6">
            <ProductCarousel
                products={bubbleWaffles}
                title="Nuestros Bubble Waffles"
                description="Te retamos a probar nuestros Bubble Waffles, con su textura única y combinaciones irresistibles."
            />
            </div>
        </section>   
    )
}