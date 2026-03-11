"use client"

import * as React from "react"
import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import Fade from "embla-carousel-fade"
import { MagicCard } from "@/components/ui/magic-card"

const testimonials = [
    {
        id: 1,
        quote: "\"Im Versichertenportal von PensionDynamics werden die einzelnen Themenbereiche der beruflichen Vorsorge in einer verständlichen Sprache erklärt, mit Unterstützung von visuellen und interaktiven Grafiken sowie dem PensionDynamics Simulator.\"",
        authorName: "Emmanuel Ullmann",
        authorRole: "Managing Director",
        authorCompany: "Pension Fund of the Canton of Solothurn",
        authorImage: "/assets/testimonial-avatar.png",
    },
    {
        id: 2,
        quote: "\"PensionDynamics has an extremely good understanding of the pension fund environment and can therefore offer targeted solutions. Combined with its extensive expertise in the digital sector, this makes for a powerful mix. Thanks to PensionDynamics' programs, our insured members can access various key performance indicators at any time. This increases customer satisfaction and simultaneously relieves the burden on our internal account managers.\"",
        authorName: "Christoph Borer | Armin Glutz",
        authorRole: "Head of IT | Head of Insurance",
        authorCompany: "Solothurn Cantonal Pension Fund",
        authorImage: "/assets/testimonial-avatar2.png",
    },
    {
        id: 3,
        quote: "\"We are impressed by how PensionDynamics has implemented a technically and visually innovative retirement simulation tool. Since we started using the simulator, the number of questions from insured individuals regarding retirement benefits has decreased.\"",
        authorName: "Nathalie Teta-Ender | Markus Loop",
        authorRole: "CEO | Managing Director",
        authorCompany: "Pensionskasse AR",
        authorImage: "/assets/testimonial-avatar3.png",
    }
]

export function Testimonials() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [Fade()])
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
    const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

    const onInit = useCallback((emblaApi: any) => {
        setScrollSnaps(emblaApi.scrollSnapList())
    }, [])

    const onSelect = useCallback((emblaApi: any) => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
        setPrevBtnDisabled(!emblaApi.canScrollPrev())
        setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])

    useEffect(() => {
        if (!emblaApi) return
        onInit(emblaApi)
        onSelect(emblaApi)
        emblaApi.on("reInit", onInit)
        emblaApi.on("reInit", onSelect)
        emblaApi.on("select", onSelect)
    }, [emblaApi, onInit, onSelect])

    return (
        <section className="w-full flex flex-col items-center justify-center py-[100px] px-6 bg-white overflow-hidden">
            <div className="w-full max-w-6xl flex flex-col items-center gap-[32px] px-8">
                {/* Title */}
                <h2 className="font-bold text-[40px] leading-[48px] text-black text-center">
                    Das sagen unsere Kunden über uns
                </h2>

                <div className="flex flex-col items-center gap-[48px] w-full max-w-[1024px]">
                    {/* Carousel Viewport */}
                    <div className="overflow-hidden w-full cursor-grab active:cursor-grabbing pb-8 pt-4 px-4 -mx-4" ref={emblaRef}>
                        <div className="flex w-full">
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="flex-[0_0_100%] min-w-0 flex flex-col items-center relative"
                                >
                                    <MagicCard
                                        className="bg-white border border-border rounded-[32px] flex flex-col w-full h-full duration-300 transition-colors group-hover:border-transparent shadow-[0_4px_24px_rgba(0,0,0,0.02)]"
                                        gradientColor="rgba(4,55,121,0.06)"
                                        gradientSize={350}
                                        gradientOpacity={1}
                                        borderLinearGradient="linear-gradient(154.494deg, rgb(145, 14, 45) 16.722%, rgb(34, 56, 85) 48.352%, rgb(156, 210, 212) 82.784%)"
                                    >
                                        <div className="relative z-20 flex flex-col lg:flex-row items-stretch w-full h-full">
                                            {/* Author Image (Side-by-side Edge-to-Edge) */}
                                            <div className="relative w-full h-full lg:w-[400px] shrink-0 rounded-t-[31px] lg:rounded-t-none lg:rounded-l-[31px] overflow-hidden">
                                                <Image
                                                    src={testimonial.authorImage}
                                                    alt={testimonial.authorName}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>

                                            {/* Copy & Details */}
                                            <div className="flex flex-col flex-1 justify-center p-8">
                                                {/* Quote Icon */}
                                                <div className="relative size-10 md:size-12 shrink-0 mb-6">
                                                    <Image src="/assets/quote-icon.svg" alt="" fill />
                                                </div>

                                                <p className="text-[18px] md:text-[20px] font-normal leading-[36px] text-black w-full">
                                                    {testimonial.quote}
                                                </p>

                                                {/* Author Strings */}
                                                <div className="flex flex-col gap-1 mt-8 lg:mt-10">
                                                    <p className="font-bold text-[20px] text-black">
                                                        {testimonial.authorName}
                                                    </p>
                                                    <p className="text-[14px] text-muted-foreground leading-relaxed">
                                                        {testimonial.authorRole}
                                                    </p>
                                                    <p className="text-[14px] font-bold text-primary leading-relaxed">
                                                        {testimonial.authorCompany}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </MagicCard>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center gap-4 h-10 justify-center w-full">
                        {/* Prev */}
                        <button
                            onClick={scrollPrev}
                            disabled={prevBtnDisabled}
                            className="size-10 shrink-0 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-50"
                            aria-label="Previous testimonial"
                        >
                            <div className="relative size-5">
                                <Image src="/assets/chevron-left.svg" alt="Previous" fill />
                            </div>
                        </button>

                        {/* Dots */}
                        <div className="flex items-center gap-2">
                            {scrollSnaps.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollTo(index)}
                                    className={`transition-all duration-300 ease-in-out rounded-full ${index === selectedIndex
                                        ? "w-8 h-2 border border-primary bg-transparent"
                                        : "size-2 bg-border"
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Next */}
                        <button
                            onClick={scrollNext}
                            disabled={nextBtnDisabled}
                            className="size-10 shrink-0 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-50"
                            aria-label="Next testimonial"
                        >
                            <div className="relative size-5">
                                <Image src="/assets/chevron-right.svg" alt="Next" fill />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
