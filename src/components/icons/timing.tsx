import type { SVGProps } from "react";

export const Timing = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    aria-hidden="true"
    {...props}
  >
    <circle cx="12" cy="13" r="8" />
    <path d="M12 9v4l3 2M9 2h6m-3 0v3m6 2 2-2" />
  </svg>
);
