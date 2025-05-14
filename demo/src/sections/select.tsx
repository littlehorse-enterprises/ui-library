import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@littlehorse-enterprises/ui";
import { Section } from "../App";

export default function SelectSection() {
  return (
    <Section>
      <h2 className="text-2xl font-semibold mb-4">Select</h2>
      <div className="space-y-4">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="orange">Orange</SelectItem>
            <SelectItem value="grape">Grape</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </Section>
  );
} 