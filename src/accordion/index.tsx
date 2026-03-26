'use client'

import { Accordion as AccordionPrimitive } from 'radix-ui'
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

function Accordion({
  className,
  variant = 'default',
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root> & VariantProps<typeof accordionVariants>) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      data-variant={variant}
      className={cn(accordionVariants({ variant }), 'group/accordion', className)}
      {...props}
    />
  )
}

function AccordionItem({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        'not-last:border-b group-data-[variant=bordered]/accordion:rounded-lg group-data-[variant=bordered]/accordion:border group-data-[variant=bordered]/accordion:not-last:border-b',
        className
      )}
      {...props}
    />
  )
}

function AccordionTrigger({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
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
  )
}

function AccordionContent({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
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
  )
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, accordionVariants }
