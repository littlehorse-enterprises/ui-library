import type { Meta, StoryObj } from '@storybook/react-vite'
import { SuccessAlert } from '.'

const meta: Meta<typeof SuccessAlert> = {
  title: 'Components/Alerts/SuccessAlert',
  component: SuccessAlert,
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
type Story = StoryObj<typeof SuccessAlert>

export const Default: Story = {
  args: {
    message: 'Changes saved successfully.',
  },
}

export const WithDismiss: Story = {
  args: {
    message: 'Client created successfully.',
    onDismiss: () => alert('Dismissed!'),
  },
}

export const WithAutoDismiss: Story = {
  args: {
    message: 'Operation completed. This will auto-dismiss in 5 seconds.',
    onDismiss: () => alert('Auto-dismissed!'),
    autoDismiss: true,
    autoDismissMs: 5000,
  },
}
