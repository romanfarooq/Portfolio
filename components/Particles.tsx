import { useRef, useEffect, useCallback } from "react";
import { cn, hexToRgb, remapValue } from "@/lib/utils";

interface Circle {
  x: number;
  y: number;
  translateX: number;
  translateY: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  dx: number;
  dy: number;
  magnetism: number;
}

interface ParticlesProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  quantity?: number;
  size?: number;
  color?: string;
  vx?: number;
  vy?: number;
}

export function Particles({
  className = "",
  quantity = 100,
  size = 0.4,
  color = "#ffffff",
  vx = 0,
  vy = 0,
  ...props
}: ParticlesProps) {
  const rgb = hexToRgb(color);
  const rafID = useRef<number>(null);
  const circles = useRef<Circle[]>([]);
  const canvasSize = useRef({ w: 0, h: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const resizeTimeout = useRef<NodeJS.Timeout>(null);
  const context = useRef<CanvasRenderingContext2D>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

  const clearContext = useCallback(() => {
    context.current?.clearRect(
      0,
      0,
      canvasSize.current.w,
      canvasSize.current.h,
    );
  }, []);

  const circleParams = useCallback(() => {
    const x = Math.floor(Math.random() * canvasSize.current.w);
    const y = Math.floor(Math.random() * canvasSize.current.h);
    const translateX = 0;
    const translateY = 0;
    const pSize = Math.floor(Math.random() * 2) + size;
    const alpha = 0;
    const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
    const dx = (Math.random() - 0.5) * 0.1;
    const dy = (Math.random() - 0.5) * 0.1;
    const magnetism = 0.1 + Math.random() * 4;
    return {
      x,
      y,
      dx,
      dy,
      alpha,
      magnetism,
      translateX,
      translateY,
      size: pSize,
      targetAlpha,
    };
  }, [size]);

  const drawCircle = useCallback(
    (circle: Circle, update = false) => {
      if (context.current) {
        const { x, y, translateX, translateY, size, alpha } = circle;
        context.current.translate(translateX, translateY);
        context.current.beginPath();
        context.current.arc(x, y, size, 0, 2 * Math.PI);
        context.current.fillStyle = `rgba(${rgb.join(", ")}, ${alpha})`;
        context.current.fill();
        context.current.setTransform(dpr, 0, 0, dpr, 0, 0);

        if (!update) circles.current.push(circle);
      }
    },
    [dpr, rgb],
  );

  const drawParticles = useCallback(() => {
    clearContext();
    for (let i = 0; i < quantity; i++) {
      const circle = circleParams();
      drawCircle(circle);
    }
  }, [quantity, clearContext, drawCircle, circleParams]);

  const resizeCanvas = useCallback(() => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      canvasSize.current.w = canvasContainerRef.current.offsetWidth;
      canvasSize.current.h = canvasContainerRef.current.offsetHeight;

      canvasRef.current.width = canvasSize.current.w * dpr;
      canvasRef.current.height = canvasSize.current.h * dpr;
      canvasRef.current.style.width = `${canvasSize.current.w}px`;
      canvasRef.current.style.height = `${canvasSize.current.h}px`;
      context.current.scale(dpr, dpr);

      circles.current = [];
      for (let i = 0; i < quantity; i++) {
        const circle = circleParams();
        drawCircle(circle);
      }
    }
  }, [dpr, quantity, context, canvasRef, drawCircle, circleParams]);

  const animate = useCallback(() => {
    clearContext();
    circles.current.forEach((circle, i) => {
      const edge = [
        circle.x + circle.translateX - circle.size,
        canvasSize.current.w - circle.x - circle.translateX - circle.size,
        circle.y + circle.translateY - circle.size,
        canvasSize.current.h - circle.y - circle.translateY - circle.size,
      ];
      const closestEdge = edge.reduce((a, b) => Math.min(a, b));
      const remapClosestEdge = remapValue(closestEdge, 0, 20, 0, 1);

      circle.alpha =
        remapClosestEdge > 1
          ? Math.min(circle.alpha + 0.02, circle.targetAlpha)
          : circle.targetAlpha * remapClosestEdge;

      circle.x += circle.dx + vx;
      circle.y += circle.dy + vy;

      drawCircle(circle, true);

      if (
        circle.x < -circle.size ||
        circle.x > canvasSize.current.w + circle.size ||
        circle.y < -circle.size ||
        circle.y > canvasSize.current.h + circle.size
      ) {
        circles.current.splice(i, 1);
        const newCircle = circleParams();
        drawCircle(newCircle);
      }
    });
    rafID.current = window.requestAnimationFrame(animate);
  }, [clearContext, drawCircle, circleParams, vx, vy]);

  const initCanvas = useCallback(() => {
    resizeCanvas();
    drawParticles();
  }, [resizeCanvas, drawParticles]);

  useEffect(() => {
    initCanvas();
    animate();

    if (canvasRef.current) {
      context.current = canvasRef.current?.getContext("2d");
    }

    const handleResize = () => {
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current);
      resizeTimeout.current = setTimeout(initCanvas, 200);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (rafID.current) window.cancelAnimationFrame(rafID.current);
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current);
    };
  }, [initCanvas, animate]);

  return (
    <div
      ref={canvasContainerRef}
      aria-hidden="true"
      className={cn("pointer-events-none", className)}
      {...props}
    >
      <canvas ref={canvasRef} className="size-full" />
    </div>
  );
}
