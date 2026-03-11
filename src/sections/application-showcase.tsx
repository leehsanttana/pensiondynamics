"use client"

import * as React from "react"
import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export function ApplicationShowcase() {
    const [activeTab, setActiveTab] = useState(0)

    const tabsData = [
        {
            title: "Employer App",
            description: "Das Arbeitgeber-Portal von PensionDynamics bietet eine benutzerfreundliche Lösung für den Datenaustausch zur beruflichen Vorsorge. Direkte Anbindung an die Pensionskasse spart Zeit und entlastet das HR-Team.",
            imageSrc: "/assets/zenbook.png",
        },
        {
            title: "Core System",
            description: "Das Core System von PensionDynamics ist das Herzstück der Pensionskassen-Verwaltung. Effizient, sicher und skalierbar für alle Anforderungen moderner Vorsorgeeinrichtungen.",
            imageSrc: "/assets/zenbook.png",
        },
        {
            title: "Insurant Portal",
            description: "Im Versichertenportal haben die Versicherten jederzeit Zugriff auf ihre aktuellen Vorsorgedaten. Transparent, sicher und rund um die Uhr verfügbar.",
            imageSrc: "/assets/zenbook.png",
        }
    ]

    return (
        <section className="w-full flex flex-col items-center py-[100px] px-6 md:px-[100px]">
            <div
                className="relative w-full max-w-7xl min-h-[600px] rounded-[32px] overflow-hidden flex flex-col gap-0 items-start"
                style={{
                    backgroundColor: "var(--black)",
                    backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 1369\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -109.52 -129.6 0 0 0)\\'><stop stop-color=\\'rgba(149,14,45,0.45)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(149,14,45,0)\\' offset=\\'0.75\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 1369\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -102.67 -115.2 0 576 0)\\'><stop stop-color=\\'rgba(221,31,74,0.6)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(221,31,74,0)\\' offset=\\'0.75\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 1369\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-55.6 -116.36 -138.04 78.648 1996 -0.000061021)\\'><stop stop-color=\\'rgba(249,230,198,0.85)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(249,230,198,0)\\' offset=\\'0.70279\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 1369\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -75.295 -86.4 0 1080 0)\\'><stop stop-color=\\'rgba(249,230,198,0.5)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(249,230,198,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 1369\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -109.52 -129.6 0 0 1369)\\'><stop stop-color=\\'rgba(0,38,71,0.35)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(0,38,71,0)\\' offset=\\'0.64904\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 1369\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-130.53 -180.47 -212.17 380.58 1440 1369)\\'><stop stop-color=\\'rgba(174,235,233,0.9)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(174,235,233,0)\\' offset=\\'0.78\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 1369\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(37.484 -83.405 -95.707 -106.68 720 1369)\\'><stop stop-color=\\'rgba(130,200,210,0.3)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(130,200,210,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 1369\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -136.9 -158.4 0 720 684.5)\\'><stop stop-color=\\'rgba(170,100,100,0.28)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(140,110,130,0.18)\\' offset=\\'0.45\\'/><stop stop-color=\\'rgba(100,120,150,0.1)\\' offset=\\'0.7\\'/><stop stop-color=\\'rgba(100,120,150,0)\\' offset=\\'0.85\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 1369\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-39.867 68.45 82.286 118.86 432 684.5)\\'><stop stop-color=\\'rgba(160,80,90,0.2)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(160,80,90,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>'), linear-gradient(155.962deg, rgb(107, 26, 53) 16.722%, rgb(61, 40, 69) 45.87%, rgb(34, 56, 85) 70.853%, rgb(22, 48, 80) 100%)"
                }}
            >
                {/* Tabs Navigation */}
                <div className="flex flex-wrap items-center gap-4 relative z-10 w-full px-[48px] pt-[48px]">
                    {tabsData.map((tab, index) => {
                        const isActive = activeTab === index;
                        return (
                            <div
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`flex items-center gap-2 px-4 py-[14px] cursor-pointer transition-all ${isActive
                                    ? "rounded-full bg-white/10 border border-white/30"
                                    : "ml-4"
                                    }`}
                            >
                                <div className={`size-5 rounded-full shrink-0 transition-all ${isActive
                                    ? "border-2 border-white bg-white"
                                    : "border border-white/40 bg-transparent"
                                    }`} />
                                <span className={`font-medium text-[18px] leading-6 transition-colors ${isActive ? "text-white" : "text-white/60 hover:text-white/80"
                                    }`}>
                                    {tab.title}
                                </span>
                            </div>
                        )
                    })}
                </div>

                {/* Content Area */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-0 w-full px-[48px] pb-0 relative z-10 mt-[48px] flex-1">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col gap-6 items-start justify-center w-full md:w-[420px] shrink-0 self-center"
                        >
                            <p className="font-normal text-[18px] leading-[30px] text-white">
                                {tabsData[activeTab].description}
                            </p>
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-[14px] rounded-full font-semibold text-sm hover:bg-white/90 transition-colors"
                            >
                                Mehr erfahren
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                                </svg>
                            </Link>
                        </motion.div>
                    </AnimatePresence>

                    {/* Device Mockup */}
                    <div className="relative flex-1 flex items-end justify-end h-[456px] overflow-visible">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={activeTab}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.4 }}
                                src={tabsData[activeTab].imageSrc}
                                alt={`${tabsData[activeTab].title} Dashboard`}
                                className="absolute bottom-0 right-0 w-[676px] max-w-none object-contain"
                                style={{ transform: "translateY(50.5px)" }}
                            />
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}
