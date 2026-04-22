"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Music, Sparkles, MapPin, Users, Calendar } from "lucide-react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    category: "The Sanskrit Band of Romantic Songs",
    date: "",
    city: "",
    audienceSize: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ 
        name: "", email: "", phone: "", organization: "", 
        category: "The Sanskrit Band of Romantic Songs", date: "", 
        city: "", audienceSize: "", message: "" 
      });
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border-2 border-peacock/5 relative overflow-hidden"
        >
          {isSubmitted ? (
            <div className="text-center py-16 space-y-8">
              <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <Sparkles size={48} />
              </div>
              <div className="space-y-4">
                  <h3 className="font-cairo text-3xl font-bold text-peacock uppercase tracking-widest">Query Recorded</h3>
                  <p className="font-cairo text-2xl text-peacock/60 italic max-w-md mx-auto">
                    We'll reach out via WhatsApp/Email within 48 hours for further coordination.
                  </p>
              </div>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="bg-maroon text-white px-10 py-4 rounded-full font-cairo tracking-widest font-bold hover:bg-peacock transition-all shadow-xl uppercase text-sm"
              >
                SUBMIT ANOTHER REQUEST
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="font-cairo text-[10px] tracking-[0.3em] text-peacock/30 uppercase font-bold">Organizer's Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Dr. Rajesh Kumar"
                    className="w-full bg-cream/30 border-b-2 border-peacock/10 py-4 px-0 focus:border-maroon outline-none transition-colors font-cairo text-xl placeholder:text-peacock/10"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-3">
                  <label className="font-cairo text-[10px] tracking-[0.3em] text-peacock/30 uppercase font-bold">Organization / Institution</label>
                  <input 
                    type="text" 
                    placeholder="Society of Fine Arts"
                    className="w-full bg-cream/30 border-b-2 border-peacock/10 py-4 px-0 focus:border-maroon outline-none transition-colors font-cairo text-xl placeholder:text-peacock/10"
                    value={formData.organization}
                    onChange={(e) => setFormData({...formData, organization: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="font-cairo text-[10px] tracking-[0.3em] text-peacock/30 uppercase font-bold">WhatsApp Number</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="+91 98XXX XXXX"
                    className="w-full bg-cream/30 border-b-2 border-peacock/10 py-4 px-0 focus:border-maroon outline-none transition-colors font-cairo text-xl placeholder:text-peacock/10"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-3">
                  <label className="font-cairo text-[10px] tracking-[0.3em] text-peacock/30 uppercase font-bold">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="organizer@gmail.com"
                    className="w-full bg-cream/30 border-b-2 border-peacock/10 py-4 px-0 focus:border-maroon outline-none transition-colors font-cairo text-xl placeholder:text-peacock/10"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="font-cairo text-[10px] tracking-[0.3em] text-peacock/30 uppercase font-bold">Select Performance Package</label>
                <div className="grid grid-cols-1 gap-4">
                    {[
                        "The Sanskrit Band of Romantic Songs (2hr Show)",
                        "Gandharvasakhyam (Musical Drama)",
                        "Linguistic Workshop / Educational Talk"
                    ].map((opt) => (
                        <div 
                            key={opt}
                            onClick={() => setFormData({...formData, category: opt})}
                            className={`p-5 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between group ${formData.category === opt ? "bg-peacock border-peacock text-white shadow-lg" : "bg-white border-peacock/5 hover:border-maroon/20 text-peacock"}`}
                        >
                            <span className="font-cairo text-xs font-bold tracking-widest">{opt}</span>
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${formData.category === opt ? "border-gold" : "border-peacock/10"}`}>
                                {formData.category === opt && <div className="w-2.5 h-2.5 bg-gold rounded-full" />}
                            </div>
                        </div>
                    ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="space-y-3">
                  <label className="font-cairo text-[10px] tracking-[0.3em] text-peacock/30 uppercase font-bold flex items-center gap-2"><Calendar size={12}/> Preferred Date</label>
                  <input 
                    type="date" 
                    className="w-full bg-cream/30 border-b-2 border-peacock/10 py-4 px-0 focus:border-maroon outline-none transition-colors font-cairo text-xl"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>
                <div className="space-y-3">
                  <label className="font-cairo text-[10px] tracking-[0.3em] text-peacock/30 uppercase font-bold flex items-center gap-2"><MapPin size={12}/> Venue / City</label>
                  <input 
                    type="text" 
                    placeholder="Mumbai / Delhi"
                    className="w-full bg-cream/30 border-b-2 border-peacock/10 py-4 px-0 focus:border-maroon outline-none transition-colors font-cairo text-xl placeholder:text-peacock/10"
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                  />
                </div>
                <div className="space-y-3">
                  <label className="font-cairo text-[10px] tracking-[0.3em] text-peacock/30 uppercase font-bold flex items-center gap-2"><Users size={12}/> Expected Audience</label>
                  <input 
                    type="text" 
                    placeholder="500+"
                    className="w-full bg-cream/30 border-b-2 border-peacock/10 py-4 px-0 focus:border-maroon outline-none transition-colors font-cairo text-xl placeholder:text-peacock/10"
                    value={formData.audienceSize}
                    onChange={(e) => setFormData({...formData, audienceSize: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="font-cairo text-[10px] tracking-[0.3em] text-peacock/30 uppercase font-bold">Special Requests</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about the occasion..."
                  className="w-full bg-cream/10 border-2 border-peacock/5 rounded-[2rem] py-6 px-8 focus:border-maroon outline-none transition-colors font-cairo text-xl placeholder:text-peacock/10 shadow-inner"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button 
                disabled={isSubmitting}
                className="w-full bg-peacock group relative overflow-hidden py-6 rounded-full font-cairo font-black tracking-[0.4em] text-white hover:bg-maroon transition-all duration-500 shadow-2xl uppercase text-[10px]"
              >
                <div className="relative z-10 flex items-center justify-center gap-4">
                  {isSubmitting ? "INITIATING..." : (
                    <>Submit Booking Inquiry <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} /></>
                  )}
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </button>
            </form>
          )}

          {/* Decorative Elements */}
          <div className="absolute -z-10 -bottom-20 -right-20 text-gold opacity-5 rotate-12">
             <Music size={400} />
          </div>
        </motion.div>
    </div>
  );
}

