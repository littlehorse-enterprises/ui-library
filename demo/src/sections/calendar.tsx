import { Calendar } from "@littlehorse-enterprises/ui";
import { Section } from "../App";

export default function CalendarSection() {
  return (
    <Section>
      <h2 className="text-2xl font-semibold mb-4">Calendar</h2>
      <div className="space-y-4">
        <div className="flex justify-center">
          <Calendar
            mode="single"
            selected={new Date()}
            className="rounded-md border"
          />
        </div>
      </div>
    </Section>
  );
} 