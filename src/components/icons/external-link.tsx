import type { SVGProps } from "react";

export const ExternalLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
);
