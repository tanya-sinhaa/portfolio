import { heroData } from "@/data/hero";
import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";

export default function HeroContent() {
  return (
    <div className="max-w-xl py-24 lg:py-32">
      <p className="mb-5 text-xs uppercase tracking-[0.45em] text-[var(--color-accent)]">
        FULL STACK DEVELOPER · AI ENTHUSIAST
      </p>

      <h1 className="leading-[0.9]">
        <span className="block font-heading text-7xl lg:text-8xl xl:text-9xl">
          {heroData.firstName}
        </span>

        <span className="block font-heading text-7xl text-[var(--color-accent)] lg:text-8xl xl:text-9xl">
          {heroData.lastName}
        </span>
      </h1>

      <p className="mt-8 text-2xl font-medium text-neutral-800">
        {heroData.title}
      </p>

      <p className="mt-6 max-w-lg text-lg leading-8 text-[var(--color-muted)]">
        {heroData.description}
      </p>

      <div className="mt-10">
        <HeroButtons />
      </div>
      <HeroSocials />
    </div>
  );
}