import {IconCircleCheck, IconPhone, IconUsers} from "@tabler/icons-react";
import Image from "next/image";

export default function DespreNoi() {
    return (
        <main className="grow">
            { }
            {/* Despre Noi Hero Header */}
            <section className="bg-teal-900 text-white py-16 lg:py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="relative h-full w-full overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1599443015574-be5fe8a05783?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                            alt="Background pattern"
                            fill
                            className="object-cover"
                            sizes="100vw"
                        />
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-teal-800 text-teal-100 text-sm font-semibold mb-4 tracking-wider uppercase border border-teal-700">
              Profilul Clinicii
            </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                        Despre <span className="text-orange-400">MegaVet</span>
                    </h1>
                </div>
            </section>

            { }
            {/* The Core Message (From actual website text) */}
            <section className="py-16 md:py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">

                        {/* Left Side: Text extracted from megavet.ro */}
                        <div className="lg:w-1/2">
                            <div className="relative">
                                <div className="absolute -left-4 -top-4 w-20 h-20 bg-orange-100 rounded-full opacity-50 z-0"></div>
                                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight relative z-10 mb-6">
                                    &#34;Prioritatea echipei noastre o reprezintă <span className="text-teal-700">sănătatea și confortul</span> animalului dumneavoastră!&#34;
                                </h2>
                                <div className="w-20 h-1.5 bg-orange-500 rounded-full mb-8"></div>

                                <p className="text-lg text-gray-600 leading-relaxed mb-6 font-medium">
                                    În cadrul clinicii veterinare MegaVet vă așteaptă o echipă de profesioniști cu grad înalt de pregătire pentru a vă oferi oricând servicii medicale remarcabile și consiliere veterinară de specialitate.
                                </p>

                                {/* Subtle AI value-adds to make the page flow beautifully */}
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <IconCircleCheck className="text-teal-600 mt-1 mr-3 shrink-0" size={22} />
                                        <span className="text-gray-700">Abordare empatică, minimizând stresul pacienților noștri.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <IconCircleCheck className="text-teal-600 mt-1 mr-3 shrink-0" size={22} />
                                        <span className="text-gray-700">Medici dedicați, mereu la curent cu cele mai noi proceduri.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <IconCircleCheck className="text-teal-600 mt-1 mr-3 shrink-0" size={22} />
                                        <span className="text-gray-700">Consiliere clară, explicată pe înțelesul fiecărui proprietar.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Side: Image */}
                        <div className="lg:w-1/2">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                                <div className="relative h-125 w-full overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                        alt="Medic veterinar consultând un câine"
                                        fill
                                        className="object-cover"
                                        sizes="100vw"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-teal-900/90 to-transparent p-8">
                                    <p className="text-white font-medium text-lg">Oferim îngrijire premium, de la consultații de rutină la tratamente complexe.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            { }
            {/* The Team Section (Extracted from megavet.ro) */}
            <section className="py-20 bg-slate-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="flex justify-center mb-4 text-orange-500">
                            <IconUsers size={40} />
                        </div>
                        <h2 className="text-base text-orange-500 font-bold tracking-wide uppercase">Medicii Veterinari</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Echipa MegaVet
                        </p>
                    </div>

                    {/* Doctors Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">

                        {/* Dr. Roxana Gabriela Coman */}
                        <div className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group border border-gray-100 flex flex-col">
                            <div className="h-132 w-full overflow-hidden relative bg-teal-100 flex items-center justify-center">
                                <div className="relative h-full w-full overflow-hidden">
                                    <Image
                                        src="/team/dr-roxana-coman.jpeg"
                                        alt="Dr. Roxana Gabriela Coman"
                                        fill
                                        className="object-cover object-center grayscale transition-transform duration-500 group-hover:scale-105 group-hover:grayscale-0"
                                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                                    />
                                </div>
                            </div>
                            <div className="p-8 grow flex flex-col items-center text-center">
                  <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                    Medic Veterinar
                  </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Dr. Roxana Gabriela Coman</h3>
                                <div className="w-12 h-1 bg-teal-500 rounded-full mb-4"></div>
                                <p className="text-gray-600 text-sm">
                                    Profesionist cu grad înalt de pregătire, dedicată asigurării unui tratament optim pentru fiecare pacient.
                                </p>
                            </div>
                        </div>

                        {/* Dr. Alexandra Rosca */}
                        <div className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group border border-gray-100 flex flex-col">
                            <div className="h-132 w-full overflow-hidden relative bg-teal-100 flex items-center justify-center">
                                <div className="relative h-full w-full overflow-hidden">
                                    <Image
                                        src="/team/dr-alexandra-rosca.jpeg"
                                        alt="Dr. Alexandra Rosca"
                                        fill
                                        className="object-cover object-center grayscale transition-transform duration-500 group-hover:scale-105 group-hover:grayscale-0"
                                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                                    />
                                </div>
                            </div>
                            <div className="p-8 grow flex flex-col items-center text-center">
                   <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                    Medic Veterinar
                  </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Dr. Alexandra Roșca</h3>
                                <div className="w-12 h-1 bg-teal-500 rounded-full mb-4"></div>
                                <p className="text-gray-600 text-sm">
                                    Oferă consiliere veterinară de specialitate și servicii medicale cu o afinitate deosebită pentru bunăstarea animalelor.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            { }
            {/* CTA Section */}
            <section className="bg-teal-800 text-white py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Vino să ne cunoști personal!</h2>
                    <p className="text-teal-100 text-lg mb-8">
                        Echipa noastră te așteaptă la clinică. Programează o vizită chiar acum pentru un control sau o discuție de consiliere.
                    </p>
                    <a href="tel:0341173355" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-teal-900 bg-orange-400 hover:bg-orange-500 hover:text-white shadow-xl transition-all hover:-translate-y-1">
                        <IconPhone className="mr-2" /> Sună la 0341 173 355
                    </a>
                </div>
            </section>
        </main>
    )
}
