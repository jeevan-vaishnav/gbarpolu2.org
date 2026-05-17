'use client'
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.svg"
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { PageContainer } from "../shared/page-container";
import { navConfig, NavItem } from "./nav-config";
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { MobileDrawer } from "./MobileDrawer";


function MegaPanel({ item, pathname }: { item: NavItem; pathname: string }) {
    if (!item.children) return null;
    const hasFeatured = !!item.featured;
    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute left-1/2 top-full -translate-x-1/2 pt-3"
        >
            <div className="rounded-2xl border border-border bg-background/95 backdrop-blur-xl 
            shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] p-4 w-[640px]">
                <div className={cn("grid gap-2", hasFeatured ? "grid-cols-[1.1fr_1fr]" : "grid-cols-1")}>
                    <ul className="space-y-1">
                        {item.children.map((c) => {
                            const Icon = c.icon;
                            const isActive = pathname === c.href;
                            return (
                                <li key={c.href}>
                                    <a
                                        href={c.href}
                                        aria-current={isActive ? "page" : undefined}
                                        className={cn(
                                            "group flex items-start gap-3 rounded-xl p-3 transition-colors",
                                            isActive ? "bg-secondary" : "hover:bg-secondary/70"
                                        )}
                                    >
                                        {Icon && (
                                            <span className={cn(
                                                "flex h-9 w-9 items-center justify-center rounded-lg transition-colors",
                                                isActive
                                                    ? "bg-crimson text-white"
                                                    : "bg-secondary text-foreground/80 group-hover:bg-crimson group-hover:text-white"
                                            )}>
                                                <Icon className="h-4 w-4" />
                                            </span>
                                        )}
                                        <span className="flex-1">
                                            <span className="block text-sm font-semibold">{c.label}</span>
                                            {c.description && (
                                                <span className="block text-xs text-muted-foreground mt-0.5">{c.description}</span>
                                            )}
                                        </span>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    {item.featured && (
                        <a
                            href={item.featured.href}
                            className="relative overflow-hidden rounded-xl bg-gradient-to-br from-navy to-navy/80 text-navy-foreground p-5 flex flex-col justify-between hover:opacity-95 transition"
                        >
                            <div>
                                <div className="text-[10px] font-bold tracking-[0.2em] text-gold mb-2">FEATURED</div>
                                <div className="text-lg font-display font-semibold leading-tight">{item.featured.title}</div>
                                <p className="text-xs opacity-80 mt-2 leading-relaxed">{item.featured.description}</p>
                            </div>
                            <div className="text-xs font-semibold mt-4 inline-flex items-center gap-1">
                                Explore <span className="text-crimson">→</span>
                            </div>
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}


export function Navbar() {
    const [drawer, setDrawer] = useState(false);
    const [active, setActive] = useState<string | null>(null)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname();
    const isItemActive = (item: NavItem) => {
        if (item.href) return pathname === item.href;

        if (item.children) {
            return item.children.some(
                (c) =>
                    pathname === c.href ||
                    pathname.startsWith(c.href + "/")
            );
        }
        return false;
    };

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <header
                className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled
                    ? "bg-background/75 backdrop-blur-xl border-b border-border shadow-[0_4px_20px_-8px_rgba(0,0,0,0.1)]" :
                    "bg-background/40 backdrop-blur-md border-b border-transparent"
                )}
            >
                <PageContainer>
                    <div className="flex h-16 items-center justify-between gap-6">
                        <Link href={"/"} className="flex items-center gap-2 shrink-0">
                            <Image src={logo} alt="district" width={48} height={80} priority />
                            <span className="font-display font-bold text-base tracking-tight">District #2</span>
                        </Link>
                        <nav className="hidden lg:flex items-center gap-1" onMouseLeave={() => setActive(null)}>
                            {
                                navConfig.map((item) => {
                                    const isOpen = active === item.label
                                    const isActive = isItemActive(item)
                                    return (
                                        <div
                                            key={item.label}
                                            className="relative"
                                            onMouseEnter={() => setActive(item.children ? item.label : null)}
                                        >
                                            {
                                                item.children ? (
                                                    <Button
                                                        variant="ghost"
                                                        className={cn("border-none inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                                                            isOpen ? "bg-secondary/10 text-foreground" : isActive ? "text-foreground bg-secondary/10" : "text-foreground/80 hover:text-foreground hover:bg-secondary/60"
                                                        )}
                                                        aria-expanded={isOpen}
                                                        aria-current={isActive ? "page" : undefined}
                                                    >
                                                        {item.label}
                                                        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", isOpen && "rotate-180")} />
                                                        {
                                                            isActive && (
                                                                <motion.span
                                                                    layoutId="nav-active-indicator"
                                                                    className="absolute left-4 right-4 -bottom-0.5 h-[2px] rounded-full bg-crimson"
                                                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                                                />
                                                            )
                                                        }

                                                    </Button>
                                                ) : item.href ? (
                                                    <Link href={item.href} aria-current={isActive ? "page" : undefined}
                                                        className={cn(
                                                            "relative inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors",
                                                            isActive ? "text-foreground bg-secondary/60" : "text-foreground/80 hover:text-foreground hover:bg-secondary/60"
                                                        )}
                                                    >
                                                        {item.label}
                                                        {
                                                            isActive && (
                                                                <motion.span
                                                                    layoutId="nav-active-indicator"
                                                                    className="absolute left-4 right-4 -bottom-0.5 h-[2px] rounded-full bg-crimson"
                                                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                                                />
                                                            )
                                                        }
                                                    </Link>
                                                ) : null
                                            }
                                            <AnimatePresence>{isOpen && <MegaPanel item={item} pathname={pathname} />}</AnimatePresence>

                                        </div>
                                    )
                                }
                                )
                            }
                        </nav>
                        <div className="hidden lg:flex items-center gap-2 shrink-0">
                            <Link
                                href="/login"
                                className="text-sm font-medium text-foreground/80 hover:text-foreground px-3 py-2 transition-colors duration-200"
                            >
                                Official Portal
                            </Link>

                            <Button
                                variant="ghost"
                                asChild
                                size="default"
                                className="h-auto px-3 py-2 border-0 rounded-none bg-transparent shadow-none hover:bg-transparent">
                                <Link
                                    href="/contact"
                                    className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200"
                                >
                                    Contact
                                </Link>
                            </Button>

                        </div>
                        <button
                            className="lg:hidden p-2 -mr-2"
                            aria-label="Open menu"
                            onClick={() => setDrawer(true)}
                        >
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>

                </PageContainer>
            </header>
            <MobileDrawer open={drawer} onClose={() => setDrawer(false)} />

        </>
    )
}