'use client'
import { PageContainer } from "../shared/page-container";
import community from "@/assets/community.jpg";
import roads from "@/assets/project-roads.jpg";
import edu from "@/assets/project-education.jpg";
import health from "@/assets/project-health.jpg";
import landscape from "@/assets/hero-landscape.jpg";
import rep from "@/assets/representative.jpg";
import Image, { StaticImageData } from "next/image";


const items = [
    { img: roads, cat: "STORY", title: "Belle–Bopolu road rehabilitation reaches 60% completion", span: "lg" },
    { img: edu, cat: "REPORT", title: "120 District #2 students receive 2026 scholarship grants" },
    { img: community, cat: "STORY", title: "Town hall held in Bokomu on local development priorities" },
    { img: health, cat: "STORY", title: "Bokomu clinic expansion delivers care to remote villages" },
    { img: landscape, cat: "STORY", title: "Protecting Gbarpolu's forests for the next generation" },
    { img: rep, cat: "STORY", title: "Office of the Representative — first year in review" },
    { img: community, cat: "STORY", title: "Youth cooperatives growing across the three districts" },
];

function Card({ img, cat, title }: { img: StaticImageData; cat: string; title: string }) {
    return (
        <article className="group relative overflow-hidden bg-primary text-white h-full min-h-[240px] rounded-2xl ">
            <Image
                src={img}
                alt={title}
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="relative h-full flex flex-col justify-end p-5 md:p-6">
                <div className="text-[10px] font-bold tracking-[0.25em]">{cat}</div>
                <h3 className="mt-3 text-lg md:text-xl font-bold leading-snug">{title}</h3>
                <div className="cursor-pointer mt-4 text-xs font-semibold tracking-[0.2em] text-secondary transition-transform duration-300 group-hover:translate-x-1">READ MORE →</div>
            </div>
        </article>
    )
}


export function FeaturedSection() {
    return (
        <section className="py-20">
            <PageContainer>
                {/* <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Featured</h2> */}
                <div className="mb-10 flex items-end justify-between gap-4">
                    <div>
                        <p className="text-sm font-semibold tracking-[0.25em] text-secondary">
                            LATEST UPDATES
                        </p>

                        <h2 className="mt-2 text-3xl font-black md:text-5xl">
                            Featured Stories
                        </h2>
                    </div>
                </div>
                {/* <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[220px]">
                    <div className="col-span-2 row-span-2"><Card {...items[0]} /></div>
                    <Card {...items[1]} />
                    <Card {...items[2]} />
                    <Card {...items[3]} />
                    <Card {...items[4]} />
                    <Card {...items[5]} />
                    <div className="col-span-2"><Card {...items[6]} /></div>
                </div> */}
                <div className="grid auto-rows-[240px] grid-cols-1 gap-5 md:grid-cols-3 md:auto-rows-[260px]">
                    {/* Large Feature */}
                    <div className="md:col-span-2 md:row-span-2">
                        <Card {...items[0]} />
                    </div>

                    <Card {...items[1]} />
                    <Card {...items[2]} />
                    <Card {...items[3]} />
                    <Card {...items[4]} />
                    <Card {...items[5]} />

                    {/* Wide Bottom Card */}
                    <div className="md:col-span-2">
                        <Card {...items[6]} />
                    </div>
                </div>
            </PageContainer>
        </section>
    )
}