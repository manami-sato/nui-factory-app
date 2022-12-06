import { SVGProps } from "react";

function SvgComponent(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      data-name="\u30EC\u30A4\u30E4\u30FC 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 33.83 149.5"
      {...props}
    >
      <g data-name="\u30EC\u30A4\u30E4\u30FC 1">
        <path
          d="M28.12 140.66c-10.44-11.99-17.67-37.42-21.04-74.31C4.6 39.22 4.98 13.83 5.17 6.24l23.2-1.11c-.6 16.51-3.39 99.8-.25 135.53z"
          fill="#383838"
        />
        <path
          d="M33.47 2.59a2.58 2.58 0 00-.74-1.87c-.5-.49-1.18-.74-1.88-.72L2.62 1.36a2.499 2.499 0 00-2.37 2.4C.06 8.69-4.03 124.79 29.89 149.04c.43.31.94.46 1.45.46.45 0 .9-.12 1.29-.36.86-.52 1.32-1.49 1.18-2.48C29.24 114 33.42 3.7 33.47 2.59zm-5.35 138.07c-10.44-11.99-17.67-37.42-21.04-74.31C4.6 39.22 4.98 13.83 5.17 6.24l23.2-1.11c-.6 16.51-3.39 99.8-.25 135.53z"
          fill="#212121"
        />
      </g>
    </svg>
  );
}

export default SvgComponent;
