import type { Meta, StoryObj } from "@storybook/react"
import { CalendarDays } from "lucide-react"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "."
import { Avatar, AvatarFallback, AvatarImage } from "../avatar"
import { Button } from "../button"

const meta: Meta<typeof HoverCard> = {
  title: "Components/Hover Card",
  component: HoverCard,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof HoverCard>

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const WithCustomStyling: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="text-blue-600">
          @nextjs
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 bg-blue-50 border-blue-200">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-blue-800">@nextjs</h4>
            <p className="text-sm text-blue-600">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 text-blue-600 opacity-70" />
              <span className="text-xs text-blue-600">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const WithImage: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">View Profile</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-3">
          <div className="relative h-40 w-full overflow-hidden rounded-md">
            <img
              src="https://images.unsplash.com/photo-1522252234503-e356532cafd5"
              alt="Profile cover"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src="https://github.com/vercel.png" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">John Doe</h4>
              <p className="text-sm text-muted-foreground">
                Software Engineer
              </p>
            </div>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
            <span>Joined December 2021</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const WithStats: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">View Stats</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-3">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/vercel.png" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">@nextjs</h4>
              <p className="text-sm text-muted-foreground">
                The React Framework
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="space-y-1">
              <p className="text-sm font-medium">1.2M</p>
              <p className="text-xs text-muted-foreground">Followers</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">2.4K</p>
              <p className="text-xs text-muted-foreground">Following</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">12.5K</p>
              <p className="text-xs text-muted-foreground">Repositories</p>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const WithLinks: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">Quick Links</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-3">
          <h4 className="text-sm font-semibold">Quick Links</h4>
          <div className="space-y-2">
            <a
              href="#"
              className="block text-sm text-blue-600 hover:text-blue-800"
            >
              Documentation
            </a>
            <a
              href="#"
              className="block text-sm text-blue-600 hover:text-blue-800"
            >
              GitHub Repository
            </a>
            <a
              href="#"
              className="block text-sm text-blue-600 hover:text-blue-800"
            >
              Community
            </a>
            <a
              href="#"
              className="block text-sm text-blue-600 hover:text-blue-800"
            >
              Support
            </a>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
} 