import Link from "next/link";
import { PageContainer } from "../shared/page-container";
import { Target } from "lucide-react";

export default function DestinationSection() {
    return (
        <section className="bg-navy text-navy-foreground">
            <div className="gold-green-rule" />
            <PageContainer className=" py-8 flex items-center gap-6">
                <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-gold via-crimson to-forest flex items-center justify-center shrink-0">
                    <Target className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                    <div className="font-display text-2xl md:text-3xl font-bold">Destination 2030</div>
                    <div className="text-sm opacity-80">Tracking District #2's progress toward Liberia's national development goals.</div>
                </div>
                <Link href="/about" className="text-xs font-bold tracking-widest uppercase border  border-white/30 px-4 py-2 hover:bg-white/10">Read More →</Link>
            </PageContainer>
        </section>
    )
}

// export function Destination() {
//   return (
//     <section className="bg-navy text-navy-foreground">
//       <div className="gold-rule" />
//       <div className="container-page py-8 flex items-center gap-6">
//         <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-gold
// via-crimson to-forest flex items-center justify-center shrink-0">
//           <Target className="h-7 w-7 text-white" />
//         </div>
//         <div className="flex-1">
//           <div className="font-display text-2xl md:text-3xl font-bold">
// Destination 2030</div>
//           <div className="text-sm opacity-80">Tracking District #2's progress
// toward Liberia's national development goals.</div>
//         </div>
//         <a href="/about" className="text-xs font-bold tracking-widest uppercase border
//  border-white/30 px-4 py-2 hover:bg-white/10">Read More →</a>
//       </div>
//     </section>
//   );
// }