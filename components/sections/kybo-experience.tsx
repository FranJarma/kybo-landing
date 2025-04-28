export function KyboExperience() {
    return (
        <section id="kybo-experience" className="relative overflow-hidden bg-kybo-orange py-16">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 left-10 h-20 w-20 rounded-full bg-kybo-blue/20"></div>
                <div className="absolute top-40 right-20 h-32 w-32 rounded-full bg-kybo-blue/30"></div>
                <div className="absolute bottom-10 left-1/4 h-24 w-24 rounded-full bg-kybo-blue/20"></div>
            </div>
            <div className="relative px-4 md:px-6 text-center">
                <h2 className="text-3xl font-bold text-white md:text-4xl/tight">¿Venis o ke?</h2>
                <p className="mx-auto mt-4 max-w-[700px] text-white/90 md:text-xl">
                    Te aseguro que vas a salir diciendo: no se que miércoles acabo de probar... pero quiero repetir
                </p>
            </div>
        </section>
    )
}