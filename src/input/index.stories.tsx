import type { Meta, StoryObj } from "@storybook/react"
import { Input } from "."

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel", "url", "search"],
    },
    disabled: {
      control: "boolean",
    },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    placeholder: "Enter text here...",
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <label htmlFor="email">Email</label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  ),
}

export const Types: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-4">
      <div className="grid gap-1.5">
        <label htmlFor="text">Text</label>
        <Input type="text" id="text" placeholder="Enter text" />
      </div>
      <div className="grid gap-1.5">
        <label htmlFor="email">Email</label>
        <Input type="email" id="email" placeholder="Enter email" />
      </div>
      <div className="grid gap-1.5">
        <label htmlFor="password">Password</label>
        <Input type="password" id="password" placeholder="Enter password" />
      </div>
      <div className="grid gap-1.5">
        <label htmlFor="number">Number</label>
        <Input type="number" id="number" placeholder="Enter number" />
      </div>
      <div className="grid gap-1.5">
        <label htmlFor="tel">Phone</label>
        <Input type="tel" id="tel" placeholder="Enter phone number" />
      </div>
      <div className="grid gap-1.5">
        <label htmlFor="url">URL</label>
        <Input type="url" id="url" placeholder="Enter URL" />
      </div>
      <div className="grid gap-1.5">
        <label htmlFor="search">Search</label>
        <Input type="search" id="search" placeholder="Search..." />
      </div>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-4">
      <Input disabled placeholder="Disabled input" />
      <Input disabled value="Disabled with value" />
    </div>
  ),
}

export const WithError: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <label htmlFor="email">Email</label>
      <Input
        type="email"
        id="email"
        placeholder="Enter email"
        className="border-red-500 focus-visible:ring-red-500"
      />
      <p className="text-sm text-red-500">Please enter a valid email address.</p>
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <div className="relative">
        <svg
          className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <Input
          type="search"
          placeholder="Search..."
          className="pl-8"
        />
      </div>
    </div>
  ),
}

export const File: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <label htmlFor="file">Upload file</label>
      <Input type="file" id="file" />
    </div>
  ),
} 