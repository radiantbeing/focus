const LogoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    width="1em"
    height="1em"
    {...props}
  >
    <circle
      cx="2"
      cy="2"
      r="2"
      transform="matrix(-1 0 0 1 14 10)"
      fill="currentColor"
    />
    <path
      d="M3.979 8.978v-2a3 3 0 0 1 3-3h2m0 16h-2a3 3 0 0 1-3-3v-2m16.043.044v2a3 3 0 0 1-3 3h-2m-.043-16.044h2a3 3 0 0 1 3 3v2"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

export { LogoIcon };
