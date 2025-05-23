import type { Meta, StoryObj } from "@storybook/react"
import { AlertCircle, HelpCircle, Info, Settings } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "."
import { Button } from "../button"

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ["autodocs"],
  argTypes: {
    delayDuration: {
      control: 'number',
    },
    open: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This is a tooltip</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon">
            <Info className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Additional information</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
}

export const WithCustomStyling: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" className="bg-blue-50 text-blue-600 hover:bg-blue-100">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </TooltipTrigger>
        <TooltipContent className="bg-blue-50 text-blue-600 border-blue-200">
          <p>Customize your settings</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
}

export const WithLongContent: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">
            <HelpCircle className="h-4 w-4 mr-2" />
            Help
          </Button>
        </TooltipTrigger>
        <TooltipContent className="max-w-[200px]">
          <p>This is a longer tooltip that explains more detailed information about the feature or action.</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
}

export const WithMultipleTooltips: Story = {
  render: () => (
    <div className="flex gap-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">
              <Info className="h-4 w-4 mr-2" />
              Info
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Information tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">
              <AlertCircle className="h-4 w-4 mr-2" />
              Warning
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Warning tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  ),
}

export const WithDelay: Story = {
  render: () => (
    <TooltipProvider delayDuration={500}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Delayed Tooltip</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This tooltip appears after a 500ms delay</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
} 