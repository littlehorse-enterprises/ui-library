import type { Meta, StoryObj } from "@storybook/react"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "."
import { Button } from "../button"

const meta: Meta<typeof Sheet> = {
  title: "Components/Sheet",
  component: Sheet,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Sheet>

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>
            This is a sheet description. You can add any content here.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <p>Sheet content goes here.</p>
        </div>
      </SheetContent>
    </Sheet>
  ),
}

export const WithForm: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4 space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Name</label>
            <input
              type="text"
              className="w-full rounded-md border p-2"
              placeholder="Enter your name"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full rounded-md border p-2"
              placeholder="Enter your email"
            />
          </div>
          <Button className="w-full">Save changes</Button>
        </div>
      </SheetContent>
    </Sheet>
  ),
}

export const WithCustomStyling: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="bg-blue-50 text-blue-600 hover:bg-blue-100">
          Custom Styled Sheet
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-blue-50 border-blue-200">
        <SheetHeader>
          <SheetTitle className="text-blue-800">Custom Styled Title</SheetTitle>
          <SheetDescription className="text-blue-600">
            This sheet has custom styling applied to it.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <p className="text-blue-800">Custom styled content goes here.</p>
          <Button className="mt-4 bg-blue-600 text-white hover:bg-blue-700">
            Save Changes
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  ),
}

export const WithList: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">View Notifications</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
          <SheetDescription>
            You have 3 new notifications.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4 space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4 rounded-lg border p-3">
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">
                  Notification {i + 1}
                </p>
                <p className="text-sm text-muted-foreground">
                  This is a notification message that might be quite long.
                </p>
              </div>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  ),
} 