import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
    return (
        <header className="absolute top-0 left-0 w-full z-50 px-6 md:px-[100px] py-[32px] flex items-center justify-between">
            {/* Brand */}
            <div className="relative h-[24px] w-[200px] shrink-0">
                <Link href="/">
                    <Image
                        src="/assets/brand-logo.svg"
                        alt="Pension Dynamics"
                        fill
                        className="object-contain object-left"
                    />
                </Link>
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden md:flex items-center gap-4">
                <Link href="#" className="text-base text-white hover:text-white/80 transition-colors">
                    Home
                </Link>
                <Link href="#" className="flex items-center gap-1 text-base text-white hover:text-white/80 transition-colors">
                    Applications
                    <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0L5 5L10 0" fill="currentColor" />
                    </svg>
                </Link>
                <Link href="#" className="text-base text-white hover:text-white/80 transition-colors">
                    Team
                </Link>
                <Link href="#" className="text-base text-white hover:text-white/80 transition-colors">
                    Contact
                </Link>
            </nav>

            {/* CTA Button */}
            <div className="flex items-center justify-end w-[200px] shrink-0">
                <Button variant="glass" className="h-auto">
                    Contact us now
                </Button>
            </div>
        </header>
    )
}
