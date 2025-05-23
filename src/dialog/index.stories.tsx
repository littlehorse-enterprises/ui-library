import type { Meta, StoryObj } from "@storybook/react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "."
import { Button } from "../button"

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Dialog>

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right">
              Name
            </label>
            <input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="username" className="text-right">
              Username
            </label>
            <input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const Alert: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Delete Account</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const WithForm: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Subscribe</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Subscribe to Newsletter</DialogTitle>
          <DialogDescription>
            Enter your email below to receive our weekly newsletter.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="m@example.com"
              className="w-full"
            />
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms" className="text-sm">
              I agree to receive marketing emails
            </label>
          </div>
        </form>
        <DialogFooter>
          <Button type="submit">Subscribe</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const WithImage: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>View Image</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Image Preview</DialogTitle>
          <DialogDescription>
            View the full size image here.
          </DialogDescription>
        </DialogHeader>
        <div className="relative aspect-video">
          <img
            src="https://images.unsplash.com/photo-1522252234503-e356532cafd5"
            alt="Preview"
            className="object-cover rounded-md"
          />
        </div>
        <DialogFooter>
          <Button variant="outline">Close</Button>
          <Button>Download</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const WithCustomWidth: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Wide Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Wide Dialog</DialogTitle>
          <DialogDescription>
            This dialog has a custom width to accommodate more content.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="font-medium">Column 1</h4>
            <p>Some content for the first column.</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">Column 2</h4>
            <p>Some content for the second column.</p>
          </div>
        </div>
        <DialogFooter>
          <Button>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
} 