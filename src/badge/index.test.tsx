import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Badge } from '.'

describe('Badge', () => {
  it('renders with default variant', () => {
    render(<Badge>Default Badge</Badge>)
    const badge = screen.getByText('Default Badge')
    expect(badge).toHaveClass('bg-primary')
    expect(badge.tagName).toBe('SPAN')
  })

  it('renders with secondary variant', () => {
    render(<Badge variant="secondary">Secondary Badge</Badge>)
    const badge = screen.getByText('Secondary Badge')
    expect(badge).toHaveClass('bg-secondary')
  })

  it('renders with destructive variant', () => {
    render(<Badge variant="destructive">Destructive Badge</Badge>)
    const badge = screen.getByText('Destructive Badge')
    expect(badge).toHaveClass('bg-destructive')
  })

  it('renders with outline variant', () => {
    render(<Badge variant="outline">Outline Badge</Badge>)
    const badge = screen.getByText('Outline Badge')
    expect(badge).toHaveClass('text-foreground')
    expect(badge).toHaveClass('border-border')
  })

  it('renders with ghost variant', () => {
    render(<Badge variant="ghost">Ghost Badge</Badge>)
    const badge = screen.getByText('Ghost Badge')
    expect(badge).toBeInTheDocument()
  })

  it('renders with link variant', () => {
    render(<Badge variant="link">Link Badge</Badge>)
    const badge = screen.getByText('Link Badge')
    expect(badge).toHaveClass('text-primary')
  })

  it('renders with asChild', () => {
    render(
      <Badge asChild>
        <a href="/test">Link Badge</a>
      </Badge>
    )
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/test')
    expect(link).toHaveClass('bg-primary')
  })

  it('merges custom className', () => {
    render(<Badge className="custom-class">Custom Badge</Badge>)
    const badge = screen.getByText('Custom Badge')
    expect(badge).toHaveClass('custom-class')
  })

  it('sets data-slot and data-variant attributes', () => {
    render(<Badge variant="secondary">Test Badge</Badge>)
    const badge = screen.getByText('Test Badge')
    expect(badge).toHaveAttribute('data-slot', 'badge')
    expect(badge).toHaveAttribute('data-variant', 'secondary')
  })
})
