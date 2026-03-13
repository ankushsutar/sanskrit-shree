import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedSongs } from "@/components/FeaturedSongs";
import { Categories } from "@/components/Categories";
import { AboutMission } from "@/components/AboutMission";
import { BlogSection } from "@/components/BlogSection";
import { SubmitSong } from "@/components/SubmitSong";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { CanvasBackground } from "@/components/CanvasBackground";
import { CustomCursor } from "@/components/CustomCursor";

export default function Home() {
    return (
        <main className="relative min-h-screen">
            <CustomCursor />
            <CanvasBackground />
            <Navbar />
            <HeroSection />
            <FeaturedSongs />
            <Categories />
            <AboutMission />
            <BlogSection />
            <SubmitSong />
            <Newsletter />
            <Footer />
        </main>
    );
}
