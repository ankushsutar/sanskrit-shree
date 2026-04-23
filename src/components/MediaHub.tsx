"use client";

import { motion } from "framer-motion";
import { Youtube, Image as ImageIcon, Play } from "lucide-react";

const videos = [
    { 
        title: "Chandanam (Marathi Song in Sanskrit)", 
        id: "KQjo6a8mylA", 
        thumbnail: "https://img.youtube.com/vi/KQjo6a8mylA/hqdefault.jpg" 
    },
    { 
        title: "Hamara Bajaj (Ad in Sanskrit)", 
        id: "XeOjvZqiZOk", 
        thumbnail: "https://img.youtube.com/vi/XeOjvZqiZOk/hqdefault.jpg" 
    },
    { 
        title: "Abhang Tukaram Movie Teaser", 
        id: "3NjQN4up2v8", 
        thumbnail: "https://img.youtube.com/vi/3NjQN4up2v8/hqdefault.jpg" 
    },
];

const galleryImages = [
    "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80",
];

export function MediaHub() {
    return (
        <section id="media" className="py-24 px-6 bg-cream overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="font-cairo text-sm tracking-[0.5em] text-gold uppercase font-bold">Resonance in Motion</h2>
                    <h1 className="text-4xl md:text-6xl font-cairo font-bold text-peacock">Media & Community</h1>
                    <p className="font-cairo text-2xl text-peacock/60 italic max-w-2xl mx-auto">
                        "From global covers to local gatherings, witness the vibrancy of Sanskritshree."
                    </p>
                </div>

                {/* YouTube Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {videos.map((vid, idx) => (
                        <motion.div 
                            key={idx}
                            onClick={() => window.open(`https://youtube.com/watch?v=${vid.id}`, '_blank')}
                            className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl group cursor-pointer border-4 border-white/50"
                        >
                            <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-peacock/40 group-hover:bg-peacock/20 transition-colors flex items-center justify-center">
                                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/30 group-hover:bg-maroon group-hover:border-maroon transition-all">
                                    <Play fill="white" className="text-white ml-1" />
                                </div>
                            </div>
                            <div className="absolute bottom-10 left-10 right-10">
                                <span className="bg-maroon text-white text-[10px] font-cairo tracking-widest px-4 py-1.5 rounded-full mb-4 inline-block shadow-lg">YOUTUBE ANCHOR</span>
                                <h3 className="text-2xl font-cairo font-bold text-white drop-shadow-lg">{vid.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Gallery Section */}
                <div className="space-y-12">
                     <div className="flex items-center justify-between">
                         <h3 className="font-cairo text-2xl font-bold text-peacock tracking-widest uppercase">Community Impact</h3>
                         <button className="flex items-center gap-2 text-gold font-cairo text-xs font-bold tracking-widest hover:gap-3 transition-all">
                             VIEW ALL <ImageIcon size={16} />
                         </button>
                     </div>
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                         {galleryImages.map((img, idx) => (
                             <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="aspect-square rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-peacock/5"
                             >
                                 <img src={img} className="w-full h-full object-cover" alt="Gallery" />
                             </motion.div>
                         ))}
                     </div>
                </div>
            </div>
        </section>
    );
}

