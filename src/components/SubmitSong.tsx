"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function SubmitSong() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <section id="submit" className="py-24 px-6 relative overflow-hidden bg-temple">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-saffron/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10 manuscript p-8 md:p-16 rounded-sm border-gold/20">
                <div className="text-center mb-12">
                    <span className="font-noto text-saffron font-bold text-xl mb-2 tracking-[0.2em] block uppercase">गीतं सूच्यताम्</span>
                    <h2 className="font-cinzel text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-widest">
                        Suggest a Song
                    </h2>
                    <p className="font-cormorant text-xl text-white/50 border-t border-gold/10 pt-4 mt-4">
                        Tell us which melody you wish to hear in the eternal resonance of Sanskrit.
                    </p>
                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-10" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <label className="font-cinzel text-gold text-[10px] tracking-[0.3em] font-black uppercase">Song Name</label>
                            <span className="font-noto text-[10px] text-saffron/40 italic">गीतनाम</span>
                        </div>
                        <input
                            type="text"
                            placeholder="e.g. Bohemian Rhapsody"
                            className="w-full bg-gold/5 border-b border-gold/20 px-0 py-4 text-white focus:outline-none focus:border-gold transition-all font-cormorant text-lg placeholder:text-white/10"
                        />
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <label className="font-cinzel text-gold text-[10px] tracking-[0.3em] font-black uppercase">Original Language</label>
                            <span className="font-noto text-[10px] text-saffron/40 italic">मूलभाषा</span>
                        </div>
                        <input
                            type="text"
                            placeholder="e.g. English"
                            className="w-full bg-gold/5 border-b border-gold/20 px-0 py-4 text-white focus:outline-none focus:border-gold transition-all font-cormorant text-lg placeholder:text-white/10"
                        />
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <label className="font-cinzel text-gold text-[10px] tracking-[0.3em] font-black uppercase">Artist Name</label>
                            <span className="font-noto text-[10px] text-saffron/40 italic">कलाकारः</span>
                        </div>
                        <input
                            type="text"
                            placeholder="e.g. Queen"
                            className="w-full bg-gold/5 border-b border-gold/20 px-0 py-4 text-white focus:outline-none focus:border-gold transition-all font-cormorant text-lg placeholder:text-white/10"
                        />
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <label className="font-cinzel text-gold text-[10px] tracking-[0.3em] font-black uppercase">Your Email</label>
                            <span className="font-noto text-[10px] text-saffron/40 italic">विद्युत्-पत्रम्</span>
                        </div>
                        <input
                            type="email"
                            placeholder="To notify you..."
                            className="w-full bg-gold/5 border-b border-gold/20 px-0 py-4 text-white focus:outline-none focus:border-gold transition-all font-cormorant text-lg placeholder:text-white/10"
                        />
                    </div>
                    <div className="md:col-span-2 pt-6">
                        <button className="w-full bg-saffron text-temple font-cinzel font-black py-6 rounded-sm text-xl tracking-[0.4em] uppercase hover:bg-white transition-all shadow-2xl shadow-saffron/20 group">
                            <span className="block font-noto text-xs mb-1 opacity-60 group-hover:opacity-100">रचनार्थं समर्प्यताम्</span>
                            Submit for Composition
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
