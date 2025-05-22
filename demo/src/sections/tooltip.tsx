import { Button } from "@littlehorse-enterprises/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@littlehorse-enterprises/ui/tooltip";
import { Section } from "../App";

export default function TooltipSection() {
  return (
    <Section> 
      <h2 className="text-2xl font-semibold mb-4">Tooltip</h2>
      <div className="space-y-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>This is a tooltip</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </Section>
  );
} 