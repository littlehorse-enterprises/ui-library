'use client'

import * as React from 'react'
import { OTPInput, OTPInputContext } from 'input-otp'
import { Minus } from 'lucide-react'

import { cn } from '@/lib/utils'

function InputOTP({ className, containerClassName, ref, ...props }: React.ComponentProps<typeof OTPInput>) {
  return (
    <OTPInput
      data-slot="input-otp"
      ref={ref}
      containerClassName={cn('flex items-center gap-2 has-[:disabled]:opacity-50', containerClassName)}
      className={cn('disabled:cursor-not-allowed', className)}
      {...props}
    />
  )
}

function InputOTPGroup({ className, ref, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="input-otp-group" ref={ref} className={cn('flex items-center', className)} {...props} />
}

function InputOTPSlot({ index, className, ref, ...props }: React.ComponentProps<'div'> & { index: number }) {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

  return (
    <div
      data-slot="input-otp-slot"
      ref={ref}
      className={cn(
        'border-input relative flex h-9 w-9 items-center justify-center border-[1.5px] text-sm transition-all not-first:-ml-[1.5px] first:rounded-l-md last:rounded-r-md',
        isActive && 'ring-ring z-10 ring-1',
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink bg-foreground h-4 w-px duration-1000" />
        </div>
      )}
    </div>
  )
}

function InputOTPSeparator({ ref, ...props }: React.ComponentProps<'div'>) {
  return (
    <div data-slot="input-otp-separator" ref={ref} role="separator" {...props}>
      <Minus />
    </div>
  )
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
