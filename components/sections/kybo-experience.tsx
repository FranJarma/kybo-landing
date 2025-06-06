export function KyboExperience() {
  return (
    <section
      id="kybo-experience"
      role="region"
      aria-labelledby="kybo-experience-title"
      className="bg-kybo-orange relative overflow-hidden py-16"
    >
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <div className="bg-kybo-blue/20 absolute top-10 left-10 h-20 w-20 rounded-full" />
        <div className="bg-kybo-blue/30 absolute top-40 right-20 h-32 w-32 rounded-full" />
        <div className="bg-kybo-blue/20 absolute bottom-10 left-1/4 h-24 w-24 rounded-full" />
      </div>

      <div className="relative px-4 text-center md:px-6">
        <h2 id="kybo-experience-title" className="text-3xl font-bold text-white md:text-4xl/tight">
          ¿Venís o qué?
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-white/90 md:text-xl">
          Te aseguro que vas a salir diciendo: no sé qué caraj# acabo de probar... pero quiero
          repetir.
        </p>
      </div>
    </section>
  );
}
