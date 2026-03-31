import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ErrorAlert } from '.'

describe('ErrorAlert', () => {
  it('renders error message', () => {
    render(<ErrorAlert message="Something went wrong" />)
    expect(screen.getByText('Something went wrong')).toBeInTheDocument()
  })

  it('returns null when message is null', () => {
    const { container } = render(<ErrorAlert message={null} />)
    expect(container.firstChild).toBeNull()
  })
})
