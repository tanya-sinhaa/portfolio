import HeroContent from "./content/HeroContent";
import HeroImage from "./image/HeroImage";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-90px)] flex items-center overflow-hidden">

      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-6 lg:grid-cols-[0.95fr_1.05fr] xl:gap-2">

        <HeroContent />

        <HeroImage />

      </div>

    </section>
  );
}