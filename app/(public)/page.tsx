import { DestinationSection } from "@/components/home/destination-section";
import { HeroSection } from "@/components/home/hero-section";
import { FeaturedSection } from "@/components/home/featured-section";
import { MissionSection } from "@/components/home/mission-section";
import { WhatWeDo } from "@/components/home/what-we-do-section";



export default function HomePage() {
    return (
        <>
            <HeroSection />
            <DestinationSection />
            <FeaturedSection />
            <MissionSection />
            <WhatWeDo />
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