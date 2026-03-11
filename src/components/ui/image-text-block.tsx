import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export interface ImageTextBlockProps extends React.HTMLAttributes<HTMLDivElement> {
    imageSrc: string
    altText?: string
    subtitle?: string
    title: string
    description: string
    actionText?: string
    actionHref?: string
    reversed?: boolean
}

export function ImageTextBlock({
    imageSrc,
    altText = "Feature illustration",
    subtitle,
    title,
    description,
    actionText,
    actionHref,
    reversed = false,
    className,
    ...props
}: ImageTextBlockProps) {
    return (
        <div
            className={cn(
                "flex flex-col md:flex-row items-center justify-between gap-12 w-full",
                reversed && "md:flex-row-reverse",
                className
            )}
            {...props}
        >
            <div className="relative w-full md:w-[711px] h-[300px] md:h-[400px] shrink-0 rounded-2xl overflow-hidden">
                <Image
                    src={imageSrc}
                    alt={altText}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="flex flex-col gap-4 items-start justify-center w-full md:w-[460px] shrink-0">
                <div className="flex flex-col items-start w-full">
                    {subtitle && (
                        <p className="font-medium text-base text-muted-foreground lowercase">
                            {subtitle}
                        </p>
                    )}
                    <h2 className="font-bold text-[32px] md:text-[40px] leading-tight md:leading-[48px] text-foreground">
                        {title}
                    </h2>
                </div>

                <p className="font-normal text-lg leading-[30px] text-foreground">
                    {description}
                </p>

                {actionText && actionHref && (
                    <Button asChild className="mt-2 text-white bg-primary hover:bg-primary/90 text-sm h-[48px] px-8 py-[14px]">
                        <Link href={actionHref}>
                            {actionText}
                            <ArrowRight className="ml-2 size-4" />
                        </Link>
                    </Button>
                )}
            </div>
        </div>
    )
}
