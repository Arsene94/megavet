import {
    IconChevronRight,
    IconCircleCheck,
    IconDroplet,
    IconFlask,
    IconMicroscope,
    IconPhone, IconTestPipe,
} from "@tabler/icons-react";
import Image from "next/image";

export default function AnalizeLaborator() {
    return (
        <main className="grow">
            <section className="bg-teal-900 text-white py-16 lg:py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                <Image
                    src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                    alt="Laborator veterinar background"
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
            </div>
                <div className="absolute inset-0 bg-linear-to-r from-teal-900 via-teal-900/90 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-start">
                    <div className="flex items-center space-x-2 mb-4">
                        <a href="#" className="text-teal-300 hover:text-white transition-colors text-sm uppercase tracking-wider font-semibold">Servicii</a>
                        <IconChevronRight size={14} className="text-teal-500" />
                        <span className="text-orange-400 text-sm uppercase tracking-wider font-bold">Laborator</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                        Analize <span className="text-orange-400">Laborator</span>
                    </h1>
                    <div className="w-24 h-1.5 bg-orange-500 rounded-full mb-6"></div>

                    {/* Textul exact extras de pe megavet.ro */}
                    <p className="max-w-2xl text-xl text-teal-50 leading-relaxed font-medium border-l-4 border-orange-500 pl-4">
                        &#34;Investigații paraclinice. Vă punem la dispoziție un laborator de analize performant, oferind rezultate rapide și acuratețe maximă!&#34;
                    </p>
                </div>
            </section>

            {}
            <section className="py-20 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Servicii oferite în laboratorul nostru</h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                            Realizăm o gamă completă de teste pe loc, permițând stabilirea rapidă a diagnosticului corect pentru animalul dumneavoastră.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">

                        {/* Card 1: Hematologie */}
                        <div className="bg-slate-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                            <div className="flex items-center mb-6">
                                <div className="bg-teal-100 w-14 h-14 rounded-2xl flex items-center justify-center text-teal-700 mr-4 group-hover:scale-110 transition-transform">
                                    <IconTestPipe size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Examen Hematologic</h3>
                            </div>
                            <ul className="space-y-4 ml-2">
                                <li className="flex items-start">
                                    <IconCircleCheck className="text-orange-500 mr-3 shrink-0 mt-0.5" size={20} />
                                    <span className="text-gray-700 font-medium">Hemoleucogramă</span>
                                </li>
                                <li className="flex items-start">
                                    <IconCircleCheck className="text-orange-500 mr-3 shrink-0 mt-0.5" size={20} />
                                    <span className="text-gray-700 font-medium">Examen citologic sangvin (Frotiu)</span>
                                </li>
                            </ul>
                        </div>

                        {/* Card 2: Biochimie */}
                        <div className="bg-slate-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                            <div className="flex items-center mb-6">
                                <div className="bg-teal-100 w-14 h-14 rounded-2xl flex items-center justify-center text-teal-700 mr-4 group-hover:scale-110 transition-transform">
                                    <IconFlask size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Examen Biochimic</h3>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 ml-2">
                                <div className="flex items-start"><IconCircleCheck className="text-orange-500 mr-2 shrink-0 mt-0.5" size={18}/><span className="text-gray-700 text-sm">Glicemie, Calciu</span></div>
                                <div className="flex items-start"><IconCircleCheck className="text-orange-500 mr-2 shrink-0 mt-0.5" size={18}/><span className="text-gray-700 text-sm">Colesterol, Trigliceride</span></div>
                                <div className="flex items-start"><IconCircleCheck className="text-orange-500 mr-2 shrink-0 mt-0.5" size={18}/><span className="text-gray-700 text-sm">Fosfatază alcalină</span></div>
                                <div className="flex items-start"><IconCircleCheck className="text-orange-500 mr-2 shrink-0 mt-0.5" size={18}/><span className="text-gray-700 text-sm">Uree, Creatinină</span></div>
                                <div className="flex items-start"><IconCircleCheck className="text-orange-500 mr-2 shrink-0 mt-0.5" size={18}/><span className="text-gray-700 text-sm">Acid uric, Bilirubină</span></div>
                                <div className="flex items-start"><IconCircleCheck className="text-orange-500 mr-2 shrink-0 mt-0.5" size={18}/><span className="text-gray-700 text-sm">Proteine Totale, Albumină</span></div>
                                <div className="flex items-start"><IconCircleCheck className="text-orange-500 mr-2 shrink-0 mt-0.5" size={18}/><span className="text-gray-700 text-sm">Amilază</span></div>
                                <div className="flex items-start"><IconCircleCheck className="text-orange-500 mr-2 shrink-0 mt-0.5" size={18}/><span className="text-gray-700 text-sm">Transaminaze hepatice (GPT, GOT, GGT)</span></div>
                            </div>
                        </div>

                        {/* Card 3: Microscopie */}
                        <div className="bg-slate-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                            <div className="flex items-center mb-6">
                                <div className="bg-teal-100 w-14 h-14 rounded-2xl flex items-center justify-center text-teal-700 mr-4 group-hover:scale-110 transition-transform">
                                    <IconMicroscope size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Microscopie</h3>
                            </div>
                            <ul className="space-y-4 ml-2">
                                <li className="flex items-start">
                                    <IconCircleCheck className="text-orange-500 mr-3 shrink-0 mt-0.5" size={20} />
                                    <div>
                                        <span className="text-gray-900 font-bold block mb-1">Microscopie optică</span>
                                        <span className="text-gray-600 text-sm block">Examen raclat piele</span>
                                        <span className="text-gray-600 text-sm block">Examen frotiu auricular</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <IconCircleCheck className="text-orange-500 mr-3 shrink-0 mt-0.5" size={20} />
                                    <span className="text-gray-900 font-bold">Microscopie câmp întunecat</span>
                                </li>
                            </ul>
                        </div>

                        {/* Card 4: Urina si Copro */}
                        <div className="bg-slate-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                            <div className="flex items-center mb-6">
                                <div className="bg-teal-100 w-14 h-14 rounded-2xl flex items-center justify-center text-teal-700 mr-4 group-hover:scale-110 transition-transform">
                                    <IconDroplet size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Analize Urină & Fecale</h3>
                            </div>
                            <ul className="space-y-4 ml-2">
                                <li className="flex items-start">
                                    <IconCircleCheck className="text-orange-500 mr-3 shrink-0 mt-0.5" size={20} />
                                    <span className="text-gray-700 font-medium">Sediment urinar</span>
                                </li>
                                <li className="flex items-start">
                                    <IconCircleCheck className="text-orange-500 mr-3 shrink-0 mt-0.5" size={20} />
                                    <span className="text-gray-700 font-medium">Sumar urinar</span>
                                </li>
                                <li className="flex items-start">
                                    <IconCircleCheck className="text-orange-500 mr-3 shrink-0 mt-0.5" size={20} />
                                    <span className="text-gray-700 font-medium">Examen coproparazitologic</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {}
            <section className="bg-orange-500 text-white py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Programează o vizită pentru analize</h2>
                    <p className="text-orange-100 text-lg mb-8">
                        Rezultatele rapide și precise sunt esențiale. Contactează-ne pentru a stabili o programare la laboratorul clinicii MegaVet.
                    </p>
                    <a href="tel:0341173355" className="inline-flex items-center justify-center px-8 py-4 border-2 border-transparent text-lg font-bold rounded-xl text-orange-600 bg-white hover:bg-gray-50 shadow-xl transition-all hover:-translate-y-1">
                        <IconPhone className="mr-2" /> Sună la 0341 173 355
                    </a>
                </div>
            </section>
        </main>
    )
}
