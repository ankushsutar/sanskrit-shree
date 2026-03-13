"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function HeroSection() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return <section className="min-h-screen bg-temple" />;

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
            {/* Background Atmosphere - Sacred Script */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none overflow-hidden">
                <div className="grid grid-cols-4 gap-20 transform -rotate-12 scale-150">
                    {[...Array(20)].map((_, i) => (
                        <span key={i} className="font-noto text-8xl whitespace-nowrap">
                            किं तद् गीतं यत्र न संस्कृतं स्वरितम्
                        </span>
                    ))}
                </div>
            </div>

            {/* Background Mandala */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                    className="w-[140vw] h-[140vw] max-w-[1500px] max-h-[1500px]"
                >
                    <svg viewBox="0 0 200 200" className="w-full h-full text-saffron fill-none stroke-current stroke-[0.1]">
                        {[...Array(12)].map((_, i) => (
                            <motion.g key={i} transform={`rotate(${i * 30} 100 100)`}>
                                <circle cx="100" cy="100" r={10 + i * 8} strokeDasharray="1 3" />
                                <path
                                    d="M100 20 L105 40 L125 40 L110 55 L115 75 L100 65 L85 75 L90 55 L75 40 L95 40 Z"
                                    transform={`translate(0, ${-i * 5}) scale(${0.5 + i * 0.1})`}
                                    className="opacity-40"
                                />
                            </motion.g>
                        ))}
                    </svg>
                </motion.div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center max-w-5xl mx-auto py-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="mb-12"
                >
                    <div className="flex flex-col items-center mb-6">
                        <motion.span
                            className="font-noto text-3xl md:text-4xl text-saffron font-bold mb-4 tracking-[0.3em] neon-saffron animate-breathe"
                        >
                            संस्कृत श्री:
                        </motion.span>
                        <h1 className="text-7xl md:text-9xl font-black font-cinzel text-white tracking-widest leading-none drop-shadow-[0_0_30px_rgba(255,124,17,0.3)]">
                            Sanskrit Shree
                        </h1>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 2 }}
                        className="flex flex-col items-center space-y-4"
                    >
                        <p className="font-noto text-lg md:text-xl text-gold italic opacity-60 max-w-2xl px-4">
                            "यत्र प्रत्येकं गीतिका स्वप्राचीनप्राणं विन्दति"
                        </p>
                        <p className="text-xl md:text-2xl font-cormorant italic text-white/80 tracking-wide">
                            Where Every Song Finds Its Ancient Soul
                        </p>
                    </motion.div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1.5 }}
                    className="text-lg md:text-xl font-cormorant text-white/50 mb-12 leading-relaxed max-w-3xl mx-auto border-shastra py-6"
                >
                    We breathe new life into beloved global melodies through the eternal resonance of Sanskrit.
                    <span className="block mt-2 text-saffron/70 font-noto tracking-wider text-sm">
                        लोकप्रियगीतानि शाश्वतसंस्कृतध्वनिना पुनर्सृजामः।
                    </span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-8"
                >
                    <button className="group relative px-12 py-5 overflow-hidden rounded-sm transition-all duration-500 hover:shadow-saffron">
                        <div className="absolute inset-0 bg-saffron opacity-90 group-hover:opacity-100 transition-opacity" />
                        <div className="relative flex flex-col items-center">
                            <span className="font-noto text-[10px] text-temple font-bold mb-0.5 tracking-tighter">रचनाः अन्विष्यन्ताम्</span>
                            <span className="font-cinzel text-temple font-black text-lg tracking-widest">Explore Songs</span>
                        </div>
                    </button>

                    <button className="group relative px-12 py-5 overflow-hidden rounded-sm border border-gold/30 hover:border-gold transition-all duration-500">
                        <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative flex flex-col items-center">
                            <span className="font-noto text-[10px] text-gold font-bold mb-0.5 tracking-tighter">गीतं समर्प्यताम्</span>
                            <span className="font-cinzel text-white font-bold text-lg tracking-widest">Submit a Song</span>
                        </div>
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 text-saffron/40 flex flex-col items-center"
            >
                <span className="font-noto text-[10px] mb-2 tracking-[0.5em] uppercase">अधः</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-saffron to-transparent" />
            </motion.div>
        </section>
    );
}
