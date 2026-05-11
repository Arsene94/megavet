import {
    IconActivityHeartbeat,
    IconBone, IconChevronRight,
    IconCircleCheck,
    IconPhone,
    IconScissors,
    IconShieldExclamation
} from "@tabler/icons-react";
import Image from "next/image";

export default function Chirurgie() {
    return (
        <main className="grow">
            {/* Hero Section */}
            <section className="bg-teal-900 text-white py-16 lg:py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="https://images.unsplash.com/photo-1584820927498-cafe2c1c1fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                        alt="Sală de operație clinică veterinară"
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
                        <span className="text-orange-400 text-sm uppercase tracking-wider font-bold">Chirurgie</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                        Intervenții <span className="text-orange-400">Chirurgicale</span>
                    </h1>
                    <div className="w-24 h-1.5 bg-orange-500 rounded-full mb-6"></div>

                    {/* Textul exact extras de pe megavet.ro */}
                    <div className="max-w-3xl border-l-4 border-orange-500 pl-4">
                        <p className="text-xl text-teal-50 leading-relaxed font-medium mb-4">
                            &#34;În cadrul clinicii noastre toate actele chirurgicale se realizează având o pregătire preoperatorie riguroasă, menită să micșoreze și să excludă eventualele riscuri intra și postoperatorii.&#34;
                        </p>
                        <p className="text-lg text-teal-200 leading-relaxed mb-4">
                            Dispunem de anestezie fixă, cât și inhalatorie, pacientul fiind susținut pe un aparat de monitorizare funcții vitale și pulsoximetru în timpul oricărei intervenții.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Servicii Chirurgicale Oferite</h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                            Echipa MegaVet asigură un spectru larg de intervenții chirurgicale, realizate în condiții optime de siguranță și sterilitate.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">

                        {/* Card 1: Tesuturi moi */}
                        <div className="bg-slate-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                            <div className="flex items-center mb-6">
                                <div className="bg-teal-100 w-14 h-14 rounded-2xl flex items-center justify-center text-teal-700 mr-4 group-hover:scale-110 transition-transform">
                                    <IconScissors size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Chirurgia țesuturilor moi</h3>
                            </div>
                            <ul className="space-y-4 ml-2">
                                <li className="flex items-start">
                                    <IconCircleCheck className="text-orange-500 mr-3 shrink-0 mt-0.5" size={20} />
                                    <span className="text-gray-700 font-medium">Plastii cutanate</span>
                                </li>
                                <li className="flex items-start">
                                    <IconCircleCheck className="text-orange-500 mr-3 shrink-0 mt-0.5" size={20} />
                                    <span className="text-gray-700 font-medium">Laparotomii exploratorii</span>
                                </li>
                                <li className="flex items-start">
                                    <IconCircleCheck className="text-orange-500 mr-3 shrink-0 mt-0.5" size={20} />
                                    <span className="text-gray-700 font-medium">Enterotomi și enterectomii (în ocluzii)</span>
                                </li>
                                <li className="flex items-start">
                                    <IconCircleCheck className="text-orange-500 mr-3 shrink-0 mt-0.5" size={20} />
                                    <span className="text-gray-700 font-medium">Gastrotomii</span>
                                </li>
                                <li className="flex items-start">
                                    <IconCircleCheck className="text-orange-500 mr-3 shrink-0 mt-0.5" size={20} />
                                    <span className="text-gray-700 font-medium">Hernii: ombilicale, inghinale, perineale</span>
                                </li>
                            </ul>
                        </div>

                        {/* Card 2: Urogenital si Mamar */}
                        <div className="bg-slate-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                            <div className="flex items-center mb-6">
                                <div className="bg-teal-100 w-14 h-14 rounded-2xl flex items-center justify-center text-teal-700 mr-4 group-hover:scale-110 transition-transform">
                                    <IconActivityHeartbeat size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Chirurgie uro-genitală & mamară</h3>
                            </div>
                            <ul className="space-y-4 ml-2">
                                <li className="flex items-start">
                                    <IconCircleCheck className="text-orange-500 mr-3 shrink-0 mt-0.5" size={20} />
                                    <span className="text-gray-700 font-medium">Mastectomii, nodulectomii mamare</span>
                                </li>
                                <li className="flex items-start">
                                    <IconCircleCheck className="text-orange-500 mr-3 shrink-0 mt-0.5" size={20} />
                                    <span className="text-gray-700 font-medium">Ovariohisterectomii</span>
                                </li>
                                <li className="flex items-start">
                                    <IconCircleCheck className="text-orange-500 mr-3 shrink-0 mt-0.5" size={20} />
                                    <span className="text-gray-700 font-medium">Cezariene</span>
                                </li>
                                <li className="flex items-start">
                                    <IconCircleCheck className="text-orange-500 mr-3 shrink-0 mt-0.5" size={20} />
                                    <span className="text-gray-700 font-medium">Cistotomii</span>
                                </li>
                                <li className="flex items-start">
                                    <IconCircleCheck className="text-orange-500 mr-3 shrink-0 mt-0.5" size={20} />
                                    <span className="text-gray-700 font-medium">Uretrotomii și uretrostomii</span>
                                </li>
                                <li className="flex items-start">
                                    <IconCircleCheck className="text-orange-500 mr-3 shrink-0 mt-0.5" size={20} />
                                    <span className="text-gray-700 font-medium">Orhidectomii cu exereză scrotală</span>
                                </li>
                            </ul>
                        </div>

                        {/* Card 3: Oncologie si Oftalmologie */}
                        <div className="bg-slate-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                            <div className="flex items-center mb-6">
                                <div className="bg-teal-100 w-14 h-14 rounded-2xl flex items-center justify-center text-teal-700 mr-4 group-hover:scale-110 transition-transform">
                                    <IconShieldExclamation size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Oncologie & Oftalmologie</h3>
                            </div>
                            <ul className="space-y-4 ml-2">
                                <li className="flex items-start">
                                    <IconCircleCheck className="text-orange-500 mr-3 shrink-0 mt-0.5" size={20} />
                                    <div>
                                        <span className="text-gray-900 font-bold block mb-1">Oncologie (țesuturi moi)</span>
                                        <span className="text-gray-600 text-sm block">Exereza tumorilor, formațiunilor și trimiterea probelor către laboratorul de analize pentru examen histopatologic.</span>
                                    </div>
                                </li>
                                <li className="flex items-start mt-4">
                                    <IconCircleCheck className="text-orange-500 mr-3 shrink-0 mt-0.5" size={20} />
                                    <div>
                                        <span className="text-gray-900 font-bold block mb-1">Oftalmologie (anexe)</span>
                                        <span className="text-gray-600 text-sm block">Intervenții pe pleoape: entropion, ectropion, luxație glandă Harder.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Card 4: Ortopedie */}
                        <div className="bg-slate-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                            <div className="flex items-center mb-6">
                                <div className="bg-teal-100 w-14 h-14 rounded-2xl flex items-center justify-center text-teal-700 mr-4 group-hover:scale-110 transition-transform">
                                    <IconBone size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Ortopedie</h3>
                            </div>
                            <ul className="space-y-4 ml-2">
                                <li className="flex items-start">
                                    <IconCircleCheck className="text-orange-500 mr-3 shrink-0 mt-0.5" size={20} />
                                    <span className="text-gray-700 font-medium">Fixare internă cu broșe</span>
                                </li>
                                <li className="flex items-start">
                                    <IconCircleCheck className="text-orange-500 mr-3 shrink-0 mt-0.5" size={20} />
                                    <span className="text-gray-700 font-medium">Amputare mebre sau falange</span>
                                </li>
                                <li className="flex items-start">
                                    <IconCircleCheck className="text-orange-500 mr-3 shrink-0 mt-0.5" size={20} />
                                    <span className="text-gray-700 font-medium">Repuneri luxații șold, rotulă, tibio-tarsale</span>
                                </li>
                                <li className="flex items-start">
                                    <IconCircleCheck className="text-orange-500 mr-3 shrink-0 mt-0.5" size={20} />
                                    <span className="text-gray-700 font-medium">Remediere ruptură ligament încrucișat prin metoda extracapsulară</span>
                                </li>
                                <li className="flex items-start">
                                    <IconCircleCheck className="text-orange-500 mr-3 shrink-0 mt-0.5" size={20} />
                                    <span className="text-gray-700 font-medium">Rezecție cap femural</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-orange-500 text-white py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Aveți nevoie de mai multe informații?</h2>
                    <p className="text-orange-100 text-lg mb-8">
                        Suntem aici pentru a vă răspunde la orice întrebare legată de procedurile chirurgicale și recuperare.
                    </p>
                    <a href="tel:0341173355" className="inline-flex items-center justify-center px-8 py-4 border-2 border-transparent text-lg font-bold rounded-xl text-orange-600 bg-white hover:bg-gray-50 shadow-xl transition-all hover:-translate-y-1">
                        <IconPhone className="mr-2" /> Sunați la 0341 173 355
                    </a>
                </div>
            </section>
        </main>
    )
}
