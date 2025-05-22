import type { Meta, StoryObj } from "@storybook/react"
import { Check, X } from "lucide-react"
import { Badge } from "."

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    children: "Badge",
  },
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge>
        <Check className="mr-1 h-3 w-3" />
        Success
      </Badge>
      <Badge variant="destructive">
        <X className="mr-1 h-3 w-3" />
        Error
      </Badge>
    </div>
  ),
}

export const Status: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge>Active</Badge>
      <Badge variant="secondary">Pending</Badge>
      <Badge variant="destructive">Failed</Badge>
      <Badge variant="outline">Draft</Badge>
    </div>
  ),
}

export const Count: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge>5</Badge>
      <Badge variant="secondary">12</Badge>
      <Badge variant="destructive">3</Badge>
      <Badge variant="outline">8</Badge>
    </div>
  ),
}

export const CustomStyling: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge className="bg-blue-500 hover:bg-blue-600">Custom Blue</Badge>
      <Badge className="bg-green-500 hover:bg-green-600">Custom Green</Badge>
      <Badge className="bg-purple-500 hover:bg-purple-600">Custom Purple</Badge>
    </div>
  ),
} 