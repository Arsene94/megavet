import {
    IconActivity,
    IconChevronRight,
    IconCircleCheck,
    IconEye,
    IconPhone,
    IconStethoscope,
    IconVaccine
} from "@tabler/icons-react";
import Image from "next/image";

export default function Consultatii() {
    return (
        <main className="grow">
            {}
            <section className="bg-teal-900 text-white py-16 lg:py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                        alt="Consultație veterinară"
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
                        <span className="text-orange-400 text-sm uppercase tracking-wider font-bold">Consultații</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                        Consultații și <span className="text-orange-400">Tratamente</span>
                    </h1>
                    <div className="w-24 h-1.5 bg-orange-500 rounded-full mb-6"></div>

                    {/* Textul exact extras de pe megavet.ro */}
                    <div className="max-w-2xl border-l-4 border-orange-500 pl-4">
                        <p className="text-xl text-teal-50 leading-relaxed font-medium mb-4">
                            &#34;Echipa MegaVet vă oferă consultații personalizate în cadrul cărora se vor stabili protocoalele terapeutice optime pentru animăluțul dumneavoastră.&#34;
                        </p>
                        <p className="text-lg text-teal-200 leading-relaxed">
                            &#34;Dragostea pentru animale, respectul pentru sănătate, precum și cursurile de tratament eficiente ne asigură rezultate exemplare!&#34;
                        </p>
                    </div>
                </div>
            </section>

            {}
            <section className="py-20 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Servicii Oferite</h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                            Acoperim o gamă variată de specialități medicale și tratamente, adaptate cu atenție nevoilor specifice ale fiecărui pacient.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">

                        {/* Card 1: Evaluare & Cardiologie */}
                        <div className="bg-slate-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                            <div className="flex items-center mb-6">
                                <div className="bg-teal-100 w-14 h-14 rounded-2xl flex items-center justify-center text-teal-700 mr-4 group-hover:scale-110 transition-transform">
                                    <IconStethoscope size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Cardiologie & Evaluare</h3>
                            </div>
                            <ul className="space-y-4 ml-2">
                                <li className="flex items-start">
                                    <IconCircleCheck className="text-orange-500 mr-3 shrink-0 mt-0.5" size={20} />
                                    <span className="text-gray-700 font-medium">Cardiologie clinică</span>
                                </li>
                                <li className="flex items-start">
                                    <IconCircleCheck className="text-orange-500 mr-3 shrink-0 mt-0.5" size={20} />
                                    <span className="text-gray-700 font-medium">Determinare tensiune arterială</span>
                                </li>
                                <li className="flex items-start">
                                    <IconCircleCheck className="text-orange-500 mr-3 shrink-0 mt-0.5" size={20} />
                                    <span className="text-gray-700 font-medium">Investigații EKG</span>
                                </li>
                                <li className="flex items-start">
                                    <IconCircleCheck className="text-orange-500 mr-3 shrink-0 mt-0.5" size={20} />
                                    <span className="text-gray-700 font-medium">Oxigenoterapie</span>
                                </li>
                            </ul>
                        </div>

                        {/* Card 2: Oftalmologie & Dermatologie */}
                        <div className="bg-slate-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                            <div className="flex items-center mb-6">
                                <div className="bg-teal-100 w-14 h-14 rounded-2xl flex items-center justify-center text-teal-700 mr-4 group-hover:scale-110 transition-transform">
                                    <IconEye size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Oftalmologie & Dermatologie</h3>
                            </div>
                            <ul className="space-y-4 ml-2">
                                <li className="flex items-start">
                                    <IconCircleCheck className="text-orange-500 mr-3 shrink-0 mt-0.5" size={20} />
                                    <div>
                                        <span className="text-gray-900 font-bold block mb-1">Oftalmologie & Otoscopie</span>
                                        <span className="text-gray-600 text-sm block">- Test fluorescență</span>
                                        <span className="text-gray-600 text-sm block">- Test Shirmmer</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <IconCircleCheck className="text-orange-500 mr-3 shrink-0 mt-0.5" size={20} />
                                    <div>
                                        <span className="text-gray-900 font-bold block mb-1">Examen dermatologic</span>
                                        <span className="text-gray-600 text-sm block">- Examinare lampă Wood</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Card 3: Tratamente Specializate */}
                        <div className="bg-slate-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                            <div className="flex items-center mb-6">
                                <div className="bg-teal-100 w-14 h-14 rounded-2xl flex items-center justify-center text-teal-700 mr-4 group-hover:scale-110 transition-transform">
                                    <IconVaccine size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Tratamente & Terapii</h3>
                            </div>
                            <ul className="space-y-4 ml-2">
                                <li className="flex items-start">
                                    <IconCircleCheck className="text-orange-500 mr-3 shrink-0 mt-0.5" size={20} />
                                    <span className="text-gray-700 font-medium">Tratamente injectabile și perfuzabile</span>
                                </li>
                                <li className="flex items-start">
                                    <IconCircleCheck className="text-orange-500 mr-3 shrink-0 mt-0.5" size={20} />
                                    <span className="text-gray-700 font-medium">Tratament aerosoli</span>
                                </li>
                                <li className="flex items-start">
                                    <IconCircleCheck className="text-orange-500 mr-3 shrink-0 mt-0.5" size={20} />
                                    <span className="text-gray-700 font-medium">Tratament cu interferon omega</span>
                                </li>
                                <li className="flex items-start">
                                    <IconCircleCheck className="text-orange-500 mr-3 shrink-0 mt-0.5" size={20} />
                                    <span className="text-gray-700 font-medium">Tratament citostatic</span>
                                </li>
                            </ul>
                        </div>

                        {/* Card 4: Interventii & Manopere */}
                        <div className="bg-slate-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                            <div className="flex items-center mb-6">
                                <div className="bg-teal-100 w-14 h-14 rounded-2xl flex items-center justify-center text-teal-700 mr-4 group-hover:scale-110 transition-transform">
                                    <IconActivity size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Intervenții & Manopere</h3>
                            </div>
                            <ul className="space-y-4 ml-2">
                                <li className="flex items-start">
                                    <IconCircleCheck className="text-orange-500 mr-3 shrink-0 mt-0.5" size={20} />
                                    <span className="text-gray-700 font-medium">Bandaje simple, compresate și gipsate</span>
                                </li>
                                <li className="flex items-start">
                                    <IconCircleCheck className="text-orange-500 mr-3 shrink-0 mt-0.5" size={20} />
                                    <span className="text-gray-700 font-medium">Hemotransfuzie</span>
                                </li>
                                <li className="flex items-start">
                                    <IconCircleCheck className="text-orange-500 mr-3 shrink-0 mt-0.5" size={20} />
                                    <span className="text-gray-700 font-medium">Puncție peritoneală</span>
                                </li>
                                <li className="flex items-start">
                                    <IconCircleCheck className="text-orange-500 mr-3 shrink-0 mt-0.5" size={20} />
                                    <span className="text-gray-700 font-medium">Curățare fistule și abcese</span>
                                </li>
                                <li className="flex items-start">
                                    <IconCircleCheck className="text-orange-500 mr-3 shrink-0 mt-0.5" size={20} />
                                    <span className="text-gray-700 font-medium">Sondaj uretral</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {}
            <section className="bg-orange-500 text-white py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Programează o vizită pentru consultație</h2>
                    <p className="text-orange-100 text-lg mb-8">
                        Sănătatea animalului tău este pe primul loc. Contactează-ne pentru a stabili o consultație sau un tratament la clinica MegaVet.
                    </p>
                    <a href="tel:0341173355" className="inline-flex items-center justify-center px-8 py-4 border-2 border-transparent text-lg font-bold rounded-xl text-orange-600 bg-white hover:bg-gray-50 shadow-xl transition-all hover:-translate-y-1">
                        <IconPhone className="mr-2" /> Sună la 0341 173 355
                    </a>
                </div>
            </section>
        </main>
    )
}
