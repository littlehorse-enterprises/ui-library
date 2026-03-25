'use client'

import { useEffect, useRef, useState } from 'react'
import { CheckCircle2, X } from 'lucide-react'
import { Alert, AlertTitle } from '../alert'
import { Button } from '../button'
import { cn } from '@/lib/utils'

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
    <div className="relative text-green-800">
      <Alert className="mb-4 border-green-200 bg-green-50 text-green-800">
        <AlertTitle className={cn('ml-6 leading-snug', onDismiss && 'pr-6')}>{message}</AlertTitle>
      </Alert>
      <CheckCircle2 className="absolute top-[1.15rem] left-4 h-4 w-4" />
      {onDismiss && (
        <>
          {autoDismiss && (
            <CountdownCircle remainingMs={remainingMs} durationMs={autoDismissMs} className="absolute top-4 right-4" />
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDismiss}
            aria-label="Dismiss success message"
            className="absolute top-4 right-4 h-6 w-6 p-0 hover:bg-green-200"
          >
            <X className="h-4 w-4" />
          </Button>
        </>
      )}
    </div>
  )
}
