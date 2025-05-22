import type { Meta, StoryObj } from "@storybook/react"
import { Toaster, toast } from "."

const meta: Meta<typeof Toaster> = {
  title: "Components/Toaster",
  component: Toaster,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Toaster>

export const Default: Story = {
  render: () => (
    <div>
      <button
        onClick={() => toast("Event has been created")}
        className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
      >
        Show Toast
      </button>
      <Toaster />
    </div>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <div>
      <button
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
          })
        }
        className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
      >
        Show Toast with Description
      </button>
      <Toaster />
    </div>
  ),
}

export const WithAction: Story = {
  render: () => (
    <div>
      <button
        onClick={() =>
          toast("Event has been created", {
            action: {
              label: "Undo",
              onClick: () => console.log("Undo clicked"),
            },
          })
        }
        className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
      >
        Show Toast with Action
      </button>
      <Toaster />
    </div>
  ),
}

export const WithPromise: Story = {
  render: () => (
    <div>
      <button
        onClick={() => {
          toast.promise(
            new Promise((resolve) => setTimeout(resolve, 2000)),
            {
              loading: "Loading...",
              success: "Successfully saved!",
              error: "Something went wrong.",
            }
          )
        }}
        className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
      >
        Show Promise Toast
      </button>
      <Toaster />
    </div>
  ),
}

export const WithCustomDuration: Story = {
  render: () => (
    <div>
      <button
        onClick={() =>
          toast("This toast will stay for 5 seconds", {
            duration: 5000,
          })
        }
        className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
      >
        Show Long Toast
      </button>
      <Toaster />
    </div>
  ),
}

export const WithCustomPosition: Story = {
  render: () => (
    <div>
      <button
        onClick={() =>
          toast("This toast will appear at the bottom", {
            position: "bottom-center",
          })
        }
        className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
      >
        Show Bottom Toast
      </button>
      <Toaster position="bottom-center" />
    </div>
  ),
}

export const WithCustomStyling: Story = {
  render: () => (
    <div>
      <button
        onClick={() =>
          toast("Custom styled toast", {
            className: "bg-blue-500 text-white",
          })
        }
        className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
      >
        Show Custom Styled Toast
      </button>
      <Toaster />
    </div>
  ),
}

export const WithMultipleToasts: Story = {
  render: () => (
    <div className="space-y-4">
      <button
        onClick={() => {
          toast("First toast")
          setTimeout(() => toast("Second toast"), 1000)
          setTimeout(() => toast("Third toast"), 2000)
        }}
        className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
      >
        Show Multiple Toasts
      </button>
      <Toaster />
    </div>
  ),
} 