import type { Meta, StoryObj } from "@storybook/react"
import { Bold, Italic, Underline } from "lucide-react"
import { Toggle } from "."

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof Toggle>

export const Default: Story = {
  render: () => (
    <Toggle>Toggle</Toggle>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <Toggle>
      <Bold className="h-4 w-4" />
    </Toggle>
  ),
}

export const WithTextAndIcon: Story = {
  render: () => (
    <Toggle>
      <Bold className="h-4 w-4" />
      Bold
    </Toggle>
  ),
}

export const Outline: Story = {
  render: () => (
    <Toggle variant="outline">
      <Italic className="h-4 w-4" />
      Italic
    </Toggle>
  ),
}

export const WithCustomStyling: Story = {
  render: () => (
    <Toggle className="bg-blue-50 text-blue-600 hover:bg-blue-100 data-[state=on]:bg-blue-600 data-[state=on]:text-white">
      <Underline className="h-4 w-4" />
      Underline
    </Toggle>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Toggle size="sm">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle size="default">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle size="lg">
        <Bold className="h-4 w-4" />
      </Toggle>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Toggle disabled>
      <Bold className="h-4 w-4" />
      Disabled
    </Toggle>
  ),
} 