import type { Meta, StoryObj } from "@storybook/react"
import { Slider } from "."

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: { type: 'array' },
    },
    min: {
      control: 'number',
    },
    max: {
      control: 'number',
    },
    step: {
      control: 'number',
    },
    disabled: {
      control: 'boolean',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = {
  render: () => <Slider defaultValue={[50]} max={100} step={1} />,
}

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">Volume</label>
        <span className="text-sm text-muted-foreground">50%</span>
      </div>
      <Slider defaultValue={[50]} max={100} step={1} />
    </div>
  ),
}

export const WithRange: Story = {
  render: () => (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">Price Range</label>
        <span className="text-sm text-muted-foreground">$25 - $75</span>
      </div>
      <Slider defaultValue={[25, 75]} max={100} step={1} />
    </div>
  ),
}

export const WithSteps: Story = {
  render: () => (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">Rating</label>
        <span className="text-sm text-muted-foreground">3/5</span>
      </div>
      <Slider defaultValue={[3]} max={5} step={1} />
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">Disabled Slider</label>
        <span className="text-sm text-muted-foreground">50%</span>
      </div>
      <Slider defaultValue={[50]} max={100} step={1} disabled />
    </div>
  ),
}

export const WithCustomStyling: Story = {
  render: () => (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">Custom Styled</label>
        <span className="text-sm text-muted-foreground">50%</span>
      </div>
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4 [&_[role=track]]:h-2"
      />
    </div>
  ),
}

export const WithCustomColors: Story = {
  render: () => (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">Blue Slider</label>
        <span className="text-sm text-muted-foreground">50%</span>
      </div>
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className="[&_[role=track]]:bg-blue-100 [&_[role=range]]:bg-blue-500 [&_[role=slider]]:border-blue-500"
      />
    </div>
  ),
}

export const WithForm: Story = {
  render: () => (
    <form className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Volume</label>
        <Slider defaultValue={[50]} max={100} step={1} />
        <p className="text-sm text-muted-foreground">
          Adjust the volume level.
        </p>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Brightness</label>
        <Slider defaultValue={[75]} max={100} step={1} />
        <p className="text-sm text-muted-foreground">
          Adjust the screen brightness.
        </p>
      </div>
    </form>
  ),
} 