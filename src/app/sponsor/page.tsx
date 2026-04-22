import SponsorSection from "@/components/SponsorSection";

export default function SponsorPage() {
  return (
    <main className="pt-32 pb-24 bg-cream min-h-screen">
      <section className="px-6 mb-20 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
           <h2 className="font-cairo text-sm md:text-base tracking-[0.5em] text-gold uppercase font-bold">
             Become a Patron
           </h2>
           <h1 className="text-4xl md:text-5xl font-cairo font-bold text-peacock uppercase">
             Support the Movement
           </h1>
           <p className="font-cairo text-2xl text-peacock/60 italic max-w-2xl mx-auto">
             "Join us in our mission to place Sanskrit on every lip through the universal bridge of music."
           </p>
        </div>
      </section>

      <SponsorSection />

      {/* Additional Support Options */}
      <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-10 bg-cream rounded-[2.5rem] border border-peacock/5 space-y-4 shadow-sm hover:shadow-xl transition-all">
                  <h3 className="font-cairo text-xl font-bold text-peacock">Instrumental Fund</h3>
                  <p className="font-cairo text-lg text-peacock/60 italic">Supporting the acquisition of traditional and modern instruments for our studio sessions.</p>
              </div>
              <div className="p-10 bg-cream rounded-[2.5rem] border border-peacock/5 space-y-4 shadow-sm hover:shadow-xl transition-all">
                  <h3 className="font-cairo text-xl font-bold text-peacock">Translation Research</h3>
                  <p className="font-cairo text-lg text-peacock/60 italic">Funding the scholarly work required to translate modern literature into rhythmic Sanskrit metrics.</p>
              </div>
              <div className="p-10 bg-cream rounded-[2.5rem] border border-peacock/5 space-y-4 shadow-sm hover:shadow-xl transition-all">
                  <h3 className="font-cairo text-xl font-bold text-peacock">Event Outreach</h3>
                  <p className="font-cairo text-lg text-peacock/60 italic">Helping us bring Sanskrit musical drama to underserved communities and regional stages.</p>
              </div>
          </div>
      </section>
    </main>
  );
}

