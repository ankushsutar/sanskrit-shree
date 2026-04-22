import EcosystemSlider from "@/components/EcosystemSlider";

export default function EcosystemPage() {
  return (
    <main className="pt-32 bg-cream">
       <div className="px-6 mb-12 text-center space-y-4">
          <h2 className="font-cairo text-sm md:text-base tracking-[0.5em] text-gold uppercase font-bold">
            The Multi-Dimensional Studio
          </h2>
          <h1 className="text-4xl md:text-5xl font-cairo font-bold text-peacock">
            Our Ecosystem
          </h1>
        </div>
      <EcosystemSlider />
      
      <section className="py-24 px-6 bg-white">
         <div className="max-w-4xl mx-auto text-center space-y-8">
            <h3 className="font-cairo text-2xl font-bold text-peacock">Beyond the Melodies</h3>
            <p className="font-cairo text-xl text-peacock/70 leading-relaxed italic">
               The Sanskritshree ecosystem is a collaborative space where language, music, and education converge. From our "Shravya" listening experience to our in-depth books and YouTube series, every touchpoint is designed to bring you closer to the rhythmic heart of Sanskrit.
            </p>
         </div>
      </section>
    </main>
  );
}

