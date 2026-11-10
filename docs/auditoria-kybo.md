# Auditoría y cambios de Kybo · 5 noviembre 2026

Alcance: código local, contenido, SEO técnico, UI, accesibilidad y diseño responsive. No hay acceso a Search Console ni métricas de tráfico. La web pública no pudo consultarse desde la herramienta de búsqueda. No se infieren posiciones, indexación o Core Web Vitals reales.

| Prioridad | Hallazgo y evidencia anterior | Impacto | Cambio |
|---|---|---|---|
| Alta | Dirección Rivadavia 349 en contenido, iframe y JSON-LD | Visitas al local equivocado; señales locales inconsistentes | Alberdi 143 en página, mapa y datos estructurados; énfasis en peatonal salteña |
| Alta | Sitemap estático y ruta generada con el mismo destino; URLs con fragmentos | Fuente de sitemap duplicada y secciones tratadas como documentos | Una única ruta con / y /menu |
| Alta | Canonical e imágenes sociales dependían de variables, incluso con posibilidad de undefined | URLs incorrectas para buscadores y al compartir | Dominio público explícito https://kybo.com.ar y canonical propio del menú |
| Alta | Carrusel repetía 10 veces todos los productos y se animaba continuamente | Lectura y selección difíciles, exceso de contenido duplicado | Nueve elementos únicos; botones, scroll nativo y movimiento reducido |
| Alta | Fuente decorativa en todo el body | Legibilidad reducida en textos largos y controles | Fuente local HWT Artz sólo para títulos; Arial para lectura |
| Alta | Enlace de salto a main-content sin ese ID | Atajo de teclado inoperante | Main identificable, foco visible y enlace de salto |
| Media | Instagram con ancho de 20% y mínimo interno de 326px; scripts de dos redes al entrar | Desbordamiento y carga de terceros innecesaria | Acceso visual a Instagram y TikTok bajo demanda, enlace alternativo siempre disponible |
| Media | Fotos antiguas en el catálogo | Productos sin correspondencia con el pedido | Nueve fotos aportadas, comprimidas a WebP sin cambiar su aspecto |
| Media | Newsletter y modal automático con promoción | Interrupción del recorrido principal | Retirados de la interfaz; módulos y API conservados |

## Dirección aplicada

Confitería retro expresiva: HWT Artz, arcos escalonados, ondas amplias, fragmento de damero y perlas. Azul #013E5E, crema #FFF0D4 y naranja #FF8000. El naranja lleva texto azul: no se usa texto blanco pequeño sobre naranja. Los logos se usan como archivos originales con object-fit contain, sin recolorear ni deformar. Las imágenes de producto se muestran completas.

Recorrido: presentación → productos → menú → dirección y horarios → redes → cierre. La navegación conserva anclas antiguas relevantes. Se preservan horarios, teléfono, perfiles y menú Fudo. El cambio de dirección reemplaza necesariamente el destino del mapa antiguo.

## Pendientes de contenido

- PDF vigente aportado por el usuario e integrado en /menu; public/menu.pdf es idéntico al original (SHA-256 verificado). Fudo permanece como enlace alternativo.
- Proporcionar enlaces concretos de reels y publicaciones de Instagram para una galería real. No se presentan imágenes existentes como publicaciones verificadas.
- Confirmar horarios del nuevo local antes de publicar: se conservaron los del proyecto.
- Ilustración principal recibida e incorporada completa en el hero como public/images/kybo-art.webp.

## Recomendaciones después de publicar

1. Actualizar la ficha de Google Business Profile y otras menciones a Alberdi 143. No se modificaron perfiles externos.
2. Enviar el sitemap y revisar / y /menu en Search Console.
3. Validar JSON-LD en Rich Results Test. Google recomienda validar y comprobar después la URL publicada: https://developers.google.com/search/docs/appearance/structured-data/local-business
4. Medir LCP, INP y CLS con datos reales y PageSpeed Insights. No se atribuyen puntuaciones no medidas.
5. Curar reels concretos con portadas y enlaces propios; el embed de perfil depende de las políticas y disponibilidad de TikTok. Implementación basada en https://developers.tiktok.com/docs/en/embed-creator-profiles

## Verificación local

- Compilación de producción y chequeo de tipos: correctos con next build --no-lint; tsc --noEmit correcto.
- ESLint de los archivos TypeScript modificados: sin errores.
- npm run build completo encuentra errores de formato preexistentes en archivos ajenos al rediseño; no se desactivaron reglas del proyecto.
- Navegador de producción a 1440, 768, 390 y 320 px: sin desbordamiento de documento; nueve productos únicos, controles de carrusel, ancla de salto, foco de teclado, menú móvil/Escape y canonical del menú comprobados. Sin excepciones de consola en la ronda completa.
- JSON-LD inspeccionado en el DOM: dirección Alberdi 143. No se afirma validación externa de Rich Results.
- Ambas páginas del menú renderizadas desde el PDF original con Poppler, verificadas visualmente y cargadas en los cuatro anchos; PDF servido con HTTP 200, application/pdf y cabecera %PDF-.
- El PDF original no tiene etiquetas de accesibilidad. Se conserva Fudo como alternativa; una versión HTML completa del menú mejoraría su acceso por lectores de pantalla.
- El mapa y TikTok dependen de terceros; los enlaces directos se conservan aunque fallen las inserciones.

## Revisión de navegación y responsive

- Destinos públicos unificados con sus etiquetas: Los favoritos → /#favoritos; Encontranos → /#encontranos; Mundo Kybo → /#mundo-kybo. Header, enlaces del hero y secciones usan lib/navigation.ts como fuente compartida.
- Se mantienen los destinos antiguos #nuestros-productos, #los-pibardos y #nuestras-redes como alias en las mismas secciones.
- Se elimina la doble compensación de scroll (antes 100px + 90px): ahora se utiliza la altura real del encabezado más 16px.
- Navegación compacta por debajo de 960px para evitar etiquetas y botón partidos en tablet. Selección, Escape, toque exterior y paso a desktop cierran el menú; Escape devuelve el foco al botón. El desplegable puede desplazarse en pantallas bajas.
- Hero más compacto en teléfono, con tipografía fluida y la ilustración completa limitada a 280px; dos columnas desde 640px. Ubicación y redes pasan a una columna por debajo de 800px.
- Validación en navegador con la versión compilada: 22 anchos de 320 a 1920px sin desbordamiento ni etiquetas partidas; 9 recorridos por las secciones; navegación Atrás; 3 URLs antiguas y 3 recorridos desde /menu; teclado, Escape y toque exterior; orientación horizontal.
- Cierre al redimensionar comprobado en 390→1280→390, 720→1024→720 y 959→960→959. La primera aserción cambiaba de tamaño sin esperar el estado intermedio del navegador; la comprobación con estado observado pasó sin requerir cambios adicionales en la aplicación.
- Compilación de producción y tipos correctos con next build --no-lint; ESLint de los archivos modificados correcto. Se mantienen los errores de formato globales preexistentes ya registrados.
- Capturas revisadas en 390, 720, 768 y 1440px, además del menú abierto en horizontal. Se trata de emulación de navegador, no de pruebas en teléfonos físicos.

## Corrección del menú móvil abierto

La captura del usuario a 483 px confirmó un defecto que la revisión anterior no detectó: el desplegable tapaba el título pero dejaba expuestos los botones y la ilustración del hero. La prueba del usuario era válida.

El menú compacto ahora utiliza el Dialog de Radix ya instalado, como una superficie azul opaca de pantalla completa. Conserva logo, destinos y paleta. Incluye X explícita, fondo bloqueado para scroll y lectores de pantalla, foco contenido dentro del menú, cierre con Escape y retorno al botón. La selección de sección evita que el retorno de foco desplace el destino. El panel puede desplazarse en pantallas bajas y la cabecera con la X queda fija dentro de él. Desktop y hero cerrado mantienen la composición anterior.

Verificación:320, 390 y 483 px en la versión compilada con logo cargado, estado modal, bloqueo del fondo, foco y cierre; siete tamaños en desarrollo incluyendo568×320 y844×390; recorridos a las tres secciones. Revisión independiente en navegador: desktop 1440×900 intacto, menú horizontal desplazable con X accesible y /menu→/#favoritos correcto (sección91,55px, cabecera76px), sin bloqueo de scroll residual. Compilación y tipos pasaron con --no-lint; se mantienen los errores de formato global preexistentes. No se probaron dispositivos iOS/Safari físicos.

La versión local revisada se sirve en http://localhost:3000/. Para contrastar el resultado, recargar esa URL y alternar el menú abierto y cerrado. El menú abierto debe mostrar sólo navegación; el hero reaparece al cerrarlo.
