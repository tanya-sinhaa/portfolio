import HeroContent from "./content/HeroContent";
import HeroImage from "./image/HeroImage";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center">
      <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
}