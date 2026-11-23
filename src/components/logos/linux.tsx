import type { SVGProps } from "react";

export const Linux = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      d="M7 9C7 1 17 1 17 9l3 9-5 3H9l-5-3z"
      fill="#242424"
      stroke="#a3a3a3"
      strokeWidth=".6"
    />
    <ellipse cx="12" cy="15" rx="5" ry="6" fill="#f5f5f5" />
    <ellipse cx="10" cy="7" rx="1.5" ry="2" fill="#fff" />
    <ellipse cx="14" cy="7" rx="1.5" ry="2" fill="#fff" />
    <circle cx="10.4" cy="7.3" r=".6" />
    <circle cx="13.6" cy="7.3" r=".6" />
    <path
      d="m9 10 3-2 3 2-3 2zM3 19l5-2 2 5H3zm11 3 2-5 5 2v3z"
      fill="#f3bd38"
    />
  </svg>
);
