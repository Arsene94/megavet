import {IconBone, IconChevronRight, IconPhone, IconShoppingBag, IconStethoscope} from "@tabler/icons-react";
import Image from "next/image";

export default function Petshop() {
    return (
        <main className="grow">
            {/* Hero Section */}
            <section className="bg-teal-900 text-white py-16 lg:py-24 relative overflow-hidden">
                <div className="relative h-full w-full overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1583336829145-667746467389?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                        alt="Produse și hrană pentru animale de companie"
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
                        <span className="text-orange-400 text-sm uppercase tracking-wider font-bold">Pet Shop</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                        Pet Shop & <span className="text-orange-400">Nutriție</span>
                    </h1>
                    <div className="w-24 h-1.5 bg-orange-500 rounded-full mb-6"></div>

                    {/* Textul exact extras de pe megavet.ro */}
                    <div className="max-w-3xl border-l-4 border-orange-500 pl-4">
                        <p className="text-xl text-teal-50 leading-relaxed font-medium mb-4">
                            &#34;În cadrul PetShop-ului nostru veți găsi o gamă variată de diete, hrană de calitate premium și superpremium individual ambalată, precum și o serie completă de accesorii pentru animalele de companie.&#34;
                        </p>
                        <p className="text-lg text-teal-200 leading-relaxed mb-4">
                            Sănătatea începe din bolul de mâncare. Vă stăm la dispoziție cu recomandări specializate.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Consiliere și Calitate</h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                            La MegaVet, Pet Shop-ul nu este doar un magazin, ci o prelungire a serviciilor medicale, axat pe prevenție și pe creșterea calității vieții animăluțului tău.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Card 1: Consiliere */}
                        <div className="bg-slate-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 group text-center flex flex-col items-center">
                            <div className="bg-teal-100 w-16 h-16 rounded-2xl flex items-center justify-center text-teal-700 mb-6 group-hover:scale-110 transition-transform">
                                <IconStethoscope size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Consiliere Nutrițională</h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Fiecare pacient este unic. Echipa noastră te ghidează în alegerea celei mai bune opțiuni de hrană, adaptată vârstei, rasei sau afecțiunilor specifice.
                            </p>
                        </div>

                        {/* Card 2: Hrana */}
                        <div className="bg-slate-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 group text-center flex flex-col items-center">
                            <div className="bg-teal-100 w-16 h-16 rounded-2xl flex items-center justify-center text-teal-700 mb-6 group-hover:scale-110 transition-transform">
                                <IconBone size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Hrană Premium</h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                O gamă variată de diete, hrană de calitate premium și superpremium individual ambalată, care asigură un aport nutritiv optim și corect.
                            </p>
                        </div>

                        {/* Card 3: Accesorii */}
                        <div className="bg-slate-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 group text-center flex flex-col items-center">
                            <div className="bg-teal-100 w-16 h-16 rounded-2xl flex items-center justify-center text-teal-700 mb-6 group-hover:scale-110 transition-transform">
                                <IconShoppingBag size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Accesorii Complete</h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Punem la dispoziție o serie completă de accesorii, de la jucării pentru o dezvoltare armonioasă, la lese, zgărzi și elemente de confort.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-orange-500 text-white py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Căutați un produs specific?</h2>
                    <p className="text-orange-100 text-lg mb-8">
                        Sunați-ne pentru a verifica disponibilitatea dietelor sau pentru o recomandare de nutriție personalizată.
                    </p>
                    <a href="tel:0341173355" className="inline-flex items-center justify-center px-8 py-4 border-2 border-transparent text-lg font-bold rounded-xl text-orange-600 bg-white hover:bg-gray-50 shadow-xl transition-all hover:-translate-y-1">
                        <IconPhone className="mr-2" /> Sunați la 0341 173 355
                    </a>
                </div>
            </section>
        </main>
    )
}
