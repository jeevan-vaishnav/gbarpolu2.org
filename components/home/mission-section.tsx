import { PageContainer } from "../shared/page-container";

export function MissionSection() {
    return (
        <section className="bg-green text-green-foreground">
            <PageContainer className="py-20 md:py-28 grid md:grid-cols-12 gap-10">
                <div className="md:col-span-4">
                    <h2 className="font-display text-5xl md:text-6xl font-bold leading-none">Our <br />mission</h2>
                </div>
                <div className="md:col-span-7 md:col-start-6">
                    <p className="text-lg md:text-xl leading-relaxed opacity-90">
                        The Office of the Representative serves the people of Gon-Nwoilalai, Belle, and Bokomu
                        advancing development, transparency, and opportunity for every community in District&nbsp;#2.
                        We help citizens build stronger lives through better infrastructure, education,
                        healthcare, and a government that listens.
                    </p>
                </div>
            </PageContainer>
        </section>
    )
}
