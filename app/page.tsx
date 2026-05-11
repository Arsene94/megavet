import Image from "next/image";
import {
  IconActivity,
  IconChevronRight, IconHeart,
  IconHome, IconMicroscope,
  IconPhone,
  IconScissors,
  IconShieldCheck,
  IconShoppingBag, IconStethoscope
} from "@tabler/icons-react";

export default function Home() {
  return (
    <>
      <section id="home" className="relative bg-white overflow-hidden">
        <div className="max-w-360 mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-10 sm:pt-16 lg:pt-20 px-4 sm:px-6 lg:px-8">
            <main className="mx-auto max-w-7xl">
              <div className="sm:text-center lg:text-left">
                <span className="inline-block py-1 px-3 rounded-full bg-teal-50 text-teal-700 text-sm font-semibold mb-4 border border-teal-100">
                  Clinică Veterinară în Constanța
                </span>
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl leading-tight">
                  <span className="block xl:inline">Sănătatea prietenului</span>{' '}
                  <span className="block text-teal-700">tău e pe mâini sigure.</span>
                </h1>
                <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 leading-relaxed">
                  Tratăm fiecare animăluț ca pe propriul nostru membru al familiei. La MegaVet găsești o echipă caldă, dedicată, tehnologie de ultimă generație și cele mai stricte norme de igienă pentru liniștea ta.
                </p>
                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
                  <a href="tel:0341173355" className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-orange-500 hover:bg-orange-600 shadow-xl shadow-orange-500/30 md:py-4 md:text-lg md:px-10 transition-all hover:-translate-y-1">
                    <IconPhone className="mr-2 h-5 w-5" />
                    Sună la Clinica
                  </a>
                  <a href="#servicii" className="w-full flex items-center justify-center px-8 py-4 border-2 border-teal-100 text-base font-bold rounded-xl text-teal-800 bg-white hover:bg-teal-50 md:py-4 md:text-lg md:px-10 transition-all">
                    Vezi Serviciile
                  </a>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
              src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
              alt="Medic veterinar consultând un câine fericit"
              width={1400}
              height={900}
              sizes="(min-width: 1024px) 50vw, 100vw"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-white via-white/20 to-transparent lg:via-transparent"></div>
        </div>
      </section>

      {/* Trust & Safety Features (The "Why Us") */}
      <section id="despre" className="py-16 bg-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-teal-800 p-4 rounded-2xl mb-4 text-orange-400">
                <IconShieldCheck size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">Siguranță 24/7</h3>
              <p className="text-teal-100 text-sm leading-relaxed">
                Dispunem de sisteme de alarmă și supraveghere video permanentă. Fie că e internat sau la hotel, animăluțul tău e 100% în siguranță.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-teal-800 p-4 rounded-2xl mb-4 text-orange-400">
                <IconActivity size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">Echipamente Premium</h3>
              <p className="text-teal-100 text-sm leading-relaxed">
                Utilizăm aparatură de ultimă generație pentru diagnostice rapide și corecte. Fiecare secundă contează pentru prietenul tău.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-teal-800 p-4 rounded-2xl mb-4 text-orange-400">
                <IconHeart size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">Igienă Strictă</h3>
              <p className="text-teal-100 text-sm leading-relaxed">
                Zero compromisuri. Folosim consumabile de unică folosință și respectăm cele mai înalte proceduri de sterilizare și aseptizare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="servicii" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-base text-orange-500 font-bold tracking-wide uppercase">Ce Oferim</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Tot ce are nevoie pentru o viață lungă și sănătoasă
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Acoperim toată gama de servicii medicale, de la o simplă verificare de rutină, până la intervenții chirurgicale complexe și îngrijire estetică.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300 group">
              <div className="bg-teal-50 w-14 h-14 rounded-xl flex items-center justify-center text-teal-700 mb-6 group-hover:scale-110 transition-transform">
                <IconStethoscope size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Consultații & Prevenție</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">Controale periodice, vaccinări, deparazitări și planuri personalizate de sănătate pentru o dezvoltare armonioasă.</p>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300 group">
              <div className="bg-teal-50 w-14 h-14 rounded-xl flex items-center justify-center text-teal-700 mb-6 group-hover:scale-110 transition-transform">
                <IconMicroscope size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analize & Ecografie</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">Laborator propriu și ecograf de ultimă generație pentru diagnostice rapide, clare și precise, chiar aici în clinică.</p>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300 group">
              <div className="bg-teal-50 w-14 h-14 rounded-xl flex items-center justify-center text-teal-700 mb-6 group-hover:scale-110 transition-transform">
                <IconActivity size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Chirurgie & Internare</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">Intervenții realizate în mediu steril cu anestezie sigură. Opțiuni de internare pentru recuperare sub atentă supraveghere medicală.</p>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-2xl shadow-sm border p-8 hover:shadow-xl transition-shadow duration-300 group relative overflow-hidden border-orange-100">
              <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
              <div className="bg-orange-50 w-14 h-14 rounded-xl flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                <IconScissors size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cosmetică Veterinară</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">Tuns, spălat, toaletaj complet. Răsfățăm câinii și pisicile pentru ca blănița lor să fie mereu sănătoasă și curată.</p>
            </div>

            {/* Service 5 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300 group">
              <div className="bg-teal-50 w-14 h-14 rounded-xl flex items-center justify-center text-teal-700 mb-6 group-hover:scale-110 transition-transform">
                <IconShoppingBag size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pet Shop Dedicat</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">O gamă variată de hrană premium, suplimente și accesorii menite să satisfacă chiar și cele mai exigente gusturi.</p>
            </div>

            {/* CTA Box */}
            <div className="bg-teal-800 rounded-2xl shadow-sm p-8 flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Ceva urgent?</h3>
              <p className="text-teal-100 mb-6">Nu lăsa pe mâine. Sună-ne pentru a stabili o vizită la cabinet.</p>
              <a href="tel:0341173355" className="bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-600 transition w-full shadow-lg">
                Sună la 0341 173 355
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pet Hotel Featured Section */}
      <section id="pethotel" className="py-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
            <div className="lg:w-1/2 p-8 lg:p-12 xl:p-16 flex flex-col justify-center">
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-orange-100 text-orange-600 font-bold px-3 py-1 rounded-full text-sm uppercase tracking-wider">Serviciu Nou</span>
                <span className="text-teal-600 font-semibold flex items-center"><IconHome size={18} className="mr-1"/> MegaVet</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                Pet Hotel la <span className="text-teal-700">standarde înalte</span>.
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Pleci din oraș și nu ai cu cine lăsa blănosul? Oferă-i și lui o vacanță! Noul nostru Pet Hotel este conceput pentru confortul absolut și siguranța maximă a animăluțului tău.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <IconShieldCheck className="text-teal-500 mr-2 shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">Supraveghere video permanentă 24/7</span>
                </li>
                <li className="flex items-start">
                  <IconShieldCheck className="text-teal-500 mr-2 shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">Spații individuale igienizate riguros</span>
                </li>
                <li className="flex items-start">
                  <IconShieldCheck className="text-teal-500 mr-2 shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">Asistență veterinară mereu la un pas distanță</span>
                </li>
              </ul>
              <div>
                <a href="tel:0341173355" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-bold rounded-xl text-white bg-teal-700 hover:bg-teal-800 transition shadow-lg shadow-teal-700/20">
                  Rezervă un loc acum <IconChevronRight className="ml-2" size={18} />
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 h-64 lg:h-auto relative">
              <Image
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Câine relaxându-se, reprezentând Pet Hotel"
                  fill
                  className="object-cover"
                  sizes="100vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
