"use client";
import { useEffect, useRef, useState } from "react";
import "./style.scss";


export const ReadingProgressBar = () => {
    const [targetScroll, setTargetScroll] = useState(0);
    const progressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.body.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setTargetScroll(progress);
        };

        const animate = () => {
            if (progressRef.current) {
                const currentWidth = parseFloat(progressRef.current.style.width) || 0;
                const newWidth = currentWidth + (targetScroll - currentWidth) * 0.5;
                progressRef.current.style.width = `${newWidth}%`;
            }
            requestAnimationFrame(animate);
        };

        window.addEventListener("scroll", handleScroll);
        requestAnimationFrame(animate);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [targetScroll]);

    return (
        <div className="progressContainer">
            <div className="progressBar" ref={progressRef} />
        </div>
    );
};
