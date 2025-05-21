export function AboutUs() {
  return (
    <section id="nosotros" aria-labelledby="about-us-heading" className="w-full pt-18 md:pt-24">
      <div className="px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 id="about-us-heading" className="text-kybo-blue text-3xl font-bold">
              ¿Y... Dónde estamos?
            </h2>
            <address className="tracking-wide text-gray-500 not-italic">
              Cerca de la cancha de GyT, en{" "}
              <a
                href="https://maps.app.goo.gl/z8hkvExnN4TuhwQD9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-kybo-orange underline"
              >
                Rivadavia 394, Salta
              </a>
            </address>
          </div>

          <div id="horarios" className="space-y-4" aria-labelledby="horarios-heading">
            <h2 id="horarios-heading" className="text-kybo-orange text-3xl font-bold">
              Todo muy lindo pero... ¿cuándo abrimos?
            </h2>
            <p className="tracking-wide text-gray-500">
              Ojito con los días y horarios que abrimos para que no te quedes con las ganas de
              disfrutar de nuestros sabores.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="font-medium">Lunes a Sábado</span>
                <span>
                  <time dateTime="08:00">08:00</time> - <time dateTime="12:00">12:00</time>
                </span>
                <span>
                  <time dateTime="17:00">17:00</time> - <time dateTime="21:00">21:00</time>
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="font-medium">Domingo</span>
                <span>Cerrado pa</span>
              </div>
            </div>
          </div>
        </div>

        <figure
          id="ubication"
          className="mt-10 aspect-video max-h-96 w-full overflow-hidden rounded-xl border shadow-sm"
          aria-label="Ubicación en el mapa"
        >
          <iframe
            title="Ubicación de Kybo en Salta"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.0394612335247!2d-65.41252492374788!3d-24.78911177870721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc3a35a3a0c3f%3A0x1d9c3c7c6e8b4e4a!2sRivadavia%20349%2C%20A4400%20Salta!5e0!3m2!1ses!2sar!4v1682456789012!5m2!1ses!2sar"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          />
          <figcaption className="sr-only">Ubicación del local en Google Maps</figcaption>
        </figure>
      </div>
    </section>
  );
}
