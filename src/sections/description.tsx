import * as React from "react"
import { StatItem } from "@/components/ui/stat-item"
import { SectionHeader } from "@/components/ui/section-header"

export function Description() {
    const stats = [
        { value: "+15", label: "Pensionskassen" },
        { value: "99.9%", label: "Verfügbarkeit" },
        { value: "80%", label: "Automatisierung" },
        { value: "50K+", label: "Versicherte" },
    ]

    return (
        <section className="relative w-full flex flex-col items-center justify-center gap-16 py-[100px] px-6">
            {/* Background Gradients Blur (Decoração) */}
            <div className="absolute left-0 top-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] -z-10" />
            <div className="absolute right-0 bottom-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] -z-10" />

            {/* Título Principal Textual */}
            <div className="flex flex-col gap-4 items-center text-center max-w-[880px] w-full mx-auto">
                <h2 className="font-bold text-[32px] md:text-[40px] leading-tight md:leading-[48px] text-foreground">
                    Digitale Transformation <br />
                    <span className="text-primary">für Pensionskassen</span>
                </h2>
                <p className="font-normal text-base md:text-[18px] leading-[30px] text-foreground">
                    Intuitiv, angenehm und vollkommen automatisiert: PensionDynamics ist die Pensionskassensoftware, welche die digitale Transformation im Bereich der beruflichen Vorsorge auf allen Ebenen vorantreibt. Überzeugen Sie sich selbst – gerne zeigen wir Ihnen PensionDynamics bei einer unverbindlichen Demo.
                </p>
            </div>

            {/* Cards de Estatísticas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
                {stats.map((stat, i) => (
                    <StatItem
                        key={i}
                        value={stat.value}
                        label={stat.label}
                    />
                ))}
            </div>
        </section>
    )
}
