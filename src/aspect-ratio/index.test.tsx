import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AspectRatio } from './index'

describe('AspectRatio', () => {
  it('renders with default ratio', () => {
    render(
      <AspectRatio>
        <div>Content</div>
      </AspectRatio>
    )
    screen.debug()
    const el = screen.getByText('Content')
    const parent = el.parentElement
    expect(parent?.parentElement?.style.paddingBottom).toBe('100%')
  })

  it('renders with custom ratio', () => {
    render(
      <AspectRatio ratio={4/3}>
        <div>Content</div>
      </AspectRatio>
    )
    const container = screen.getByText('Content').parentElement?.parentElement
    expect(container).toHaveStyle({ paddingBottom: '75%' })
  })

  it('renders children content', () => {
    render(
      <AspectRatio>
        <div>Test Content</div>
      </AspectRatio>
    )
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })
}) 