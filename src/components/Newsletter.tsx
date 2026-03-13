"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Newsletter() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <section className="py-24 px-6 relative bg-temple">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="manuscript p-12 md:p-20 rounded-sm border border-gold/20 relative overflow-hidden"
                >
                    {/* Decorative glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-saffron/10 blur-[100px] -translate-y-1/2 translate-x-1/2" />

                    <span className="font-noto text-saffron font-bold text-xl mb-2 tracking-[0.2em] block uppercase">दिव्य-वृत्तान्ताः</span>
                    <h2 className="font-cinzel text-4xl md:text-5xl font-black text-white mb-6 tracking-widest uppercase">
                        Join the Scroll
                    </h2>
                    <p className="font-cormorant text-xl text-white/50 mb-10 max-w-xl mx-auto border-t border-gold/10 pt-6 mt-6">
                        Subscribe to receive new compositions, linguistic deep-dives, and
                        sacred musical updates directly in your digital archive.
                    </p>

                    <form className="flex flex-col md:flex-row gap-6 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-1 bg-gold/5 border-b border-gold/20 px-0 py-4 text-white focus:outline-none focus:border-gold transition-all font-cormorant text-lg placeholder:text-white/10"
                        />
                        <button className="bg-saffron text-temple font-cinzel font-black px-10 py-4 rounded-sm text-lg hover:bg-white transition-all shadow-xl shadow-saffron/20 tracking-widest uppercase group">
                            <span className="block font-noto text-xs mb-1 opacity-60 group-hover:opacity-100 italic">संयुज्यताम्</span>
                            Subscribe
                        </button>
                    </form>

                    <p className="mt-8 font-cormorant text-sm text-white/30 italic">
                        * We respect your privacy. No spam, only sacred melodies.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
