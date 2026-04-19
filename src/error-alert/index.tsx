import { AlertCircle, X } from 'lucide-react'
import { Alert, AlertTitle } from '../alert'
import { Button } from '../button'

type ErrorAlertProps = {
  message: string | null
  onDismiss?: () => void
}

export function ErrorAlert({ message, onDismiss }: ErrorAlertProps) {
  if (!message) return null

  return (
    <div className="relative">
      <Alert variant="destructive" className="bg-destructive/10 mb-4 flex gap-2 leading-snug">
        <AlertCircle className="h-4 w-4 -translate-y-px" />
        <AlertTitle className={onDismiss ? 'pr-6' : undefined}>{message}</AlertTitle>
      </Alert>
      {onDismiss && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onDismiss}
          aria-label="Dismiss error message"
          className="text-destructive absolute top-3.5 right-4 h-6 w-6 p-0 hover:bg-red-200"
        >
          <X className="h-4 w-4 text-red-500" />
        </Button>
      )}
    </div>
  )
}
