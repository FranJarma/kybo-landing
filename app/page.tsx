import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Instagram } from "lucide-react"
import { ProductCarousel } from "@/components/product-carousel"
import { TikTokIcon } from "@/components/tiktok-icon"

// Definición de productos
const bubbleTeas = [
  {
    name: "Matcha Bubble Tea",
    description: "Té verde matcha con perlas de tapioca",
    image: "/placeholder.svg?height=300&width=300",
    price: "$850",
  },
  {
    name: "Taro Bubble Tea",
    description: "Cremoso té de taro con perlas de tapioca",
    image: "/placeholder.svg?height=300&width=300",
    price: "$850",
  },
  {
    name: "Frutilla Bubble Tea",
    description: "Refrescante té de frutilla con perlas de tapioca",
    image: "/placeholder.svg?height=300&width=300",
    price: "$850",
  },
  {
    name: "Maracuyá Bubble Tea",
    description: "Exótico té de maracuyá con perlas de tapioca",
    image: "/placeholder.svg?height=300&width=300",
    price: "$850",
  },
  {
    name: "Mango Bubble Tea",
    description: "Dulce té de mango con perlas de tapioca",
    image: "/placeholder.svg?height=300&width=300",
    price: "$850",
  },
  {
    name: "Chocolate Bubble Tea",
    description: "Cremoso té de chocolate con perlas de tapioca",
    image: "/placeholder.svg?height=300&width=300",
    price: "$850",
  },
]

const bubbleWaffles = [
  {
    name: "Waffle Clásico",
    description: "Waffle con helado de vainilla y frutos rojos",
    image: "/placeholder.svg?height=300&width=300",
    price: "$950",
  },
  {
    name: "Waffle Chocolate",
    description: "Waffle con helado de chocolate y salsa de chocolate",
    image: "/placeholder.svg?height=300&width=300",
    price: "$950",
  },
  {
    name: "Waffle Dulce de Leche",
    description: "Waffle con helado de dulce de leche y banana",
    image: "/placeholder.svg?height=300&width=300",
    price: "$950",
  },
  {
    name: "Waffle Frutal",
    description: "Waffle con helado de frutilla y frutas frescas",
    image: "/placeholder.svg?height=300&width=300",
    price: "$950",
  },
  {
    name: "Waffle Oreo",
    description: "Waffle con helado de vainilla y galletas Oreo",
    image: "/placeholder.svg?height=300&width=300",
    price: "$950",
  },
  {
    name: "Waffle Nutella",
    description: "Waffle con helado de chocolate y Nutella",
    image: "/placeholder.svg?height=300&width=300",
    price: "$950",
  },
]

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8f9fa]">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-[#013e5e] backdrop-blur supports-[backdrop-filter]:bg-[#013e5e]/95">
        <div className="flex h-16 items-center justify-between">
          <Link href="#" className="flex items-center gap-2">
            <Image src="/images/logo.webp" alt="Kybo Logo" width={100} height={40} className="h-auto" />
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#bubble-tea" className="text-sm font-medium text-white hover:text-[#ff8000]">
              Bubble Tea
            </Link>
            <Link href="#bubble-waffle" className="text-sm font-medium text-white hover:text-[#ff8000]">
              Bubble Waffle
            </Link>
            <Link href="#ubicacion" className="text-sm font-medium text-white hover:text-[#ff8000]">
              Ubicación
            </Link>
            <Link href="#horarios" className="text-sm font-medium text-white hover:text-[#ff8000]">
              Horarios
            </Link>
          </nav>
          <div className="flex items-center gap-4 md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <span className="sr-only">Menú</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section con diseño disruptivo */}
        <section className="relative overflow-hidden bg-[#013e5e] py-20 md:py-32">
          <div className="absolute inset-0 overflow-hidden">
            {/* Burbujas decorativas */}
            <div className="absolute top-10 left-10 h-20 w-20 rounded-full bg-[#ff8000]/20"></div>
            <div className="absolute top-40 right-20 h-32 w-32 rounded-full bg-[#ff8000]/30"></div>
            <div className="absolute bottom-10 left-1/4 h-24 w-24 rounded-full bg-[#ff8000]/20"></div>
            <div className="absolute top-1/3 right-1/3 h-16 w-16 rounded-full bg-[#ff8000]/30"></div>
            <div className="absolute bottom-20 right-10 h-28 w-28 rounded-full bg-[#ff8000]/20"></div>
          </div>
          <div className="relative px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 text-white">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-wide sm:text-5xl xl:text-6xl/none">
                    Descubre el sabor de la felicidad en cada burbuja
                  </h1>
                  <p className="max-w-[600px] text-white/90 md:text-xl">
                    En Kybo creamos experiencias únicas a través de nuestros Bubble Teas y Bubble Waffles artesanales,
                    elaborados con ingredientes de primera calidad en Salta, Argentina.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-[#ff8000] hover:bg-[#ff8000]/90 text-white" asChild>
                    <Link href="#bubble-tea">Ver Menú</Link>
                  </Button>
                </div>
              </div>
              <div className="relative mx-auto aspect-square w-full max-w-md rounded-full bg-[#ff8000] p-4 shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=350&width=350"
                    width={350}
                    height={350}
                    alt="Bubble Tea Kybo"
                    className="rounded-full object-cover"
                  />
                </div>
                {/* Pajita decorativa */}
                <div className="absolute -right-4 -top-10 h-40 w-8 rotate-12 rounded-full bg-[#013e5e] shadow-lg"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Bubble Tea Section con Carrusel */}
        <section id="bubble-tea" className="w-full py-12 md:py-24">
          <div className="px-4 md:px-6">
            <ProductCarousel
              products={bubbleTeas}
              title="Nuestros Bubble Teas"
              description="Descubre nuestra variedad de Bubble Teas, preparados con ingredientes frescos y perlas de tapioca."
            />
          </div>
        </section>

        {/* Bubble Waffle Section con Carrusel */}
        <section id="bubble-waffle" className="w-full py-12 md:py-24 bg-[#013e5e]/5">
          <div className="px-4 md:px-6">
            <ProductCarousel
              products={bubbleWaffles}
              title="Nuestros Bubble Waffles"
              description="Prueba nuestros deliciosos Bubble Waffles, con su textura única y combinaciones irresistibles."
            />
          </div>
        </section>

        {/* Ubicación y Horarios Section */}
        <section id="ubicacion" className="w-full py-12 md:py-24">
          <div className="px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              {/* Ubicación */}
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full bg-[#013e5e]/10 px-3 py-1 text-sm text-[#013e5e]">
                  <MapPin className="mr-1 h-4 w-4" />
                  Ubicación
                </div>
                <h2 className="text-3xl font-bold text-[#013e5e]">Encuéntranos</h2>
                <p className="text-gray-500">
                  Estamos ubicados en el corazón de Salta, en un espacio acogedor donde podrás disfrutar de nuestros
                  productos.
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

              {/* Horarios */}
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
                    <span className="font-medium">Martes a Sábado</span>
                    <span>08:00 AM - 12:00 AM</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="font-medium">Domingo</span>
                    <span>09:00 AM - 12:00 AM</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="font-medium">Lunes</span>
                    <span>Cerrado</span>
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  <h3 className="text-xl font-bold text-[#013e5e]">Síguenos en Redes Sociales</h3>
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
                <div className="mt-8 rounded-xl bg-gradient-to-br from-[#013e5e] to-[#013e5e]/80 p-6 text-white">
                  <h3 className="text-xl font-bold">¿Tienes alguna pregunta?</h3>
                  <p className="mt-2">
                    Contáctanos por redes sociales o visítanos en nuestra tienda. ¡Estaremos encantados de atenderte!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección decorativa */}
        <section className="relative overflow-hidden bg-[#ff8000] py-16">
          <div className="absolute inset-0 overflow-hidden">
            {/* Burbujas decorativas */}
            <div className="absolute top-10 left-10 h-20 w-20 rounded-full bg-[#013e5e]/20"></div>
            <div className="absolute top-40 right-20 h-32 w-32 rounded-full bg-[#013e5e]/30"></div>
            <div className="absolute bottom-10 left-1/4 h-24 w-24 rounded-full bg-[#013e5e]/20"></div>
          </div>
          <div className="relative px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl/tight">
              ¡Vive la experiencia Kybo!
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-white/90 md:text-xl">
              Sabores únicos, ambiente acogedor y momentos inolvidables te esperan en Kybo.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-12">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex items-center gap-2">
              <Image src="/images/logo.webp" alt="Kybo Logo" width={80} height={32} className="h-auto" />
            </div>
            <p className="text-sm text-gray-500">Kybo © {new Date().getFullYear()} - Todos los derechos reservados</p>
            <div className="flex gap-4">
              <Link href="#bubble-tea" className="text-xs text-[#013e5e] hover:text-[#ff8000]">
                Bubble Tea
              </Link>
              <Link href="#bubble-waffle" className="text-xs text-[#013e5e] hover:text-[#ff8000]">
                Bubble Waffle
              </Link>
              <Link href="#ubicacion" className="text-xs text-[#013e5e] hover:text-[#ff8000]">
                Ubicación
              </Link>
              <Link href="#horarios" className="text-xs text-[#013e5e] hover:text-[#ff8000]">
                Horarios
              </Link>
            </div>
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/kybo.arg/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#013e5e] hover:text-[#ff8000]"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.tiktok.com/@kybo.arg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#013e5e] hover:text-[#ff8000]"
              >
                <TikTokIcon className="h-5 w-5" />
                <span className="sr-only">TikTok</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
