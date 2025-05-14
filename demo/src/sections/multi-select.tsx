import { MultiSelect } from "@littlehorse-enterprises/ui";
import { useState } from "react";
import { Section } from "../App";

const planets = [
  {
    value: "tatooine",
    label: "Tatooine",
  },
  {
    value: "alderaan",
    label: "Alderaan",
  },
  {
    value: "coruscant",
    label: "Coruscant",
  },
  {
    value: "naboo",
    label: "Naboo",
  },
  {
    value: "kashyyyk",
    label: "Kashyyyk",
  },
  {
    value: "mustafar",
    label: "Mustafar",
  },
];

export default function MultiSelectSection() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <Section>
      <h2 className="text-2xl font-semibold mb-4">Multi Select</h2>
      <div className="space-y-4">
        <MultiSelect
          options={planets}
          value={value}
          onValueChange={setValue}
          placeholder="Select planets..."
        />
        <p className="text-sm text-muted-foreground">
          Selected: {value.length > 0 ? value.join(", ") : "None"}
        </p>
      </div>
    </Section>
  );
} 