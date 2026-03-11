"use client"

import * as React from "react"
import { useRef, useState } from "react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function FeaturesHighlights() {
    const highlights = [
        {
            subtitle: "automation",
            title: "Efficient, error-free",
            description: "Digitalization is more than just sending a PDF instead of a paper document. In digital transformation, processes are continuously optimized in order to achieve the highest possible level of automation.",
            actionText: "Mehr erfahren",
            actionHref: "#",
            imageSrc: "/assets/automation.png",
            reversed: false,
        },
        {
            subtitle: "Cloud computing",
            title: "Secure, highly available",
            description: "Thanks to cloud computing, in-house data centers are a thing of the past for pension funds. The major advantages of cloud computing: highly available and location-independent.",
            actionText: "Mehr erfahren",
            actionHref: "#",
            imageSrc: "/assets/cloud.png",
            reversed: true,
        },
        {
            subtitle: "User experience",
            title: "Made for the user",
            description: "The user experience includes everything that contributes to the user's experience when operating the software. The focus is on customer benefit.",
            actionText: "Mehr erfahren",
            actionHref: "#",
            imageSrc: "/assets/user-experience.png",
            reversed: false,
        }
    ]

    const targetRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    })

    const [activeIndex, setActiveIndex] = useState(0)
    const [direction, setDirection] = useState(1)

    useMotionValueEvent(scrollYProgress, "change", (progress) => {
        let newIndex = 0;
        if (progress >= 0.66) {
            newIndex = 2;
        } else if (progress >= 0.33) {
            newIndex = 1;
        } else {
            newIndex = 0;
        }

        if (newIndex !== activeIndex) {
            setDirection(newIndex > activeIndex ? 1 : -1)
            setActiveIndex(newIndex)
        }
    })

    const textVariants = {
        enter: (direction: number) => ({
            y: direction > 0 ? 80 : -80,
            opacity: 0,
        }),
        center: {
            y: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            y: direction > 0 ? -80 : 80,
            opacity: 0,
        }),
    }

    const currentItem = highlights[activeIndex]

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-light-gray w-full">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-6">
                <div className="max-w-6xl w-full z-10 flex flex-col md:flex-row items-center justify-between gap-12 relative">
                    
                    {/* Image Area */}
                    <div className="relative w-full md:w-[711px] h-[300px] md:h-[400px] shrink-0 rounded-2xl overflow-hidden">
                        <AnimatePresence mode="popLayout">
                            <motion.img
                                key={activeIndex}
                                src={currentItem.imageSrc}
                                alt={currentItem.title}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="absolute inset-0 object-cover w-full h-full"
                            />
                        </AnimatePresence>
                    </div>

                    {/* Text Area */}
                    <div className="relative flex flex-col gap-4 items-start justify-center w-full md:w-[460px] shrink-0 h-[350px] md:h-[400px]">
                        <AnimatePresence custom={direction}>
                            <motion.div
                                key={activeIndex}
                                custom={direction}
                                variants={textVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }} 
                                className="absolute inset-0 flex flex-col items-start justify-center w-full"
                            >
                                <div className="flex flex-col items-start w-full gap-2">
                                    {currentItem.subtitle && (
                                        <p className="font-medium text-base text-muted-foreground lowercase">
                                            {currentItem.subtitle}
                                        </p>
                                    )}
                                    <h2 className="font-bold text-[32px] md:text-[40px] leading-tight md:leading-[48px] text-foreground">
                                        {currentItem.title}
                                    </h2>
                                </div>

                                <p className="font-normal text-lg leading-[30px] text-foreground mt-2">
                                    {currentItem.description}
                                </p>

                                {currentItem.actionText && currentItem.actionHref && (
                                    <Button asChild className="mt-6 text-white bg-primary hover:bg-primary/90 text-sm h-[48px] px-8 py-[14px] rounded-full">
                                        <Link href={currentItem.actionHref}>
                                            {currentItem.actionText}
                                            <ArrowRight className="ml-2 size-4" />
                                        </Link>
                                    </Button>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    )
}
