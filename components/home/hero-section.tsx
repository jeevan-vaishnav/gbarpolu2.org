'use client'
import Link from "next/link";
import { motion } from "framer-motion";
import { PageContainer } from "@/components/shared/page-container";

export function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-primary text-primary-foreground">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -right-40 top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full border-[40px] border-white/10" />
                <div className="absolute -right-20 top-1/2 h-[550px] w-[550px] -translate-y-1/2 rounded-full border-[30px] border-secondary/30" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(253,195,2,0.18),transparent_35%)]" />
            </div>

            <PageContainer className="relative py-28 md:py-36">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >

                    <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium backdrop-blur">
                        Official Representative Office
                    </span>

                    <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
                        Service to the
                        <br />
                        People of
                        <br />
                        District #2
                    </h1>

                    <p className="mt-6 max-w-2xl text-base text-white/80 md:text-lg">
                        Committed to transparency, development, youth empowerment,
                        and sustainable growth across Gon-Nwoilalai, Belle,
                        and Bokomu communities.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">

                        <Link
                            href="/projects"
                            className="inline-flex items-center justify-center rounded-md bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition hover:opacity-90"
                        >
                            View Projects
                        </Link>

                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
                        >
                            Contact Office
                        </Link>
                    </div>
                </motion.div>
            </PageContainer>
        </section>
    );
}