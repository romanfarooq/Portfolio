import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

export function ParallaxBackground() {
  const backgroundRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: backgroundRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 80,
  });

  const mountain3Y = useTransform(smoothProgress, [0, 0.5], ["0%", "30%"]);
  const planetsX = useTransform(smoothProgress, [0, 0.5], ["0%", "-10%"]);
  const mountain2Y = useTransform(smoothProgress, [0, 0.5], ["0%", "15%"]);
  const mountain1Y = useTransform(smoothProgress, [0, 0.5], ["0%", "5%"]);

  return (
    <section ref={backgroundRef} className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden will-change-transform">
        <div
          className="absolute inset-0 -z-50 h-screen w-full bg-cover bg-bottom"
          style={{
            backgroundImage: "url(/assets/images/sky.webp)",
          }}
        />

        {/* Mountain Layer 3 - Use transform hardware acceleration */}
        <motion.div
          className="absolute inset-0 -z-40 bg-cover bg-bottom"
          style={{
            y: mountain3Y,
            backgroundImage: "url(/assets/images/mountain-3.webp)",
          }}
        />

        {/* Planets */}
        <motion.div
          className="absolute inset-0 -z-30 bg-cover bg-bottom"
          style={{
            x: planetsX,
            backgroundImage: "url(/assets/images/planets.webp)",
          }}
        />

        {/* Mountain Layer 2 */}
        <motion.div
          className="absolute inset-0 -z-20 bg-cover bg-bottom"
          style={{
            y: mountain2Y,
            backgroundImage: "url(/assets/images/mountain-2.webp)",
          }}
        />

        {/* Mountain Layer 1 */}
        <motion.div
          className="absolute inset-0 -z-10 bg-cover bg-bottom"
          style={{
            y: mountain1Y,
            backgroundImage: "url(/assets/images/mountain-1.webp)",
          }}
        />
      </div>
    </section>
  );
}
