"use client";

import { motion, Variants } from "framer-motion"
import { useIsVisible } from "@/hooks/useIsvisible"
import { ReactNode } from "react"

const variants: Record<string, Variants> = {
    fadeIn: {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    },
    maskUp: {
        hidden: { y: "100%" },
        visible: { y: "0%" },
    },
    clipPath: {
        hidden: { clipPath: "inset(100% 0 0 0)" },
        visible: { clipPath: "inset(0% 0 0 0)" },
    },
    blurIn: {
        hidden: { opacity: 0, filter: "blur(5px)" },
        visible: { opacity: 1, filter: "blur(0px)" },
    },
    slideLeft: {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    },
    slideRight: {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
    },
}

type RevealProps = {
    children: ReactNode
    variant?: keyof typeof variants
    delay?: number
}

export const Reveal = ({ children, variant = "fadeIn", delay = 0 }: RevealProps) => {
    const { ref, isVisible } = useIsVisible<HTMLDivElement>()

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={variants[variant]}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            style={{ overflow: "hidden" }}
        >
            {children}
        </motion.div>
    )
}
