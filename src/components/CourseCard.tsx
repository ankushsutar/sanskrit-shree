"use client";

import { motion } from "framer-motion";
import { Clock, Users, ArrowRight } from "lucide-react";

interface CourseCardProps {
  title: string;
  level: string;
  duration: string;
  minCohort: number;
  price?: string;
  description: string;
}

export default function CourseCard({ title, level, duration, minCohort, price, description }: CourseCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -12 }}
      className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border-2 border-peacock/5 flex flex-col h-full relative"
    >
      <div className="aspect-[16/11] bg-cream relative overflow-hidden group-hover:bg-white transition-colors">
         {/* Abstract background motif */}
         <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] font-noto select-none text-peacock">
             सं
           </div>
         </div>
         
         <div className="absolute top-6 left-6 z-10">
            <span className="bg-maroon text-white text-[10px] font-cairo tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg font-bold">
              {level}
            </span>
         </div>
      </div>
      
      <div className="p-10 flex-grow flex flex-col bg-white">
        <h3 className="font-cairo text-2xl font-bold text-peacock mb-4 group-hover:text-maroon transition-colors leading-tight">
          {title}
        </h3>
        <p className="font-cairo text-peacock/70 text-xl leading-relaxed mb-8 flex-grow italic">
          {description}
        </p>
        
        <div className="space-y-4 mb-10 pt-6 border-t border-peacock/5">
           <div className="flex items-center gap-4 text-peacock/50 text-xs font-cairo tracking-widest font-bold">
              <Clock size={18} className="text-gold" />
              <span>{duration.toUpperCase()}</span>
           </div>
           <div className="flex items-center gap-4 text-peacock/50 text-xs font-cairo tracking-widest font-bold">
              <Users size={18} className="text-gold" />
              <span>MIN. {minCohort} STUDENTS</span>
           </div>
        </div>

        <div className="flex items-center justify-between pt-6 border-t-2 border-gold/10">
           <div className="flex flex-col">
             <span className="text-[10px] font-cairo text-peacock/30 tracking-widest uppercase mb-1">Tuition Fee</span>
             <span className="font-cairo text-2xl font-bold text-peacock">
               {price ? `₹${price}` : "CUSTOM"}
             </span>
           </div>
           <button className="bg-peacock text-white w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-maroon transition-all transform group-hover:scale-110 shadow-lg group-hover:rotate-12">
              <ArrowRight size={20} />
           </button>
        </div>
      </div>
    </motion.div>
  );
}

