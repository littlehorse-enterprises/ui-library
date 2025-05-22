import { Badge } from "@littlehorse-enterprises/ui-library/badge";
import { Section } from "../App";

export default function BadgeSection() {
  return (
    <Section>
      <h2 className="text-2xl font-semibold mb-4">Badges</h2>
      <div className="space-x-4">
        <Badge>Default Badge</Badge>
        <Badge variant="secondary">Secondary Badge</Badge>
        <Badge variant="outline">Outline Badge</Badge>
        <Badge variant="destructive">Destructive Badge</Badge>
      </div>
    </Section>
  );
}
