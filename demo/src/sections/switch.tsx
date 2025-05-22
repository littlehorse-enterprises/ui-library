import { Switch } from "@littlehorse-enterprises/ui-library/switch";
import { Section } from "../App";

export default function SwitchSection() {
  return (
    <Section>
      <h2 className="text-2xl font-semibold mb-4">Switch</h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <label htmlFor="airplane-mode">Airplane Mode</label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="notifications" defaultChecked />
          <label htmlFor="notifications">Notifications</label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="disabled" disabled />
          <label htmlFor="disabled">Disabled</label>
        </div>
      </div>
    </Section>
  );
} 