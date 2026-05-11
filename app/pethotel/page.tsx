import {IconCar, IconCat, IconCreditCard, IconDog, IconFileCheck, IconHome, IconPhone} from "@tabler/icons-react";
import {PetHotelGallery} from "@/components/PetHotelGallery";

export default function Pethotel() {
    return (
        <main className="flex-grow">
            <section className="bg-teal-900 text-white py-16 lg:py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-orange-500 text-white text-sm font-bold mb-4 tracking-wider uppercase shadow-md">
              Serviciu Premium
            </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                        MEGAVET & PET HOTEL <span className="text-orange-400">5*</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg text-teal-100">
                        La standarde înalte internaționale (încălzire centralizată, camere de supraveghere, personal calificat) pentru confortul și siguranța animalelor dumneavoastră de companie.
                    </p>
                </div>
            </section>

            {}
            <section className="py-16 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Facilitățile Hotelului</h2>
                        <div className="w-24 h-1.5 bg-teal-500 rounded-full mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Caini Mici/Medii */}
                        <div className="bg-slate-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                            <div className="bg-teal-100 w-14 h-14 rounded-xl flex items-center justify-center text-teal-700 mb-6">
                                <IconDog size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">16 Camere Individuale</h3>
                            <p className="text-gray-600">Pentru câinii din rasele mici / medii, având încălzire și monitorizare video proprie.</p>
                        </div>

                        {/* Caini Mari */}
                        <div className="bg-slate-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                            <div className="bg-teal-100 w-14 h-14 rounded-xl flex items-center justify-center text-teal-700 mb-6">
                                <IconHome size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">16 Padocuri Exterioare</h3>
                            <p className="text-gray-600">Pentru câinii mari. Sunt închise, având fiecare curte proprie parțial acoperită.</p>
                        </div>

                        {/* Pisici */}
                        <div className="bg-slate-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                            <div className="bg-teal-100 w-14 h-14 rounded-xl flex items-center justify-center text-teal-700 mb-6">
                                <IconCat size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">24 Locuri Pisici</h3>
                            <p className="text-gray-600">O clădire separată cu locuri individuale, cu încălzire, aer condiționat și monitorizare video.</p>
                        </div>
                    </div>

                    {/* Additional Features Text */}
                    <div className="mt-12 bg-teal-50 rounded-3xl p-8 lg:p-10 border border-teal-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-2xl font-bold text-teal-900 mb-4">Grijă permanentă și spațiu de joacă</h3>
                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    Pet Hotelul de cinci stele este deservit de personal calificat tot parcursul zilei, asigurându-se permanent curățenia și plimbarea cățeilor după caz, în funcție de programul indicat de proprietar. Pe timpul nopții se asigură paza și monitorizarea video.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    Avem amenajată o <strong>curte interioară cu spațiu de joacă</strong> dedicat pentru câini.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <div className="flex items-start mb-4">
                                    <IconCar className="text-orange-500 mr-4 shrink-0 mt-1" size={24} />
                                    <div>
                                        <h4 className="font-bold text-gray-900">Transport Asigurat (Locația Ovidiu)</h4>
                                        <p className="text-sm text-gray-600 mt-1">Locația hotelului este în localitatea Ovidiu. Transportul de la sediul clinicii noastre (Constanța) este asigurat și inclus în prețul cazării, cu mașina special echipată a societății.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {}
            <PetHotelGallery />

            {}
            <section className="py-16 bg-white border-t border-gray-200">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                        {/* Conditii de primire */}
                        <div>
                            <div className="flex items-center mb-6">
                                <IconFileCheck className="text-teal-600 mr-3" size={32} />
                                <h2 className="text-2xl font-bold text-gray-900">Condiții de Cazare</h2>
                            </div>
                            <div className="prose prose-teal text-gray-600">
                                <p>
                                    Sejurul este destinat EXCLUSIV animalelor <strong>“clinic sănătoase”</strong> cu:
                                </p>
                                <ul className="space-y-2 mt-4 list-disc pl-5">
                                    <li>Carnet de sănătate valid;</li>
                                    <li>Vaccinate la zi;</li>
                                    <li>Deparazitate intern și extern (valabile la momentul cazării).</li>
                                </ul>
                                <div className="mt-6 p-4 bg-orange-50 rounded-xl border border-orange-100 text-orange-800">
                                    <strong>Important:</strong> Cazarea se face doar cu programarea prealabilă la Clinica MegaVet&Pet.
                                </div>
                            </div>
                        </div>

                        {/* Conditii de plata */}
                        <div>
                            <div className="flex items-center mb-6">
                                <IconCreditCard className="text-teal-600 mr-3" size={32} />
                                <h2 className="text-2xl font-bold text-gray-900">Detalii Plată</h2>
                            </div>
                            <div className="text-gray-600 space-y-4 text-sm leading-relaxed">
                                <p>
                                    Plata tarifului de cazare se face anticipat la sediul Mega Vet&Pet în cuantum de <strong>100%</strong> din valoarea serviciilor la data semnării anexei de cazare, urmând ca eventuale costuri suplimentare să fie plătite la data preluării animalului.
                                </p>
                                <p className="text-red-600 font-medium">
                                    Tariful de cazare nu este returnabil și nici transferabil sau portabil pentru cazarea altui animal.
                                </p>
                                <p>
                                    Rezervarea on-line se consideră activă DOAR după ce a fost efectuată plata (100%) și trimiterea ordinului de plată (OP) la adresa:
                                    <a href="mailto:megavetpet@gmail.com" className="text-teal-600 font-bold ml-1">megavetpet@gmail.com</a>
                                </p>
                                <div className="bg-gray-100 p-4 rounded-xl mt-4 border border-gray-200">
                                    <span className="block text-xs text-gray-500 uppercase font-bold mb-1">Cont IBAN plată:</span>
                                    <span className="font-mono font-bold text-gray-900">RO29RZBR0000060018148959</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-orange-500 text-white py-12">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Rezervă camera animăluțului tău!</h2>
                    <p className="text-orange-100 text-lg mb-8">
                        Sună-ne la clinică pentru o programare prealabilă. Locurile sunt limitate.
                    </p>
                    <a href="tel:0341173355" className="inline-flex items-center justify-center px-8 py-4 border-2 border-transparent text-lg font-bold rounded-xl text-orange-500 bg-white hover:bg-gray-50 shadow-xl transition-all hover:-translate-y-1">
                        <IconPhone className="mr-2" /> Sună la 0341 173 355
                    </a>
                </div>
            </section>
        </main>
    )
}
