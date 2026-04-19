type Props = {
  className?: string;
  variant?: "dark" | "light";
};

export function Logo({ className, variant = "dark" }: Props) {
  const color = variant === "light" ? "#ffffff" : "#d9423c";
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Logo S3A"
    >
      <circle cx="60" cy="60" r="56" fill="none" stroke={color} strokeWidth="3" />
      <path
        d="M32 48 L60 22 L88 48"
        fill="none"
        stroke={color}
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <text
        x="60"
        y="86"
        textAnchor="middle"
        fontFamily="Manrope, sans-serif"
        fontSize="34"
        fontWeight="800"
        fill={color}
        letterSpacing="1"
      >
        S3A
      </text>
    </svg>
  );
}
