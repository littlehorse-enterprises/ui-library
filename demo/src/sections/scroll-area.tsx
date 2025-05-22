import { ScrollArea } from "@littlehorse-enterprises/ui-library/scroll-area";
import { Section } from "../App";

export default function ScrollAreaSection() {
  return (
    <Section>
      <h2 className="text-2xl font-bold mb-4">Scroll Area</h2>
      <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
        <div className="space-y-4">
          <h4 className="text-sm font-medium leading-none">Tags</h4>
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="text-sm">
              Tag {i + 1}
            </div>
          ))}
        </div>
      </ScrollArea>
    </Section>
  );
} 