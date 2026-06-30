import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium transition-all duration-300 ease-out";

  const styles = {
    primary:
      "bg-[var(--color-primary)] text-white shadow-lg shadow-blue-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl",

    secondary:
      "border border-neutral-300 bg-white/60 backdrop-blur-md hover:bg-white hover:-translate-y-1",
  };

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
      <span>→</span>
    </button>
  );
}