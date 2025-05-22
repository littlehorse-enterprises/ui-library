import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Drawer, DrawerContent, DrawerDescription, DrawerTitle, DrawerTrigger } from './index'

describe('Drawer', () => {
  it('renders and shows content on trigger', () => {
    render(
      <Drawer>
        <DrawerTrigger>Open Drawer</DrawerTrigger>
        <DrawerContent>
          <DrawerTitle>Drawer Title</DrawerTitle>
          <DrawerDescription>Drawer Description</DrawerDescription>
        </DrawerContent>
      </Drawer>
    )
    const trigger = screen.getByText('Open Drawer')
    expect(trigger).toBeInTheDocument()
    fireEvent.click(trigger)
    expect(screen.getByText('Drawer Title')).toBeInTheDocument()
    expect(screen.getByText('Drawer Description')).toBeInTheDocument()
  })
}) 