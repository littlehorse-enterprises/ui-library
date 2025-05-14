import { Alert, AlertDescription, AlertTitle } from "@littlehorse-enterprises/ui";
import { Section } from "../App";

export default function AlertSection() {
  return (
    <Section>
      <h2 className="text-2xl font-semibold mb-4">Alerts</h2>
      <div className="space-y-4">
        <Alert>
          <AlertTitle>Jedi Code</AlertTitle>
          <AlertDescription>There is no emotion, there is peace.</AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <AlertTitle>Sith Code</AlertTitle>
          <AlertDescription>Peace is a lie, there is only passion.</AlertDescription>
        </Alert>
      </div>
    </Section>
  );
} 