'use client'

import { useLightSpots } from "@/hooks/useLightSpots"
import "./style.scss"

export const LightSpots = () => {
    const spots = useLightSpots(7)

    return (
        <div className="light-spots">
            {spots.map((spot, index) => (
                <div
                    key={index}
                    className="light-spot"
                    style={{
                        top: spot.top,
                        left: spot.left,
                        width: spot.size,
                        height: spot.size,
                        filter: `blur(${spot.blur})`,
                        opacity: spot.opacity,
                    }}
                />
            ))}
        </div>
    )
}
