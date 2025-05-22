import { Button } from "@littlehorse-enterprises/ui/button";
import { toast } from "@littlehorse-enterprises/ui/sonner";
import { Section } from "../App";

export default function SonnerSection() {
  return (
    <Section>
      <h2 className="text-2xl font-bold mb-4">Sonner</h2>
      <div className="space-x-4">
        <Button
          onClick={() => {
            toast("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
            });
          }}
        >
          Show Toast
        </Button>
        <Button
          onClick={() => {
            toast.success("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
            });
          }}
        >
          Show Success
        </Button>
        <Button
          onClick={() => {
            toast.warning("Warning", {
              description: "This is a warning message",
            });
          }}
        >
          Show Warning
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            toast.error("Error", {
              description: "Something went wrong",
            });
          }}
        >
          Show Error
        </Button>
      </div>
    </Section>
  );
} 