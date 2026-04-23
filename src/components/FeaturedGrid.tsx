"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, RefreshCw, ShoppingCart } from "lucide-react";

const tabs = ["All", "Courses", "Music", "Shop"];

const products = [
    { id: 1, category: "Courses", title: "Fun with Sanskrit", image: "https://images.unsplash.com/photo-1544640808-32ca72ac7f67?auto=format&fit=crop&q=80", price: "Enrolling Now" },
    { id: 2, category: "Music", title: "Chandanam Gondhal", image: "https://img.youtube.com/vi/KQjo6a8mylA/hqdefault.jpg", price: "Free on YT" },
    { id: 3, category: "Shop", title: "Sanskrit Thesis Book", image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80", price: "₹500.00" },
    { id: 4, category: "Courses", title: "Advanced Grammar", image: "https://images.unsplash.com/photo-1509021453782-08c17c44633e?auto=format&fit=crop&q=80", price: "Contact Us" },
    { id: 5, category: "Music", title: "Abhang Tukaram", image: "https://img.youtube.com/vi/3NjQN4up2v8/hqdefault.jpg", price: "Exclusive" },
    { id: 6, category: "Shop", title: "Musical Drama Ticket", image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80", price: "Available" },
    { id: 7, category: "Courses", title: "Vedic Chants Masterclass", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80", price: "Upcoming" },
    { id: 8, category: "Music", title: "Hamara Bajaj Cover", image: "https://img.youtube.com/vi/XeOjvZqiZOk/hqdefault.jpg", price: "Viral HIT" },
];

export default function FeaturedGrid() {
    const [activeTab, setActiveTab] = useState("All");

    const filteredProducts = activeTab === "All" 
        ? products 
        : products.filter(p => p.category === activeTab);

    return (
        <section className="py-24 bg-white">
            <div className="ogani-container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-black text-peacock uppercase tracking-widest mb-4">
                        Featured Resources
                    </h2>
                    <div className="w-20 h-1 bg-maroon mx-auto mb-10" />
                    
                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`text-sm font-black tracking-widest uppercase transition-colors relative pb-2 ${
                                    activeTab === tab ? "text-peacock" : "text-peacock/40 hover:text-peacock"
                                }`}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <motion.div 
                                        layoutId="tabUnderline"
                                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-maroon" 
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group"
                            >
                                <div className="relative h-[270px] bg-[#f5f5f5] overflow-hidden mb-4">
                                    <Image 
                                        src={product.image} 
                                        alt={product.title} 
                                        fill 
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    
                                    {/* Action Icons (Ogani Style) */}
                                    <div className="absolute inset-0 flex items-center justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                        <button className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-peacock hover:bg-peacock hover:text-white hover:rotate-[360deg] transition-all duration-500">
                                            <Heart size={18} />
                                        </button>
                                        <button className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-peacock hover:bg-peacock hover:text-white hover:rotate-[360deg] transition-all duration-500">
                                            <RefreshCw size={18} />
                                        </button>
                                        <button className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-peacock hover:bg-peacock hover:text-white hover:rotate-[360deg] transition-all duration-500">
                                            <ShoppingCart size={18} />
                                        </button>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <Link href="#" className="text-xl font-bold text-peacock/80 hover:text-maroon transition-colors block mb-1 uppercase tracking-tight">
                                        {product.title}
                                    </Link>
                                    <span className="font-black text-peacock">
                                        {product.price}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

