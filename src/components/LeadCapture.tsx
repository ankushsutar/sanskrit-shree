"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Gift, X, Send } from "lucide-react";

export default function LeadCapture() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const dismissed = localStorage.getItem("lead-capture-dismissed");
      if (!dismissed) setIsVisible(true);
    }, 5000); // Show after 5 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("lead-capture-dismissed", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
        handleDismiss();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-10 right-10 z-[100] max-w-sm w-full"
        >
            <div className="bg-peacock text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden border-2 border-white/10 group">
                <button 
                    onClick={handleDismiss}
                    className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
                >
                    <X size={20} />
                </button>

                <div className="absolute -top-10 -left-10 w-32 h-32 bg-gold/20 rounded-full blur-3xl group-hover:bg-maroon/20 transition-colors" />

                <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-gold border border-white/20 shadow-xl">
                        <Gift size={32} />
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-cairo text-xl font-bold tracking-widest uppercase">A Gift of Resonance</h3>
                        <p className="font-cairo text-lg text-white/60 italic leading-relaxed">
                            Subscribe to receive a <span className="text-gold font-bold">Free Digital Sanskrit Chord Chart</span> for modern songs.
                        </p>
                    </div>

                    {isSubmitted ? (
                        <motion.p 
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            className="text-gold font-cairo text-xs font-bold tracking-widest pt-4"
                        >
                            YOUR GIFT IS ON THE WAY!
                        </motion.p>
                    ) : (
                        <form onSubmit={handleSubmit} className="w-full space-y-4">
                            <input 
                                required
                                type="email"
                                placeholder="resonate@music.com"
                                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 focus:outline-none focus:border-gold transition-all font-cairo text-lg placeholder:text-white/20"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button className="w-full bg-maroon text-white py-4 rounded-full font-cairo font-bold tracking-[0.2em] hover:bg-white hover:text-maroon transition-all shadow-lg text-[10px] flex items-center justify-center gap-3">
                                CLAIM MY GIFT <Send size={14} />
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

