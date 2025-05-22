import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Alert, AlertDescription, AlertTitle } from './index'

describe('Alert', () => {
  it('renders alert with title and description', () => {
    render(
      <Alert>
        <AlertTitle>Alert Title</AlertTitle>
        <AlertDescription>Alert Description</AlertDescription>
      </Alert>
    )
    expect(screen.getByText('Alert Title')).toBeInTheDocument()
    expect(screen.getByText('Alert Description')).toBeInTheDocument()
  })

  it('applies variant classes correctly', () => {
    render(
      <Alert variant="destructive">
        <AlertTitle>Destructive Alert</AlertTitle>
      </Alert>
    )
    const alert = screen.getByText('Destructive Alert').closest('div')
    expect(alert).toHaveClass('text-destructive')
  })

  it('renders with custom className', () => {
    render(
      <Alert className="custom-alert">
        <AlertTitle>Alert Title</AlertTitle>
      </Alert>
    )
    const alert = screen.getByText('Alert Title').closest('div')
    expect(alert).toHaveClass('custom-alert')
  })

  it('renders title with custom className', () => {
    render(
      <Alert>
        <AlertTitle className="custom-title">Alert Title</AlertTitle>
      </Alert>
    )
    expect(screen.getByText('Alert Title')).toHaveClass('custom-title')
  })

  it('renders description with custom className', () => {
    render(
      <Alert>
        <AlertDescription className="custom-description">Alert Description</AlertDescription>
      </Alert>
    )
    expect(screen.getByText('Alert Description')).toHaveClass('custom-description')
  })
}) 