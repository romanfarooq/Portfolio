"use client";

import createGlobe from "cobe";
import { useRef, useEffect } from "react";
import { useSpring, useMotionValue } from "motion/react";
import type { COBEOptions } from "cobe";

import { cn } from "@/lib/utils";

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  devicePixelRatio: 2,
  phi: 0,
  dark: 1,
  theta: 0.3,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  glowColor: [1, 1, 1],
  markerColor: [1, 1, 1],
  markers: [{ location: [31.5204, 74.3587], size: 0.05 }]
};

interface GlobeProps {
  className?: string;
  config?: COBEOptions;
}

export function Globe({ className, config = GLOBE_CONFIG }: GlobeProps) {
  const phi = useRef(0);
  const width = useRef(0);
  const pointerInteractionMovement = useRef(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100
  });

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    let animationFrame = 0;

    const onResize = () => {
      if (canvasRef.current) {
        width.current = canvasRef.current.offsetWidth;
      }
    };

    onResize();
    window.addEventListener("resize", onResize);

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width.current * 2,
      height: width.current * 2
    });

    const animate = () => {
      if (pointerInteracting.current === null) phi.current += 0.005;

      globe.update({
        phi: phi.current + rs.get(),
        width: width.current * 2,
        height: width.current * 2
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    }, 0);

    return () => {
      cancelAnimationFrame(animationFrame);
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config]);

  return (
    <div className={cn("mx-auto aspect-square w-full max-w-xl", className)}>
      <canvas
        ref={canvasRef}
        className="size-120 opacity-0 transition-opacity duration-500 contain-layout contain-paint contain-size"
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) => updateMovement(e.touches[0].clientX)}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
      />
    </div>
  );
}
