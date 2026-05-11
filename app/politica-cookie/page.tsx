import {IconCookie, IconInfoCircle, IconSettings, IconShieldExclamation} from "@tabler/icons-react";

export default function PoliticaCookie() {
    return (
        <main className="grow bg-slate-50">

            {/* Header simplu pentru pagina legala */}
            <section className="bg-teal-900 text-white py-12 lg:py-16 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
                    <IconCookie size={48} className="text-orange-400 mb-4 opacity-80" />
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
                        Politica de <span className="text-orange-400">Cookies</span>
                    </h1>
                    <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
                </div>
            </section>

            {/* Text extras de pe megavet.ro/politica-cookies.html */}
            <section className="py-12 md:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-8 md:p-12">
                        <div className="space-y-10 text-gray-700 leading-relaxed text-lg">

                            {/* Intro */}
                            <div>
                                <h2 className="text-2xl font-bold text-teal-900 mb-4 flex items-center">
                                    <IconInfoCircle className="mr-3 text-orange-500" size={24} /> Introducere
                                </h2>
                                <p className="mb-4">
                                    Acest site utilizeaza cookies. COOKIES necesare sunt fisiere text, care sunt folosite de site-uri pentru eficientizarea utilizarii si imbunatatirea serviciilor oferite. Aceste fisiere le gasiti pe browser-ul dumneavoastra, pe hard disk-ul dispozitivului in functie de site-urile pe care le vizitati si fac interactiunea cu acestea mai sigura si mai rapida, deoarece isi pot aminti preferintele dumneavoastra.
                                </p>
                                <p>
                                    Site-ul nostru foloseste cookies pentru a va distinge de ceilalti utilizatori si acest lucru ne ajuta sa va oferim o experienta mai buna atunci cand navigati pe site. Datele stocate prin fisierele cookies pe site-ul nostru, nu arata detalii personale cu ajutorul carora sa se poata stabili o identitate individuala.
                                </p>
                            </div>

                            <hr className="border-gray-100" />

                            {/* Scop */}
                            <div>
                                <h2 className="text-2xl font-bold text-teal-900 mb-4 flex items-center">
                                    <IconSettings className="mr-3 text-orange-500" size={24} /> Scopul Utilizării
                                </h2>
                                <p className="mb-4">
                                    Folosim cookies pentru analizarea traficului pe website si pentru personalizarea continutului. Site-ul nu poate functiona la parametri normali fara utilizarea cookies, fara acestea accesul la zonele securizate ale site-ului sau navigarea in pagina ar fi ingreunata.
                                </p>
                                <p className="mb-4">
                                    Prin folosirea cookies de statistici, putem analiza informatii despre modul in care folositi site-ul nostru si vom sti ce imbunatatiri putem face. Conform legii, putem stoca cookies pe dispozitivul dvs, doar in cazul in care ele sunt necesare pentru navigarea pe site.
                                </p>
                                <p className="font-semibold text-teal-800">
                                    Perioada de expirare a acestor fisiere de tip cookie este de maximum 2 ani.
                                </p>
                            </div>

                            <hr className="border-gray-100" />

                            {/* Tipuri */}
                            <div>
                                <h2 className="text-2xl font-bold text-teal-900 mb-6">Tipuri de Cookies Folosite</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-teal-50 rounded-2xl p-6 border border-teal-100">
                                        <h3 className="font-bold text-teal-900 mb-2 text-xl">Marketing</h3>
                                        <p className="text-sm text-gray-600">Sunt folosite pentru a stoca vizitele si cautarile unui utilizator pe web si a-i afisa anunturi relevante si antrenante in functie de cautarile recente. Acest tip de cookies sunt utilizate de agentiile de publicitate.</p>
                                    </div>
                                    <div className="bg-teal-50 rounded-2xl p-6 border border-teal-100">
                                        <h3 className="font-bold text-teal-900 mb-2 text-xl">Preferințe</h3>
                                        <p className="text-sm text-gray-600">Permit site-ului sa aminteasca informatii precum limba dvs. preferata sau zona in care va aflati.</p>
                                    </div>
                                    <div className="bg-teal-50 rounded-2xl p-6 border border-teal-100">
                                        <h3 className="font-bold text-teal-900 mb-2 text-xl">Statistice</h3>
                                        <p className="text-sm text-gray-600">Ne ajuta sa intelegem cum interactioneaza utilizatorii cu site-ul nostru, prin colectarea informatiilor in mod anonim.</p>
                                    </div>
                                    <div className="bg-teal-50 rounded-2xl p-6 border border-teal-100">
                                        <h3 className="font-bold text-teal-900 mb-2 text-xl">Google Analytics</h3>
                                        <p className="text-sm text-gray-600">Website-ul nostru utilizeaza Google Analytics, un serviciu furnizat de Google, care analizeaza modul in care utilizati respectivul Website pe baza informatiilor generate de cookie-uri.</p>
                                    </div>
                                </div>
                            </div>

                            <hr className="border-gray-100" />

                            {/* Social Media */}
                            <div>
                                <h2 className="text-2xl font-bold text-teal-900 mb-4">Rețele Sociale și Link-uri Externe</h2>
                                <p className="mb-4">
                                    Website-ul nostru poate include functii de comunicare sociala, cum ar fi link-uri catre Facebook, Twitter, Instagram, Linkedin sau Youtube. Aceste functii pot stoca informatii si pot activa un fisier tip cookie pentru o functionare corecta.
                                </p>
                                <p>
                                    Website-ul nostru poate utiliza link-uri catre alte site-uri pe care nu le controlam, prin urmare va solicitam sa cititi cu atentie politicile lor in privinta datelor personale si a politicii de confidentialitate.
                                </p>
                            </div>

                            <hr className="border-gray-100" />

                            {/* Control si Consimtamant */}
                            <div>
                                <h2 className="text-2xl font-bold text-teal-900 mb-4 flex items-center">
                                    <IconShieldExclamation className="mr-3 text-orange-500" size={24} /> Consimțământ și Retragere
                                </h2>
                                <p className="mb-4">
                                    Daca nu esti de acord cu folosirea cookies necesare functionarii normale a site-ului, va trebui sa abandonezi navigarea pe site-ul nostru. Pentru diferite alte tipuri de cookies, este necesar acordul dumneavoastra.
                                </p>
                                <p className="mb-6">
                                    Va puteti retrage consimtamantul privind fisierele de tip cookie in orice moment. In acest scop, puteti sa blocati sau eliminati fisierele cookie, fie prin intermediul setarilor browser-ului dvs. web, sau prin utilizarea unor software-uri puse la dispozitie de terti, sau urmand instructiunile specifice.
                                </p>

                                <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
                                    <p className="text-orange-900 font-medium mb-2">
                                        În orice situatie, pot aparea probleme legate de utilizarea anumitor parti ale site-ului web, daca dezactivati fisierele de tip cookie.
                                    </p>
                                    <p className="text-orange-800 text-sm">
                                        Acordul dumneavoastra pentru folosirea cookies este valabil pentru domeniul: <a href="https://megavet.ro" className="font-bold underline hover:text-orange-600">https://megavet.ro/</a>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
