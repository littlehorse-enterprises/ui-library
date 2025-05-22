import type { Meta, StoryObj } from "@storybook/react"
import { Progress } from "."

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Progress>

export const Default: Story = {
  render: () => <Progress value={33} />,
}

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Progress</span>
        <span className="text-sm text-muted-foreground">33%</span>
      </div>
      <Progress value={33} />
    </div>
  ),
}

export const WithSteps: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Step 1 of 3</span>
          <span className="text-sm text-muted-foreground">33%</span>
        </div>
        <Progress value={33} />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Step 2 of 3</span>
          <span className="text-sm text-muted-foreground">66%</span>
        </div>
        <Progress value={66} />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Step 3 of 3</span>
          <span className="text-sm text-muted-foreground">100%</span>
        </div>
        <Progress value={100} />
      </div>
    </div>
  ),
}

export const WithCustomSize: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <span className="text-sm font-medium">Small</span>
        <Progress value={33} className="h-1" />
      </div>
      <div className="space-y-2">
        <span className="text-sm font-medium">Default</span>
        <Progress value={33} className="h-2" />
      </div>
      <div className="space-y-2">
        <span className="text-sm font-medium">Large</span>
        <Progress value={33} className="h-4" />
      </div>
    </div>
  ),
}

export const WithCustomColors: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <span className="text-sm font-medium">Default</span>
        <Progress value={33} />
      </div>
      <div className="space-y-2">
        <span className="text-sm font-medium">Blue</span>
        <Progress
          value={33}
          className="bg-blue-500"
        />
      </div>
      <div className="space-y-2">
        <span className="text-sm font-medium">Green</span>
        <Progress
          value={33}
          className="bg-green-500"
        />
      </div>
      <div className="space-y-2">
        <span className="text-sm font-medium">Red</span>
        <Progress
          value={33}
          className="bg-red-500"
        />
      </div>
    </div>
  ),
}

export const WithAnimation: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Loading...</span>
          <span className="text-sm text-muted-foreground">33%</span>
        </div>
        <Progress value={33} className="animate-pulse" />
      </div>
    </div>
  ),
}

export const WithIndeterminate: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Loading...</span>
        </div>
        <Progress value={undefined} />
      </div>
    </div>
  ),
} 