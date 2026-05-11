import {IconHeart, IconMapPin, IconPhone} from "@tabler/icons-react";

export default function Footer() {
    return (
        <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
                    {/* Info */}
                    <div>
                        <div className="shrink-0 flex items-center mb-6">
                            <IconHeart className="h-8 w-8 text-orange-500 mr-2" fill="currentColor" />
                            <span className="font-bold text-3xl tracking-tight text-white">Mega<span className="text-orange-500">Vet</span></span>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Suntem soluția ideală pentru animăluțul tău de companie. Experiența, devotamentul și iubirea pentru animale ne ghidează în tot ceea ce facem.
                        </p>
                        <div className="space-y-3 text-gray-300">
                            <div className="flex items-start">
                                <IconMapPin className="text-teal-500 mr-3 mt-1" size={20} />
                                <span>Str. Zorelelor nr. 45-47,<br />Constanța, România</span>
                            </div>
                            <div className="flex items-center">
                                <IconPhone className="text-teal-500 mr-3" size={20} />
                                <span className="font-bold text-xl text-white">0341 173 355</span>
                            </div>
                        </div>
                    </div>

                    {/* Program */}
                    <div className="lg:pl-8">
                        <h3 className="text-xl font-bold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Program Clinica</h3>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex justify-between items-center border-b border-gray-800 pb-2">
                                <span>Luni - Vineri:</span>
                                <span className="font-semibold text-white">10:00 - 18:00</span>
                            </li>
                            <li className="flex justify-between items-center border-b border-gray-800 pb-2">
                                <span>Sâmbătă:</span>
                                <span className="font-semibold text-white">10:00 - 15:00</span>
                            </li>
                            <li className="flex justify-between items-center text-orange-400">
                                <span>Duminică:</span>
                                <span className="font-semibold">10:00 - 12:00</span>
                            </li>
                        </ul>
                    </div>

                    {/* Interactive Google Map */}
                    <div className="bg-gray-800 rounded-xl overflow-hidden h-64 relative border border-gray-700 shadow-lg">
                        {}
                        <iframe
                            title="Harta locație MegaVet Constanța"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            src="https://maps.google.com/maps?q=Str.+Zorelelor+45-47,+Constanța&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        ></iframe>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} MegaVet Constanța. Toate drepturile rezervate.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="/politica-de-confidentialitate" className="hover:text-white transition">Politica de Confidențialitate</a>
                        <a href="/politica-cookie" className="hover:text-white transition">Politica de Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
