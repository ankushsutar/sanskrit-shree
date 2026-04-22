"use client";

import Image from "next/image";
import Link from "next/link";

export default function Banners() {
    return (
        <section className="pb-12 bg-white">
            <div className="ogani-container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Banner 1 */}
                    <div className="relative h-[270px] overflow-hidden group">
                        <Image 
                            src="/promotional_banners_duo_1776879326835.png" 
                            alt="Master the Vedas" 
                            fill 
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                        <div className="absolute inset-y-0 left-8 flex flex-col justify-center max-w-[200px] z-10">
                            <h3 className="text-white text-2xl font-black uppercase mb-4 shadow-sm">
                                Master <br /> The Vedas
                            </h3>
                            <Link href="/courses" className="btn-sacred py-2 px-6 text-[12px]">
                                SHOP NOW
                            </Link>
                        </div>
                    </div>

                    {/* Banner 2 */}
                    <div className="relative h-[270px] overflow-hidden group">
                        <Image 
                            src="/promotional_banners_duo_1776879326835.png" 
                            alt="Sacred Melodies" 
                            fill 
                            className="object-cover -scale-x-100 transition-transform duration-700 group-hover:scale-[-1.05]"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                        <div className="absolute inset-y-0 left-8 flex flex-col justify-center max-w-[200px] z-10">
                            <h3 className="text-white text-2xl font-black uppercase mb-4 shadow-sm">
                                Sacred <br /> Melodies
                            </h3>
                            <Link href="/media" className="btn-sacred py-2 px-6 text-[12px]">
                                EXPLORE
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

