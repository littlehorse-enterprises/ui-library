import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { Badge } from "."

describe("Badge", () => {
  it("renders with default variant", () => {
    render(<Badge>Default Badge</Badge>)
    const badge = screen.getByText("Default Badge")
    expect(badge).toHaveClass("bg-primary")
  })

  it("renders with secondary variant", () => {
    render(<Badge variant="secondary">Secondary Badge</Badge>)
    const badge = screen.getByText("Secondary Badge")
    expect(badge).toHaveClass("bg-secondary")
  })

  it("renders with destructive variant", () => {
    render(<Badge variant="destructive">Destructive Badge</Badge>)
    const badge = screen.getByText("Destructive Badge")
    expect(badge).toHaveClass("bg-destructive")
  })

  it("renders with outline variant", () => {
    render(<Badge variant="outline">Outline Badge</Badge>)
    const badge = screen.getByText("Outline Badge")
    expect(badge).toHaveClass("text-foreground")
  })

  it("merges custom className with default classes", () => {
    render(<Badge className="custom-class">Custom Badge</Badge>)
    const badge = screen.getByText("Custom Badge")
    expect(badge).toHaveClass("custom-class")
  })

  it("spreads additional props to the div element", () => {
    render(<Badge data-testid="test-badge" aria-label="Test Badge">Test Badge</Badge>)
    const badge = screen.getByTestId("test-badge")
    expect(badge).toHaveAttribute("aria-label", "Test Badge")
  })
}) 