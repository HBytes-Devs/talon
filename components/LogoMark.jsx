export default function LogoMark({ size = 26, className = "" }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/hawklens-mark.png?v=3"
      alt=""
      width={size}
      height={size}
      className={className}
      draggable={false}
    />
  );
}
