function SvgComponent(props: any) {
  return (
    <svg
      width={20}
      height={18}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.837 0A.835.835 0 000 .837c0 .463.373.836.837.836h1.815l2.102 11.032a.84.84 0 00.823.68h11.432a.834.834 0 00.837-.837.834.834 0 00-.837-.837H6.27l-.317-1.673h11.05c.498 0 .937-.33 1.073-.812l1.882-6.692a1.117 1.117 0 00-1.073-1.419H4.252L4.17.68A.84.84 0 003.346 0H.836zm5.298 17.846a1.674 1.674 0 10-.001-3.347 1.674 1.674 0 000 3.347zm11.71-1.673a1.673 1.673 0 10-3.346 0 1.673 1.673 0 003.347 0z"
        fill="#2B2B2B"
      />
    </svg>
  );
}

export default SvgComponent;