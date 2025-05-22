import type { Meta, StoryObj } from "@storybook/react"
import { Alert, AlertDescription, AlertTitle } from "."

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Alert>

export const Default: Story = {
  render: () => (
    <Alert>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components and dependencies to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
}

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <Alert>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
      <AlertTitle>Success!</AlertTitle>
      <AlertDescription>
        Your changes have been saved successfully.
      </AlertDescription>
    </Alert>
  ),
}

export const WithCustomStyling: Story = {
  render: () => (
    <Alert className="bg-blue-50 border-blue-200 text-blue-800">
      <AlertTitle className="text-blue-800">Information</AlertTitle>
      <AlertDescription className="text-blue-700">
        This is a custom styled alert with blue colors.
      </AlertDescription>
    </Alert>
  ),
}

export const WithLongContent: Story = {
  render: () => (
    <Alert>
      <AlertTitle>Important Update</AlertTitle>
      <AlertDescription>
        We've made some significant changes to our platform. Please review the
        following updates carefully:
        <ul className="mt-2 list-disc pl-4">
          <li>New feature: Dark mode support</li>
          <li>Improved performance and stability</li>
          <li>Updated security protocols</li>
        </ul>
      </AlertDescription>
    </Alert>
  ),
}

export const WithAction: Story = {
  render: () => (
    <Alert>
      <AlertTitle>New Version Available</AlertTitle>
      <AlertDescription>
        A new version of the application is available. Would you like to update
        now?
      </AlertDescription>
      <div className="mt-4 flex gap-2">
        <button className="rounded-md bg-primary px-3 py-1 text-sm text-primary-foreground">
          Update Now
        </button>
        <button className="rounded-md border px-3 py-1 text-sm">
          Later
        </button>
      </div>
    </Alert>
  ),
}

export const WithMultipleAlerts: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert>
        <AlertTitle>System Status</AlertTitle>
        <AlertDescription>
          All systems are operating normally.
        </AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          Your storage is almost full. Please free up some space.
        </AlertDescription>
      </Alert>
    </div>
  ),
} 