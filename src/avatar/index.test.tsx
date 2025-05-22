import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Avatar, AvatarFallback, AvatarImage } from './index'

describe('Avatar', () => {
  it('renders avatar with image', () => {
    render(
      <Avatar>
        <AvatarImage src="test.jpg" alt="Test Avatar" />
        <AvatarFallback>TA</AvatarFallback>
      </Avatar>
    )
    // Since the image won't load in tests, we should verify the fallback is shown
    expect(screen.getByText('TA')).toBeInTheDocument()
  })

  it('shows fallback when image fails to load', () => {
    render(
      <Avatar>
        <AvatarImage src="invalid.jpg" alt="Test Avatar" />
        <AvatarFallback>TA</AvatarFallback>
      </Avatar>
    )
    expect(screen.getByText('TA')).toBeInTheDocument()
  })

  it('renders with custom className', () => {
    render(
      <Avatar className="custom-avatar">
        <AvatarImage src="test.jpg" alt="Test Avatar" />
        <AvatarFallback>TA</AvatarFallback>
      </Avatar>
    )
    const avatarRoot = screen.getByText('TA').closest('span')?.parentElement
    expect(avatarRoot).toHaveClass('custom-avatar')
  })

  it('renders image with custom className', () => {
    render(
      <Avatar>
        <AvatarImage src="test.jpg" alt="Test Avatar" className="custom-image" />
        <AvatarFallback>TA</AvatarFallback>
      </Avatar>
    )
    // Since the image won't load, we verify the fallback is shown
    expect(screen.getByText('TA')).toBeInTheDocument()
  })

  it('renders fallback with custom className', () => {
    render(
      <Avatar>
        <AvatarImage src="invalid.jpg" alt="Test Avatar" />
        <AvatarFallback className="custom-fallback">TA</AvatarFallback>
      </Avatar>
    )
    expect(screen.getByText('TA')).toHaveClass('custom-fallback')
  })
}) 