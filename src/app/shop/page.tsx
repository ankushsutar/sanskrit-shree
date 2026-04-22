import BookCard from "@/components/BookCard";

export default function ShopPage() {
  const books = [
    {
      title: "Natyashastra",
      author: "Dr. Shreehari V Gokarnakar",
      basePrice: 1200,
      description: "A profound study of the ancient Indian treatise on the performing arts, encompassing theatre, dance, and music."
    },
    {
       title: "Vyakaranashastra",
       author: "Dr. Shreehari V Gokarnakar",
       basePrice: 950,
       description: "Unlocking the scientific structure of Sanskrit grammar through modern pedagogical approaches."
    },
    {
       title: "Sahityashastra",
       author: "Dr. Shreehari V Gokarnakar",
       basePrice: 1100,
       description: "Exploring the aesthetics and literary criticism of classical Sanskrit literature."
    },
    {
       title: "The PhD Thesis",
       author: "Dr. Shreehari V Gokarnakar",
       basePrice: 700,
       description: "A Comprehensive Study of Few Metres from the View of Poetics. A groundbreaking research on linguistic rhythms."
    }
  ];

  return (
    <main className="pt-32 pb-24 bg-cream">
      <section className="px-6 mb-20">
        <div className="max-w-6xl mx-auto text-center space-y-4">
           <h2 className="font-cairo text-sm md:text-base tracking-[0.5em] text-gold uppercase font-bold">
             The Sanskrit Library
           </h2>
           <h1 className="text-4xl md:text-5xl font-cairo font-bold text-peacock">
             Our Publications
           </h1>
           <p className="font-cairo text-xl text-peacock/60 max-w-2xl mx-auto italic">
             "From technical shastras to poetic metrics, explore our collection of academic and artistic publications."
           </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
          {books.map((book, idx) => (
            <BookCard key={idx} {...book} />
          ))}
        </div>
      </section>
      
      {/* Lead Capture Section can be added here or as a global component */}
    </main>
  );
}

