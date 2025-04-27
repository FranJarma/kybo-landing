export function AboutUs() {
    return (
        <section id="nosotros" className="w-full pt-12 md:pt-24">
        <div className="px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#013e5e]">¿Y... Dónde estamos?</h2>
              <p className="text-gray-500 tracking-wide">
                Estamos ubicados en el corazón de Salta, en un espacio clave para que puedas disfrutar de nuestros
                productos y al mismo tiempo relajarte y vivir una experiencia única.
              </p>
              <div className="font-medium">Rivadavia 349A, Salta, Argentina</div>
            </div>

            <div id="horarios" className="space-y-4">
              <h2 className="text-3xl font-bold text-[#ff8000]">Todo muy lindo pero... ¿cuando abrimos?</h2>
              <p className="text-gray-500 tracking-wide">
                Ojito con los días y horarios que abrimos para que no te quedes con las ganas de disfrutar de nuestros sabores.
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
            </div>
          </div>
          <div id="ubication" className="aspect-video overflow-hidden rounded-xl border shadow-sm mt-10 max-h-96 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.0394612335247!2d-65.41252492374788!3d-24.78911177870721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc3a35a3a0c3f%3A0x1d9c3c7c6e8b4e4a!2sRivadavia%20349%2C%20A4400%20Salta!5e0!3m2!1ses!2sar!4v1682456789012!5m2!1ses!2sar"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            ></iframe>
          </div>
        </div>
      </section>
    )
}