'use client'
import { useLightParticles } from "@/hooks/SoftLightsBackground"
import "./style.scss"

export const LightParticles = () => {
    const { containerRef } = useLightParticles(20)

    return <div ref={containerRef} className="light-particles-container" />
}
