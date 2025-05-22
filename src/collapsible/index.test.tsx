import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './index'

describe('Collapsible', () => {
  it('renders and toggles content visibility', () => {
    render(
      <Collapsible>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent data-testid="collapsible-content">Collapsible Content</CollapsibleContent>
      </Collapsible>
    )
    const trigger = screen.getByRole('button', { name: 'Toggle' })
    const content = screen.getByTestId('collapsible-content')
    expect(content).not.toBeVisible()
    fireEvent.click(trigger)
    expect(content).toBeVisible()
    fireEvent.click(trigger)
    expect(content).not.toBeVisible()
  })
}) 