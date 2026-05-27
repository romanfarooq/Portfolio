import type { SVGProps } from "react";

export const Languages = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.75}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m5 8 6 6m-7 0 6-6 2-3M3 5h12M8 3v2m5 16 4-9 4 9m-1.5-3h-5"
    />
  </svg>
);
