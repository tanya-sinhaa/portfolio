import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="py-24">
      <Container>
        <h1 className="text-7xl font-bold">
          Tanya Sinha
        </h1>

        <p className="mt-6 max-w-xl text-lg text-[var(--color-muted)]">
          Full Stack Developer • AI Enthusiast • Building thoughtful digital experiences.
        </p>
      </Container>
    </section>
  );
}