import { Toggle } from "@littlehorse-enterprises/ui-library/toggle";
import { Section } from "../App";

export default function ToggleSection() {
  return (
    <Section>
      <h2 className="text-2xl font-bold mb-4">Toggle</h2>
      <div className="space-x-4">
        <Toggle aria-label="Toggle bold">
          <span className="font-bold">B</span>
        </Toggle>
        <Toggle aria-label="Toggle italic">
          <span className="italic">I</span>
        </Toggle>
        <Toggle aria-label="Toggle underline">
          <span className="underline">U</span>
        </Toggle>
      </div>
    </Section>
  );
} 