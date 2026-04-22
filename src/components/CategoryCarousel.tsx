"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
    { title: "Vedas", image: "/category_items_grid_1776879288073.png", href: "/courses" },
    { title: "Sitar Melodies", image: "/category_items_grid_1776879288073.png", href: "/media" },
    { title: "Sacred Shlokas", image: "/category_items_grid_1776879288073.png", href: "/shop" },
    { title: "Vedic Wisdom", image: "/category_items_grid_1776879288073.png", href: "/blog" },
];

export default function CategoryCarousel() {
    return (
        <section className="py-12 bg-white overflow-hidden">
            <div className="ogani-container">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {categories.map((cat, idx) => (
                        <Link 
                            key={idx} 
                            href={cat.href}
                            className="relative group h-[270px] bg-[#f5f5f5] overflow-hidden"
                        >
                            <Image 
                                src={cat.image} 
                                alt={cat.title} 
                                fill 
                                className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                            />
                            <div className="absolute bottom-6 left-0 right-0 px-4">
                                <div className="bg-white py-3 text-center shadow-sm border border-peacock/5 group-hover:bg-peacock group-hover:text-white transition-all">
                                    <span className="font-black text-sm tracking-widest uppercase">
                                        {cat.title}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

