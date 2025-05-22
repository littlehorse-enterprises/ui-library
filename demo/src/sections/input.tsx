import { Input } from "@littlehorse-enterprises/ui-library/input";
import { Section } from "../App";

export default function InputSection() {
  return (
    <Section>
      <h2 className="text-2xl font-semibold mb-4">Input</h2>
      <div className="space-y-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Input type="text" placeholder="Default input" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Input type="email" placeholder="Email input" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Input type="password" placeholder="Password input" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Input disabled placeholder="Disabled input" />
        </div>
      </div>
    </Section>
  );
} 