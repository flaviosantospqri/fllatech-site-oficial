'use client'
import { useEffect, useState } from "react"

type LightSpot = {
    top: string
    left: string
    size: string
    blur: string
    opacity: number
}

export const useLightSpots = (count: number = 5) => {
    const [spots, setSpots] = useState<LightSpot[]>([])

    useEffect(() => {
        const generateSpots = () => {
            return Array.from({ length: count }).map(() => ({
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                size: `${150 + Math.random() * 200}px`,
                blur: `${30 + Math.random() * 50}px`,
                opacity: 0.05 + Math.random() * 0.05,
            }))
        }

        setSpots(generateSpots())
    }, [count])

    return spots
}
