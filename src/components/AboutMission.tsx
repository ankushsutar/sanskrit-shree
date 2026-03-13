"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function AboutMission() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <section id="about" className="py-24 px-6 relative bg-temple overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full flex flex-wrap gap-20 p-20 font-noto text-8xl rotate-12">
                    {[...Array(10)].map((_, i) => (
                        <span key={i}>कला संस्कृतिः सङ्गीतम्</span>
                    ))}
                </div>
            </div>

            <div className="max-w-5xl mx-auto text-center relative z-10">
                {/* Sacred Mantra Box */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-20 p-16 manuscript border-gold/20 relative"
                >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-temple border border-gold/30 rounded-full flex items-center justify-center text-gold text-3xl font-noto shadow-2xl">
                        ॐ
                    </div>

                    <h3 className="font-noto text-3xl md:text-5xl font-bold text-saffron mb-6 leading-relaxed neon-saffron">
                        "किं तद् गीतं यत्र न <span className="text-white">संस्कृतं</span> स्वरितम्"
                    </h3>
                    <p className="font-cormorant italic text-xl md:text-2xl text-white/50 border-t border-gold/10 pt-6 mt-6">
                        "What is that melody where the resonance of Sanskrit remains unheard?"
                    </p>
                </motion.div>

                {/* Mission Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto mb-20"
                >
                    <span className="font-noto text-saffron font-bold text-xl tracking-[0.3em] block mb-2">अस्माकं लक्ष्यम्</span>
                    <h2 className="font-cinzel text-5xl md:text-6xl font-black text-white mb-10 tracking-widest uppercase">
                        Our Mission
                    </h2>

                    <p className="font-cormorant text-xl md:text-2xl text-white/70 leading-relaxed mb-12 text-center">
                        Sanskrit is not a silent relic of the past; it is the <span className="text-gold font-bold">eternal soul</span> of sound.
                        At <span className="text-gold">Sanskrit Shree</span>, we bridge the sacred gap between ancient classical literature and
                        modern global rhythms. We believe the "Mother of all Languages" deserves to be heard in every contemporary
                        melody, making the divine accessible to all.
                    </p>

                    {/* Ritualistic Divider */}
                    <div className="flex items-center justify-center space-x-6 mb-20">
                        <div className="h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent" />
                        <div className="w-4 h-4 rotate-45 border border-gold/50" />
                        <div className="h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent" />
                    </div>
                </motion.div>

                {/* Core Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { sanskrit: "सत्यता", title: "Authenticity", desc: "Grammatically precise translations following classical Vedic and Laukika meters." },
                        { sanskrit: "विविधता", title: "Diversity", desc: "Songs spanning 10+ languages and genres, from Pop to Soul and Folklore." },
                        { sanskrit: "समुदायः", title: "Community", desc: "A sacred gathering for scholars, singers, and seekers to breathe life into Sanskrit music." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className="text-center p-8 border border-gold/5 hover:border-gold/20 transition-all duration-500 bg-gold/5 rounded-sm"
                        >
                            <span className="font-noto text-xs text-saffron/40 block mb-2 tracking-[0.4em] uppercase">{item.sanskrit}</span>
                            <h4 className="font-cinzel text-gold text-xl font-black mb-4 tracking-wider uppercase">{item.title}</h4>
                            <p className="font-cormorant text-white/50 leading-relaxed text-sm lg:text-base">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
