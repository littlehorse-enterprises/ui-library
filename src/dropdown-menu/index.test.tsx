import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Button } from '../button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './index'

describe('DropdownMenu', () => {
  it('renders and shows menu items on trigger (click and keyboard)', async () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Click me</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
    const trigger = screen.getByText('Click me')
    expect(trigger).toBeInTheDocument()
    const user = userEvent.setup()
    await user.click(trigger)
    await waitFor(() => {
      expect(screen.getByText('Item 1')).toBeInTheDocument()
      expect(screen.getByText('Item 2')).toBeInTheDocument()
    })
  })
}) 