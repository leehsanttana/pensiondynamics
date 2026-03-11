import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
    quote: string
    authorName: string
    authorRole: string
    authorImage?: string
}

export function TestimonialCard({
    quote,
    authorName,
    authorRole,
    authorImage,
    className,
    ...props
}: TestimonialCardProps) {
    return (
        <div
            className={cn(
                "flex flex-col gap-8 items-center text-center max-w-[687px] w-full mx-auto",
                className
            )}
            {...props}
        >
            {/* Quote Icon (Placeholder or SVG directly) */}
            <div className="size-12 shrink-0 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48">
                    <path fill="currentColor" opacity="0.1" d="M12.9 29.8C10.6 30.6 8.7 31.9 6.8 33.7L3.4 30.3C5.5 28.2 7.7 26.6 9.8 25.5C11.6 24.6 13.5 24 15.6 23.7V9.6H21V29.8H12.9ZM35.9 29.8C33.6 30.6 31.7 31.9 29.8 33.7L26.4 30.3C28.5 28.2 30.7 26.6 32.8 25.5C34.6 24.6 36.5 24 38.6 23.7V9.6H44V29.8H35.9Z" />
                </svg>
            </div>

            <p className="text-[20px] font-normal leading-[34px] text-foreground">
                {quote}
            </p>

            <div className="flex gap-5 items-center justify-center">
                <div className="size-20 shrink-0 rounded-full border-2 border-border overflow-hidden relative">
                    {authorImage ? (
                        <Image
                            src={authorImage}
                            alt={authorName}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="size-full bg-muted flex items-center justify-center text-muted-foreground text-xl font-bold">
                            {authorName.charAt(0)}
                        </div>
                    )}
                </div>
                <div className="flex flex-col gap-1 items-start text-left">
                    <p className="font-medium text-[20px] text-foreground">
                        {authorName}
                    </p>
                    <p className="text-[14px] text-muted-foreground">
                        {authorRole}
                    </p>
                </div>
            </div>
        </div>
    )
}
