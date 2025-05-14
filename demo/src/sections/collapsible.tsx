import {
    Button, Collapsible,
    CollapsibleContent,
    CollapsibleTrigger
} from "@littlehorse-enterprises/ui";
import { Section } from "../App";

export default function CollapsibleSection() {
  return (
    <Section>
      <h2 className="text-2xl font-bold mb-4">Collapsible</h2>
      <Collapsible className="w-[350px] space-y-2">
        <div className="flex items-center justify-between space-x-4">
          <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              Toggle
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @radix-ui/primitives
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            @radix-ui/colors
          </div>
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            @stitches/react
          </div>
        </CollapsibleContent>
      </Collapsible>
    </Section>
  );
} 