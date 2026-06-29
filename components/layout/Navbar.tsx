import Container from "./Container";

const navLinks = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Achievements",
  "Contact",
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--color-background)]/80 backdrop-blur-md">
      <Container>
        <nav className="flex h-20 items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-1">
            <span className="text-4xl font-serif font-bold">TS.</span>
            <span className="text-[var(--color-accent)]">✦</span>
          </div>

          {/* Navigation */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <li
                key={link}
                className="cursor-pointer text-sm transition-all duration-300 hover:text-[var(--color-primary)]"
              >
                {link}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button className="rounded-full border border-[var(--color-accent)] px-6 py-3 text-sm transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-white">
            Let's Connect →
          </button>

        </nav>
      </Container>
    </header>
  );
}