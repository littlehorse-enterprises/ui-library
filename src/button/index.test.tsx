import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { Button } from "."

describe("Button", () => {
  it("renders with default variant and size", () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole("button", { name: /click me/i })
    expect(button).toHaveClass("bg-primary")
    expect(button).toHaveClass("h-9")
  })

  it("renders with different variants", () => {
    const { rerender } = render(<Button variant="destructive">Click me</Button>)
    expect(screen.getByRole("button")).toHaveClass("bg-destructive")

    rerender(<Button variant="outline">Click me</Button>)
    expect(screen.getByRole("button")).toHaveClass("border-input")

    rerender(<Button variant="secondary">Click me</Button>)
    expect(screen.getByRole("button")).toHaveClass("bg-secondary")

    rerender(<Button variant="ghost">Click me</Button>)
    expect(screen.getByRole("button")).toHaveClass("hover:bg-accent")

    rerender(<Button variant="link">Click me</Button>)
    expect(screen.getByRole("button")).toHaveClass("text-primary")
  })

  it("renders with different sizes", () => {
    const { rerender } = render(<Button size="sm">Click me</Button>)
    expect(screen.getByRole("button")).toHaveClass("h-8")

    rerender(<Button size="lg">Click me</Button>)
    expect(screen.getByRole("button")).toHaveClass("h-10")

    rerender(<Button size="icon">Click me</Button>)
    expect(screen.getByRole("button")).toHaveClass("h-9 w-9")
  })

  it("handles click events", () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    fireEvent.click(screen.getByRole("button"))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it("can be disabled", () => {
    render(<Button disabled>Click me</Button>)
    const button = screen.getByRole("button")
    expect(button).toBeDisabled()
    expect(button).toHaveClass("disabled:opacity-50")
  })

  it("renders as child component when asChild is true", () => {
    render(
      <Button asChild>
        <a href="/test">Click me</a>
      </Button>
    )
    const link = screen.getByRole("link")
    expect(link).toHaveAttribute("href", "/test")
    expect(link).toHaveClass("bg-primary")
  })

  it("shows loader and disables button when loading is true", () => {
    render(<Button loading>Click me</Button>);
    const button = screen.getByRole("button");
    // Loader2 icon should be present
    expect(button.querySelector(".animate-spin")).toBeInTheDocument();
    // Button should be disabled
    expect(button).toBeDisabled();
    // Button should still have the correct text
    expect(button).toHaveTextContent("Click me");
  });
}) 