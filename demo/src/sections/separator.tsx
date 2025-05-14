import { Separator } from "@littlehorse-enterprises/ui";
import { Section } from "../App";

export default function SeparatorSection() {
  return (
    <Section>
      <h2 className="text-2xl font-semibold mb-4">Separator</h2>
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium">Horizontal Separator</h4>
          <div className="my-4">
            <Separator />
          </div>
        </div>
        <div>
          <h4 className="text-sm font-medium">Vertical Separator</h4>
          <div className="flex h-5 items-center space-x-4">
            <div>Left</div>
            <Separator orientation="vertical" />
            <div>Right</div>
          </div>
        </div>
      </div>
    </Section>
  );
} 