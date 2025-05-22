import { HoverCard, HoverCardContent, HoverCardTrigger } from "@littlehorse-enterprises/ui/hover-card";
import { Section } from "../App";

export default function HoverCardSection() {
  return (
    <Section>
      <h2 className="text-2xl font-semibold mb-4">Hover Card</h2>
      <div className="space-y-4">
        <HoverCard>
          <HoverCardTrigger className="text-sm font-medium underline underline-offset-4">
            Hover me
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">@username</h4>
              <p className="text-sm">
                This is a hover card that appears when you hover over the trigger.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </Section>
  );
} 