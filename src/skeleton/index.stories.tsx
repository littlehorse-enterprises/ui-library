import type { Meta, StoryObj } from '@storybook/react-vite'
import { Skeleton } from '.'

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  render: () => <Skeleton className="h-4 w-62.5" />,
}

export const Card: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-62.5" />
        <Skeleton className="h-4 w-50" />
      </div>
    </div>
  ),
}

export const Article: Story = {
  render: () => (
    <div className="space-y-4">
      <Skeleton className="h-8 w-75" />
      <Skeleton className="h-4 w-62.5" />
      <Skeleton className="h-4 w-50" />
      <Skeleton className="h-4 w-37.5" />
    </div>
  ),
}

export const Form: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Skeleton className="h-4 w-25" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-25" />
        <Skeleton className="h-10 w-full" />
      </div>
      <Skeleton className="h-10 w-25" />
    </div>
  ),
}

export const Table: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-4 w-25" />
        <Skeleton className="h-4 w-25" />
        <Skeleton className="h-4 w-25" />
      </div>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-4 w-25" />
        <Skeleton className="h-4 w-25" />
        <Skeleton className="h-4 w-25" />
      </div>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-4 w-25" />
        <Skeleton className="h-4 w-25" />
        <Skeleton className="h-4 w-25" />
      </div>
    </div>
  ),
}

export const Profile: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-16 w-16 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-50" />
          <Skeleton className="h-4 w-37.5" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  ),
}

export const CustomColors: Story = {
  render: () => (
    <div className="space-y-4">
      <Skeleton className="h-4 w-62.5 bg-blue-100" />
      <Skeleton className="h-4 w-62.5 bg-green-100" />
      <Skeleton className="h-4 w-62.5 bg-red-100" />
    </div>
  ),
}

export const CustomAnimation: Story = {
  render: () => (
    <div className="space-y-4">
      <Skeleton className="h-4 w-62.5 animate-pulse" />
      <Skeleton className="h-4 w-62.5 animate-pulse [animation-delay:0.2s]" />
      <Skeleton className="h-4 w-62.5 animate-pulse [animation-delay:0.4s]" />
    </div>
  ),
}
