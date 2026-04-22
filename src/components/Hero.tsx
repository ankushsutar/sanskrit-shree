"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white pb-12">
      <div className="ogani-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column Placeholder (for the Categories menu in Navbar) */}
          <div className="hidden lg:block lg:col-span-3" />

          {/* Main Slider Area */}
          <div className="lg:col-span-9">
            <div className="relative h-[430px] w-full overflow-hidden group">
               {/* Background Image */}
               <Image 
                src="/sacred_hero_banner_1776879254526.png" 
                alt="Sacred Sanskrit Banner" 
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                priority
               />
               <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
                  <div className="pl-8 md:pl-16 space-y-4 max-w-xl">
                    <span className="text-gold text-xs md:text-sm font-black tracking-[0.4em] uppercase">
                      New Experience
                    </span>
                    <h1 className="text-white text-3xl md:text-5xl font-black leading-tight uppercase">
                      The Soul of <br />
                      <span className="text-gold">Sanskrit</span> Shree
                    </h1>
                    <p className="text-white/80 text-base md:text-lg italic max-w-md">
                      Immerse yourself in the eternal resonance of Shlokas, Vedic chanting, and modern melodies.
                    </p>
                    <div className="pt-6">
                      <Link href="/courses" className="btn-sacred">
                        LEARN NOW
                      </Link>
                    </div>
                  </div>
               </div>
               
               {/* Manuscript Texture Overlay */}
               <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/old-mathematics.png')]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

