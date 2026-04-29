type Props = {
  className?: string;
};

export function Logo({ className }: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo-s3a.svg"
      alt="Logo S3A"
      className={className}
    />
  );
}
