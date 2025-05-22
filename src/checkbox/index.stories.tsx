import type { Meta, StoryObj } from "@storybook/react"
import { Checkbox } from "."

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  ),
}

export const Checked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" defaultChecked />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" disabled />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <div className="grid gap-1.5 leading-none">
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </div>
      <p className="text-sm text-muted-foreground">
        You agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  ),
}

export const WithCustomStyling: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="terms"
        className="border-blue-500 data-[state=checked]:bg-blue-500"
      />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none text-blue-500"
      >
        Accept terms and conditions
      </label>
    </div>
  ),
}

export const WithForm: Story = {
  render: () => (
    <form className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Notifications</label>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="email" />
            <label
              htmlFor="email"
              className="text-sm font-medium leading-none"
            >
              Email notifications
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="sms" />
            <label
              htmlFor="sms"
              className="text-sm font-medium leading-none"
            >
              SMS notifications
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="push" />
            <label
              htmlFor="push"
              className="text-sm font-medium leading-none"
            >
              Push notifications
            </label>
          </div>
        </div>
      </div>
    </form>
  ),
}

export const WithIndeterminate: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" checked="indeterminate" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  ),
}

export const WithRequired: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" required />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
        <span className="text-red-500">*</span>
      </label>
    </div>
  ),
} 