import type { Meta, StoryObj } from "@storybook/react"
import { Check, ChevronRight, Circle } from "lucide-react"
import {
    ContextMenu,
    ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,
} from "."

const meta: Meta<typeof ContextMenu> = {
  title: "Components/Context Menu",
  component: ContextMenu,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ContextMenu>

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>
          Back
          <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem disabled>
          Forward
          <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Reload
          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>
            More Tools
            <ChevronRight className="ml-auto h-4 w-4" />
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>
              Save Page As...
              <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>Create Shortcut...</ContextMenuItem>
            <ContextMenuItem>Name Window...</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Developer Tools</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked>
          Show Bookmarks Bar
          <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value="pedro">
          <ContextMenuLabel inset>People</ContextMenuLabel>
          <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
          <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  ),
}

export const WithCustomStyling: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64 bg-blue-50 border-blue-200">
        <ContextMenuItem className="text-blue-800 hover:bg-blue-100">
          <Check className="mr-2 h-4 w-4" />
          Check Item
        </ContextMenuItem>
        <ContextMenuItem className="text-blue-800 hover:bg-blue-100">
          <Circle className="mr-2 h-4 w-4" />
          Circle Item
        </ContextMenuItem>
        <ContextMenuSeparator className="bg-blue-200" />
        <ContextMenuItem className="text-blue-800 hover:bg-blue-100">
          Custom Item
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}

export const WithNestedMenus: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>
            File
            <ChevronRight className="ml-auto h-4 w-4" />
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>New File</ContextMenuItem>
            <ContextMenuItem>Open File...</ContextMenuItem>
            <ContextMenuItem>Save</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Exit</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>
            Edit
            <ChevronRight className="ml-auto h-4 w-4" />
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>Undo</ContextMenuItem>
            <ContextMenuItem>Redo</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Cut</ContextMenuItem>
            <ContextMenuItem>Copy</ContextMenuItem>
            <ContextMenuItem>Paste</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>
            View
            <ChevronRight className="ml-auto h-4 w-4" />
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>Zoom In</ContextMenuItem>
            <ContextMenuItem>Zoom Out</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Full Screen</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuContent>
    </ContextMenu>
  ),
}

export const WithCheckboxes: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuLabel>View Options</ContextMenuLabel>
        <ContextMenuCheckboxItem checked>
          Show Toolbar
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem checked>
          Show Statusbar
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>
          Show Sidebar
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuLabel>Theme</ContextMenuLabel>
        <ContextMenuCheckboxItem>
          Dark Mode
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>
          Compact Mode
        </ContextMenuCheckboxItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}

export const WithRadioGroups: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuRadioGroup value="light">
          <ContextMenuLabel inset>Theme</ContextMenuLabel>
          <ContextMenuRadioItem value="light">Light</ContextMenuRadioItem>
          <ContextMenuRadioItem value="dark">Dark</ContextMenuRadioItem>
          <ContextMenuRadioItem value="system">System</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value="en">
          <ContextMenuLabel inset>Language</ContextMenuLabel>
          <ContextMenuRadioItem value="en">English</ContextMenuRadioItem>
          <ContextMenuRadioItem value="fr">French</ContextMenuRadioItem>
          <ContextMenuRadioItem value="de">German</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  ),
} 