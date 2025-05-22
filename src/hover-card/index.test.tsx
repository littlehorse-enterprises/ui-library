import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Button } from '../button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './index'

describe('HoverCard', () => {
  it('shows content on hover', async () => {
    render(
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link">Hover me</Button>
        </HoverCardTrigger>
        <HoverCardContent>Card Content</HoverCardContent>
      </HoverCard>
    )
    const trigger = screen.getByText('Hover me')
    expect(trigger).toBeInTheDocument()
    const user = userEvent.setup()
    await user.hover(trigger)
    await waitFor(() => {
      expect(screen.getByText('Card Content')).toBeInTheDocument()
    })
  })
}) 