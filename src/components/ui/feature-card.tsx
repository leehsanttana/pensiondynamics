import * as React from "react"
import { cn } from "@/lib/utils"

export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string
    description: string
    icon: React.ReactNode
}

export function FeatureCard({
    title,
    description,
    icon,
    className,
    ...props
}: FeatureCardProps) {
    return (
        <div
            className={cn(
                "bg-background border border-border rounded-2xl p-6 flex flex-col gap-4 items-start",
                className
            )}
            {...props}
        >
            <div
                className="size-12 shrink-0 rounded-xl flex items-center justify-center"
                style={{ backgroundImage: "linear-gradient(135deg, rgba(4, 55, 121, 0.1) 0%, rgba(10, 91, 196, 0.1) 100%)" }}
            >
                <div className="size-6 text-primary flex items-center justify-center">
                    {icon}
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <h3 className="font-medium text-xl text-foreground">
                    {title}
                </h3>
                <p className="text-sm text-foreground/80 leading-[26px]">
                    {description}
                </p>
            </div>
        </div>
    )
}
