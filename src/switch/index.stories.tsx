import type { Meta, StoryObj } from "@storybook/react"
import { Switch } from "."

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  render: () => <Switch />,
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <label
        htmlFor="airplane-mode"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Airplane Mode
      </label>
    </div>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <Switch id="notifications" />
        <label
          htmlFor="notifications"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Push Notifications
        </label>
      </div>
      <p className="text-sm text-muted-foreground">
        Receive notifications about new messages and mentions.
      </p>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch disabled />
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Disabled Switch
      </label>
    </div>
  ),
}

export const WithCustomStyling: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch
        className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-200"
      />
      <label className="text-sm font-medium leading-none">
        Custom Styled Switch
      </label>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch
        className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-200"
      />
      <div className="flex items-center space-x-2">
        <svg
          className="h-4 w-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        <span className="text-sm font-medium">Dark Mode</span>
      </div>
    </div>
  ),
}

export const WithForm: Story = {
  render: () => (
    <form className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Switch id="marketing" />
          <label
            htmlFor="marketing"
            className="text-sm font-medium leading-none"
          >
            Marketing Emails
          </label>
        </div>
        <p className="text-sm text-muted-foreground">
          Receive emails about new products, features, and more.
        </p>
      </div>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Switch id="security" />
          <label
            htmlFor="security"
            className="text-sm font-medium leading-none"
          >
            Security Updates
          </label>
        </div>
        <p className="text-sm text-muted-foreground">
          Receive emails about your account security.
        </p>
      </div>
    </form>
  ),
} 