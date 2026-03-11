"use client"

import * as React from "react"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

export function Hero() {
    const containerRef = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    const rotateX = useTransform(scrollYProgress, [0, 0.4], [25, 0])
    const scale = useTransform(scrollYProgress, [0, 0.4], [0.85, 1])
    const opacity = useTransform(scrollYProgress, [0, 0.4], [0.4, 1])

    return (
        <section
            ref={containerRef}
            className="relative w-full flex flex-col items-center gap-[48px] px-6 md:px-[100px] pt-[150px] md:pt-[200px] pb-[100px] overflow-hidden animate-mesh-gradient"
            style={{
                backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 1369\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -109.52 -129.6 0 0 0)\\'><stop stop-color=\\'rgba(149,14,45,0.45)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(149,14,45,0)\\' offset=\\'0.75\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 1369\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -102.67 -115.2 0 576 0)\\'><stop stop-color=\\'rgba(221,31,74,0.6)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(221,31,74,0)\\' offset=\\'0.75\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 1369\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-55.6 -116.36 -138.04 78.648 1996 -0.000061021)\\'><stop stop-color=\\'rgba(249,230,198,0.85)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(249,230,198,0)\\' offset=\\'0.70279\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 1369\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -75.295 -86.4 0 1080 0)\\'><stop stop-color=\\'rgba(249,230,198,0.5)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(249,230,198,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 1369\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -109.52 -129.6 0 0 1369)\\'><stop stop-color=\\'rgba(0,38,71,0.35)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(0,38,71,0)\\' offset=\\'0.64904\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 1369\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-130.53 -180.47 -212.17 380.58 1440 1369)\\'><stop stop-color=\\'rgba(174,235,233,0.9)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(174,235,233,0)\\' offset=\\'0.78\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 1369\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(37.484 -83.405 -95.707 -106.68 720 1369)\\'><stop stop-color=\\'rgba(130,200,210,0.3)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(130,200,210,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 1369\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -136.9 -158.4 0 720 684.5)\\'><stop stop-color=\\'rgba(170,100,100,0.28)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(140,110,130,0.18)\\' offset=\\'0.45\\'/><stop stop-color=\\'rgba(100,120,150,0.1)\\' offset=\\'0.7\\'/><stop stop-color=\\'rgba(100,120,150,0)\\' offset=\\'0.85\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 1369\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-39.867 68.45 82.286 118.86 432 684.5)\\'><stop stop-color=\\'rgba(160,80,90,0.2)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(160,80,90,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>'), linear-gradient(155.962deg, rgb(107, 26, 53) 16.722%, rgb(61, 40, 69) 45.87%, rgb(34, 56, 85) 70.853%, rgb(22, 48, 80) 100%)",
                backgroundColor: "#061727"
            }}
        >
            <div className="flex flex-col items-center justify-center gap-4 relative z-10 w-full max-w-4xl mx-auto">
                {/* Label */}
                <div className="flex items-center gap-2 px-8 py-2 border border-white/30 bg-white/10 backdrop-blur-sm rounded-full">
                    <Sparkles className="size-4 text-white" />
                    <span className="font-medium text-sm text-white text-center">
                        Neue Generation der Pensionskassen-Software
                    </span>
                </div>

                {/* Title */}
                <div className="flex flex-col items-center justify-center relative w-full text-center">
                    <h1 className="font-semibold text-[40px] md:text-[64px] leading-tight md:leading-[70px] text-white">
                        Digital Transformation
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white/60 to-white/90">
                            of pension fund management
                        </span>
                    </h1>
                </div>

                {/* Description */}
                <p className="font-normal text-base md:text-[18px] leading-[30px] text-white text-center max-w-[672px]">
                    Occupational pension provision with its complex processes is challenging for pension funds. PensionDynamics simplifies the various processes with the highest level of automation in the industry.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
                    <Button variant="default">
                        Arrange a live demo
                        <ArrowRight className="size-4" />
                    </Button>
                    <Button variant="glass">
                        <Play className="size-4" fill="currentColor" />
                        Watch Video
                    </Button>
                </div>
            </div>

            {/* Feature Image Mockup */}
            <div className="relative z-10 w-full max-w-6xl mx-auto" style={{ perspective: "1500px" }}>
                <motion.div
                    className="aspect-[1240/697] rounded-xl overflow-hidden shadow-2xl border border-white/10"
                    style={{
                        rotateX,
                        scale,
                        opacity,
                        transformStyle: "preserve-3d"
                    }}
                >
                    <img src="/assets/feature-image.png" alt="Dashboard" className="w-full h-full object-cover" />
                </motion.div>
            </div>
        </section>
    )
}
