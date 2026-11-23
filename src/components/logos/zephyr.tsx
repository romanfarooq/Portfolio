import type { SVGProps } from "react";

export const Zephyr = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <rect width="24" height="24" rx="5" fill="#452981" />
    <path d="M6 6h12l-8 9h8l-2 3H5l8-9H6z" fill="#fff" />
  </svg>
);
