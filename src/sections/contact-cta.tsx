import * as React from "react"
import Link from "next/link"
import Image from "next/image"

export function ContactCTA() {
    return (
        <section className="w-full flex justify-center py-[100px] px-6 md:px-[100px]">
            <div className="w-full max-w-6xl flex flex-col lg:flex-row items-stretch gap-12 lg:gap-[48px]">

                {/* Contact Image */}
                <div className="relative w-full lg:w-[515px] h-full rounded-[32px] overflow-hidden shrink-0">
                    <Image
                        src="/assets/contact-image.png"
                        alt="Contact"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Text Box */}
                <div
                    className="relative w-full lg:w-[677px] flex flex-col items-start justify-center p-[48px] rounded-[32px] border border-white/10 shrink-0 gap-[16px] animate-mesh-gradient"
                    style={{
                        backgroundColor: "var(--black)",
                        backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 1369\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -109.52 -129.6 0 0 0)\\'><stop stop-color=\\'rgba(149,14,45,0.45)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(149,14,45,0)\\' offset=\\'0.75\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 1369\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -102.67 -115.2 0 576 0)\\'><stop stop-color=\\'rgba(221,31,74,0.6)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(221,31,74,0)\\' offset=\\'0.75\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 1369\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-55.6 -116.36 -138.04 78.648 1996 -0.000061021)\\'><stop stop-color=\\'rgba(249,230,198,0.85)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(249,230,198,0)\\' offset=\\'0.70279\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 1369\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -75.295 -86.4 0 1080 0)\\'><stop stop-color=\\'rgba(249,230,198,0.5)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(249,230,198,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 1369\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -109.52 -129.6 0 0 1369)\\'><stop stop-color=\\'rgba(0,38,71,0.35)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(0,38,71,0)\\' offset=\\'0.64904\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 1369\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-130.53 -180.47 -212.17 380.58 1440 1369)\\'><stop stop-color=\\'rgba(174,235,233,0.9)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(174,235,233,0)\\' offset=\\'0.78\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 1369\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(37.484 -83.405 -95.707 -106.68 720 1369)\\'><stop stop-color=\\'rgba(130,200,210,0.3)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(130,200,210,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 1369\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -136.9 -158.4 0 720 684.5)\\'><stop stop-color=\\'rgba(170,100,100,0.28)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(140,110,130,0.18)\\' offset=\\'0.45\\'/><stop stop-color=\\'rgba(100,120,150,0.1)\\' offset=\\'0.7\\'/><stop stop-color=\\'rgba(100,120,150,0)\\' offset=\\'0.85\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 1369\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-39.867 68.45 82.286 118.86 432 684.5)\\'><stop stop-color=\\'rgba(160,80,90,0.2)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(160,80,90,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>'), linear-gradient(155.962deg, rgb(107, 26, 53) 16.722%, rgb(61, 40, 69) 45.87%, rgb(34, 56, 85) 70.853%, rgb(22, 48, 80) 100%)"
                    }}
                >
                    <h2 className="text-[64px] leading-[64px] text-white">
                        <span className="bg-clip-text text-transparent" style={{ fontWeight: "bold", backgroundImage: " linear-gradient(to right, rgba(255,255,255,0.7), rgba(255,255,255,0.95))" }}>
                            Let&apos;s
                        </span>
                        <br />
                        Dynamicos
                    </h2>

                    <p className="font-normal text-[18px] leading-[30px] text-white max-w-[580px]">
                        Discover how our solutions can transform the management, automation and integration of your processes. Get in touch and take your pension fund to the next level!
                    </p>

                    <Link
                        href="#"
                        className="mt-4 inline-flex items-center gap-2 bg-white text-primary px-8 py-[14px] rounded-full font-semibold text-[14px] hover:bg-white/90 transition-colors"
                    >
                        Contact right now
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                        </svg>
                    </Link>
                </div>

            </div>
        </section>
    )
}
