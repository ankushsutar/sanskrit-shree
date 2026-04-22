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
        <section className="py-24 px-6 relative bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-cream p-12 md:p-20 rounded-[3rem] border-2 border-peacock/5 relative overflow-hidden shadow-xl"
                >
                    {/* Decorative glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-peacock/5 blur-[100px] -translate-y-1/2 translate-x-1/2" />

                    <span className="font-noto text-maroon font-bold text-xl mb-2 tracking-[0.2em] block uppercase">दिव्य-वृत्तान्ताः</span>
                    <h2 className="font-cairo text-4xl md:text-5xl font-black text-peacock mb-6 tracking-widest uppercase">
                        Join the Scroll
                    </h2>
                    <p className="font-cairo text-2xl text-peacock/60 mb-10 max-w-xl mx-auto border-t border-peacock/10 pt-8 mt-8">
                        Subscribe to receive new compositions, linguistic deep-dives, and
                        sacred musical updates directly in your digital archive.
                    </p>

                    <form className="flex flex-col md:flex-row gap-6 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-1 bg-white border-b-2 border-peacock/10 px-6 py-4 text-peacock focus:outline-none focus:border-maroon transition-all font-cairo text-xl placeholder:text-peacock/20 rounded-full shadow-sm"
                        />
                        <button className="bg-maroon text-white font-cairo font-black px-10 py-4 rounded-full text-sm hover:bg-peacock transition-all shadow-xl shadow-maroon/20 tracking-[0.2em] uppercase group">
                             JOIN NOW
                        </button>
                    </form>

                    <p className="mt-8 font-cairo text-sm text-peacock/30 italic">
                        * We respect your privacy. No spam, only sacred melodies.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

