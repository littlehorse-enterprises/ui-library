import { CheckIcon, ChevronsUpDownIcon, XIcon } from "lucide-react"
import * as React from "react"
import { Badge } from "../badge"
import { Button } from "../button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "../command"
import { cn } from "../lib/utils"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../popover"

export interface MultiSelectProps {
  options: { label: string; value: string }[]
  value?: string[]
  // eslint-disable-next-line
  onValueChange?: (value: string[]) => void
  placeholder?: string
  emptyText?: string
  className?: string
  disabled?: boolean
}

export function MultiSelect({
  options,
  value = [],
  onValueChange,
  placeholder = "Select options...",
  emptyText = "No results found.",
  className,
  disabled,
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false)

  const selectedLabels = React.useMemo(
    () =>
      value
        .map((v) => options.find((option) => option.value === v)?.label)
        .filter(Boolean),
    [value, options]
  )

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-full justify-between", className)}
          disabled={disabled}
        >
          <div className="flex flex-wrap gap-1">
            {selectedLabels.length > 0 ? (
              selectedLabels.map((label) => (
                <Badge
                  key={label}
                  variant="secondary"
                  className="mr-1"
                  onClick={(e) => {
                    e.stopPropagation()
                    onValueChange?.(
                      value.filter(
                        (v) =>
                          options.find((option) => option.value === v)?.label !==
                          label
                      )
                    )
                  }}
                >
                  {label}
                  <XIcon className="ml-1 h-3 w-3" />
                </Badge>
              ))
            ) : (
              <span className="text-muted-foreground">{placeholder}</span>
            )}
          </div>
          <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder={placeholder} />
          <CommandEmpty>{emptyText}</CommandEmpty>
          <CommandGroup>
            {options.map((option) => (
              <CommandItem
                key={option.value}
                value={option.value}
                onSelect={(currentValue) => {
                  onValueChange?.(
                    value.includes(currentValue)
                      ? value.filter((v) => v !== currentValue)
                      : [...value, currentValue]
                  )
                }}
              >
                <CheckIcon
                  className={cn(
                    "mr-2 h-4 w-4",
                    value.includes(option.value) ? "opacity-100" : "opacity-0"
                  )}
                />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
} 