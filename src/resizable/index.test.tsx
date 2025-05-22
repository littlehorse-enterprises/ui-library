import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event' // Keep commented for now
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from '.'
describe('Resizable', () => {
  it('renders horizontal panel group with handle', () => {
    render(
      <ResizablePanelGroup direction="horizontal" className="min-h-[200px] w-full rounded-lg border">
        <ResizablePanel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Sidebar</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    )
    expect(screen.getByText('Sidebar')).toBeInTheDocument()
    expect(screen.getByText('Content')).toBeInTheDocument()
    expect(screen.getByRole('separator')).toBeInTheDocument() // ResizableHandle has role separator
    expect(screen.getByRole('separator')).toContainHTML('<svg') // Check for the handle icon
  })

  it('renders vertical panel group', () => {
    render(
      <ResizablePanelGroup direction="vertical" className="min-h-[200px] w-full rounded-lg border">
        <ResizablePanel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Header</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={75}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    )
    expect(screen.getByText('Header')).toBeInTheDocument()
    expect(screen.getByText('Content')).toBeInTheDocument()
    expect(screen.getByRole('separator')).toBeInTheDocument()
  })

  it('renders multiple panels and handles', () => {
    render(
      <ResizablePanelGroup direction="horizontal" className="min-h-[200px] w-full rounded-lg border">
        <ResizablePanel defaultSize={20}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Sidebar</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={60}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={20}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Details</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    )
    expect(screen.getByText('Sidebar')).toBeInTheDocument()
    expect(screen.getByText('Content')).toBeInTheDocument()
    expect(screen.getByText('Details')).toBeInTheDocument()
    expect(screen.getAllByRole('separator').length).toBe(2) // Two handles
  })

  it('applies custom styling', () => {
    render(
      <ResizablePanelGroup direction="horizontal" className="border-blue-200">
        <ResizablePanel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6 bg-blue-50">
            <span className="font-semibold text-blue-800">Sidebar</span>
          </div>
        </ResizablePanel>
        <ResizableHandle className="bg-blue-200" />
        <ResizablePanel defaultSize={75}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    )
    expect(screen.getByText('Sidebar').closest('div')).toHaveClass('bg-blue-50')
    expect(screen.getByText('Sidebar')).toHaveClass('text-blue-800')
    expect(screen.getByRole('separator')).toHaveClass('bg-blue-200')
    expect(screen.getByRole('separator').closest('.border-blue-200')).toBeTruthy()
  })

  // Skipping drag tests for now due to headless environment complexities
  // it('allows resizing panels', async () => {})
}) 