import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from './index'

describe('AlertDialog', () => {
  it('renders alert dialog trigger', () => {
    render(
      <AlertDialog>
        <AlertDialogTrigger>Open Alert</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Alert Title</AlertDialogTitle>
            <AlertDialogDescription>Alert Description</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
    expect(screen.getByText('Open Alert')).toBeInTheDocument()
  })

  it('opens alert dialog on trigger click', () => {
    render(
      <AlertDialog>
        <AlertDialogTrigger>Open Alert</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Alert Title</AlertDialogTitle>
            <AlertDialogDescription>Alert Description</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
    
    const trigger = screen.getByText('Open Alert')
    fireEvent.click(trigger)
    
    expect(screen.getByText('Alert Title')).toBeInTheDocument()
    expect(screen.getByText('Alert Description')).toBeInTheDocument()
    expect(screen.getByText('Cancel')).toBeInTheDocument()
    expect(screen.getByText('Continue')).toBeInTheDocument()
  })
}) 