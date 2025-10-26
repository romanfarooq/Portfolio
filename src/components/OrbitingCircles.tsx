import { Children } from "react";

import { cn } from "@/lib/utils";

interface OrbitingCirclesProps extends React.HTMLAttributes<HTMLDivElement> {
  reverse?: boolean;
  path?: boolean;
  speed?: number;
  radius?: number;
  duration?: number;
  iconSize?: number;
}

export function OrbitingCircles({
  children,
  className,
  reverse,
  path = true,
  speed = 1,
  radius = 160,
  duration = 20,
  iconSize = 30,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed;
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-white/10 stroke-1"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {Children.map(children, (child, index) => {
        const angle = (360 / Children.count(children)) * index;
        return (
          <div
            style={
              {
                "--duration": calculatedDuration,
                "--radius": radius,
                "--angle": angle,
                "--icon-size": `${iconSize}px`
              } as React.CSSProperties
            }
            className={cn(
              "animate-orbit absolute flex size-[var(--icon-size)] transform-gpu items-center justify-center rounded-full",
              { "[animation-direction:reverse]": reverse },
              className
            )}
            {...props}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}
