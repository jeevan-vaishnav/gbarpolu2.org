import { cn } from "@/lib/utils";

interface PageContainerProps {
    children: React.ReactNode;
    className?: string;
}

export function PageContainer({
    children,
    className,
}: PageContainerProps) {
    return (
        <div
            className={cn(
                "mx-auto w-full max-w-7xl px-5",
                className
            )}
        >
            {children}
        </div>
    );
}