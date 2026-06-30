import Button from "@/components/ui/Button";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <Button>
        Explore My Work
      </Button>

      <Button variant="secondary">
        Download Resume
      </Button>
    </div>
  );
}