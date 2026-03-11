import * as React from "react"
import { cn } from "@/lib/utils"
import { MagicCard } from "@/components/ui/magic-card"

export interface StatItemProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string
    label: string
}

export function StatItem({
    value,
    label,
    className,
    ...props
}: StatItemProps) {
    return (
        <MagicCard
            className={cn(
                "bg-white border border-border rounded-[24px] min-h-[160px] duration-300 transition-colors group-hover:border-transparent",
                className
            )}
            gradientColor="rgba(4,55,121,0.08)"
            gradientSize={250}
            gradientOpacity={1}
            borderLinearGradient="linear-gradient(154.494deg, rgb(145, 14, 45) 16.722%, rgb(34, 56, 85) 48.352%, rgb(156, 210, 212) 82.784%)"
        >
            <div 
                className="p-6 flex flex-col gap-2 items-center justify-center text-center relative z-20 w-full h-full"
                {...props}
            >
                <p
                    className="font-bold text-[40px] leading-[60px] text-transparent bg-clip-text"
                    style={{ backgroundImage: "linear-gradient(154.494deg, rgb(145, 14, 45) 16.722%, rgb(34, 56, 85) 48.352%, rgb(156, 210, 212) 82.784%)" }}
                >
                    {value}
                </p>
                <p className="text-base text-foreground">
                    {label}
                </p>
            </div>
        </MagicCard>
    )
}
