'use client'
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { navConfig } from "./nav-config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
    const pathname = usePathname();

    useEffect(() => {
        if (open) {
            const prev = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            return () => {
                document.body.style.overflow = prev;
            };
        }
    }, [open]);

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "tween", ease: [0.32, 0.72, 0, 1], duration: 0.4 }}
                    className="fixed inset-0 z-[60] bg-background lg:hidden flex flex-col"
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="flex justify-end p-4">
                        <button
                            onClick={onClose}
                            aria-label="Close menu"
                            className="p-2 rounded-full hover:bg-secondary transition"
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>

                    <nav className="flex-1 overflow-y-auto px-6 pb-8">
                        <motion.ul
                            initial="hidden"
                            animate="show"
                            variants={{
                                hidden: {},
                                show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
                            }}
                            className="space-y-8"
                        >
                            {navConfig.map((item) => (
                                <motion.li
                                    key={item.label}
                                    variants={{
                                        hidden: { opacity: 0, y: 16 },
                                        show: { opacity: 1, y: 0 },
                                    }}
                                >
                                    {item.children ? (
                                        <div>
                                            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
                                                {item.label}
                                            </div>
                                            <ul className="space-y-3">
                                                {item.children.map((c) => {
                                                    const isActive = pathname === c.href;
                                                    return (
                                                        <li key={c.href}>
                                                            <Link
                                                                href={c.href!}
                                                                onClick={onClose}
                                                                aria-current={isActive ? "page" : undefined}
                                                                className={cn(
                                                                    "flex items-center gap-3 text-2xl font-display font-semibold transition-colors",
                                                                    isActive ? "text-crimson" : "hover:text-crimson"
                                                                )}
                                                            >
                                                                {isActive && <span className="h-1.5 w-1.5 rounded-full bg-crimson" />}
                                                                {c.label}
                                                            </Link>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.href!}
                                            onClick={onClose}
                                            aria-current={pathname === item.href ? "page" : undefined}
                                            className={cn(
                                                "flex items-center gap-3 text-3xl font-display font-semibold transition-colors",
                                                pathname === item.href ? "text-crimson" : "hover:text-crimson"
                                            )}
                                        >
                                            {pathname === item.href && <span className="h-2 w-2 rounded-full bg-crimson" />}
                                            {item.label}
                                        </Link>
                                    )}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </nav>

                    <div className="p-6 border-t border-border">
                        <Button asChild size="lg" className="w-full rounded-full">
                            <Link href="/contact" onClick={onClose}>
                                Get in touch
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
