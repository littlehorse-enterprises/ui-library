import { Checkbox } from "@littlehorse-enterprises/ui-library";
import { Section } from "../App";

export default function CheckboxSection() {
  return (
    <Section>
      <h2 className="text-2xl font-semibold mb-4">Checkboxes</h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label htmlFor="terms">Accept terms and conditions</label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="disabled" disabled />
          <label htmlFor="disabled">Disabled checkbox</label>
        </div>
      </div>
    </Section>
  );
} 