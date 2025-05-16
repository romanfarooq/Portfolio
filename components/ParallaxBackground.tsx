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
        {/* Background Layer - Sky */}
        <div className="absolute inset-0 -z-50 h-screen w-full bg-[url('/assets/images/sky.webp')] bg-cover bg-bottom" />

        {/* Mountain Layer 3 */}
        <motion.div
          className="absolute inset-0 -z-40 bg-[url('/assets/images/mountain-3.webp')] bg-cover bg-bottom"
          style={{ y: mountain3Y }}
        />

        {/* Planets */}
        <motion.div
          className="absolute inset-0 -z-30 bg-[url('/assets/images/planets.webp')] bg-cover bg-bottom"
          style={{ x: planetsX }}
        />

        {/* Mountain Layer 2 */}
        <motion.div
          className="absolute inset-0 -z-20 bg-[url('/assets/images/mountain-2.webp')] bg-cover bg-bottom"
          style={{ y: mountain2Y }}
        />

        {/* Mountain Layer 1 */}
        <motion.div
          className="absolute inset-0 -z-10 bg-[url('/assets/images/mountain-1.webp')] bg-cover bg-bottom"
          style={{ y: mountain1Y }}
        />
      </div>
    </section>
  );
}
