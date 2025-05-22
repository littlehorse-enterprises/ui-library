import { ToggleGroup, ToggleGroupItem } from "@littlehorse-enterprises/ui/toggle-group";
import { Section } from "../App";

export default function ToggleGroupSection() {
  return (
    <Section>
      <h2 className="text-2xl font-bold mb-4">Toggle Group</h2>
      <ToggleGroup type="single">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <span className="font-bold">B</span>
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <span className="italic">I</span>
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <span className="underline">U</span>
        </ToggleGroupItem>
      </ToggleGroup>
    </Section>
  );
} 