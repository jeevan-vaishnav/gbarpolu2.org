import { DestinationSection } from "@/components/home/destination-section";
import { HeroSection } from "@/components/home/hero-section";
import { FeaturedSection } from "@/components/home/featured-section";


export default function HomePage() {
    return (
        <>
            <HeroSection />
            <DestinationSection />
            <FeaturedSection />
        </>
    )


    //  <HeroSection />
    //   <WelcomeSection />
    //   <StatsSection />
    //   <ProjectsSection />
    //   <NewsSection />
    //   <GallerySection />
    //   <CtaSection />
}