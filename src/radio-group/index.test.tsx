import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RadioGroup, RadioGroupItem } from '.'

describe('RadioGroup', () => {
  it('renders with default value and allows selection', async () => {
    render(
      <RadioGroup defaultValue="option-1">
        <div>
          <RadioGroupItem value="option-1" id="option-1" />
          <label htmlFor="option-1">Option 1</label>
        </div>
        <div>
          <RadioGroupItem value="option-2" id="option-2" />
          <label htmlFor="option-2">Option 2</label>
        </div>
      </RadioGroup>
    )
    const radio1 = screen.getByLabelText('Option 1')
    const radio2 = screen.getByLabelText('Option 2')
    expect(radio1).toBeChecked()
    expect(radio2).not.toBeChecked()
    const user = userEvent.setup()
    await user.click(radio2)
    expect(radio2).toBeChecked()
    expect(radio1).not.toBeChecked()
  })

  it('renders disabled radio item', () => {
    render(
      <RadioGroup defaultValue="option-1">
        <div>
          <RadioGroupItem value="option-1" id="option-1" />
          <label htmlFor="option-1">Option 1</label>
        </div>
        <div>
          <RadioGroupItem value="option-2" id="option-2" disabled />
          <label htmlFor="option-2">Option 2 (Disabled)</label>
        </div>
      </RadioGroup>
    )
    const radio2 = screen.getByLabelText('Option 2 (Disabled)')
    expect(radio2).toBeDisabled()
  })

  it('applies custom styling', () => {
    render(
      <RadioGroup defaultValue="option-1">
        <div>
          <RadioGroupItem value="option-1" id="option-1" className="border-blue-500 text-blue-500" />
          <label htmlFor="option-1" className="text-blue-500">Blue Option</label>
        </div>
        <div>
          <RadioGroupItem value="option-2" id="option-2" className="border-green-500 text-green-500" />
          <label htmlFor="option-2" className="text-green-500">Green Option</label>
        </div>
      </RadioGroup>
    )
    expect(screen.getByLabelText('Blue Option')).toHaveClass('border-blue-500')
    expect(screen.getByLabelText('Blue Option')).toHaveClass('text-blue-500')
    expect(screen.getByText('Blue Option')).toHaveClass('text-blue-500')
    expect(screen.getByLabelText('Green Option')).toHaveClass('border-green-500')
    expect(screen.getByLabelText('Green Option')).toHaveClass('text-green-500')
    expect(screen.getByText('Green Option')).toHaveClass('text-green-500')
  })

  it('renders with icons', () => {
    render(
      <RadioGroup defaultValue="light">
        <div>
          <RadioGroupItem value="light" id="light" />
          <label htmlFor="light">Light Mode</label>
        </div>
        <div>
          <RadioGroupItem value="dark" id="dark" />
          <label htmlFor="dark">Dark Mode</label>
        </div>
      </RadioGroup>
    )
    expect(screen.getByLabelText('Light Mode')).toBeInTheDocument()
    expect(screen.getByLabelText('Dark Mode')).toBeInTheDocument()
  })
}) 