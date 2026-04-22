import CourseCard from "@/components/CourseCard";
import ProductPreview from "@/components/ProductPreview";
import { SanskritQuiz } from "@/components/Quiz";

export default function CoursesPage() {
  return (
    <main className="pt-32 pb-24 bg-cream">
       <section className="px-6 mb-20">
        <div className="max-w-6xl mx-auto text-center space-y-4">
           <h2 className="font-cairo text-sm md:text-base tracking-[0.5em] text-gold uppercase font-bold">
             Refine Your Resonance
           </h2>
           <h1 className="text-4xl md:text-5xl font-cairo font-bold text-peacock">
             Explore Our Courses
           </h1>
           <p className="font-cairo text-xl text-peacock/60 max-w-2xl mx-auto italic">
             "From beginner fundamentals to advanced rhythmic metrics, our courses are designed to make Sanskrit a living experience."
           </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <CourseCard 
            title="Level 1: Fun with Sanskrit"
            level="Beginners"
            duration="30-hour Comprehensive Course"
            minCohort={25}
            description="A vibrant introduction where the science of grammar meets the joy of melody. Perfect for those starting their journey with the rhythm of Sanskrit."
            price="4,500"
          />
          <CourseCard 
            title="Level 2: Subhashita & Song"
            level="Students"
            duration="20-hour Studio Session"
            minCohort={15}
            description="Deepen your resonance by mastering classical Subhashitas and popular songs translated into Sanskrit. Focus on active speaking through music."
            price="3,200"
          />
          <CourseCard 
            title="Level 3: Pingala’s Metrics"
            level="Professionals"
            duration="Varies by Specialization"
            minCohort={10}
            description="Advanced study of Vedic/Classical meters and Pingala's Chandasshastra. Designed for those seeking technical mastery of linguistic rhythms."
          />
        </div>
      </section>

      <SanskritQuiz />

      <ProductPreview />
    </main>
  );
}

