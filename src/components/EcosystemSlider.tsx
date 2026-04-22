"use client";

import React from "react";
import { motion } from "framer-motion";
import { Headphones, Youtube, Music, BookOpen, GraduationCap, LucideIcon } from "lucide-react";

interface EcosystemItem {
  id: string;
  name: string;
  Icon: LucideIcon;
  color: string;
  href: string;
}

const ecosystemItems: EcosystemItem[] = [
  { id: "shravya", name: "Shravya", Icon: Headphones, color: "text-peacock", href: "/media" },
  { id: "youtube", name: "YouTube", Icon: Youtube, color: "text-red-600", href: "https://youtube.com/@SanskritShree" },
  { id: "gandharva", name: "Gandharvasakhyam", Icon: Music, color: "text-gold", href: "/booking" },
  { id: "books", name: "Books", Icon: BookOpen, color: "text-peacock", href: "/shop" },
  { id: "courses", name: "Courses", Icon: GraduationCap, color: "text-maroon", href: "/courses" },
];

import Link from "next/link";

export default function EcosystemSlider() {
  return (
    <section className="py-20 bg-cream overflow-hidden" id="ecosystem">
      <div className="max-w-6xl mx-auto px-6 mb-12 flex items-center justify-between">
        <h2 className="font-cairo text-2xl md:text-3xl font-bold text-peacock tracking-widest uppercase">
           The Ecosystem
        </h2>
      </div>

      <motion.div 
        className="flex gap-8 px-6 md:px-[calc((100vw-72rem)/2)] cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ right: 0, left: -400 }}
      >
        {ecosystemItems.map((item) => (
          <Link key={item.id} href={item.href} className="flex-shrink-0">
            <motion.div
              whileHover={{ y: -10 }}
              className="w-64 h-80 bg-white rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-md hover:shadow-xl transition-all border border-peacock/5 group"
            >
              <div className={`w-20 h-20 rounded-2xl bg-cream flex items-center justify-center mb-6 shadow-inner ${item.color}`}>
                <item.Icon size={32} />
              </div>
              <h3 className="font-cairo text-lg font-bold text-peacock tracking-widest mb-4">
                {item.name}
              </h3>
              <p className="font-cairo text-peacock/60 italic text-sm">
                 Experience Sanskrit through this unique dimension of our studio.
              </p>
              <div className="mt-8">
                 <span className="text-xs font-cairo text-gold tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    EXPLORE
                 </span>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>

      <div className="mt-12 flex justify-center md:hidden">
         <span className="text-xs font-cairo text-peacock/40 tracking-widest uppercase">
           Swipe to explore
         </span>
      </div>
    </section>
  );
}

