import BookingForm from "@/components/BookingForm";
import { Music, Star, MapPin, Users } from "lucide-react";

export default function BookingPage() {
  return (
    <main className="pt-32 pb-24 bg-cream min-h-screen">
      <section className="px-6 mb-20 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
           <h2 className="font-cairo text-sm md:text-base tracking-[0.5em] text-gold uppercase font-bold">
             Global Ambassadorship
           </h2>
           <h1 className="text-4xl md:text-5xl font-cairo font-bold text-peacock">
             Book a Live Performance
           </h1>
           <p className="font-cairo text-2xl text-peacock/60 italic max-w-2xl mx-auto">
             "Placing Sanskrit on every lip through the vibrant language of music and drama."
           </p>
        </div>
      </section>

      {/* Performance Packages */}
      <section className="px-6 pb-24 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        <div className="bg-white p-12 rounded-[3.5rem] shadow-xl border-2 border-peacock/5 flex flex-col justify-between group h-full">
            <div>
                <div className="flex items-center justify-between mb-8">
                    <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center text-maroon group-hover:rotate-6 transition-transform">
                        <Music size={32} />
                    </div>
                    <span className="text-[10px] font-cairo text-gold tracking-widest font-bold border-2 border-gold/10 px-4 py-1.5 rounded-full uppercase">Professional Package</span>
                </div>
                <h3 className="font-cairo text-3xl font-bold text-peacock mb-6">The Sanskrit Band of Romantic Songs</h3>
                <p className="font-cairo text-2xl text-peacock/70 leading-relaxed italic mb-8">
                    A 2-hour high-energy show featuring modern popular melodies and romantic classics rendered in pure rhythmic Sanskrit, with bilingual anchoring.
                </p>
                <div className="space-y-4">
                    <div className="flex items-center gap-3 text-peacock/50 font-cairo text-xs font-bold tracking-widest">
                        <Star size={18} className="text-gold" />
                        <span>2 HOURS LIVE SET</span>
                    </div>
                    <div className="flex items-center gap-3 text-peacock/50 font-cairo text-xs font-bold tracking-widest">
                        <MapPin size={18} className="text-gold" />
                        <span>AVAILABLE NATIONWIDE</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-peacock p-12 rounded-[3.5rem] shadow-xl text-white flex flex-col justify-between group h-full">
            <div>
                <div className="flex items-center justify-between mb-8">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-gold group-hover:-rotate-6 transition-transform">
                        <Star size={32} />
                    </div>
                    <span className="text-[10px] font-cairo text-gold tracking-widest font-bold border-2 border-white/10 px-4 py-1.5 rounded-full uppercase">Signature Show</span>
                </div>
                <h3 className="font-cairo text-3xl font-bold text-white mb-6">Gandharvasakhyam (Musical Drama)</h3>
                <p className="font-cairo text-2xl text-white/80 leading-relaxed italic mb-8">
                    An immersive musical drama blend featuring Sanskrit and local languages. A cultural masterpiece staged across Mumbai and beyond.
                </p>
                <div className="space-y-4">
                    <div className="flex items-center gap-3 text-white/50 font-cairo text-xs font-bold tracking-widest">
                        <Music size={18} className="text-gold" />
                        <span>LIVE MUSICAL DRAMA</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/50 font-cairo text-xs font-bold tracking-widest">
                        <Users size={18} className="text-gold" />
                        <span>FULL CREW & CAST</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="bg-white/50 py-24 px-6 border-y border-peacock/5">
        <BookingForm />
      </section>
    </main>
  );
}

