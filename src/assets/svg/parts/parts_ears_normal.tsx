import { SVGProps } from "react";

function SvgComponent(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      data-name="\u30EC\u30A4\u30E4\u30FC 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 43.2 62.39"
      {...props}
    >
      <g data-name="\u30EC\u30A4\u30E4\u30FC 1">
        <path
          d="M38.2 15.97V56.8c-7.74-1.33-29.59-6.85-32.75-26.86-1.79-11.3 1.83-20.65 9.2-23.82 1.68-.73 3.45-1.08 5.27-1.08 6.04 0 12.64 3.87 18.28 10.93z"
          fill="#ffe2cc"
        />
        <path
          d="M42.68 13.58c-6.97-9.07-18.52-17-30-12.06C3.13 5.63-1.64 17.09.51 30.72c1.85 11.73 9.42 20.9 21.87 26.52 9.2 4.14 17.76 4.89 18.12 4.92l2.7.23V14.26l-.52-.68zM38.2 56.8c-7.74-1.33-29.59-6.85-32.75-26.86-1.79-11.3 1.83-20.65 9.2-23.82 1.68-.73 3.45-1.08 5.27-1.08 6.04 0 12.64 3.87 18.28 10.93V56.8z"
          fill="#212121"
        />
      </g>
    </svg>
  );
}

export default SvgComponent;
