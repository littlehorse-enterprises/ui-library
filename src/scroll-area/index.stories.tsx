import type { Meta, StoryObj } from "@storybook/react"
import { ScrollArea } from "."

const meta: Meta<typeof ScrollArea> = {
  title: "Components/Scroll Area",
  component: ScrollArea,
  parameters: {
    layout: 'centered',
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ScrollArea>

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      <div className="space-y-4">
        <h4 className="text-sm font-medium leading-none">Tags</h4>
        <div className="text-sm">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="mb-2">
              <p>Item {i + 1}</p>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  ),
}

export const WithCustomStyling: Story = {
  render: () => (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border border-blue-200 bg-blue-50 p-4">
      <div className="space-y-4">
        <h4 className="text-sm font-medium leading-none text-blue-800">Blue Theme</h4>
        <div className="text-sm">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="mb-2 p-2 rounded bg-white">
              <p className="text-blue-800">Item {i + 1}</p>
              <p className="text-blue-600">
                This is a custom styled scroll area with a blue theme.
              </p>
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  ),
}

export const WithList: Story = {
  render: () => (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      <div className="space-y-4">
        <h4 className="text-sm font-medium leading-none">Notifications</h4>
        <div className="space-y-2">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4 rounded-lg border p-3">
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">
                  Notification {i + 1}
                </p>
                <p className="text-sm text-muted-foreground">
                  This is a notification message that might be quite long and need to be
                  truncated or wrapped.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  ),
}

export const WithCode: Story = {
  render: () => (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      <div className="space-y-4">
        <h4 className="text-sm font-medium leading-none">Code Example</h4>
        <pre className="text-sm">
          {`function example() {
  const items = [1, 2, 3, 4, 5];
  
  return items.map(item => {
    return (
      <div key={item}>
        Item {item}
      </div>
    );
  });
}`}
        </pre>
      </div>
    </ScrollArea>
  ),
} 