import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Label } from '.'
import { Checkbox } from '../checkbox'
import { Input } from '../input'
import { RadioGroup, RadioGroupItem } from '../radio-group'
import { Textarea } from '../textarea'

describe('Label', () => {
  it('renders and associates with input', () => {
    render(
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Enter your email" />
      </div>
    )
    const label = screen.getByText('Email')
    const input = screen.getByPlaceholderText('Enter your email')
    expect(label).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(label).toHaveAttribute('for', 'email')
  })

  it('renders with Checkbox and associates correctly', async () => {
    render(
      <div>
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    )
    const label = screen.getByText('Accept terms and conditions')
    const checkbox = screen.getByRole('checkbox')
    expect(label).toHaveAttribute('for', 'terms')
    expect(checkbox).toBeInTheDocument()
    const user = userEvent.setup()
    await user.click(label)
    expect(checkbox).toBeChecked()
  })

  it('renders with RadioGroup and associates correctly', async () => {
    render(
      <RadioGroup defaultValue="option-one">
        <div>
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">Option One</Label>
        </div>
        <div>
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two">Option Two</Label>
        </div>
      </RadioGroup>
    )
    const labelOne = screen.getByText('Option One')
    const radioOne = screen.getByLabelText('Option One')
    expect(labelOne).toHaveAttribute('for', 'option-one')
    expect(radioOne).toBeChecked()
    const user = userEvent.setup()
    await user.click(screen.getByText('Option Two'))
    expect(screen.getByLabelText('Option Two')).toBeChecked()
  })

  it('renders with Textarea and associates correctly', () => {
    render(
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" placeholder="Type your message here." />
      </div>
    )
    const label = screen.getByText('Message')
    const textarea = screen.getByPlaceholderText('Type your message here.')
    expect(label).toHaveAttribute('for', 'message')
    expect(textarea).toBeInTheDocument()
  })

  it('applies custom styling', () => {
    render(
      <Label htmlFor="email" className="text-blue-600 font-semibold text-base">
        Email
      </Label>
    )
    const label = screen.getByText('Email')
    expect(label).toHaveClass('text-blue-600')
    expect(label).toHaveClass('font-semibold')
    expect(label).toHaveClass('text-base')
  })

  it('renders with disabled input and checkbox', () => {
    render(
      <div>
        <Label htmlFor="disabled-input">Disabled Input</Label>
        <Input id="disabled-input" disabled />
        <Checkbox id="disabled-checkbox" disabled />
        <Label htmlFor="disabled-checkbox">Disabled Checkbox</Label>
      </div>
    )
    expect(screen.getByText('Disabled Input')).toBeInTheDocument()
    expect(screen.getByText('Disabled Checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText('Disabled Input')).toBeDisabled()
    expect(screen.getByLabelText('Disabled Checkbox')).toBeDisabled()
  })

  it('renders required indicator', () => {
    render(
      <Label htmlFor="required-input">
        Required Input <span data-testid="required">*</span>
      </Label>
    )
    expect(screen.getByTestId('required')).toHaveTextContent('*')
  })
}) 