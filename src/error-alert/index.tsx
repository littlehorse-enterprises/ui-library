import { AlertCircle, X } from 'lucide-react'
import { Button } from '../button'

type ErrorAlertProps = {
  message: string | null
  onDismiss?: () => void
}

export function ErrorAlert({ message, onDismiss }: ErrorAlertProps) {
  if (!message) return null

  return (
    <div
      role="alert"
      className="border-destructive/50 bg-destructive/10 text-destructive flex items-start gap-2 rounded-lg border p-4 text-sm leading-snug font-medium"
    >
      <span className="flex h-lh shrink-0 items-center" aria-hidden="true">
        <AlertCircle className="size-4" />
      </span>
      <p className="min-w-0 flex-1">{message}</p>
      {onDismiss && (
        <span className="flex h-lh shrink-0 items-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={onDismiss}
            aria-label="Dismiss error message"
            className="hover:bg-destructive/20 size-6 p-0"
          >
            <X className="size-4" />
          </Button>
        </span>
      )}
    </div>
  )
}
