import { render, screen } from '@testing-library/react'
import { Progress } from '.'
describe('Progress', () => {
  it('renders with a value', () => {
    render(<Progress value={33} />)
    const indicator = screen.getByRole('progressbar').firstChild
    expect(indicator).toHaveStyle({ transform: 'translateX(-67%)' })
  })

  it('renders with custom size', () => {
    render(<Progress value={33} className="h-4" />)
    const root = screen.getByRole('progressbar')
    expect(root).toHaveClass('h-4')
  })

  it('renders with custom color', () => {
    render(
      <Progress value={33} className="bg-blue-100" />
    )
    const root = screen.getByRole('progressbar')
    expect(root).toHaveClass('bg-blue-100')
  })

  it('renders with animation', () => {
    render(<Progress value={33} className="animate-pulse" />)
    const root = screen.getByRole('progressbar')
    expect(root).toHaveClass('animate-pulse')
  })

  it('renders indeterminate state', () => {
    render(<Progress value={undefined} />)
    const indicator = screen.getByRole('progressbar').firstChild
    // Should default to 0% (translateX(-100%))
    expect(indicator).toHaveStyle({ transform: 'translateX(-100%)' })
  })
}) 