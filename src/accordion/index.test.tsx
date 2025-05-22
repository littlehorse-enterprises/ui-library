import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './index'

describe('Accordion', () => {
  it('renders accordion with items', () => {
    render(
      <Accordion type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    )
    expect(screen.getByText('Section 1')).toBeInTheDocument()
  })

  it('expands and collapses on trigger click', async () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    )
    
    const trigger = screen.getByText('Section 1')
    // Find the content container by its text
    fireEvent.click(trigger)
    const content = screen.getByText('Content 1').parentElement?.parentElement
    expect(content).toHaveAttribute('data-state', 'open')
    
    // Click to collapse
    fireEvent.click(trigger)
    await waitFor(() => {
      expect(content).toHaveAttribute('data-state', 'closed')
    })
  })

  it('renders with custom className', () => {
    render(
      <Accordion type="single">
        <AccordionItem value="item-1" className="custom-accordion">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    )
    // AccordionItem has class border-b and custom-accordion
    const accordionItem = screen.getByText('Section 1').closest('.border-b')
    expect(accordionItem).toHaveClass('custom-accordion')
  })
}) 