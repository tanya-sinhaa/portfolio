interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-20 max-w-2xl">

      <p className="mb-4 text-xs uppercase tracking-[0.45em] text-[var(--color-accent)]">
        {eyebrow}
      </p>

      <h2 className="font-heading text-5xl leading-tight lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-[var(--color-muted)]">
          {description}
        </p>
      )}

    </div>
  );
}