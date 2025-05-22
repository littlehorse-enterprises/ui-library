import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@littlehorse-enterprises/ui/navigation-menu";
import { Section } from "../App";

export default function NavigationMenuSection() {
  return (
    <Section>
      <h2 className="text-2xl font-semibold mb-4">Navigation Menu</h2>
      <div className="space-y-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[400px]">
                  <li>
                    <NavigationMenuLink>Installation</NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink>Usage</NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink>Components</NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </Section>
  );
} 