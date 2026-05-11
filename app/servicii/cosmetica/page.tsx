import Image from "next/image";
import {IconChevronRight, IconDroplet, IconEar, IconPhone, IconScissors, IconSparkles} from "@tabler/icons-react";

export default function Cosmetica() {
    return (
        <main className="grow">
            {/* Hero Section */}
            <section className="bg-teal-900 text-white py-16 lg:py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="https://images.unsplash.com/photo-1516734212829-d7e76166a9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                        alt="Câine fericit după o sesiune de cosmetică"
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
                        <span className="text-orange-400 text-sm uppercase tracking-wider font-bold">Cosmetică</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                        Cosmetică & <span className="text-orange-400">Toaletaj</span>
                    </h1>
                    <div className="w-24 h-1.5 bg-orange-500 rounded-full mb-6"></div>

                    {/* Textul exact extras de pe megavet.ro */}
                    <div className="max-w-3xl border-l-4 border-orange-500 pl-4">
                        <p className="text-xl text-teal-50 leading-relaxed font-medium mb-4">
                            &#34;Toaletajul reprezintă o manoperă extrem de necesară nu doar estetic ci și ca un act ajutător de prevenție al anumitor afecțiuni (dermatologice, otice).&#34;
                        </p>
                        <p className="text-lg text-teal-200 leading-relaxed mb-4">
                            O blăniță curată și îngrijită este o blăniță sănătoasă.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Servicii Complete de Înfrumusețare</h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                            La MegaVet, ne asigurăm că prietenul tău blănos primește un tratament complet de toaletaj, realizat cu blândețe și profesionalism.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* Card 1: Tuns si Spalat */}
                        <div className="bg-slate-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 group text-center flex flex-col items-center">
                            <div className="bg-teal-100 w-16 h-16 rounded-2xl flex items-center justify-center text-teal-700 mb-6 group-hover:scale-110 transition-transform">
                                <IconScissors size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Tuns și Spălat</h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Tuns igienic sau estetic, adaptat rasei, urmat de o băiță relaxantă folosind șampoane profesionale și uscare cu atenție.
                            </p>
                        </div>

                        {/* Card 2: Vidat glande */}
                        <div className="bg-slate-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 group text-center flex flex-col items-center">
                            <div className="bg-teal-100 w-16 h-16 rounded-2xl flex items-center justify-center text-teal-700 mb-6 group-hover:scale-110 transition-transform">
                                <IconDroplet size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Vidat Glande</h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                O procedură esențială pentru prevenirea inflamațiilor și infecțiilor glandelor perianale, realizată corect și igienic.
                            </p>
                        </div>

                        {/* Card 3: Curatat urechi */}
                        <div className="bg-slate-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 group text-center flex flex-col items-center">
                            <div className="bg-teal-100 w-16 h-16 rounded-2xl flex items-center justify-center text-teal-700 mb-6 group-hover:scale-110 transition-transform">
                                <IconEar size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Toaletaj Otic</h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Curățarea blândă a urechilor pentru îndepărtarea cerumenului în exces și prevenirea otitelor sau a altor afecțiuni auriculare.
                            </p>
                        </div>

                        {/* Card 4: Taiat unghii */}
                        <div className="bg-slate-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 group text-center flex flex-col items-center">
                            <div className="bg-teal-100 w-16 h-16 rounded-2xl flex items-center justify-center text-teal-700 mb-6 group-hover:scale-110 transition-transform">
                                <IconSparkles size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Tăiat Unghii</h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Scurtarea unghiilor în condiții de siguranță pentru a preveni creșterea lor defectuoasă și disconfortul la mers.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-orange-500 text-white py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Programați o ședință de toaletaj!</h2>
                    <p className="text-orange-100 text-lg mb-8">
                        Sunați-ne pentru a stabili o programare la cosmetică. Vă garantăm o abordare fără stres pentru animăluțul dumneavoastră.
                    </p>
                    <a href="tel:0341173355" className="inline-flex items-center justify-center px-8 py-4 border-2 border-transparent text-lg font-bold rounded-xl text-orange-600 bg-white hover:bg-gray-50 shadow-xl transition-all hover:-translate-y-1">
                        <IconPhone className="mr-2" /> Sunați la 0341 173 355
                    </a>
                </div>
            </section>
        </main>
    )
}
