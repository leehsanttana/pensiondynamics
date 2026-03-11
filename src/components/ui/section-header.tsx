import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string
    subtitle?: string
    align?: "left" | "center" | "right"
}

export function SectionHeader({
    title,
    subtitle,
    align = "center",
    className,
    ...props
}: SectionHeaderProps) {
    return (
        <div
            className={cn(
                "flex flex-col gap-2",
                {
                    "items-center justify-center text-center": align === "center",
                    "items-start text-left": align === "left",
                    "items-end text-right": align === "right",
                },
                className
            )}
            {...props}
        >
            {subtitle && (
                <p className="font-semibold text-xs tracking-[2px] uppercase text-muted-foreground">
                    {subtitle}
                </p>
            )}
            <h2 className="font-bold text-[40px] leading-[48px] text-foreground">
                {title}
            </h2>
        </div>
    )
}
