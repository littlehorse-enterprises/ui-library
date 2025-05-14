import { Progress } from "@littlehorse-enterprises/ui";
import { Section } from "../App";

export default function ProgressSection() {
  return (
    <Section>
      <h2 className="text-2xl font-semibold mb-4">Progress</h2>
      <div className="space-y-4">
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Default Progress</h4>
          <Progress value={33} />
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Half Progress</h4>
          <Progress value={50} />
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Full Progress</h4>
          <Progress value={100} />
        </div>
      </div>
    </Section>
  );
} 