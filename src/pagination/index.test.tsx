import { render, screen } from '@testing-library/react'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from '.'
describe('Pagination', () => {
  it('renders navigation and links', () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
    expect(screen.getByLabelText('Go to previous page')).toBeInTheDocument()
    expect(screen.getByLabelText('Go to next page')).toBeInTheDocument()
    expect(screen.getByText('1')).toHaveAttribute('aria-current', 'page')
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByLabelText('Go to previous page')).toContainElement(screen.getByText('Previous'))
    expect(screen.getByLabelText('Go to next page')).toContainElement(screen.getByText('Next'))
    expect(screen.getByLabelText('Go to next page').querySelector('svg')).toBeInTheDocument()
    expect(screen.getByLabelText('Go to previous page').querySelector('svg')).toBeInTheDocument()
    expect(screen.getByLabelText('Go to next page').closest('a')).toBeInTheDocument()
    expect(screen.getByLabelText('Go to previous page').closest('a')).toBeInTheDocument()
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByLabelText('Go to previous page')).toBeInTheDocument()
    expect(screen.getByLabelText('Go to next page')).toBeInTheDocument()
    expect(screen.getByLabelText('Go to previous page').closest('a')).toHaveAttribute('href', '#')
    expect(screen.getByLabelText('Go to next page').closest('a')).toHaveAttribute('href', '#')
    expect(screen.getByText('1').closest('a')).toHaveAttribute('href', '#')
  })

  it('renders ellipsis and many pages', () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              5
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">6</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">10</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
    expect(screen.getAllByLabelText('Go to next page').length).toBe(1)
    expect(screen.getAllByLabelText('Go to previous page').length).toBe(1)
    expect(document.querySelectorAll('svg.lucide-ellipsis').length).toBeGreaterThan(0)
    expect(screen.getAllByRole('listitem').length).toBeGreaterThan(0)
  })

  it('applies custom styling', () => {
    render(
      <Pagination>
        <PaginationContent className="gap-1">
          <PaginationItem>
            <PaginationPrevious className="bg-blue-50 text-blue-600" href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="bg-blue-50 text-blue-600" href="#">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="bg-blue-600 text-white" href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="bg-blue-50 text-blue-600" href="#">
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext className="bg-blue-50 text-blue-600" href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
    expect(screen.getByText('1')).toHaveClass('bg-blue-50')
    expect(screen.getByText('2')).toHaveClass('bg-blue-600')
    expect(screen.getByText('2')).toHaveClass('text-white')
    expect(screen.getByText('3')).toHaveClass('bg-blue-50')
    expect(screen.getByLabelText('Go to previous page')).toHaveClass('bg-blue-50')
    expect(screen.getByLabelText('Go to previous page')).toHaveClass('text-blue-600')
    expect(screen.getByLabelText('Go to next page')).toHaveClass('bg-blue-50')
    expect(screen.getByLabelText('Go to next page')).toHaveClass('text-blue-600')
  })

  it('renders compact mode', () => {
    render(
      <Pagination>
        <PaginationContent className="gap-0">
          <PaginationItem>
            <PaginationPrevious className="rounded-r-none" href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="rounded-none" href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="rounded-none" href="#">
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="rounded-none" href="#">
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext className="rounded-l-none" href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
    expect(screen.getByLabelText('Go to previous page')).toHaveClass('rounded-r-none')
    expect(screen.getByText('1')).toHaveClass('rounded-none')
    expect(screen.getByText('2')).toHaveClass('rounded-none')
    expect(screen.getByText('3')).toHaveClass('rounded-none')
    expect(screen.getByLabelText('Go to next page')).toHaveClass('rounded-l-none')
  })
}) 