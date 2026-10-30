"use client";

import createGlobe from "cobe";
import { useRef, useEffect } from "react";
import { useSpring, useMotionValue } from "motion/react";
import type { COBEOptions } from "cobe";
import type { CSSProperties, PointerEvent } from "react";

import { cn, getRotationForLocation } from "@/lib/utils";

const MOVEMENT_DAMPING = 200;
const AUTO_ROTATION_SPEED = 0.18;
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
  const containerRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{
    startX: number;
    pointerId: number;
    startRotation: number;
  } | null>(null);

  const dragRotation = useMotionValue(0);
  const springRotation = useSpring(dragRotation, {
    mass: 1,
    damping: 30,
    stiffness: 100
  });

  function startDragging(event: PointerEvent<HTMLDivElement>) {
    if (!event.isPrimary || event.button !== 0 || dragRef.current) return;

    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = {
      startX: event.clientX,
      pointerId: event.pointerId,
      startRotation: dragRotation.get()
    };
  }

  function updateDragging(event: PointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;

    if (!drag || drag.pointerId !== event.pointerId) return;

    const delta = (event.clientX - drag.startX) / MOVEMENT_DAMPING;
    dragRotation.set(drag.startRotation + delta);
  }

  function stopDragging(event: PointerEvent<HTMLDivElement>) {
    if (dragRef.current?.pointerId !== event.pointerId) return;

    dragRef.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const canvas = document.createElement("canvas");
    canvas.className = "block size-full";
    container.append(canvas);

    let phi = config.phi;
    let size = Math.max(1, container.clientWidth);
    let previousTime: number | undefined;
    let animationFrame = 0;

    const globe = createGlobe(canvas, {
      ...config,
      width: size,
      height: size
    });

    container.style.opacity = "1";

    const resizeObserver = new ResizeObserver(() => {
      const nextSize = container.clientWidth;

      if (nextSize === 0 || nextSize === size) return;

      size = nextSize;
      globe.update({ width: size, height: size });
    });

    resizeObserver.observe(container);

    const animate = (time: number) => {
      const delta =
        previousTime === undefined
          ? 0
          : Math.min((time - previousTime) / 1000, 0.1);

      previousTime = time;

      if (!dragRef.current) phi += AUTO_ROTATION_SPEED * delta;

      globe.update({ phi: phi + springRotation.get() });

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      globe.destroy();
      container.replaceChildren();
      dragRef.current = null;
    };
  }, [config, springRotation]);

  return (
    <div
      className={cn(
        "relative mx-auto aspect-square w-full max-w-xl",
        className
      )}
    >
      <div
        ref={containerRef}
        className="size-120 cursor-grab touch-pan-y touch-pinch-zoom opacity-0 transition-opacity duration-500 contain-layout contain-paint contain-size active:cursor-grabbing"
        onPointerUp={stopDragging}
        onPointerDown={startDragging}
        onPointerMove={updateDragging}
        onPointerCancel={stopDragging}
        onLostPointerCapture={stopDragging}
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
