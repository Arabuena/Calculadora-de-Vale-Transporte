import * as React from "react";
const SvgFavicon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={512}
    height={512}
    fill="none"
    {...props}
  >
    <rect width={512} height={512} fill="#2c3e50" rx={100} />
    <rect width={320} height={320} x={96} y={96} fill="#fff" rx={20} />
    <rect width={280} height={80} x={116} y={126} fill="#e3f2fd" rx={8} />
    <path
      fill="#1976d2"
      d="M156 236h200q20 0 20 20v20q0 20-20 20H156q-20 0-20-20v-20q0-20 20-20"
    />
    <circle cx={176} cy={276} r={15} fill="#333" />
    <circle cx={336} cy={276} r={15} fill="#333" />
    <rect width={80} height={80} x={116} y={316} fill="#f8f9fa" rx={8} />
    <rect width={80} height={80} x={216} y={316} fill="#f8f9fa" rx={8} />
    <rect width={80} height={80} x={316} y={316} fill="#f8f9fa" rx={8} />
  </svg>
);
export default SvgFavicon;
