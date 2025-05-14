import { Combobox } from "@littlehorse-enterprises/ui";
import { useState } from "react";
import { Section } from "../App";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export default function ComboboxSection() {
  const [value, setValue] = useState("");

  return (
    <Section>
      <h2 className="text-2xl font-semibold mb-4">Combobox</h2>
      <div className="space-y-4">
        <Combobox
          options={frameworks}
          value={value}
          onValueChange={setValue}
          placeholder="Select a framework..."
        />
        <p className="text-sm text-muted-foreground">
          Selected: {value || "None"}
        </p>
      </div>
    </Section>
  );
} 