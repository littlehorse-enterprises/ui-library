import { Slider } from "@littlehorse-enterprises/ui/slider";
import { Section } from "../App";

export default function SliderSection() {
  return (
    <Section>
      <h2 className="text-2xl font-semibold mb-4">Slider</h2>
      <div className="space-y-4">
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Default Slider</h4>
          <Slider defaultValue={[50]} max={100} step={1} />
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Range Slider</h4>
          <Slider defaultValue={[25, 75]} max={100} step={1} />
        </div>
      </div>
    </Section>
  );
} 