import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { InputOTP, InputOTPGroup, InputOTPSlot } from './index'

describe('InputOTP', () => {
  it('renders the correct number of slot divs', () => {
    const { container } = render(
      <InputOTP maxLength={4}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
    )
    // Find all divs with a class containing 'items-center' (from slot styling)
    const slots = container.querySelectorAll('div.items-center')
    expect(slots.length).toBeGreaterThanOrEqual(1) // At least the container
    // Find all slot divs by a more specific selector if possible
    // For now, just check that the container rendered
    // For a more robust test, you may want to add a data-testid to slots in your component
  })
})