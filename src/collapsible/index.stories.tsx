import type { Meta, StoryObj } from "@storybook/react"
import { ChevronDown } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "."

const meta: Meta<typeof Collapsible> = {
  title: "Components/Collapsible",
  component: Collapsible,
  parameters: {
    layout: 'centered',
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Collapsible>

export const Default: Story = {
  render: () => (
    <Collapsible className="w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4">
        <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
        <CollapsibleTrigger className="rounded-md border p-2 hover:bg-muted">
          <ChevronDown className="h-4 w-4" />
          <span className="sr-only">Toggle</span>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 font-mono text-sm">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
}

export const WithCustomTrigger: Story = {
  render: () => (
    <Collapsible className="w-[350px] space-y-2">
      <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md border p-4 hover:bg-muted">
        <span className="text-sm font-semibold">Click to expand</span>
        <ChevronDown className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
      </CollapsibleTrigger>
      <CollapsibleContent className="rounded-md border p-4">
        <p className="text-sm text-muted-foreground">
          This is the expanded content. It can contain any type of content, including
          text, images, or other components.
        </p>
      </CollapsibleContent>
    </Collapsible>
  ),
}

export const WithNestedCollapsibles: Story = {
  render: () => (
    <Collapsible className="w-[350px] space-y-2">
      <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md border p-4 hover:bg-muted">
        <span className="text-sm font-semibold">Parent Section</span>
        <ChevronDown className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2">
        <Collapsible>
          <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md border p-4 hover:bg-muted">
            <span className="text-sm font-semibold">Child Section 1</span>
            <ChevronDown className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="rounded-md border p-4">
            <p className="text-sm text-muted-foreground">
              This is the content of child section 1.
            </p>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible>
          <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md border p-4 hover:bg-muted">
            <span className="text-sm font-semibold">Child Section 2</span>
            <ChevronDown className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="rounded-md border p-4">
            <p className="text-sm text-muted-foreground">
              This is the content of child section 2.
            </p>
          </CollapsibleContent>
        </Collapsible>
      </CollapsibleContent>
    </Collapsible>
  ),
}

export const WithCustomStyling: Story = {
  render: () => (
    <Collapsible className="w-[350px] space-y-2">
      <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-blue-500 p-4 text-white hover:bg-blue-600">
        <span className="text-sm font-semibold">Blue Theme</span>
        <ChevronDown className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
      </CollapsibleTrigger>
      <CollapsibleContent className="rounded-md border border-blue-200 bg-blue-50 p-4">
        <p className="text-sm text-blue-800">
          This collapsible has a custom blue theme applied to it.
        </p>
      </CollapsibleContent>
    </Collapsible>
  ),
}

export const WithForm: Story = {
  render: () => (
    <Collapsible className="w-[350px] space-y-2">
      <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md border p-4 hover:bg-muted">
        <span className="text-sm font-semibold">Additional Information</span>
        <ChevronDown className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-4 rounded-md border p-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Notes</label>
          <textarea
            className="w-full rounded-md border p-2 text-sm"
            rows={3}
            placeholder="Enter additional notes..."
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Tags</label>
          <input
            type="text"
            className="w-full rounded-md border p-2 text-sm"
            placeholder="Enter tags..."
          />
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
}

export const WithAnimation: Story = {
  render: () => (
    <Collapsible className="w-[350px] space-y-2">
      <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md border p-4 hover:bg-muted">
        <span className="text-sm font-semibold">Animated Content</span>
        <ChevronDown className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
      </CollapsibleTrigger>
      <CollapsibleContent className="overflow-hidden transition-all duration-300 ease-in-out data-[state=closed]:animate-collapse data-[state=open]:animate-expand">
        <div className="rounded-md border p-4">
          <p className="text-sm text-muted-foreground">
            This content has a custom animation applied to it.
          </p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
} 