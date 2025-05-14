import { Button } from "@littlehorse-enterprises/ui";
import { Popover, PopoverContent, PopoverTrigger } from "@littlehorse-enterprises/ui";
import { Section } from "../App";

export default function PopoverSection() {
  return (
    <Section>
      <h2 className="text-2xl font-semibold mb-4">Popover</h2>
      <div className="space-y-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button>Open Popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Dimensions</h4>
              <p className="text-sm text-muted-foreground">
                Set the dimensions for the layer.
              </p>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </Section>
  );
}