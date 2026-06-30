import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium transition-all duration-300 ease-out";

  const variants = {
    primary:
      "bg-[var(--color-primary)] text-white hover:scale-105 hover:shadow-lg",

    secondary:
      "border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white",
  };

  return (
    <button className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </button>
  );
}