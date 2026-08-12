export default function LogoMark({ size = 26, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" fill="#32389F" />
      <path
        fill="#fff"
        d="M7.2 18.4c4.8-1.4 8-5.4 9.1-10.6 3.1 3.8 8.2 5.8 13.5 5.2-3.9 1.9-6.5 4.8-7.6 8.4 2.6-.1 5.2.8 7.4 2.4-4 .3-7.8-.5-11-2.4L9.4 26.6 6.8 24l5.6-3.8c-1.8-.5-3.6-1.2-5.2-1.8Z"
      />
    </svg>
  );
}
