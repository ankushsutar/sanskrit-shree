"use client";

import { motion } from "framer-motion";
import { Music2, Radio, Heart, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

const categories = [
    { name: "Hindi Songs", sanskrit: "हिन्दी", count: 42, icon: Music2 },
    { name: "Tamil Songs", sanskrit: "तमिळ्", count: 28, icon: Radio },
    { name: "Telugu Songs", sanskrit: "तेलगु", count: 24, icon: Music2 },
    { name: "English Songs", sanskrit: "आङ्ग्लभाषा", count: 18, icon: Radio },
    { name: "Kannada Songs", sanskrit: "कन्नड", count: 15, icon: Music2 },
    { name: "Malayalam Songs", sanskrit: "मलयाळम्", count: 12, icon: Radio },
    { name: "Devotional", sanskrit: "भक्तिः", count: 56, icon: Heart },
    { name: "Trending", sanskrit: "मुख्याः", count: 10, icon: TrendingUp },
];

export function Categories() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <section id="categories" className="py-24 px-6 relative bg-temple overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >
                        <span className="font-noto text-saffron font-bold text-xl mb-2 tracking-[0.2em]">भाषा-वर्गाः</span>
                        <h2 className="text-4xl md:text-5xl font-bold font-cinzel text-white mb-4">
                            Browse by Language
                        </h2>
                        <div className="w-48 h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-6" />
                        <p className="font-cormorant italic text-white/50 max-w-xl mx-auto">
                            Explore songs by their original linguistic soul, reimagined in the language of the Gods.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group cursor-pointer relative"
                        >
                            <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm" />
                            <div className="manuscript p-8 rounded-sm border border-gold/10 group-hover:border-gold/30 transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden">
                                {/* Symbolic background letter */}
                                <span className="absolute -right-4 -bottom-4 text-7xl font-noto text-gold/5 group-hover:text-gold/10 transition-colors select-none">
                                    {cat.sanskrit.charAt(0)}
                                </span>

                                <div className="w-16 h-16 rounded-full border border-gold/10 flex items-center justify-center mb-6 group-hover:border-gold/40 group-hover:bg-gold/5 transition-all duration-500">
                                    <cat.icon className="text-gold/40 group-hover:text-saffron transition-colors" size={32} />
                                </div>

                                <h3 className="font-cinzel text-sm font-black text-white mb-1 tracking-widest uppercase">
                                    {cat.name}
                                </h3>
                                <p className="font-noto text-saffron text-lg font-bold mb-4">
                                    {cat.sanskrit}
                                </p>

                                <span className="font-cormorant text-white/30 text-[10px] uppercase tracking-[0.2em]">
                                    {cat.count} रचनाः
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
