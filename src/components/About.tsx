"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 px-6 bg-cream text-peacock overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Story Text */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, ease: "easeOut" }}
           className="space-y-8"
        >
          <div className="space-y-2">
            <h3 className="font-cairo text-sm md:text-base tracking-[0.4em] text-gold uppercase font-bold">
              Our Legacy
            </h3>
            <h2 className="text-4xl md:text-5xl font-cairo font-bold leading-tight">
              A Symphony of <br /> Science & Soul
            </h2>
          </div>

          <div className="space-y-6 font-cairo text-xl md:text-2xl leading-relaxed text-peacock/80">
            <p>
              At Sanskritshree, we believe in the scientific brilliance and the deeply unique rhythmic structure of the Sanskrit language. Founded by <span className="text-gold font-bold">Dr. Shreehari V Gokarnakar</span>, our mission is to elevate Sanskrit onto the global stage—not through traditional, rigid memorization, but through the vibrant and universal language of music.
            </p>
            <p>
              We are making the language accessible and alive. Whether we are translating modern popular songs into Sanskrit, teaching interactive online courses, or bringing our live musical drama <span className="italic">Gandharvasakhyam</span> to stages across Mumbai and beyond, our goal remains the same: to place Sanskrit on every lip (<span className="text-maroon font-noto font-bold">मुखे मुखे संस्कृतम</span>).
            </p>
            <p>
               Join us in celebrating and preserving this rich linguistic heritage through melody, meter, and community.
            </p>
          </div>

          <div className="pt-6">
             <button className="bg-peacock text-white px-8 py-3 rounded-full font-cairo tracking-widest hover:bg-peacock/90 transition-all shadow-lg">
                Our Ecosystem
             </button>
          </div>
        </motion.div>

        {/* Visual Element / Founder Quote */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1, ease: "easeOut" }}
           className="relative"
        >
          <div className="aspect-[4/5] bg-peacock/5 rounded-3xl overflow-hidden shadow-inner relative group">
             {/* Abstract Musical Pattern or Founder Image Placeholder */}
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-gold opacity-10 font-noto text-[20rem] select-none">
                  सं
                </div>
             </div>
             <div className="absolute bottom-12 left-12 right-12 bg-white/40 backdrop-blur-md p-8 border border-white/20 rounded-2xl shadow-lg">
                <p className="font-cairo italic text-2xl text-peacock/90 mb-4">
                  "Every word in Sanskrit is a note, and every shloka is a symphony."
                </p>
                <p className="font-cairo text-xs tracking-widest text-gold font-bold">
                  — DR. SHREEHARI V GOKARNAKAR
                </p>
             </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-gold rounded-tr-3xl" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-peacock/30 rounded-bl-3xl" />
        </motion.div>
      </div>
    </section>
  );
}

