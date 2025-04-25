import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Instagram } from "lucide-react"
import { ProductCarousel } from "@/components/product-carousel"
import { TikTokIcon } from "@/components/tiktok-icon"

// Definición de productos
const bubbleTeas = [
  {
    name: "No sé que es, pero sabe rico",
    description: "Té verde matcha con leche, dulce y refrescante. ",
    image: "/images/matcha.webp"
  },
  {
    name: "Se nos fué la cabeza",
    description: "Taro cremoso, con notas de vainilla y batata dulce",
    image: "/images/taro.webp"
  },
  {
    name: "Kybo, the original",
    description: "Té negro infusionado con leche y endulzado al punto perfecto",
    image: "/images/original-kybo.webp"
  },
]

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
]

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8f9fa]">
      <header className="sticky top-0 z-50 w-full bg-[#013e5e] transition-all">
        <div className="flex h-16 items-center justify-between">
          <Link href="#" className="flex items-center gap-2 ml-4">
            <Image src="/images/logo2.webp" alt="Kybo Logo" width={100} height={50} className="h-auto" />
          </Link>
          <nav className="flex gap-6 mr-4">
            <Link href="#bubble-tea" className="text-sm md:text-lg font-medium text-white hover:text-[#ff8000]">
              Bubble Teas
            </Link>
            <Link href="#bubble-waffle" className="text-sm md:text-lg font-medium text-white hover:text-[#ff8000]">
              Bubble Waffles
            </Link>
            <Link href="#nosotros" className="text-sm md:text-lg font-medium text-white hover:text-[#ff8000]">
              Nosotros
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden bg-[#013e5e] py-20 md:py-32">
          <div className="absolute inset-0 overflow-hidden">
            <div className="bubble"></div>
            <div className="bubble absolute top-10 left-10 h-20 w-20 rounded-full bg-[#ff8000]/20"></div>
            <div className="bubble absolute top-40 right-20 h-32 w-32 rounded-full bg-[#ff8000]/30"></div>
            <div className="bubble absolute bottom-10 left-1/4 h-24 w-24 rounded-full bg-[#ff8000]/20"></div>
            <div className="bubble absolute top-1/3 right-1/3 h-16 w-16 rounded-full bg-[#ff8000]/30"></div>
            <div className="bubble absolute bottom-20 right-10 h-28 w-28 rounded-full bg-[#ff8000]/20"></div>
            <div className="bubble absolute top-20 right-50 h-32 w-32 rounded-full bg-[#ff8000]/30"></div>
            <div className="bubble absolute bottom-40 left-1/2 h-24 w-24 rounded-full bg-[#ff8000]/20"></div>
          </div>
          <div className="relative px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 text-white">
                <div className="space-y-2 md:max-w-8/12">
                  <h1 className="text-4xl font-bold tracking-wide sm:text-5xl xl:text-6xl/none">
                    Descubrí el sabor de la felicidad junto a <span className="text-[#ff8000]">Kybo</span>
                  </h1>
                  <p className="tracking-wide text-white/90 md:text-xl">
                    Nos preocupamos por crear experiencias únicas a través de nuestros Bubble Teas y Bubble Waffles artesanales,
                    elaborados con ingredientes de primera calidad en Salta, Argentina.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-[#ff8000] hover:bg-[#ff8000]/90 text-white text-lg" asChild>
                    <Link target="_blank" href="https://menu.fu.do/kybo">Ver Menú</Link>
                  </Button>
                  <Button size="lg" className="text-lg outline-[#ff8000]" variant="outline" asChild>
                    <Link target="_blank" href="https://menu.fu.do/kybo">Mi tarjeta de puntos</Link>
                  </Button>
                </div>
              </div>
              <div className="hidden md:block relative mx-auto aspect-square w-full max-w-md rounded-full bg-[#ff8000] p-4 shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/images/mona-lisa.webp"
                    width={350}
                    height={350}
                    alt="Bubble Tea Kybo"
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="absolute -right-4 -top-10 h-40 w-8 rotate-12 rounded-full bg-[#013e5e] shadow-lg"></div>
              </div>
            </div>
          </div>
        </section>

        <section id="bubble-tea" className="w-full py-12 md:py-24">
          <div className="px-4 md:px-6">
            <ProductCarousel
              products={bubbleTeas}
              title="Nuestros Bubble Teas"
              description="Tenemos una amplia variedad de Bubble Teas, preparados con ingredientes frescos y perlas de tapioca."
            />
          </div>
        </section>

        <section id="bubble-waffle" className="w-full py-12 md:py-24 bg-[#013e5e]/5">
          <div className="px-4 md:px-6">
            <ProductCarousel
              products={bubbleWaffles}
              title="Nuestros Bubble Waffles"
              description="Te retamos a probar nuestros Bubble Waffles, con su textura única y combinaciones irresistibles."
            />
          </div>
        </section>

        <section id="nosotros" className="w-full py-12 md:py-24">
          <div className="px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full bg-[#013e5e]/10 px-3 py-1 text-sm text-[#013e5e]">
                  <MapPin className="mr-1 h-4 w-4" />
                  Ubicación
                </div>
                <h2 className="text-3xl font-bold text-[#013e5e]">¿Dónde nos encontrás?</h2>
                <p className="text-gray-500">
                  Estamos ubicados en el corazón de Salta, en un espacio acogedor donde podrás disfrutar de nuestros
                  productos y al mismo tiempo relajarte y vivir una experiencia única.
                </p>
                <div className="font-medium">Rivadavia 349A, Salta, Argentina</div>
                <div className="aspect-video overflow-hidden rounded-xl border shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.0394612335247!2d-65.41252492374788!3d-24.78911177870721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc3a35a3a0c3f%3A0x1d9c3c7c6e8b4e4a!2sRivadavia%20349%2C%20A4400%20Salta!5e0!3m2!1ses!2sar!4v1682456789012!5m2!1ses!2sar"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full"
                  ></iframe>
                </div>
              </div>

              <div id="horarios" className="space-y-4">
                <div className="inline-flex items-center rounded-full bg-[#ff8000]/10 px-3 py-1 text-sm text-[#ff8000]">
                  <Clock className="mr-1 h-4 w-4" />
                  Horarios
                </div>
                <h2 className="text-3xl font-bold text-[#ff8000]">Horarios de Atención</h2>
                <p className="text-gray-500">
                  Visítanos en nuestros horarios de atención y disfruta de la experiencia Kybo.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="font-medium">Lunes a Sábado</span>
                    <span>08:00 AM - 12:00 AM</span>
                    <span>17:00 PM - 21:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="font-medium">Domingo</span>
                    <span>Cerrado pa</span>
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  <h3 className="text-xl font-bold text-[#013e5e]">Seguinos en nuestras redes sociales, subimos contenido que te va a encantar</h3>
                  <div className="flex space-x-4">
                    <Link
                      href="https://www.instagram.com/kybo.arg/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#013e5e] text-white hover:bg-[#013e5e]/90"
                    >
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link
                      href="https://www.tiktok.com/@kybo.arg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ff8000] text-white hover:bg-[#ff8000]/90"
                    >
                      <TikTokIcon className="h-5 w-5" />
                      <span className="sr-only">TikTok</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#ff8000] py-16">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 h-20 w-20 rounded-full bg-[#013e5e]/20"></div>
            <div className="absolute top-40 right-20 h-32 w-32 rounded-full bg-[#013e5e]/30"></div>
            <div className="absolute bottom-10 left-1/4 h-24 w-24 rounded-full bg-[#013e5e]/20"></div>
          </div>
          <div className="relative px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl/tight">
              ¡Viví una experiencia única, diferente.. la experiencia Kybo!
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-white/90 md:text-xl">
              Sabores únicos, ambiente acogedor y momentos inolvidables te esperan en este lugar mágico. No te lo podés perder.
            </p>
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-6 md:py-12">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex items-center gap-2">
              <Image src="/images/logo1.webp" alt="Kybo Logo" width={100} height={32} className="h-auto" />
            </div>
            <p className="text-md text-gray-500">Kybo © {new Date().getFullYear()} - Todos los derechos reservados</p>
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/kybo.arg/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#013e5e] hover:text-[#ff8000]"
              >
                <Instagram className="h-7 s-7" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.tiktok.com/@kybo.arg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#013e5e] hover:text-[#ff8000]"
              >
                <TikTokIcon className="h-7 s-7" />
                <span className="sr-only">TikTok</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
