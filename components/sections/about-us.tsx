import { ArrowUpRight, MapPin } from "lucide-react";

import { landingSections } from "@/lib/navigation";
export function AboutUs() {
  return (
    <section
      id={landingSections.location.id}
      className="location section-pad section-anchor"
      aria-labelledby="location-title"
      tabIndex={-1}
    >
      <span id={landingSections.location.legacyId} className="anchor-alias" aria-hidden="true" />
      <div className="shell">
        <div className="location-grid">
          <div>
            <MapPin size={32} aria-hidden="true" />
            <h2 id="location-title">
              En plena
              <br />
              peatonal salteña.
            </h2>
            <address>Alberdi 143, Salta, Argentina.</address>
            <p>
              En el centro de Salta la Linda. Pasá por tu bubble tea, hacé una pausa y quedate un
              ratito en el mundo Kybo.
            </p>
            <a
              className="action"
              href="https://www.google.com/maps/search/?api=1&query=Alberdi+143+Salta+Argentina"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cómo llegar <ArrowUpRight size={20} />
            </a>
          </div>
          <div className="hours" id="horarios">
            <h3>Nos vemos por acá</h3>
            <p>Ojito con los horarios, para que no te quedes con las ganas.</p>
            <dl>
              <div>
                <dt>Lunes a sábado</dt>
                <dd>
                  <time dateTime="08:00">08:00</time> a <time dateTime="12:00">12:00</time>
                  <br />
                  <time dateTime="16:30">16:30</time> a <time dateTime="20:30">20:30</time>
                </dd>
              </div>
              <div>
                <dt>Domingo</dt>
                <dd>Cerrado, pa.</dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="map-frame" id="ubication">
          <iframe
            src="https://maps.google.com/maps?q=Alberdi%20143%2C%20Salta%2C%20Argentina&output=embed"
            title="Mapa de Kybo en Alberdi 143, Salta"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
