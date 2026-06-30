import HeroContent from "./content/HeroContent";
import HeroImage from "./image/HeroImage";
import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-90px)] overflow-hidden">
      <Container>
        <div className="grid min-h-[calc(100vh-90px)] items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <HeroContent />
          <HeroImage />
        </div>
      </Container>
    </section>
  );
}