import {IconAlertCircle, IconFileText, IconLock, IconMail, IconShield, IconUserCheck} from "@tabler/icons-react";

export default function PoliticaDeConfidentialitate() {
    return (
        <main className="grow bg-slate-50">

            {/* Header - Privacy Policy */}
            <section className="bg-teal-900 text-white py-12 lg:py-16 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
                    <IconShield size={48} className="text-orange-400 mb-4 opacity-80" />
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
                        Politica de <span className="text-orange-400">Confidențialitate</span>
                    </h1>
                    <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
                </div>
            </section>

            {/* Text extras de pe megavet.ro/politica-de-confidentialitate.html */}
            <section className="py-12 md:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-8 md:p-12">
                        <div className="space-y-10 text-gray-700 leading-relaxed text-lg">

                            {/* Intro / Preambul */}
                            <div>
                                <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-xl mb-8">
                                    <p className="font-medium text-teal-900">
                                        Societatea prelucrează o serie de date cu caracter personal ale Utilizatorilor (fie că sunt sau nu înregistrați) atunci când utilizează Site-ul <a href="https://megavet.ro/" className="text-orange-500 hover:underline">https://megavet.ro/</a> și/sau orice Serviciu oferit de către compania noastră.
                                    </p>
                                </div>
                                <p className="mb-4">
                                    Această politică de confidențialitate descrie ce tipuri de date cu caracter personal sunt prelucrate, cum sunt acestea utilizate, care sunt opțiunile dvs. în legătură cu aceste prelucrări, precum și modul în care vom respecta drepturile pe care le aveți în calitate de persoană vizată conform legislației privind protecția datelor cu caracter personal, inclusiv Regulamentul (UE) 2016/679 („GDPR”).
                                </p>
                                <p className="font-bold text-orange-600 flex items-start bg-orange-50 p-4 rounded-lg mt-6">
                                    <IconAlertCircle className="mr-3 shrink-0 mt-0.5" size={24} />
                                    <span>ÎNAINTE DE A UTILIZA SITE-UL SAU ORICARE DINTRE SERVICIILE NOASTRE, VĂ RECOMANDĂM SĂ CITIȚI CU ATENȚIE ACEASTĂ POLITICĂ PENTRU A ÎNȚELEGE CUM VĂ SUNT PRELUCRATE DATELE CU CARACTER PERSONAL.</span>
                                </p>
                            </div>

                            <hr className="border-gray-100" />

                            {/* 1. Responsabil */}
                            <div>
                                <h2 className="text-2xl font-bold text-teal-900 mb-4 flex items-center">
                                    <IconUserCheck className="mr-3 text-orange-500" size={28} />
                                    1. Cine este responsabil de prelucrarea datelor dvs.?
                                </h2>
                                <p className="mb-4">
                                    <strong>MEGA VET & PET SA</strong>, cu sediul în România, este operatorul datelor cu caracter personal, conform legislației privind protecția datelor cu caracter personal inclusiv GDPR, în ceea ce privește datele cu caracter personal ale Utilizatorilor colectate și prelucrate prin intermediul Site-ului și/sau în contextul Serviciilor oferite prin intermediul sau în legătură cu Site-ul.
                                </p>
                                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 inline-block">
                                    <p className="text-sm text-gray-500 mb-1 font-semibold uppercase tracking-wider">Contact pentru protecția datelor:</p>
                                    <a href="mailto:contact@megavet.ro" className="flex items-center text-teal-700 hover:text-teal-900 font-bold text-lg transition-colors">
                                        <IconMail size={20} className="mr-2" /> contact@megavet.ro
                                    </a>
                                </div>
                            </div>

                            <hr className="border-gray-100" />

                            {/* 2. Ce date prelucram */}
                            <div>
                                <h2 className="text-2xl font-bold text-teal-900 mb-4 flex items-center">
                                    <IconFileText className="mr-3 text-orange-500" size={28} />
                                    2. Ce date prelucrăm?
                                </h2>
                                <p className="mb-6">
                                    Societatea prelucrează datele personale pe care ni le furnizați atunci când utilizați Site-ul, vă înregistrați pe pagina noastră, contractați un serviciu, vă înscrieți în campaniile noastre (și/sau campaniile organizate împreună cu partenerii noștri), doriți să primiți comunicări comerciale sau să participați la sondajele și chestionarele noastre, sau ne contactați prin orice mijloace de comunicare.
                                </p>

                                <div className="bg-white border border-teal-100 shadow-sm rounded-2xl p-6">
                                    <h3 className="font-bold text-teal-800 text-lg mb-3">Formularul de Contact</h3>
                                    <p className="text-gray-600">
                                        În cazul în care contactați compania noastră MEGA VET & PET SA prin intermediul formularului de contact prezent pe site-ul https://megavet.ro/, datele colectate (nume, adresa de email, număr de telefon, mesaj) vor fi utilizate exclusiv pentru a vă răspunde la solicitare și pentru a vă oferi informațiile sau serviciile dorite.
                                    </p>
                                </div>
                            </div>

                            <hr className="border-gray-100" />

                            {/* Securitate (Added subtle design element to frame the legal end) */}
                            <div className="flex items-center justify-center p-6 bg-slate-100 rounded-2xl text-center">
                                <IconLock className="text-gray-400 mr-3" size={24} />
                                <p className="text-sm text-gray-500 font-medium">Ne luăm angajamentul de a proteja cu maximă responsabilitate confidențialitatea și securitatea datelor dumneavoastră personale.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
