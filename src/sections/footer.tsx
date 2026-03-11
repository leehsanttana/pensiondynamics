import * as React from "react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
    return (
        <footer className="w-full bg-black flex flex-col items-center px-6 md:px-[100px] py-[48px] text-muted-foreground overflow-hidden">
            <div className="w-full max-w-7xl flex flex-col gap-[32px] relative z-10">

                {/* Navigation Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                    {/* Company Info */}
                    <div className="flex flex-col gap-5">
                        <div className="relative h-6 w-[200px] shrink-0">
                            <Image
                                src="/assets/brand-logo.svg"
                                alt="Pension Dynamics"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <div className="flex flex-col text-[18px] leading-[30px]">
                            <p>PensionDynamics AG</p>
                            <p>Grundstrasse 16, Postfach</p>
                            <p>6343 Rotkreuz / Zug</p>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div className="flex flex-col gap-5 p-2">
                        <h4 className="font-semibold text-[14px] text-white leading-5">Product</h4>
                        <ul className="flex flex-col gap-3">
                            {["Employer App", "Core System", "Insurant Portal", "Pricing"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-[14px] leading-5 hover:text-white transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="flex flex-col gap-5 p-2">
                        <h4 className="font-semibold text-[14px] text-white leading-5">Company</h4>
                        <ul className="flex flex-col gap-3">
                            {["About Us", "Team", "Karriere", "Blog"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-[14px] leading-5 hover:text-white transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div className="flex flex-col gap-5 p-2">
                        <h4 className="font-semibold text-[14px] text-white leading-5">Support</h4>
                        <ul className="flex flex-col gap-3">
                            {["Support anfragen", "Dokumentation", "Aktionär*in werden", "Impressum"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-[14px] leading-5 hover:text-white transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Banner Demo CTA */}
                <div
                    className="w-full flex flex-col sm:flex-row items-center justify-between p-[32px] rounded-[16px] border border-white/20"
                    style={{
                        backgroundImage: "linear-gradient(to right, rgba(145,14,45,0.35), rgba(34,56,85,0.35) 63%, rgba(156,210,212,0.2))"
                    }}
                >
                    <div className="flex flex-col gap-1">
                        <p className="font-semibold text-[20px] text-white leading-normal">Ready to transform?</p>
                        <p className="text-[14px] leading-5">Vereinbaren Sie noch heute eine Live-Demo</p>
                    </div>
                    <Link
                        href="#"
                        className="mt-4 sm:mt-0 flex items-center gap-2 bg-white text-primary px-[32px] py-[14px] rounded-full font-semibold text-[14px] hover:bg-white/90 transition-colors shrink-0"
                    >
                        Demo buchen
                        <div className="relative size-4">
                            <Image src="/assets/icon-arrow-up-right.svg" alt="" fill />
                        </div>
                    </Link>
                </div>

                {/* Social Buttons */}
                <div className="flex items-center justify-center gap-6">
                    <Link
                        href="#"
                        className="flex items-center gap-2 bg-primary px-6 py-[10px] rounded-full text-white text-[14px] font-semibold hover:bg-primary/90 transition-colors"
                    >
                        LinkedIn
                        <div className="relative size-4">
                            <Image src="/assets/icon-linkedin.svg" alt="" fill />
                        </div>
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-2 bg-white/10 border border-white/30 px-6 py-[10px] rounded-full text-white text-[14px] font-semibold hover:bg-white/20 transition-colors"
                    >
                        YouTube
                        <div className="relative size-4">
                            <Image src="/assets/icon-youtube.svg" alt="" fill />
                        </div>
                    </Link>
                </div>

                {/* Copyright */}
                <div className="border-t border-muted-foreground pt-4 flex items-center justify-center">
                    <p className="text-[12px] leading-[18px] text-muted-foreground">
                        © 2025 PensionDynamics AG – alle Rechte vorbehalten
                    </p>
                </div>

            </div>
        </footer>
    )
}
