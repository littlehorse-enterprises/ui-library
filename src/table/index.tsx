import * as React from 'react'

import { cn } from '@/lib/utils'

function Table({ className, ref, ...props }: React.ComponentProps<'table'>) {
  return (
    <div className="relative w-full overflow-auto">
      <table data-slot="table" ref={ref} className={cn('w-full caption-bottom text-sm', className)} {...props} />
    </div>
  )
}

function TableHeader({ className, ref, ...props }: React.ComponentProps<'thead'>) {
  return <thead data-slot="table-header" ref={ref} className={cn('**:tr:border-b', className)} {...props} />
}

function TableBody({ className, ref, ...props }: React.ComponentProps<'tbody'>) {
  return <tbody data-slot="table-body" ref={ref} className={cn('**:tr:last-child:border-0', className)} {...props} />
}

function TableFooter({ className, ref, ...props }: React.ComponentProps<'tfoot'>) {
  return (
    <tfoot
      data-slot="table-footer"
      ref={ref}
      className={cn('bg-muted/50 last:>:tr:border-b-0 border-t font-medium', className)}
      {...props}
    />
  )
}

function TableRow({ className, ref, ...props }: React.ComponentProps<'tr'>) {
  return (
    <tr
      data-slot="table-row"
      ref={ref}
      className={cn('hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors', className)}
      {...props}
    />
  )
}

function TableHead({ className, ref, ...props }: React.ComponentProps<'th'>) {
  return (
    <th
      data-slot="table-head"
      ref={ref}
      className={cn(
        'text-muted-foreground h-12 px-4 text-left align-middle font-medium has-[[role=checkbox]]:pr-0',
        className
      )}
      {...props}
    />
  )
}

function TableCell({ className, ref, ...props }: React.ComponentProps<'td'>) {
  return (
    <td
      data-slot="table-cell"
      ref={ref}
      className={cn('p-4 align-middle has-[[role=checkbox]]:pr-0', className)}
      {...props}
    />
  )
}

function TableCaption({ className, ref, ...props }: React.ComponentProps<'caption'>) {
  return (
    <caption
      data-slot="table-caption"
      ref={ref}
      className={cn('text-muted-foreground mt-4 text-sm', className)}
      {...props}
    />
  )
}

export { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow }
