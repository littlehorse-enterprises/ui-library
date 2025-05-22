import type { Meta, StoryObj } from "@storybook/react"
import { RadioGroup, RadioGroupItem } from "."

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-1">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-1" id="option-1" />
        <label
          htmlFor="option-1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Option 1
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-2" id="option-2" />
        <label
          htmlFor="option-2"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Option 2
        </label>
      </div>
    </RadioGroup>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <RadioGroup defaultValue="card" className="grid gap-4">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="card" id="card" />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="card"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Card Payment
          </label>
          <p className="text-sm text-muted-foreground">
            Pay with your credit card.
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="paypal" id="paypal" />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="paypal"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            PayPal
          </label>
          <p className="text-sm text-muted-foreground">
            Pay with your PayPal account.
          </p>
        </div>
      </div>
    </RadioGroup>
  ),
}

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option-1">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-1" id="option-1" />
        <label
          htmlFor="option-1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Option 1
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-2" id="option-2" disabled />
        <label
          htmlFor="option-2"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Option 2 (Disabled)
        </label>
      </div>
    </RadioGroup>
  ),
}

export const WithCustomStyling: Story = {
  render: () => (
    <RadioGroup defaultValue="option-1">
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="option-1"
          id="option-1"
          className="border-blue-500 text-blue-500"
        />
        <label
          htmlFor="option-1"
          className="text-sm font-medium leading-none text-blue-500"
        >
          Blue Option
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="option-2"
          id="option-2"
          className="border-green-500 text-green-500"
        />
        <label
          htmlFor="option-2"
          className="text-sm font-medium leading-none text-green-500"
        >
          Green Option
        </label>
      </div>
    </RadioGroup>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <RadioGroup defaultValue="light" className="grid gap-4">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="light" id="light" />
        <div className="flex items-center space-x-2">
          <svg
            className="h-4 w-4"
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
          <label
            htmlFor="light"
            className="text-sm font-medium leading-none"
          >
            Light Mode
          </label>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="dark" id="dark" />
        <div className="flex items-center space-x-2">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
          <label
            htmlFor="dark"
            className="text-sm font-medium leading-none"
          >
            Dark Mode
          </label>
        </div>
      </div>
    </RadioGroup>
  ),
}

export const WithForm: Story = {
  render: () => (
    <form className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Payment Method</label>
        <RadioGroup defaultValue="card">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="card" id="card" />
            <label
              htmlFor="card"
              className="text-sm font-medium leading-none"
            >
              Credit Card
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="paypal" id="paypal" />
            <label
              htmlFor="paypal"
              className="text-sm font-medium leading-none"
            >
              PayPal
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="bank" id="bank" />
            <label
              htmlFor="bank"
              className="text-sm font-medium leading-none"
            >
              Bank Transfer
            </label>
          </div>
        </RadioGroup>
      </div>
    </form>
  ),
} 