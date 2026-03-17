'use client'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { cva, type VariantProps } from 'class-variance-authority'
import { ChevronDown, ChevronUp } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'

const accordionVariants = cva('flex w-full flex-col', {
  variants: {
    variant: {
      default: '',
      bordered: 'space-y-2',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & VariantProps<typeof accordionVariants>
>(({ className, variant = 'default', ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    data-variant={variant}
    className={cn(accordionVariants({ variant }), 'group/accordion', className)}
    {...props}
  />
))
Accordion.displayName = 'Accordion'

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      'not-last:border-b group-data-[variant=bordered]/accordion:rounded-lg group-data-[variant=bordered]/accordion:border group-data-[variant=bordered]/accordion:not-last:border-b',
      className
    )}
    {...props}
  />
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'group/accordion-trigger focus-visible:border-ring focus-visible:ring-ring/50 relative flex flex-1 items-center justify-between rounded-lg border border-transparent py-2.5 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-3 disabled:pointer-events-none disabled:opacity-50',
        'group-data-[variant=bordered]/accordion:text-muted-foreground group-data-[variant=bordered]/accordion:px-4 group-data-[variant=bordered]/accordion:text-base group-data-[variant=bordered]/accordion:font-semibold group-data-[variant=bordered]/accordion:hover:decoration-1 group-data-[variant=bordered]/accordion:hover:underline-offset-2 group-data-[variant=bordered]/accordion:focus-visible:after:hidden',
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="text-muted-foreground pointer-events-none ml-auto size-5 shrink-0 group-aria-expanded/accordion-trigger:hidden" />
      <ChevronUp className="text-muted-foreground pointer-events-none ml-auto hidden size-5 shrink-0 group-aria-expanded/accordion-trigger:inline" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
    {...props}
  >
    <div
      className={cn(
        '[&_a]:hover:text-foreground h-(--radix-accordion-content-height) pt-0 pb-2.5 [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4',
        'group-data-[variant=bordered]/accordion:px-4',
        className
      )}
    >
      {children}
    </div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, accordionVariants }
