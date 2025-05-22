import { Button } from "@littlehorse-enterprises/ui-library/button";
import { Section } from "../App";

export default function ButtonSection() {
  return (
    <Section>
      <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
      <div className="space-x-4">
        <Button>Default Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="ghost">Ghost Button</Button>
        <Button variant="link">Link Button</Button>
        <Button disabled>Disabled Button</Button>
      </div>
    </Section>
  );
}
