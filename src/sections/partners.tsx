import * as React from "react"
import Image from "next/image"

const partners = [
    { name: "CPVAL", src: "/assets/partner-cpval.png", w: 81 },
    { name: "PKSO", src: "/assets/partner-pkso.png", w: 80 },
    { name: "Visana", src: "/assets/partner-visana.png", w: 79 },
    { name: "SGPK", src: "/assets/partner-sgpk.png", w: 65 },
    { name: "WWZ", src: "/assets/partner-wwz.png", w: 74 },
    { name: "Jura", src: "/assets/partner-jura.png", w: 78 },
    { name: "Pro Public", src: "/assets/partner-propublic.svg", w: 105 },
    { name: "Ascaro", src: "/assets/partner-ascaro.png", w: 143 },
    { name: "Leuthard", src: "/assets/partner-leuthard.svg", w: 116 },
    { name: "Roche", src: "/assets/partner-roche.png", w: 67 },
    { name: "PKAR", src: "/assets/partner-pkar.png", w: 80 },
    { name: "Aregger", src: "/assets/partner-aregger.png", w: 146 },
    { name: "Swisslos", src: "/assets/partner-swisslos.png", w: 167 },
    { name: "Medpension", src: "/assets/partner-medpension.png", w: 106 },
]

export function Partners() {
    return (
        <section className="w-full flex flex-col items-center justify-center gap-[32px] py-[100px] overflow-hidden">
            <p className="font-semibold text-xs text-muted-foreground tracking-[2px] uppercase text-center px-6">
                Trusted by leading Swiss pension funds
            </p>

            {/* Marquee Container */}
            <div className="relative w-full flex overflow-hidden group">
                {/* 
                  Renderizamos a fita de logos 2 vezes dentro de um bloco com "animate-marquee".
                  A largura total deste bloco deve ser o suficiente para não piscar no fim do loop.
                  As margens/gaps já estão no inner wrapper.
                */}
                <div className="flex w-max animate-marquee gap-12 px-6">
                    {/* Lista Original */}
                    {partners.map((partner, index) => (
                        <div
                            key={`original-${partner.name}-${index}`}
                            className="relative shrink-0 h-[35px] hover:scale-105 transition-transform cursor-pointer"
                            style={{ width: partner.w }}
                        >
                            <Image
                                src={partner.src}
                                alt={partner.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                    {/* Lista Duplicada para criar a ilusão de loop infinito */}
                    {partners.map((partner, index) => (
                        <div
                            key={`clone-${partner.name}-${index}`}
                            className="relative shrink-0 h-[35px] hover:scale-105 transition-transform cursor-pointer"
                            style={{ width: partner.w }}
                        >
                            <Image
                                src={partner.src}
                                alt={partner.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

