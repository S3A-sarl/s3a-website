type Props = {
  className?: string;
  variant?: "dark" | "light";
};

export function Logo({ className, variant = "dark" }: Props) {
  const red = "#d9423c";
  const text = variant === "light" ? "#ffffff" : "#2b2d33";
  return (
    <svg
      className={className}
      viewBox="0 0 200 140"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Logo S3A"
    >
      <path
        d="M0 70 L20 14 L40 70 L60 14 L80 70 L100 14 L120 70 L140 14 L160 70 L180 14 L200 70 Z"
        fill={red}
      />
      <text
        x="100"
        y="126"
        textAnchor="middle"
        fontFamily="Manrope, ui-sans-serif, system-ui, sans-serif"
        fontWeight="900"
        fontSize="54"
        fill={text}
        letterSpacing="2"
      >
        S3A
      </text>
    </svg>
  );
}
