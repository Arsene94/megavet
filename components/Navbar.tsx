"use client"

import {useState} from "react";
import {IconChevronDown, IconMenu, IconPhone, IconX} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServiciiOpen, setIsServiciiOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <div className="shrink-0 flex items-center cursor-pointer">
                        <Image
                            src="/logo.svg"
                            alt="MegaVet"
                            width={300}
                            height={104}
                            priority
                            className="h-12 w-auto object-contain"
                        />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex space-x-6 xl:space-x-8 items-center">
                        <Link href="/" className="text-gray-600 hover:text-teal-700 font-medium transition-colors uppercase text-sm tracking-wide">Acasa</Link>
                        <Link href="/despre-noi" className="text-gray-600 hover:text-teal-700 font-medium transition-colors uppercase text-sm tracking-wide">Despre Noi</Link>
                        <Link href="/pethotel" className="text-orange-500 font-bold hover:text-orange-600 transition-colors uppercase text-sm tracking-wide">
                            Pet Hotel
                        </Link>

                        {/* Dropdown Servicii Desktop */}
                        <div className="relative group">
                            <Link href="#" className="text-gray-600 hover:text-teal-700 font-medium transition-colors uppercase text-sm tracking-wide flex items-center py-2 cursor-pointer">
                                Servicii
                                <IconChevronDown size={16} className="ml-1" />
                            </Link>
                            {/* Zona de meniu dropdown (Hover) */}
                            <div className="absolute left-0 top-full mt-0 w-52 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform translate-y-2 group-hover:translate-y-0">
                                <div className="rounded-xl shadow-xl bg-white border border-gray-100 py-2 overflow-hidden">
                                    <Link href="/servicii/analize-laborator" className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-teal-50 hover:text-teal-900 hover:pl-6 transition-all uppercase font-medium">Analize</Link>
                                    <Link href="/servicii/consultatii" className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-teal-50 hover:text-teal-900 hover:pl-6 transition-all uppercase font-medium">Consultații</Link>
                                    <Link href="/servicii/chirurgie" className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-teal-50 hover:text-teal-900 hover:pl-6 transition-all uppercase font-medium">Chirurgie</Link>
                                    <Link href="/servicii/petshop" className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-teal-50 hover:text-teal-900 hover:pl-6 transition-all uppercase font-medium">Pet Shop</Link>
                                    <Link href="/servicii/internare" className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-teal-50 hover:text-teal-900 hover:pl-6 transition-all uppercase font-medium">Internare</Link>
                                    <Link href="/servicii/ecografie" className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-teal-50 hover:text-teal-900 hover:pl-6 transition-all uppercase font-medium">Ecografie</Link>
                                    <Link href="/servicii/cosmetica" className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-teal-50 hover:text-teal-900 hover:pl-6 transition-all uppercase font-medium">Cosmetică</Link>
                                </div>
                            </div>
                        </div>

                        {/*<Link href="#articole" className="text-gray-600 hover:text-teal-700 font-medium transition-colors uppercase text-sm tracking-wide">Articole</Link>*/}
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-600 hover:text-teal-900 focus:outline-none p-2"
                        >
                            {isMenuOpen ? <IconX size={28} /> : <IconMenu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-2 shadow-lg">
                    <Link href="/" className="block px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-teal-50 rounded-lg uppercase tracking-wide">Home</Link>
                    <Link href="/despre-noi" className="block px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-teal-50 rounded-lg uppercase tracking-wide">Despre Noi</Link>
                    <Link href="/pethotel" className="block px-3 py-2.5 text-base font-bold text-orange-500 hover:bg-orange-50 rounded-lg uppercase tracking-wide">Pet Hotel</Link>

                    {/* Dropdown Servicii Mobile (Accordion) */}
                    <div>
                        <button
                            onClick={() => setIsServiciiOpen(!isServiciiOpen)}
                            className="w-full text-left flex justify-between items-center px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-teal-50 rounded-lg uppercase tracking-wide"
                        >
                            Servicii
                            <IconChevronDown size={18} className={`transform transition-transform duration-200 ${isServiciiOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isServiciiOpen && (
                            <div className="pl-6 pr-3 py-2 space-y-1 bg-slate-50 rounded-lg mt-1 border-l-2 border-teal-500 mx-2">
                                <Link href="/servicii/analize" className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-teal-800 uppercase">Analize</Link>
                                <Link href="/servicii/consultatii" className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-teal-800 uppercase">Consultații</Link>
                                <Link href="/servicii/chirurgie" className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-teal-800 uppercase">Chirurgie</Link>
                                <Link href="/servicii/petshop" className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-teal-800 uppercase">Pet Shop</Link>
                                <Link href="/servicii/internare" className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-teal-800 uppercase">Internare</Link>
                                <Link href="/servicii/ecografie" className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-teal-800 uppercase">Ecografie</Link>
                                <Link href="/servicii/cosmetica" className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-teal-800 uppercase">Cosmetică</Link>
                            </div>
                        )}
                    </div>

                    {/*<Link href="#galerie" className="block px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-teal-50 rounded-lg uppercase tracking-wide">Galerie Foto</Link>*/}
                    {/*<Link href="#articole" className="block px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-teal-50 rounded-lg uppercase tracking-wide">Articole</Link>*/}
                    {/*<Link href="#contact" className="block px-3 py-2.5 text-base font-medium text-gray-700 hover:bg-teal-50 rounded-lg uppercase tracking-wide">Contact</Link>*/}
                    <Link href="tel:0341173355" className="mt-4 flex justify-center items-center w-full text-center bg-orange-500 text-white px-6 py-3 rounded-xl font-bold shadow-md hover:bg-orange-600">
                        <IconPhone size={18} className="mr-2" /> Sună Acum
                    </Link>
                </div>
            )}
        </nav>
    );
}
