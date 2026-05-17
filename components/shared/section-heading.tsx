import { cn } from "@/lib/utils";
import { SectionHeadingProps } from "@/types";

export function SectionHeading({ badge, title, description, align = "left" }: SectionHeadingProps) {
    return (
        <div
            className={cn("space-y-4", align === "center" && "mx-auto text-center")}
        >
            {badge && (
                <span className="inline-flex rounded-full border px-3 py-1 text-sm font-medium">
                    {badge}
                </span>
            )}

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {title}
            </h2>

            {description && (
                <p className="max-w-2xl text-muted-foreground">
                    {description}
                </p>
            )}
        </div>
    );
}