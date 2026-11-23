import type { SVGProps } from "react";

export const QEMU = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <circle cx="11" cy="11" r="8" stroke="#f28c28" strokeWidth="3" />
    <path
      d="m13 13 8 8"
      stroke="#f28c28"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);
