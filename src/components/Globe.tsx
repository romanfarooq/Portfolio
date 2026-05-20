"use client";

import createGlobe from "cobe";
import { useRef, useEffect } from "react";
import { useSpring, useMotionValue } from "motion/react";
import type { COBEOptions } from "cobe";
import type { CSSProperties } from "react";

import { cn, getRotationForLocation } from "@/lib/utils";

const MOVEMENT_DAMPING = 200;
const AUTO_ROTATION_SPEED = 0.003;
const LAHORE_MARKER_ID = "lahore";
const LAHORE_INITIAL_PHI_OFFSET = 0.8;
const LAHORE_COORDINATES: [number, number] = [31.5204, 74.3587];

const INITIAL_ROTATION = getRotationForLocation(LAHORE_COORDINATES);
const LAHORE_LABEL_STYLE: CSSProperties & { positionAnchor: string } = {
  position: "absolute",
  positionAnchor: `--cobe-${LAHORE_MARKER_ID}`,
  bottom: "anchor(top)",
  left: "anchor(center)",
  transform: "translate(-50%, -0.75rem)",
  opacity: `var(--cobe-visible-${LAHORE_MARKER_ID}, 0)`,
  filter: `blur(calc((1 - var(--cobe-visible-${LAHORE_MARKER_ID}, 0)) * 8px))`,
  transition: "opacity 300ms ease, filter 300ms ease"
};

const GLOBE_CONFIG: COBEOptions = {
  dark: 1,
  width: 800,
  height: 800,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  devicePixelRatio: 2,
  baseColor: [1, 1, 1],
  glowColor: [1, 1, 1],
  markerColor: [1, 1, 1],
  theta: INITIAL_ROTATION.theta,
  phi: INITIAL_ROTATION.phi - LAHORE_INITIAL_PHI_OFFSET,
  markers: [{ location: LAHORE_COORDINATES, size: 0.05, id: LAHORE_MARKER_ID }]
};

interface GlobeProps {
  className?: string;
  config?: COBEOptions;
}

export function Globe({ className, config = GLOBE_CONFIG }: GlobeProps) {
  const phi = useRef(config.phi ?? 0);
  const width = useRef(0);
  const dragStartRotation = useRef(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerRef = useRef<number | null>(null);

  const dragRotation = useMotionValue(0);
  const springRotation = useSpring(dragRotation, {
    mass: 1,
    damping: 30,
    stiffness: 100
  });

  const updatePointerInteraction = (value: number | null) => {
    pointerRef.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerRef.current !== null) {
      const delta = clientX - pointerRef.current;
      dragRotation.set(dragStartRotation.current + delta / MOVEMENT_DAMPING);
    }
  };

  const startDragging = (clientX: number) => {
    dragStartRotation.current = dragRotation.get();
    updatePointerInteraction(clientX);
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
    phi.current = config.phi ?? 0;

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width.current * 2,
      height: width.current * 2
    });

    const animate = () => {
      if (pointerRef.current === null) phi.current += AUTO_ROTATION_SPEED;

      globe.update({
        phi: phi.current + springRotation.get(),
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
  }, [springRotation, config]);

  return (
    <div
      className={cn(
        "relative mx-auto aspect-square w-full max-w-xl",
        className
      )}
    >
      <canvas
        ref={canvasRef}
        className="size-120 opacity-0 transition-opacity duration-500 contain-layout contain-paint contain-size"
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onPointerDown={(e) => startDragging(e.clientX)}
        onPointerMove={(e) => updateMovement(e.clientX)}
      />
      <div
        aria-hidden="true"
        style={LAHORE_LABEL_STYLE}
        className="pointer-events-none rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs font-medium text-white shadow-lg shadow-black/20 backdrop-blur"
      >
        Lahore
      </div>
    </div>
  );
}
