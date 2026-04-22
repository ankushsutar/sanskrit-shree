import Hero from "@/components/Hero";
import CategoryCarousel from "@/components/CategoryCarousel";
import FeaturedGrid from "@/components/FeaturedGrid";
import Banners from "@/components/Banners";
import BlogSection from "@/components/BlogSection";
import { Newsletter } from "@/components/Newsletter";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* Ogani Layout Flow */}
      <Hero />
      
      <CategoryCarousel />
      
      <FeaturedGrid />
      
      <Banners />
      
      <BlogSection />
      
      <Newsletter />
    </main>
  );
}

