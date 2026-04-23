"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const songs = [
    {
        original: "Chandanam (Marathi)",
        sanskrit: "चन्दनम्",
        language: "Marathi",
        artist: "Ajay-Atul",
        excerpt: "चन्दनम् चर्चितम्, गन्धराजम् शोभितम्, देवगणैः वन्दितम्...",
        badge: "MARATHI → SANSKRIT",
    },
    {
        original: "Hamara Bajaj",
        sanskrit: "अस्माकं बजाज",
        language: "Hindi",
        artist: "Advertisement",
        excerpt: "अस्माकं बजाज, उन्नतम् वाहनम्, सुखदं जीवनम्...",
        badge: "HINDI → SANSKRIT",
    },
    {
        original: "Abhang Tukaram",
        sanskrit: "तुकाराम अभङ्गः",
        language: "Marathi",
        artist: "Sant Tukaram",
        excerpt: "विठ्ठल विठ्ठल, नामावली अनन्ता, मोक्षदायिनी कथा...",
        badge: "MARATHI → SANSKRIT",
    },
    {
        original: "Kesariya",
        sanskrit: "केसरीयम्",
        language: "Hindi",
        artist: "Arijit Singh",
        excerpt: "केसरीयम् वर्णं तव, प्रेम-रञ्जितं हृदयम्...",
        badge: "HINDI → SANSKRIT",
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
        original: "Srivalli",
        sanskrit: "श्रीवल्ली",
        language: "Telugu",
        artist: "Sid Sriram",
        excerpt: "नयने तव पद्मदले, रूपं तव विस्मयकारकम्...",
        badge: "TELUGU → SANSKRIT",
    },
];

export function FeaturedSongs() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <section id="songs" className="py-24 px-6 relative bg-white overflow-hidden">
            {/* Subtle background shlokas */}
            <div className="absolute top-0 left-0 w-full h-full sacred-text flex items-center justify-center -z-10 text-[15vw] opacity-[0.03] text-peacock">
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
                        <span className="font-noto text-maroon font-bold text-xl mb-2 tracking-[0.2em]">श्रेष्ठ रचनाः</span>
                        <h2 className="text-4xl md:text-5xl font-bold font-cairo text-peacock mb-4">
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
                            <div className="absolute -inset-0.5 bg-gradient-to-b from-peacock/10 to-maroon/5 rounded-[2rem] blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

                            <div className="relative h-full bg-cream p-8 rounded-[2rem] border border-peacock/5 group-hover:border-peacock/20 transition-all duration-500 flex flex-col shadow-sm group-hover:shadow-xl">
                                {/* Decorative Corner Motifs */}
                                <div className="absolute top-0 right-0 p-6 font-noto text-gold/20 group-hover:text-gold/40 text-2xl transition-colors select-none">ॐ</div>
                                
                                <div className="flex items-center justify-between mb-8">
                                    <span className="bg-maroon/5 text-maroon px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest border border-maroon/10 uppercase">
                                        {song.badge}
                                    </span>
                                    <div className="w-10 h-10 border border-peacock/10 rounded-full flex items-center justify-center group-hover:border-peacock/30 transition-colors">
                                        <ArrowRight size={18} className="text-maroon" />
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <h3 className="font-noto text-3xl font-bold text-peacock mb-2 group-hover:text-maroon transition-colors">
                                        {song.sanskrit}
                                    </h3>
                                    <p className="font-cairo text-sm text-peacock/60 tracking-wider font-bold">
                                        {song.original} <span className="text-[10px] ml-2 opacity-50 tracking-tighter">— {song.artist.toUpperCase()}</span>
                                    </p>
                                </div>

                                <div className="relative py-6 mb-8 mt-auto border-y border-peacock/5">
                                    <p className="font-noto text-lg text-peacock/80 italic leading-relaxed text-center group-hover:text-peacock transition-colors">
                                        "{song.excerpt}"
                                    </p>
                                </div>

                                <button className="w-full py-4 bg-white border border-peacock/10 rounded-full font-cairo text-[10px] font-black tracking-[0.3em] uppercase text-peacock group-hover:text-white group-hover:bg-maroon group-hover:border-maroon transition-all duration-500 shadow-sm">
                                    Read Full Composition
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="mt-20 text-center">
                <button className="font-cairo text-maroon font-bold text-sm tracking-[0.4em] uppercase border-b-2 border-maroon/20 pb-2 hover:text-peacock hover:border-peacock transition-all">
                    View Entire Archives
                </button>
            </div>
        </section>
    );
}

