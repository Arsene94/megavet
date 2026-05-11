"use client"

import {useState} from "react";
import Image from "next/image";
import {IconX} from "@tabler/icons-react";

type GalleryImage = {
    id: number;
    src: string;
    colSpan: string;
    rowSpan: string;
    alt: string;
};

export function PetHotelGallery() {
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    const galleryImages = [
        { id: 1, src: "/pethotel-gallery/pethotel_1.jpg", colSpan: "col-span-12 md:col-span-8", rowSpan: "row-span-2", alt: "Camera individuala animal 1" },
        { id: 2, src: "/pethotel-gallery/pethotel_2.jpg", colSpan: "col-span-6 md:col-span-4", rowSpan: "row-span-1", alt: "Camera individuala animal 2" },
        { id: 3, src: "/pethotel-gallery/pethotel_3.jpg", colSpan: "col-span-6 md:col-span-4", rowSpan: "row-span-1", alt: "Camera individuala animal 3" },
        { id: 4, src: "/pethotel-gallery/pethotel_4.jpg", colSpan: "col-span-6 md:col-span-4", rowSpan: "row-span-1", alt: "Camera individuala animal 4" },
        { id: 5, src: "/pethotel-gallery/pethotel_5.jpg", colSpan: "col-span-6 md:col-span-4", rowSpan: "row-span-1", alt: "Camera individuala animal 5" },
        { id: 6, src: "/pethotel-gallery/pethotel_6.jpg", colSpan: "col-span-12 md:col-span-4", rowSpan: "row-span-1", alt: "Camera individuala animal 6" },
    ];

    return (
        <>
            <section className="py-12 bg-slate-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Galeria Pet Hotel</h2>
                        <p className="text-gray-500">Imagini din incinta MegaVet & Pet Hotel 5* (Click pentru a mări)</p>
                    </div>

                    {/* Masonry-style CSS Grid for Gallery */}
                    <div className="grid grid-cols-12 gap-4">
                        {galleryImages.map((img) => (
                            <div
                                key={img.id}
                                onClick={() => setSelectedImage(img)}
                                className={`${img.colSpan} ${img.rowSpan} rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group relative cursor-pointer`}
                            >
                                <div
                                    className="relative w-full overflow-hidden"
                                    style={{
                                        minHeight: img.rowSpan === "row-span-2" ? "400px" : "250px",
                                    }}
                                >
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                        loading="eager"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                                <div className="absolute inset-0 bg-teal-900/0 group-hover:bg-teal-900/20 flex items-center justify-center transition-all duration-300">
                         <span className="bg-white/90 text-teal-900 font-bold px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                           Mărește
                         </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox / Modal pentru vizualizarea imaginilor marite */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-black/95 p-4 md:p-10 transition-opacity duration-300 backdrop-blur-sm"
                    onClick={() => setSelectedImage(null)}
                >
                    {/* Container pentru imagine si buton, asigura alinierea corecta pe mobil */}
                    <div className="relative w-full max-w-6xl flex flex-col items-end md:items-center justify-center">

                        {/* Butonul X - Fixat pe desktop, deasupra imaginii pe mobil */}
                        <button
                            type="button"
                            className="mb-4 md:mb-0 md:fixed md:top-10 md:right-10 text-white bg-gray-800/80 hover:bg-orange-500 rounded-full p-2 md:p-3 transition-all duration-200 shadow-2xl hover:scale-110 cursor-pointer z-10000 flex items-center justify-center border-2 border-white/20"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                            aria-label="Închide galeria"
                        >
                            <IconX size={32} strokeWidth={2.5} className="md:w-9 md:h-9" />
                        </button>

                        <div
                            className="relative w-full flex flex-col items-center justify-center cursor-default"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                width={1600}
                                height={1000}
                                className="max-h-[75vh] max-w-full rounded-xl border border-white/10 object-contain shadow-2xl md:max-h-[85vh]"
                                sizes="100vw"
                                loading="eager"
                            />
                            <p className="text-white mt-4 text-base md:text-xl font-medium bg-black/60 px-6 md:px-8 py-2 md:py-3 rounded-full backdrop-blur-md border border-white/10 text-center">
                                {selectedImage.alt}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
