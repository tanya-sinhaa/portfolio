interface SectionTagProps {
  children: React.ReactNode;
}

export default function SectionTag({
  children,
}: SectionTagProps) {
  return (
    <span
      className="
        rounded-full
        bg-[var(--color-surface)]
        px-4
        py-2
        text-sm
        font-medium
      "
    >
      {children}
    </span>
  );
}