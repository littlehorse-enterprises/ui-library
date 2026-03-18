import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SuccessAlert } from '.'

describe('SuccessAlert', () => {
  it('renders success message', () => {
    render(<SuccessAlert message="Operation succeeded" />)
    expect(screen.getByText('Operation succeeded')).toBeInTheDocument()
  })

  it('returns null when message is null', () => {
    const { container } = render(<SuccessAlert message={null} />)
    expect(container.firstChild).toBeNull()
  })
})
