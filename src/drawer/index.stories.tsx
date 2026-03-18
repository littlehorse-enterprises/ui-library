import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '.'
import { Button } from '../button'

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Drawer>

export const Default: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Drawer Title</DrawerTitle>
          <DrawerDescription>This is a drawer description. You can add any content here.</DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p>Drawer content goes here.</p>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
          <Button>Save changes</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const WithForm: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Edit Profile</DrawerTitle>
          <DrawerDescription>Make changes to your profile here. Click save when you're done.</DrawerDescription>
        </DrawerHeader>
        <div className="space-y-4 p-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Name</label>
            <input type="text" className="w-full rounded-md border p-2" placeholder="Enter your name" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <input type="email" className="w-full rounded-md border p-2" placeholder="Enter your email" />
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
          <Button>Save changes</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const WithCustomStyling: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Custom Styled Drawer</Button>
      </DrawerTrigger>
      <DrawerContent className="border-blue-200 bg-blue-50">
        <DrawerHeader>
          <DrawerTitle className="text-blue-800">Custom Styled Title</DrawerTitle>
          <DrawerDescription className="text-blue-600">This drawer has custom styling applied to it.</DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p className="text-blue-800">Custom styled content goes here.</p>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline" className="border-blue-200 text-blue-800 hover:bg-blue-100">
              Cancel
            </Button>
          </DrawerClose>
          <Button className="bg-blue-600 hover:bg-blue-700">Save changes</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const WithLongContent: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">View Details</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Detailed Information</DrawerTitle>
          <DrawerDescription>Scroll through the content below to view all details.</DrawerDescription>
        </DrawerHeader>
        <div className="max-h-[400px] space-y-4 overflow-y-auto p-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="rounded-lg border p-4">
              <h3 className="font-semibold">Section {i + 1}</h3>
              <p className="text-muted-foreground text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}
