"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, MessageCircle } from "lucide-react";

const posts = [
    {
        id: 1,
        title: "The Eternal Resonance of Aum",
        excerpt: "Discover the scientific and spiritual significance of the primordial sound that created the universe.",
        date: "May 04, 2026",
        comments: 5,
        image: "/category_items_grid_1776879288073.png"
    },
    {
        id: 2,
        title: "Vedic Chanting for Modern Stress",
        excerpt: "How the rhythmic precision of Sanskrit shlokas can retrain your neural pathways for peace.",
        date: "May 02, 2026",
        comments: 3,
        image: "/category_items_grid_1776879288073.png"
    },
    {
        id: 3,
        title: "Latest: Sanskrit Gondhal Viral!",
        excerpt: "Our recent Sanskrit cover of 'Chandanam' (Gondhal) has crossed thousands of views. Watch the resonance of ancient rhythm.",
        date: "April 23, 2026",
        comments: 24,
        image: "https://img.youtube.com/vi/KQjo6a8mylA/maxresdefault.jpg"
    }
];

export default function BlogSection() {
    return (
        <section className="py-24 bg-white">
            <div className="ogani-container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-black text-peacock uppercase tracking-widest mb-4"> From The Knowledge Hub</h2>
                    <div className="w-20 h-1 bg-maroon mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <div key={post.id} className="group">
                            <div className="relative h-[250px] overflow-hidden mb-6">
                                <Image 
                                    src={post.image} 
                                    alt={post.title} 
                                    fill 
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-4 text-[13px] text-peacock/50 font-bold uppercase tracking-widest">
                                    <div className="flex items-center space-x-1">
                                        <Calendar size={14} className="text-gold" />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <MessageCircle size={14} className="text-gold" />
                                        <span>{post.comments}</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-black text-peacock group-hover:text-maroon transition-colors uppercase">
                                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                                </h3>
                                <p className="text-base text-peacock/70 font-medium leading-relaxed italic">
                                    {post.excerpt}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

