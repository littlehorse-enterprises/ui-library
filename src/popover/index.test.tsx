import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Popover, PopoverContent, PopoverTrigger } from '.'
import { Button } from '../button'

describe('Popover', () => {
  it('renders and opens content on trigger click', async () => {
    render(
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div>Popover Content</div>
        </PopoverContent>
      </Popover>
    )
    const trigger = screen.getByText('Open Popover')
    expect(trigger).toBeInTheDocument()
    const user = userEvent.setup()
    await user.click(trigger)
    await waitFor(() => {
      expect(screen.getByText('Popover Content')).toBeInTheDocument()
    })
  })

  it('renders with form inside popover', async () => {
    render(
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Contact Us</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <form>
            <input placeholder="Your email" />
            <textarea placeholder="Your message" />
            <Button>Send Message</Button>
          </form>
        </PopoverContent>
      </Popover>
    )
    const user = userEvent.setup()
    await user.click(screen.getByText('Contact Us'))
    await waitFor(() => {
      expect(screen.getByPlaceholderText('Your email')).toBeInTheDocument()
      expect(screen.getByPlaceholderText('Your message')).toBeInTheDocument()
      expect(screen.getByText('Send Message')).toBeInTheDocument()
    })
  })

  it('renders with a list inside popover', async () => {
    render(
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Notifications</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div>Recent Notifications</div>
          <div>New message from John</div>
          <div>Meeting reminder</div>
          <div>Task completed</div>
        </PopoverContent>
      </Popover>
    )
    const user = userEvent.setup()
    await user.click(screen.getByText('Notifications'))
    await waitFor(() => {
      expect(screen.getByText('Recent Notifications')).toBeInTheDocument()
      expect(screen.getByText('New message from John')).toBeInTheDocument()
      expect(screen.getByText('Meeting reminder')).toBeInTheDocument()
      expect(screen.getByText('Task completed')).toBeInTheDocument()
    })
  })

  it('applies custom styling', async () => {
    render(
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="bg-blue-50 text-blue-600 hover:bg-blue-100">
            Open Popover
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 bg-blue-50 border-blue-200">
          <div className="text-blue-800">Profile Settings</div>
          <Button className="bg-blue-600 text-white hover:bg-blue-700">Save Changes</Button>
          <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-100">Cancel</Button>
        </PopoverContent>
      </Popover>
    )
    const user = userEvent.setup()
    await user.click(screen.getByText('Open Popover'))
    await waitFor(() => {
      expect(screen.getByText('Profile Settings')).toHaveClass('text-blue-800')
      expect(screen.getByText('Save Changes')).toHaveClass('bg-blue-600')
      expect(screen.getByText('Save Changes')).toHaveClass('text-white')
      expect(screen.getByText('Cancel')).toHaveClass('border-blue-200')
      expect(screen.getByText('Cancel')).toHaveClass('text-blue-600')
    })
  })
}) 