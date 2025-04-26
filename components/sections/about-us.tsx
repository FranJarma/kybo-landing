import { Clock, Instagram, Link, MapPin } from "lucide-react";
import { TikTokIcon } from "../tiktok-icon";

export function AboutUs() {
    return (
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
    )
}