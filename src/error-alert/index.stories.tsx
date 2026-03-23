import type { Meta, StoryObj } from '@storybook/react-vite'
import { ErrorAlert } from '.'

const meta: Meta<typeof ErrorAlert> = {
  title: 'Components/Alerts/ErrorAlert',
  component: ErrorAlert,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    Story => (
      <div className="mx-auto w-full max-w-lg">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ErrorAlert>

export const Default: Story = {
  args: {
    message: 'Something went wrong. Please try again.',
  },
}

export const WithDismiss: Story = {
  args: {
    message: 'Failed to save changes. Check your network connection.',
    onDismiss: () => alert('Dismissed!'),
  },
}

export const NoMessage: Story = {
  args: {
    message: null,
  },
}
