import type { Meta, StoryObj } from "@storybook/react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "."

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: 'text',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="rounded-lg border p-4">
          <h3 className="text-lg font-medium">Account Settings</h3>
          <p className="text-sm text-muted-foreground">
            Manage your account settings and preferences.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="rounded-lg border p-4">
          <h3 className="text-lg font-medium">Password</h3>
          <p className="text-sm text-muted-foreground">
            Change your password here.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="music" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="music" className="flex items-center gap-2">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
            />
          </svg>
          Music
        </TabsTrigger>
        <TabsTrigger value="podcasts" className="flex items-center gap-2">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
            />
          </svg>
          Podcasts
        </TabsTrigger>
      </TabsList>
      <TabsContent value="music">
        <div className="rounded-lg border p-4">
          <h3 className="text-lg font-medium">Music Library</h3>
          <p className="text-sm text-muted-foreground">
            Browse and manage your music collection.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="podcasts">
        <div className="rounded-lg border p-4">
          <h3 className="text-lg font-medium">Podcasts</h3>
          <p className="text-sm text-muted-foreground">
            Listen to your favorite podcasts.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Tabs defaultValue="account" className="flex gap-4">
      <TabsList className="flex h-auto flex-col">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <div className="flex-1">
        <TabsContent value="account">
          <div className="rounded-lg border p-4">
            <h3 className="text-lg font-medium">Account Settings</h3>
            <p className="text-sm text-muted-foreground">
              Manage your account settings and preferences.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="password">
          <div className="rounded-lg border p-4">
            <h3 className="text-lg font-medium">Password</h3>
            <p className="text-sm text-muted-foreground">
              Change your password here.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="settings">
          <div className="rounded-lg border p-4">
            <h3 className="text-lg font-medium">Settings</h3>
            <p className="text-sm text-muted-foreground">
              Configure your application settings.
            </p>
          </div>
        </TabsContent>
      </div>
    </Tabs>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Tabs defaultValue="active" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="disabled" disabled>
          Disabled
        </TabsTrigger>
      </TabsList>
      <TabsContent value="active">
        <div className="rounded-lg border p-4">
          <h3 className="text-lg font-medium">Active Tab</h3>
          <p className="text-sm text-muted-foreground">
            This tab is active and can be interacted with.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="disabled">
        <div className="rounded-lg border p-4">
          <h3 className="text-lg font-medium">Disabled Tab</h3>
          <p className="text-sm text-muted-foreground">
            This tab is disabled and cannot be selected.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}

export const WithCustomStyling: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList className="bg-blue-100">
        <TabsTrigger
          value="tab1"
          className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
        >
          Tab 1
        </TabsTrigger>
        <TabsTrigger
          value="tab2"
          className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
        >
          Tab 2
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div className="rounded-lg border p-4">
          <h3 className="text-lg font-medium">Custom Styled Tab 1</h3>
          <p className="text-sm text-muted-foreground">
            This tab has custom styling applied.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div className="rounded-lg border p-4">
          <h3 className="text-lg font-medium">Custom Styled Tab 2</h3>
          <p className="text-sm text-muted-foreground">
            This tab also has custom styling applied.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
} 