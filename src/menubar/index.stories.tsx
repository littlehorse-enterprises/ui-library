import type { Meta, StoryObj } from "@storybook/react"
import { ChevronRight } from "lucide-react"
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
    MenubarTrigger,
} from "."

const meta: Meta<typeof Menubar> = {
  title: "Components/Menubar",
  component: Menubar,
  parameters: {
    layout: 'centered',
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Menubar>

export const Default: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            New Window <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>New Incognito Window</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email link</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
              <MenubarItem>Notes</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Print... <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Find</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Search the web</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Find...</MenubarItem>
              <MenubarItem>Find Next</MenubarItem>
              <MenubarItem>Find Previous</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked>
            Show Toolbar
          </MenubarCheckboxItem>
          <MenubarCheckboxItem>Show Statusbar</MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset>
            Enter Full Screen
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Profiles</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="benoit">
            <MenubarLabel inset>People</MenubarLabel>
            <MenubarSeparator />
            <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
            <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
            <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset>Edit...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Add Profile...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}

export const WithCustomStyling: Story = {
  render: () => (
    <Menubar className="bg-blue-50 border-blue-200">
      <MenubarMenu>
        <MenubarTrigger className="text-blue-800 hover:bg-blue-100">
          File
        </MenubarTrigger>
        <MenubarContent className="bg-blue-50 border-blue-200">
          <MenubarItem className="text-blue-800 hover:bg-blue-100">
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem className="text-blue-800 hover:bg-blue-100">
            New Window <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator className="bg-blue-200" />
          <MenubarItem className="text-blue-800 hover:bg-blue-100">
            Print... <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="text-blue-800 hover:bg-blue-100">
          Edit
        </MenubarTrigger>
        <MenubarContent className="bg-blue-50 border-blue-200">
          <MenubarItem className="text-blue-800 hover:bg-blue-100">
            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem className="text-blue-800 hover:bg-blue-100">
            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator className="bg-blue-200" />
          <MenubarItem className="text-blue-800 hover:bg-blue-100">
            Cut
          </MenubarItem>
          <MenubarItem className="text-blue-800 hover:bg-blue-100">
            Copy
          </MenubarItem>
          <MenubarItem className="text-blue-800 hover:bg-blue-100">
            Paste
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}

export const WithNestedMenus: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>
              New
              <ChevronRight className="ml-auto h-4 w-4" />
            </MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Document</MenubarItem>
              <MenubarItem>Spreadsheet</MenubarItem>
              <MenubarItem>Presentation</MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>
                  More
                  <ChevronRight className="ml-auto h-4 w-4" />
                </MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Drawing</MenubarItem>
                  <MenubarItem>Form</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Open...</MenubarItem>
          <MenubarItem>Save</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}

export const WithCheckboxes: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked>
            Show Toolbar
          </MenubarCheckboxItem>
          <MenubarCheckboxItem checked>
            Show Statusbar
          </MenubarCheckboxItem>
          <MenubarCheckboxItem>
            Show Sidebar
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarLabel inset>Theme</MenubarLabel>
          <MenubarCheckboxItem>
            Dark Mode
          </MenubarCheckboxItem>
          <MenubarCheckboxItem>
            Compact Mode
          </MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}

export const WithRadioGroups: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Preferences</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="light">
            <MenubarLabel inset>Theme</MenubarLabel>
            <MenubarRadioItem value="light">Light</MenubarRadioItem>
            <MenubarRadioItem value="dark">Dark</MenubarRadioItem>
            <MenubarRadioItem value="system">System</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarRadioGroup value="en">
            <MenubarLabel inset>Language</MenubarLabel>
            <MenubarRadioItem value="en">English</MenubarRadioItem>
            <MenubarRadioItem value="fr">French</MenubarRadioItem>
            <MenubarRadioItem value="de">German</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
} 