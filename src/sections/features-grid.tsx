import * as React from "react"
import Image from "next/image"
import { SectionHeader } from "@/components/ui/section-header"
import { MagicCard } from "@/components/ui/magic-card"

const features = [
    {
        title: "Automatisierung Beitragsrechnungen",
        description: "Komplette Automatisierung Beitragsberechnung und Verrechnung in allen Applikationen",
        icon: "/assets/icon-feature-0.svg",
    },
    {
        title: "Geschäfsfall-Management",
        description: "Komplexe Prozesse mit individueller Automatisierung durch Workflow-Engine abbilden",
        icon: "/assets/icon-feature-1.svg",
    },
    {
        title: "Erweitertes Fallmanagement",
        description: "Darstellung komplexer Prozesse im Arbeitgeber-Portal und PK-Cockpit",
        icon: "/assets/icon-feature-2.svg",
    },
    {
        title: "Integriertes Archiv",
        description: "Automatische Zuordnung und Ablage von Dokumenten",
        icon: "/assets/icon-feature-3.svg",
    },
    {
        title: "Neue ZAS-Schnittstelle",
        description: "Umfassender automatischer Datenaustausch über die neueste Version der ZAS-Schnittstelle",
        icon: "/assets/icon-feature-4.svg",
    },
    {
        title: "Integration Buchhaltungssysteme",
        description: "Integration von Finanz- und Debitorenbuchhaltungs-Systemen für automatisierten Datenaustausch",
        icon: "/assets/icon-feature-5.svg",
    },
]

export function FeaturesGrid() {
    return (
        <section className="relative w-full flex flex-col items-center gap-[32px] py-[100px] px-6 md:px-[100px] overflow-hidden bg-white">
            {/* Background blobs */}
            <div className="absolute left-[-246px] top-[452px] w-[490px] h-[320px] blur-[64px] -z-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(162.966deg, rgba(107,26,53,0.05) 16.722%, rgba(61,40,69,0.05) 45.87%, rgba(34,56,85,0.05) 70.853%, rgba(22,48,80,0.05) 100%)" }} />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[490px] h-[320px] blur-[64px] -z-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(162.966deg, rgba(107,26,53,0.07) 16.722%, rgba(61,40,69,0.07) 45.87%, rgba(34,56,85,0.07) 70.853%, rgba(22,48,80,0.07) 100%)" }} />

            {/* Header */}
            <SectionHeader
                subtitle="Funktionen"
                title="Alles was Sie brauchen"
                align="center"
            />

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mt-8">
                {features.map((feature, i) => (
                    <MagicCard
                        key={i}
                        className="bg-white border border-muted rounded-2xl flex flex-col items-start min-h-[220px]"
                        gradientColor="rgba(4,55,121,0.08)"
                        gradientSize={250}
                        gradientOpacity={1}
                        borderLinearGradient="linear-gradient(154.494deg, rgb(145, 14, 45) 16.722%, rgb(34, 56, 85) 48.352%, rgb(156, 210, 212) 82.784%)"
                    >
                        <div className="p-6 flex flex-col gap-4 items-start w-full h-full relative z-20">
                            {/* Icon container */}
                            <div
                                className="size-12 shrink-0 rounded-xl flex items-center justify-center"
                                style={{ backgroundImage: "linear-gradient(135deg, rgba(4,55,121,0.1) 0%, rgba(10,91,196,0.1) 100%)" }}
                            >
                                <div className="relative size-6">
                                    <Image src={feature.icon} alt="" fill />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h3 className="font-medium text-xl text-black">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-black leading-[26px]">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    </MagicCard>
                ))}
            </div>
        </section>
    )
}
