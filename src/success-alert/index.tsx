'use client'

import { useEffect, useRef, useState } from 'react'
import { CheckCircle2, X } from 'lucide-react'
import { Button } from '../button'

const DEFAULT_DISMISS_MS = 8000

type CountdownCircleProps = {
  remainingMs: number
  durationMs: number
  className?: string
}

function CountdownCircle({ remainingMs, durationMs, className }: CountdownCircleProps) {
  const radius = 10
  const circumference = 2 * Math.PI * radius
  const progress = remainingMs / durationMs
  const offset = circumference * (1 - progress)
  const secondsRemaining = Math.ceil(remainingMs / 1000)

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={`pointer-events-none ${className ?? ''}`}
      role="img"
      aria-label={`${secondsRemaining} seconds remaining`}
      aria-live="polite"
    >
      <circle cx="12" cy="12" r={radius} fill="none" stroke="rgb(156 163 175)" strokeWidth="2" />
      <circle
        cx="12"
        cy="12"
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 12 12)"
        style={{ transition: 'stroke-dashoffset 100ms linear' }}
      />
    </svg>
  )
}

type SuccessAlertProps = {
  message: string | null
  onDismiss?: () => void
  autoDismiss?: boolean
  autoDismissMs?: number
}

export function SuccessAlert({
  message,
  onDismiss,
  autoDismiss,
  autoDismissMs = DEFAULT_DISMISS_MS,
}: SuccessAlertProps) {
  const [remainingMs, setRemainingMs] = useState(autoDismissMs)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const startTimeRef = useRef<number>(Date.now())

  useEffect(() => {
    if (!onDismiss || !autoDismiss) return

    startTimeRef.current = Date.now()
    setRemainingMs(autoDismissMs)

    timerRef.current = setTimeout(() => {
      onDismiss()
    }, autoDismissMs)

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current
      const remaining = Math.max(0, autoDismissMs - elapsed)
      setRemainingMs(remaining)
    }, 100)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [onDismiss, autoDismiss, autoDismissMs])

  const handleDismiss = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    if (intervalRef.current) clearInterval(intervalRef.current)
    onDismiss?.()
  }

  if (!message) return null

  return (
    <div
      role="status"
      className="flex items-start gap-2 rounded-lg border border-green-200 bg-green-50 p-4 text-sm leading-snug font-medium text-green-800"
    >
      <span className="flex h-lh shrink-0 items-center" aria-hidden="true">
        <CheckCircle2 className="size-4" />
      </span>
      <p className="min-w-0 flex-1">{message}</p>
      {onDismiss && (
        <span className="relative flex h-lh shrink-0 items-center">
          {autoDismiss && (
            <CountdownCircle remainingMs={remainingMs} durationMs={autoDismissMs} className="absolute inset-0 m-auto" />
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDismiss}
            aria-label="Dismiss success message"
            className="size-6 p-0 hover:bg-green-200"
          >
            <X className="size-4" />
          </Button>
        </span>
      )}
    </div>
  )
}
