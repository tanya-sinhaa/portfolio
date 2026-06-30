import Button from "@/components/ui/Button";
import { heroData } from "@/data/hero";

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button>
        {heroData.primaryButton.text}
      </Button>

      <Button variant="secondary">
        {heroData.secondaryButton.text}
      </Button>
    </div>
  );
}