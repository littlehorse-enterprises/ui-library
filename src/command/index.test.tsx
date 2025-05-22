import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Command, CommandInput, CommandItem } from './index'

describe('Command', () => {
  it('renders and handles input and items', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandItem>Item 1</CommandItem>
        <CommandItem>Item 2</CommandItem>
      </Command>
    )
    const input = screen.getByPlaceholderText('Search...')
    expect(input).toBeInTheDocument()
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
    fireEvent.change(input, { target: { value: 'Item 1' } })
    expect(input).toHaveValue('Item 1')
  })
}) 