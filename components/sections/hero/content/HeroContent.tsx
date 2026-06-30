import Container from "@/components/layout/Container";
import { heroData } from "@/data/hero";
import Button from "@/components/ui/Button";
import HeroButtons from "./HeroButtons";

export default function HeroContent() {
  return (
    <Container>
      <div className="max-w-2xl py-28">

        <p className="mb-4 uppercase tracking-[0.35em] text-sm text-[var(--color-accent)]">
          {heroData.greeting}
        </p>

        <h1 className="leading-none">
          <span className="block text-8xl font-heading">
            {heroData.firstName}
          </span>

          <span className="block text-8xl font-heading text-[var(--color-accent)]">
            {heroData.lastName}
          </span>
        </h1>

        <p className="mt-6 text-xl">
          {heroData.title}
        </p>

        <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--color-muted)]">
          {heroData.description}
        </p>

      </div>
      <HeroButtons />
    </Container>
  );
}