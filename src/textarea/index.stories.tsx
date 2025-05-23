import type { Meta, StoryObj } from "@storybook/react"
import { Textarea } from "."

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    rows: {
      control: 'number',
    },
  },
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  render: () => (
    <Textarea placeholder="Type your message here." />
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <label htmlFor="message">Your message</label>
      <Textarea
        placeholder="Type your message here."
        id="message"
      />
    </div>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <label htmlFor="message">Your message</label>
      <Textarea
        placeholder="Type your message here."
        id="message"
      />
      <p className="text-sm text-muted-foreground">
        Your message will be copied to the support team.
      </p>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Textarea
      placeholder="Type your message here."
      disabled
    />
  ),
}

export const WithError: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <label htmlFor="message" className="text-red-500">Your message</label>
      <Textarea
        placeholder="Type your message here."
        id="message"
        className="border-red-500 focus-visible:ring-red-500"
      />
      <p className="text-sm text-red-500">
        This field is required.
      </p>
    </div>
  ),
}

export const WithCustomSize: Story = {
  render: () => (
    <Textarea
      placeholder="Type your message here."
      className="min-h-[200px]"
    />
  ),
}

export const WithMaxLength: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Textarea
        placeholder="Type your message here."
        maxLength={100}
      />
      <p className="text-sm text-muted-foreground">
        0/100 characters
      </p>
    </div>
  ),
}

export const WithCustomStyling: Story = {
  render: () => (
    <Textarea
      placeholder="Type your message here."
      className="border-blue-500 bg-blue-50 focus-visible:ring-blue-500"
    />
  ),
} 