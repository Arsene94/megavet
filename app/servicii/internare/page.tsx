import {IconActivity, IconChevronRight, IconHeart, IconPhone, IconShieldPlus, IconWind} from "@tabler/icons-react";
import Image from "next/image";

export default function Internare() {
    return (
        <main className="grow">
            {/* Hero Section */}
            <section className="bg-teal-900 text-white py-16 lg:py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="https://images.unsplash.com/photo-1596272875886-f6313ed6c99f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                        alt="Câine odihnindu-se la clinica veterinară"
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
                        <span className="text-orange-400 text-sm uppercase tracking-wider font-bold">Internare</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                        Internare & <span className="text-orange-400">Ambulatoriu</span>
                    </h1>
                    <div className="w-24 h-1.5 bg-orange-500 rounded-full mb-6"></div>

                    {/* Textul exact extras de pe megavet.ro */}
                    <div className="max-w-3xl border-l-4 border-orange-500 pl-4">
                        <p className="text-xl text-teal-50 leading-relaxed font-medium mb-4">
                            &#34;Pentru a asigura o recuperare postoperatorie sigură sau pentru a oferi monitorizare corespunzătoare a evoluției tratamentelor venim în sprijinul pacienților noștri cu serviciul de internare.&#34;
                        </p>
                        <p className="text-lg text-teal-200 leading-relaxed mb-4">
                            Prin profesionalism, afecțiune și dotări moderne asigurăm îngrijirea optimă pentru animaluțul dumneavoastră!
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Facilități și Îngrijire</h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                            Condițiile noastre de internare sunt concepute pentru a elimina stresul, a preveni orice risc de infecție și a accelera vindecarea pacientului.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                        {/* Card 1: Monitorizare */}
                        <div className="bg-slate-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 flex items-start">
                            <div className="bg-teal-100 w-14 h-14 rounded-2xl flex items-center justify-center text-teal-700 shrink-0 mr-6">
                                <IconActivity size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Monitorizare Medicală</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Monitorizarea stării de sănătate a fiecărui pacient este efectuată riguros și în permanență direct de către medicul veterinar.
                                </p>
                            </div>
                        </div>

                        {/* Card 2: Hrana & Confort */}
                        <div className="bg-slate-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 flex items-start">
                            <div className="bg-teal-100 w-14 h-14 rounded-2xl flex items-center justify-center text-teal-700 shrink-0 mr-6">
                                <IconHeart size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Confort Suprem</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Folosim așternuturi de unică folosință și oferim hrană premium alături de apă proaspătă schimbată permanent.
                                </p>
                            </div>
                        </div>

                        {/* Card 3: Curatenie */}
                        <div className="bg-slate-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 flex items-start">
                            <div className="bg-teal-100 w-14 h-14 rounded-2xl flex items-center justify-center text-teal-700 shrink-0 mr-6">
                                <IconShieldPlus size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Igienă Strictă</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Aplicăm proceduri de curățenie minuțioasă și dezinfectare a spațiului de internare zilnic, respectând cele mai înalte norme.
                                </p>
                            </div>
                        </div>

                        {/* Card 4: Aer Purificat */}
                        <div className="bg-slate-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 flex items-start">
                            <div className="bg-teal-100 w-14 h-14 rounded-2xl flex items-center justify-center text-teal-700 shrink-0 mr-6">
                                <IconWind size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Purificarea Aerului</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Spațiile dispun de filtre de purificare a aerului conforme cu standardele internaționale, eliminând bacteriile și mirosurile.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-orange-500 text-white py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ai nevoie de informații suplimentare?</h2>
                    <p className="text-orange-100 text-lg mb-8">
                        Pentru detalii despre tarifele de internare sau pentru programări, te rugăm să ne contactezi direct.
                    </p>
                    <a href="tel:0341173355" className="inline-flex items-center justify-center px-8 py-4 border-2 border-transparent text-lg font-bold rounded-xl text-orange-600 bg-white hover:bg-gray-50 shadow-xl transition-all hover:-translate-y-1">
                        <IconPhone className="mr-2" /> Sunați la 0341 173 355
                    </a>
                </div>
            </section>
        </main>
    )
}
