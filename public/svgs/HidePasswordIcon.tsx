import * as React from "react";
import { SVGProps } from "react";
const HidePasswordIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={15}
    fill="none"
    {...props}
  >
    <path
      stroke="#777F88"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.635 7.742a2.635 2.635 0 1 1-5.269 0 2.635 2.635 0 0 1 5.27 0Z"
      clipRule="evenodd"
    />
    <path
      stroke="#777F88"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.999 13.827c3.173 0 6.075-2.282 7.71-6.085-1.634-3.803-4.537-6.085-7.71-6.085h.003c-3.173 0-6.076 2.282-7.71 6.085 1.634 3.803 4.537 6.085 7.71 6.085h-.003Z"
      clipRule="evenodd"
    />
  </svg>
);
export default HidePasswordIcon;
