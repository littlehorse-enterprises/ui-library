import type { Meta, StoryObj } from "@storybook/react"
import { Label } from "."
import { Checkbox } from "../checkbox"
import { Input } from "../input"
import { RadioGroup, RadioGroupItem } from "../radio-group"
import { Textarea } from "../textarea"

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Label>

export const Default: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Enter your email" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder="Enter your password" />
      </div>
    </div>
  ),
}

export const WithCheckbox: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
}

export const WithRadioGroup: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
    </RadioGroup>
  ),
}

export const WithTextarea: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="message">Message</Label>
      <Textarea
        id="message"
        placeholder="Type your message here."
        className="resize-none"
      />
    </div>
  ),
}

export const WithCustomStyling: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label
          htmlFor="email"
          className="text-blue-600 font-semibold text-base"
        >
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="border-blue-200 focus:border-blue-500"
        />
      </div>
      <div className="space-y-2">
        <Label
          htmlFor="password"
          className="text-blue-600 font-semibold text-base"
        >
          Password
        </Label>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
          className="border-blue-200 focus:border-blue-500"
        />
      </div>
    </div>
  ),
}

export const WithDisabledInput: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="disabled-input">Disabled Input</Label>
        <Input
          id="disabled-input"
          type="text"
          placeholder="This input is disabled"
          disabled
        />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled-checkbox" disabled />
        <Label htmlFor="disabled-checkbox">Disabled Checkbox</Label>
      </div>
    </div>
  ),
}

export const WithRequired: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="required-input">
          Required Input <span className="text-red-500">*</span>
        </Label>
        <Input
          id="required-input"
          type="text"
          placeholder="This field is required"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="optional-input">Optional Input</Label>
        <Input
          id="optional-input"
          type="text"
          placeholder="This field is optional"
        />
      </div>
    </div>
  ),
} 