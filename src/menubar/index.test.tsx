import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarLabel,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger
} from '.'
describe('Menubar', () => {
  it('renders triggers and opens content on click', async () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New Tab</MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print...</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
    const trigger = screen.getByText('File')
    expect(trigger).toBeInTheDocument()
    const user = userEvent.setup()
    await user.click(trigger)
    expect(screen.getByText('New Tab')).toBeInTheDocument()
    expect(screen.getByText('New Window')).toBeInTheDocument()
    expect(screen.getByText('Print...')).toBeInTheDocument()
  })

  it('renders submenus and allows navigation', async () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>Share</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Email link</MenubarItem>
                <MenubarItem>Messages</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
    const user = userEvent.setup()
    await user.click(screen.getByText('File'))
    await user.hover(screen.getByText('Share'))
    await waitFor(() => {
      expect(screen.getByText('Email link')).toBeInTheDocument()
      expect(screen.getByText('Messages')).toBeInTheDocument()
    })
  })

  it('renders checkboxes and toggles them', async () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem checked>Show Toolbar</MenubarCheckboxItem>
            <MenubarCheckboxItem>Show Statusbar</MenubarCheckboxItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
    const user = userEvent.setup()
    await user.click(screen.getByText('View'))
    expect(screen.getByText('Show Toolbar')).toBeInTheDocument()
    expect(screen.getByText('Show Statusbar')).toBeInTheDocument()
  })

  it('renders radio group and selects items', async () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Profiles</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value="benoit">
              <MenubarLabel inset>People</MenubarLabel>
              <MenubarSeparator />
              <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
              <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
              <MenubarRadioItem value="luis">Luis</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
    const user = userEvent.setup()
    await user.click(screen.getByText('Profiles'))
    expect(screen.getByText('Andy')).toBeInTheDocument()
    expect(screen.getByText('Benoit')).toBeInTheDocument()
    expect(screen.getByText('Luis')).toBeInTheDocument()
  })

  it('renders shortcuts and custom styling', async () => {
    render(
      <Menubar className="bg-blue-50 border-blue-200">
        <MenubarMenu>
          <MenubarTrigger className="text-blue-800">File</MenubarTrigger>
          <MenubarContent className="bg-blue-50 border-blue-200">
            <MenubarItem className="text-blue-800">
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
    const user = userEvent.setup()
    await user.click(screen.getByText('File'))
    const shortcut = screen.getByText('⌘T')
    expect(shortcut).toBeInTheDocument()
    expect(screen.getByText('File')).toHaveClass('text-blue-800')
    expect(screen.getByText('New Tab')).toHaveClass('text-blue-800')
  })
}) 