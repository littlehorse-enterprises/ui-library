import type { Meta, StoryObj } from "@storybook/react"
import { Separator } from "."

const meta: Meta<typeof Separator> = {
  title: "Components/Separator",
  component: Separator,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Separator>

export const Default: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h4 className="text-sm font-medium">Horizontal</h4>
        <div className="mt-4 space-y-4">
          <div>
            <p className="text-sm text-muted-foreground">
              The separator component can be used to visually separate content.
            </p>
          </div>
          <Separator />
          <div>
            <p className="text-sm text-muted-foreground">
              It can be used in both horizontal and vertical orientations.
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex h-[200px] items-center space-x-4">
      <div>
        <h4 className="text-sm font-medium">Left</h4>
        <p className="text-sm text-muted-foreground">Content on the left</p>
      </div>
      <Separator orientation="vertical" />
      <div>
        <h4 className="text-sm font-medium">Right</h4>
        <p className="text-sm text-muted-foreground">Content on the right</p>
      </div>
    </div>
  ),
}

export const WithCustomStyling: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h4 className="text-sm font-medium">Custom Styled Separator</h4>
        <div className="mt-4 space-y-4">
          <div>
            <p className="text-sm text-muted-foreground">
              The separator can be styled with custom colors and thickness.
            </p>
          </div>
          <Separator className="bg-blue-200 h-[2px]" />
          <div>
            <p className="text-sm text-muted-foreground">
              It can also be used with different background colors.
            </p>
          </div>
          <Separator className="bg-blue-100 h-[4px]" />
        </div>
      </div>
    </div>
  ),
}

export const InList: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h4 className="text-sm font-medium">List with Separators</h4>
        <div className="mt-4 space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-medium">Item 1</p>
            <p className="text-sm text-muted-foreground">Description for item 1</p>
          </div>
          <Separator />
          <div className="space-y-2">
            <p className="text-sm font-medium">Item 2</p>
            <p className="text-sm text-muted-foreground">Description for item 2</p>
          </div>
          <Separator />
          <div className="space-y-2">
            <p className="text-sm font-medium">Item 3</p>
            <p className="text-sm text-muted-foreground">Description for item 3</p>
          </div>
        </div>
      </div>
    </div>
  ),
} 