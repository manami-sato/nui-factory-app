import { SVGProps } from "react";

function SvgComponent(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      data-name="\u30EC\u30A4\u30E4\u30FC 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 45.29 15.09"
      {...props}
    >
      <g data-name="\u30EC\u30A4\u30E4\u30FC 1">
        <path
          d="M43.6 2.09A1.498 1.498 0 0041.36.31c-.07.04-6.47 4.28-19.51 4.28S2.43.32 2.35.27C1.67-.2.74-.03.27.65c-.47.68-.31 1.61.37 2.08.29.2 7.14 4.86 21.21 4.86 1.72 0 3.34-.07 4.84-.19.63 2.46 2.53 6.61 8.14 7.55.55.09 1.1.14 1.63.14 3.45 0 6.55-1.83 8.04-4.87 1.32-2.7.96-5.69-.9-8.13z"
          fill="#212121"
        />
        <path
          d="M42.7 9.35c-1.1 2.25-3.87 4.25-7.54 3.63-4.36-.73-5.93-3.8-6.48-5.78 7.14-.84 11.56-2.83 13.39-3.82 1.35 1.82 1.61 3.97.63 5.97z"
          fill="#ff97a4"
        />
      </g>
    </svg>
  );
}

export default SvgComponent;
