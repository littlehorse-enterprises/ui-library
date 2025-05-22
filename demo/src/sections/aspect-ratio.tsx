import { AspectRatio } from "@littlehorse-enterprises/ui/aspect-ratio";
import { Section } from "../App";

export default function AspectRatioSection() {
  return (
    <Section>
      <h2 className="text-2xl font-bold mb-4">Aspect Ratio</h2>
      <div className="w-[450px]">
        <AspectRatio ratio={16 / 9}>
          <img
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div>
    </Section>
  );
} 