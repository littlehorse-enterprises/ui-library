import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Input } from './index'

describe('Input', () => {
  it('renders and accepts input', async () => {
    render(<Input placeholder="Type here" />)
    const input = screen.getByPlaceholderText('Type here')
    expect(input).toBeInTheDocument()
    const user = userEvent.setup()
    await user.type(input, 'hello')
    expect(input).toHaveValue('hello')
  })
}) 