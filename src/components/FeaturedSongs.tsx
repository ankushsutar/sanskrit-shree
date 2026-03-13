"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const songs = [
    {
        original: "Kesariya",
        sanskrit: "केसरीयम्",
        language: "Hindi",
        artist: "Arijit Singh",
        excerpt: "केसरीयम् वर्णं तव, प्रेम-रञ्जितं हृदयम्...",
        badge: "HINDI → SANSKRIT",
    },
    {
        original: "Aroha Aroha",
        sanskrit: "आरोह आरोह",
        language: "Tamil",
        artist: "A.R. Rahman",
        excerpt: "आरोह आरोह, गगनं स्पृश, विहग इव...",
        badge: "TAMIL → SANSKRIT",
    },
    {
        original: "Shape of You",
        sanskrit: "तव रूपम्",
        language: "English",
        artist: "Ed Sheeran",
        excerpt: "तव रूपं मम मनसि, नित्यं वसति सुन्दरम्...",
        badge: "ENGLISH → SANSKRIT",
    },
    {
        original: "Pushpa Pushpa",
        sanskrit: "पुष्प पुष्प",
        language: "Telugu",
        artist: "Devi Sri Prasad",
        excerpt: "पुष्प पुष्प, विकसितं जीवनम्, तव कीर्तिः...",
        badge: "TELUGU → SANSKRIT",
    },
    {
        original: "Jai Ho",
        sanskrit: "जय भव",
        language: "Hindi",
        artist: "A.R. Rahman",
        excerpt: "जय भव जय भव, भारतस्य गौरवम्...",
        badge: "HINDI → SANSKRIT",
    },
    {
        original: "Vaathi Coming",
        sanskrit: "वाथि आगच्छति",
        language: "Tamil",
        artist: "Anirudh",
        excerpt: "वाथि आगच्छति, शक्तिः अद्भुता, वीरस्य...",
        badge: "TAMIL → SANSKRIT",
    },
];

export function FeaturedSongs() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <section id="songs" className="py-24 px-6 relative bg-temple overflow-hidden">
            {/* Subtle background shlokas */}
            <div className="absolute top-0 left-0 w-full h-full sacred-text flex items-center justify-center -z-10 text-[15vw] opacity-[0.02]">
                संस्कृतम्
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >
                        <span className="font-noto text-saffron font-bold text-xl mb-2 tracking-[0.2em]">श्रेष्ठ रचनाः</span>
                        <h2 className="text-4xl md:text-5xl font-bold font-cinzel text-white mb-4">
                            Featured Compositions
                        </h2>
                        <div className="w-48 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {songs.map((song, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-b from-gold/20 to-saffron/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

                            <div className="relative h-full manuscript p-8 rounded-lg border border-gold/10 group-hover:border-gold/30 transition-all duration-500 flex flex-col">
                                {/* Decorative Corner Motifs */}
                                <div className="absolute top-0 right-0 p-4 font-noto text-gold/10 group-hover:text-gold/20 text-3xl transition-colors select-none">ॐ</div>
                                <div className="absolute bottom-0 left-0 p-4 font-noto text-gold/10 group-hover:text-gold/20 text-3xl transition-colors select-none">ॐ</div>

                                <div className="flex items-center justify-between mb-8">
                                    <span className="bg-saffron/10 text-saffron px-4 py-1.5 rounded-sm text-[10px] font-bold tracking-widest border border-saffron/20 uppercase">
                                        {song.badge}
                                    </span>
                                    <div className="w-10 h-10 border border-gold/20 rounded-full flex items-center justify-center group-hover:border-gold/50 transition-colors">
                                        <ArrowRight size={18} className="text-gold" />
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <h3 className="font-noto text-3xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                                        {song.sanskrit}
                                    </h3>
                                    <p className="font-cinzel text-sm text-gold/60 tracking-wider font-bold">
                                        {song.original} <span className="text-[10px] ml-2 opacity-50 tracking-tighter">— {song.artist.toUpperCase()}</span>
                                    </p>
                                </div>

                                <div className="relative py-6 mb-8 mt-auto border-y border-gold/5">
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] text-gold/40 bg-temple px-2 font-noto">श्लोकः</span>
                                    <p className="font-noto text-lg text-white/80 italic leading-relaxed text-center group-hover:text-white transition-colors">
                                        "{song.excerpt}"
                                    </p>
                                </div>

                                <button className="w-full py-4 border border-gold/20 rounded-sm font-cinzel text-xs font-black tracking-[0.3em] uppercase text-gold/60 group-hover:text-white group-hover:bg-gold/10 group-hover:border-gold transition-all duration-500">
                                    <span className="block font-noto text-[10px] mb-1 opacity-50 group-hover:opacity-100">पूर्णरचनां पठन्तु</span>
                                    Read Full Composition
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="mt-20 text-center">
                <button className="font-cinzel text-saffron font-bold text-sm tracking-[0.4em] uppercase border-b border-saffron/20 pb-2 hover:text-white hover:border-white transition-all">
                    View Entire Archives
                </button>
            </div>
        </section>
    );
}
