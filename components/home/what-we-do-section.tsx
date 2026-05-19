'use client'
import health from "@/assets/project-health.jpg";
import { motion } from "framer-motion";
import { PageContainer } from "../shared/page-container";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function WhatWeDo() {
    return (
        <section className="py-20 md:py-28 bg-background">
            <PageContainer>
                <div className="grid items-center gap-12 lg:grid-cols-12">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5"
                    >

                        <div className="inline-flex items-center rounded-full border border-border bg-secondary/30 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                            Community Development
                        </div>
                        <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
                            What We Do
                        </h2>
                        <div className="gold-green-rule mt-6 w-28 rounded-full" />
                        <p className="mt-6 text-base leading-8 text-muted-foreground">
                            From rural roads to clinic supplies, from school renovations to
                            youth empowerment programs  our initiatives support every part of
                            daily life across District #2 Gbarpolu County.
                        </p>

                        <p className="mt-4 text-base leading-8 text-muted-foreground">
                            Every development effort is guided by community voices,
                            transparency, and long-term impact for future generations.
                        </p>

                        <Button
                            asChild
                            size="lg"
                            className="mt-8 rounded-full px-6"
                        >
                            <Link href="/projects">
                                Explore Projects
                                <ArrowRight className="ml-2 size-4" />
                            </Link>
                        </Button>

                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7"
                    >
                        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                            <div className="relative aspect-[16/9] overflow-hidden">
                                <Image
                                    src={health}
                                    alt="Healthcare support in District #2 Gbarpolu County"
                                    fill
                                    priority={false}
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>
                            <div className="border-t-4 border-primary p-6 md:p-8">
                                <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                                    <span>District #2</span>
                                    <span>•</span>
                                    <span>Healthcare</span>
                                    <span>•</span>
                                    <span>Community</span>
                                </div>

                                <h3 className="mt-4 text-2xl font-bold leading-snug tracking-tight text-foreground md:text-3xl">
                                    Healthcare delivery for every village, no matter how remote.
                                </h3>

                                <p className="mt-4 text-base leading-7 text-muted-foreground">
                                    Supporting local clinics, mobile outreach teams, medical
                                    supplies, and healthcare access for communities throughout
                                    Gbarpolu County.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </PageContainer>
        </section>
    )
}