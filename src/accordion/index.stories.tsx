import type { Meta, StoryObj } from "@storybook/react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "."

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other components&apos;
          aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
        <AccordionContent>
          Yes. This accordion allows multiple items to be open at the same time.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it customizable?</AccordionTrigger>
        <AccordionContent>
          Yes. You can customize the appearance using Tailwind CSS classes.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it responsive?</AccordionTrigger>
        <AccordionContent>
          Yes. It works well on all screen sizes and devices.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const WithCustomStyling: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border-blue-200">
        <AccordionTrigger className="text-blue-600 hover:text-blue-700">
          Custom Styled Trigger
        </AccordionTrigger>
        <AccordionContent className="text-blue-600">
          This accordion item has custom blue styling applied to it.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-green-200">
        <AccordionTrigger className="text-green-600 hover:text-green-700">
          Another Custom Style
        </AccordionTrigger>
        <AccordionContent className="text-green-600">
          This accordion item has custom green styling applied to it.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const WithLongContent: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Detailed Information</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="list-disc pl-4">
              <li>First important point</li>
              <li>Second important point</li>
              <li>Third important point</li>
            </ul>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="flex items-center gap-2">
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
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Information
        </AccordionTrigger>
        <AccordionContent>
          This accordion item has an icon in its trigger.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const WithForm: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Contact Information</AccordionTrigger>
        <AccordionContent>
          <form className="space-y-4">
            <div>
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border p-2"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border p-2"
                placeholder="Enter your email"
              />
            </div>
            <button
              type="submit"
              className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
            >
              Submit
            </button>
          </form>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
} 