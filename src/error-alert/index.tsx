import { AlertCircle, X } from 'lucide-react'
import { Alert, AlertTitle } from '@/alert'
import { Button } from '@/button'

type ErrorAlertProps = {
  message: string | null
  onDismiss?: () => void
}

export function ErrorAlert({ message, onDismiss }: ErrorAlertProps) {
  if (!message) return null

  return (
    <div className="relative">
      <Alert variant="destructive" className="mb-4">
        <AlertCircle className="h-4 w-4 translate-y-1" />
        <AlertTitle className={`translate-y-0.5 leading-snug ${onDismiss ? 'pr-6' : ''}`}>{message}</AlertTitle>
      </Alert>
      {onDismiss && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onDismiss}
          aria-label="Dismiss error message"
          className="absolute top-4.5 right-4 h-6 w-6 bg-white p-0 hover:bg-red-200"
        >
          <X className="h-4 w-4 text-red-500" />
        </Button>
      )}
    </div>
  )
}
