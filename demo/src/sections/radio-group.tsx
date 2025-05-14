import { Label, RadioGroup, RadioGroupItem } from "@littlehorse-enterprises/ui";
import { Section } from "../App";

export default function RadioGroupSection() {
  return (
    <Section>
      <h2 className="text-2xl font-bold mb-4">Radio Group</h2>
      <RadioGroup defaultValue="comfortable">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="default" id="r1" />
          <Label htmlFor="r1">Default</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="comfortable" id="r2" />
          <Label htmlFor="r2">Comfortable</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="compact" id="r3" />
          <Label htmlFor="r3">Compact</Label>
        </div>
      </RadioGroup>
    </Section>
  );
} 