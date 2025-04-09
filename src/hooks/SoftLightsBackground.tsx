import { useEffect, useRef } from "react";

export const useLightParticles = (count = 10) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const particles = Array.from({ length: count }, () =>
      document.createElement("div")
    );

    particles.forEach((particle) => {
      particle.className = "light-particle";
      containerRef.current?.appendChild(particle);

      const animate = () => {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 4 + 2;

        particle.style.left = `${x}%`;
        particle.style.top = `${y}%`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        setTimeout(animate, Math.random() * 5000 + 3000);
      };

      animate();
    });

    return () => {
      particles.forEach((p) => p.remove());
    };
  }, [count]);

  return { containerRef };
};
