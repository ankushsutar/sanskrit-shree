"use client";

import { motion } from "framer-motion";
import { Heart, Smartphone, Copy } from "lucide-react";

export default function SponsorSection() {
  const paymentInfo = {
    gpay: "9619711054",
    upiId: "shreevg007-3@okaxis"
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <section className="py-24 bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Support Text */}
        <div className="space-y-8">
          <h2 className="font-cairo text-4xl md:text-5xl font-bold text-peacock">
            Support the <br /> Resonant Heart
          </h2>
          <p className="font-cairo text-xl md:text-2xl text-peacock/70 leading-relaxed">
            Every contribution helps us continue our mission of making Sanskrit alive through music. From individual songs to major productions, your support resonates globally.
          </p>
          
          <div className="space-y-6 pt-6">
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-peacock/5 flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold shrink-0">
                  <Smartphone />
                </div>
                <div className="space-y-2 flex-grow">
                   <h4 className="font-cairo font-bold text-peacock">Payment Details</h4>
                   <div className="flex items-center justify-between text-sm py-2 border-b border-peacock/5">
                      <span className="text-peacock/50">GPay (India)</span>
                      <button onClick={() => copyToClipboard(paymentInfo.gpay)} className="flex items-center gap-2 text-peacock font-bold hover:text-gold transition-colors">
                        {paymentInfo.gpay} <Copy size={14} />
                      </button>
                   </div>
                   <div className="flex items-center justify-between text-sm py-2">
                      <span className="text-peacock/50">UPI ID</span>
                      <button onClick={() => copyToClipboard(paymentInfo.upiId)} className="flex items-center gap-2 text-peacock font-bold hover:text-gold transition-colors">
                        {paymentInfo.upiId} <Copy size={14} />
                      </button>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Sponsor Card */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="bg-peacock text-white p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
        >
          {/* Decorative Circle */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-gold opacity-10 rounded-full blur-3xl" />
          
          <Heart className="text-gold mb-6" size={48} />
          <h3 className="font-cairo text-3xl font-bold mb-4 tracking-wider">
            Sponsor a Song
          </h3>
          <p className="font-cairo text-lg text-white/70 mb-8 leading-relaxed italic">
            "Become the patron of a timeless melody. Your name will be featured in the composition's credits, forever linked to the revival of Sanskrit resonance."
          </p>
          
          <div className="flex items-baseline gap-2 mb-10">
             <span className="text-4xl font-cairo font-bold text-gold">₹20,000</span>
             <span className="text-white/40 font-cairo text-xs tracking-widest uppercase">Per Composition</span>
          </div>

          <button className="w-full bg-maroon py-5 rounded-full font-cairo font-bold tracking-[0.2em] hover:bg-maroon/90 transition-all shadow-lg text-sm">
            BECOME A PATRON
          </button>
        </motion.div>
      </div>
    </section>
  );
}

