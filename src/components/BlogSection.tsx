"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const blogPosts = [
    {
        title: "How We Translate Song Emotions into Sanskrit Grammar",
        tag: "PROCESS",
        excerpt: "Exploring the delicate balance between maintaining original emotional weight and choosing the right Vibhakti...",
        date: "March 15, 2024",
        char: "भा",
        sanskritTag: "प्रक्रिया",
    },
    {
        title: "The Rules We Follow: Meter, Rhyme & Chandas in Sanskrit Songs",
        tag: "LANGUAGE",
        excerpt: "Understanding the application of classical Chandas like Anustubh and Trishubh in modern pop melodies...",
        date: "March 10, 2024",
        char: "छ",
        sanskritTag: "भाषा",
    },
    {
        title: "Why Sanskrit Songs Sound Different — And Why That's Beautiful",
        tag: "CULTURE",
        excerpt: "The sonic texture of Sanskrit creates a unique auditory experience that transcends borders...",
        date: "March 05, 2024",
        char: "ध्व",
        sanskritTag: "संस्कृतिः",
    },
];

export function BlogSection() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <section id="blog" className="py-24 px-6 relative overflow-hidden bg-temple">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="font-noto text-saffron font-bold text-xl mb-2 tracking-[0.2em] block">अधुनातन-लेखाः</span>
                        <h2 className="text-4xl md:text-5xl font-bold font-cinzel text-white mb-4">
                            From the Scriptorium
                        </h2>
                        <div className="w-48 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="group flex flex-col items-center"
                    >
                        <span className="font-noto text-[10px] text-gold/40 mb-1 group-hover:text-gold transition-colors">सर्वं पठन्तु</span>
                        <div className="flex items-center space-x-2 font-cinzel text-gold font-bold text-sm tracking-widest border-b border-gold/20 pb-1 group-hover:border-gold transition-all">
                            <span>Visit Full Blog</span>
                            <ArrowUpRight size={16} />
                        </div>
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer relative"
                        >
                            <div className="manuscript p-8 rounded-sm border border-gold/10 group-hover:border-gold/30 transition-all duration-500 h-full flex flex-col">
                                {/* Thumbnail-like visual */}
                                <div className="aspect-video mb-8 relative overflow-hidden bg-gold/5 border border-gold/10 flex items-center justify-center">
                                    <span className="text-7xl font-noto text-gold/10 group-hover:text-saffron/30 transition-colors duration-700 select-none">
                                        {post.char}
                                    </span>
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-temple/80 to-transparent" />
                                </div>

                                <div className="mb-6">
                                    <div className="flex items-center space-x-2 mb-4">
                                        <span className="bg-saffron/10 text-saffron px-3 py-1 rounded-sm text-[9px] font-black tracking-widest border border-saffron/20 uppercase">
                                            {post.tag}
                                        </span>
                                        <span className="font-noto text-[10px] text-saffron/40">{post.sanskritTag}</span>
                                    </div>
                                    <h3 className="font-cinzel text-xl font-black text-white mb-4 leading-snug group-hover:text-gold transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="font-cormorant text-white/50 text-lg leading-relaxed line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                </div>

                                <div className="mt-auto pt-6 border-t border-gold/5 flex items-center justify-between text-gold/40 text-[10px] font-cinzel tracking-[0.2em] uppercase">
                                    <span>{post.date}</span>
                                    <span className="group-hover:text-white transition-colors">Read More</span>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
