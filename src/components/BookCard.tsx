"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ShoppingCart, Book, ChevronDown } from "lucide-react";

interface BookCardProps {
  title: string;
  author: string;
  basePrice: number;
  description: string;
  imagePlaceholder?: string;
}

export default function BookCard({ title, author, basePrice, description }: BookCardProps) {
  const [format, setFormat] = useState("Paperback");
  
  const getPriceModifier = () => {
    switch(format) {
      case "E-book": return -200;
      case "Hardcover": return 500;
      default: return 0;
    }
  };

  const finalPrice = basePrice + getPriceModifier();

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-peacock/5 flex flex-col h-full"
    >
      <div className="aspect-[3/4] bg-cream relative flex items-center justify-center p-12 overflow-hidden group">
         <div className="absolute inset-0 bg-peacock/5 opacity-0 group-hover:opacity-100 transition-opacity" />
         <div className="relative z-10 w-full h-full border-4 border-peacock/10 rounded-lg flex flex-col items-center justify-center text-center p-6 bg-white shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
            <Book size={64} className="text-gold mb-6" />
            <h4 className="font-cairo text-xl font-bold text-peacock mb-2">{title}</h4>
            <p className="font-cairo text-peacock/40 italic text-sm">By {author}</p>
         </div>
      </div>

      <div className="p-10 flex-grow flex flex-col">
          <div className="flex-grow">
            <h3 className="font-cairo text-2xl font-bold text-peacock mb-4 leading-tight">{title}</h3>
            <p className="font-cairo text-lg text-peacock/70 leading-relaxed mb-8 italic">
                {description}
            </p>
          </div>

          <div className="space-y-6 pt-6 border-t border-peacock/5">
              <div className="relative">
                  <label className="text-[10px] font-cairo text-peacock/30 tracking-widest uppercase mb-2 block font-bold">Select Format</label>
                  <div className="relative">
                      <select 
                        className="w-full bg-cream/50 border border-peacock/10 rounded-full py-3 px-6 appearance-none focus:outline-none focus:border-maroon font-cairo text-xs tracking-widest font-bold text-peacock cursor-pointer"
                        value={format}
                        onChange={(e) => setFormat(e.target.value)}
                      >
                        <option>E-book</option>
                        <option>Paperback</option>
                        <option>Hardcover</option>
                      </select>
                      <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-peacock/30 pointer-events-none" size={16} />
                  </div>
              </div>

              <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                      <span className="text-[10px] font-cairo text-peacock/30 tracking-widest uppercase mb-1">Total Price</span>
                      <span className="font-cairo text-2xl font-bold text-peacock">₹{finalPrice}</span>
                  </div>
                  <button className="bg-maroon text-white p-4 rounded-full hover:bg-peacock transition-all shadow-lg transform active:scale-95 group">
                      <ShoppingCart size={20} className="group-hover:rotate-12 transition-transform" />
                  </button>
              </div>
          </div>
      </div>
    </motion.div>
  );
}

