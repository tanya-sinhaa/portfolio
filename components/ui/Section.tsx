import { ReactNode } from "react";
import Container from "../layout/Container";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-32 ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}