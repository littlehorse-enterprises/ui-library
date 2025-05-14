import { Tabs, TabsContent, TabsList, TabsTrigger } from "@littlehorse-enterprises/ui";
import { Section } from "../App";

export default function TabsSection() {
  return (
    <Section>
      <h2 className="text-2xl font-semibold mb-4">Tabs</h2>
      <div className="space-y-4">
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <div className="p-4">
              <h3 className="text-lg font-medium">Account Settings</h3>
              <p className="text-sm text-muted-foreground">
                Manage your account settings and preferences.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="password">
            <div className="p-4">
              <h3 className="text-lg font-medium">Password Settings</h3>
              <p className="text-sm text-muted-foreground">
                Change your password and security settings.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="settings">
            <div className="p-4">
              <h3 className="text-lg font-medium">General Settings</h3>
              <p className="text-sm text-muted-foreground">
                Configure your general application settings.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Section>
  );
} 