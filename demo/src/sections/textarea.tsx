import { Textarea } from "@littlehorse-enterprises/ui/textarea";
import { Section } from "../App";

export default function TextareaSection() {
  return (
    <Section>
      <h2 className="text-2xl font-semibold mb-4">Textarea</h2>
      <div className="space-y-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Textarea placeholder="Type your message here." />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Textarea placeholder="Disabled textarea" disabled />
        </div>
      </div>
    </Section>
  );
} 