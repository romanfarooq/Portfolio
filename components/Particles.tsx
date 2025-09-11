import { useRef, useMemo, useEffect, useCallback } from "react";
import { cn, hexToRgb, remapValue, getDevicePixelRatio } from "@/lib/utils";

interface Circle {
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
  alpha: number;
  magnetism: number;
  translateX: number;
  translateY: number;
  targetAlpha: number;
}

interface ParticlesProps extends React.HTMLAttributes<HTMLDivElement> {
  vx?: number;
  vy?: number;
  size?: number;
  quantity?: number;
  color?: string;
}

export function Particles({
  className,
  vx = 0,
  vy = 0,
  size = 0.4,
  quantity = 100,
  color = "#ffffff",
  ...props
}: ParticlesProps) {
  const rafID = useRef<number>(null);
  const circles = useRef<Circle[]>([]);
  const canvasSize = useRef({ w: 0, h: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const resizeTimeout = useRef<NodeJS.Timeout>(null);
  const context = useRef<CanvasRenderingContext2D>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  const rgb = useMemo(() => hexToRgb(color), [color]);
  const dpr = useMemo(() => getDevicePixelRatio(), []);

  const clearContext = useCallback(() => {
    context.current?.clearRect(
      0,
      0,
      canvasSize.current.w,
      canvasSize.current.h,
    );
  }, []);

  const createCircle = useCallback((): Circle => {
    return {
      x: Math.floor(Math.random() * canvasSize.current.w),
      y: Math.floor(Math.random() * canvasSize.current.h),
      dx: (Math.random() - 0.5) * 0.1,
      dy: (Math.random() - 0.5) * 0.1,
      size: Math.floor(Math.random() * 2) + size,
      alpha: 0,
      magnetism: 0.1 + Math.random() * 4,
      translateX: 0,
      translateY: 0,
      targetAlpha: parseFloat((Math.random() * 0.6 + 0.1).toFixed(1)),
    };
  }, [size]);

  const renderCircleParticle = useCallback(
    (circle: Circle) => {
      if (!context.current) return;

      context.current.save();
      context.current.translate(circle.translateX, circle.translateY);
      context.current.beginPath();
      context.current.arc(circle.x, circle.y, circle.size, 0, 2 * Math.PI);
      context.current.fillStyle = `rgba(${rgb.join(", ")}, ${circle.alpha})`;
      context.current.fill();
      context.current.restore();
    },
    [rgb],
  );

  const updateCirclePosition = useCallback(
    (circle: Circle) => {
      const edge = [
        circle.x + circle.translateX - circle.size,
        canvasSize.current.w - circle.x - circle.translateX - circle.size,
        circle.y + circle.translateY - circle.size,
        canvasSize.current.h - circle.y - circle.translateY - circle.size,
      ];

      const closestEdge = Math.min(...edge);
      const remapClosestEdge = remapValue(closestEdge, 0, 20, 0, 1);

      circle.alpha =
        remapClosestEdge > 1
          ? Math.min(circle.alpha + 0.02, circle.targetAlpha)
          : circle.targetAlpha * remapClosestEdge;

      circle.x += circle.dx + vx;
      circle.y += circle.dy + vy;
    },
    [vx, vy],
  );

  const isCircleOutOfBounds = useCallback((circle: Circle): boolean => {
    return (
      circle.x < -circle.size ||
      circle.x > canvasSize.current.w + circle.size ||
      circle.y < -circle.size ||
      circle.y > canvasSize.current.h + circle.size
    );
  }, []);

  const initializeCircles = useCallback(() => {
    circles.current = Array.from({ length: quantity }, () => {
      const circle = createCircle();
      renderCircleParticle(circle);
      return circle;
    });
  }, [quantity, createCircle, renderCircleParticle]);

  const setupCanvas = useCallback(() => {
    if (!canvasContainerRef.current || !canvasRef.current || !context.current) return;

    canvasSize.current.w = canvasContainerRef.current.offsetWidth;
    canvasSize.current.h = canvasContainerRef.current.offsetHeight;

    canvasRef.current.width = canvasSize.current.w * dpr;
    canvasRef.current.height = canvasSize.current.h * dpr;
    canvasRef.current.style.width = `${canvasSize.current.w}px`;
    canvasRef.current.style.height = `${canvasSize.current.h}px`;

    context.current.scale(dpr, dpr);

    initializeCircles();
  }, [dpr, initializeCircles]);

  const handleResize = useCallback(() => {
    if (resizeTimeout.current) clearTimeout(resizeTimeout.current);
    resizeTimeout.current = setTimeout(setupCanvas, 200);
  }, [setupCanvas]);

  const animateParticles = useCallback(() => {
    clearContext();

    for (let index = 0; index < circles.current.length; index++) {
      const circle = circles.current[index];
      
      updateCirclePosition(circle);

      renderCircleParticle(circle);

      if (isCircleOutOfBounds(circle)) {
        circles.current[index] = createCircle();
      }
    }

    rafID.current = requestAnimationFrame(animateParticles);
  }, [
    createCircle,
    clearContext,
    isCircleOutOfBounds,
    updateCirclePosition,
    renderCircleParticle,
  ]);

  useEffect(() => {
    context.current = canvasRef.current?.getContext("2d") || null;

    setupCanvas();

    animateParticles();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (rafID.current) cancelAnimationFrame(rafID.current);
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current);
    };
  }, [setupCanvas, handleResize, animateParticles]);

  return (
    <div
      aria-hidden="true"
      ref={canvasContainerRef}
      className={cn("pointer-events-none", className)}
      {...props}
    >
      <canvas ref={canvasRef} className="size-full" />
    </div>
  );
}
