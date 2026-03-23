import type { Meta, StoryObj } from '@storybook/react-vite'
import { Popover, PopoverContent, PopoverTrigger } from '.'
import { Button } from '../button'

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    modal: {
      control: 'boolean',
    },
    open: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof Popover>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium">Dimensions</h4>
            <p className="text-muted-foreground text-sm">Set the dimensions for the layer.</p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <label
                htmlFor="width"
                className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Width
              </label>
              <input
                id="width"
                defaultValue="100%"
                className="border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring col-span-2 h-8 rounded-md border px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <label
                htmlFor="height"
                className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Height
              </label>
              <input
                id="height"
                defaultValue="25px"
                className="border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring col-span-2 h-8 rounded-md border px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const WithCustomStyling: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="bg-blue-50 text-blue-600 hover:bg-blue-100">
          Open Popover
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 border-blue-200 bg-blue-50">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium text-blue-800">Profile Settings</h4>
            <p className="text-sm text-blue-600">Manage your profile settings and preferences.</p>
          </div>
          <div className="grid gap-2">
            <Button className="bg-blue-600 text-white hover:bg-blue-700">Save Changes</Button>
            <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-100">
              Cancel
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const WithForm: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Contact Us</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <form className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium">Send us a message</h4>
            <p className="text-muted-foreground text-sm">We'll get back to you as soon as possible.</p>
          </div>
          <div className="grid gap-2">
            <input
              placeholder="Your email"
              className="border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring h-8 rounded-md border px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            />
            <textarea
              placeholder="Your message"
              className="border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring min-h-[80px] rounded-md border px-3 py-2 text-sm shadow-sm transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button>Send Message</Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  ),
}

export const WithList: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Notifications</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium">Recent Notifications</h4>
            <p className="text-muted-foreground text-sm">You have 3 new notifications.</p>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center gap-4 rounded-lg border p-3">
              <div className="grid gap-1">
                <p className="text-sm leading-none font-medium">New message from John</p>
                <p className="text-muted-foreground text-sm">Hey, how are you doing?</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-lg border p-3">
              <div className="grid gap-1">
                <p className="text-sm leading-none font-medium">Meeting reminder</p>
                <p className="text-muted-foreground text-sm">Team meeting in 30 minutes</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-lg border p-3">
              <div className="grid gap-1">
                <p className="text-sm leading-none font-medium">Task completed</p>
                <p className="text-muted-foreground text-sm">Project X has been completed</p>
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}
