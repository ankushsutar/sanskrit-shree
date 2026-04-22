"use client";

import { motion } from "framer-motion";
import { BookOpen, Star, ShoppingCart } from "lucide-react";

export default function ProductPreview() {
  const featuredProduct = {
    title: "Dr. Shreehari’s Ph.D. Thesis",
    description: "A groundbreaking exploration into the rhythmic structure and scientific brilliance of classical Sanskrit compositions.",
    price: "700",
    rating: 5,
    reviews: 12
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-cream p-12 md:p-16 rounded-[3rem] border border-peacock/5 flex flex-col md:flex-row gap-16 items-center shadow-lg">
          {/* Image/Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 aspect-square bg-white rounded-3xl shadow-inner flex items-center justify-center relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gold/5 flex items-center justify-center">
               <BookOpen size={120} className="text-gold/20" />
            </div>
            <div className="z-10 text-center space-y-4">
               <h4 className="font-noto text-4xl text-peacock font-bold">शोधप्रबंधः</h4>
               <p className="font-cairo text-xs tracking-[0.3em] text-gold uppercase font-bold">The PhD Thesis</p>
            </div>
            {/* Badge */}
            <div className="absolute top-8 right-8 bg-peacock text-white px-4 py-2 rounded-full font-cairo text-[10px] tracking-widest uppercase">
              Limited Edition
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-8"
          >
            <div className="space-y-2">
               <div className="flex items-center gap-1 text-gold mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  <span className="text-peacock/40 text-xs font-cairo ml-2">({featuredProduct.reviews} REVIEWS)</span>
               </div>
               <h2 className="font-cairo text-3xl md:text-4xl font-bold text-peacock leading-tight">
                 {featuredProduct.title}
               </h2>
            </div>
            
            <p className="font-cairo text-xl text-peacock/70 leading-relaxed italic">
              {featuredProduct.description}
            </p>

            <div className="flex items-center gap-4">
               <span className="text-4xl font-cairo font-bold text-peacock">₹{featuredProduct.price}</span>
               <span className="text-peacock/30 line-through font-cairo">₹1,200</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
               <button className="bg-peacock text-white px-10 py-4 rounded-full font-cairo tracking-widest font-bold hover:bg-peacock/90 transition-all flex items-center justify-center gap-3">
                 <ShoppingCart size={18} /> ADD TO CART
               </button>
               <button className="bg-transparent border border-peacock/20 text-peacock px-10 py-4 rounded-full font-cairo tracking-widest font-bold hover:bg-peacock/5 transition-all">
                 PREVIEW SCRIPT
               </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

