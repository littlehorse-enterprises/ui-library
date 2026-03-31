import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Tooltip, TooltipContent, TooltipTrigger } from './index'

describe('Tooltip', () => {
  it('shows tooltip content on hover', async () => {
    render(
      <Tooltip>
        <TooltipTrigger asChild>
          <button>Hover me</button>
        </TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>
    )
    const trigger = screen.getByText('Hover me')
    const user = userEvent.setup()
    await user.hover(trigger)
    await waitFor(() => {
      const tooltips = screen.getAllByText('Tooltip content')
      const openTooltip = tooltips.find(el => el.closest('[data-state="delayed-open"]'))
      expect(openTooltip).toBeTruthy()
    })
  })
})
