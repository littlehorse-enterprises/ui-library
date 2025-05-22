import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@littlehorse-enterprises/ui/command";
import { Section } from "../App";

export default function CommandSection() {
  return (
    <Section>
      <h2 className="text-2xl font-semibold mb-4">Command</h2>
      <div className="space-y-4">
        <Command className="rounded-lg border shadow-md">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search</CommandItem>
              <CommandItem>Settings</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
    </Section>
  );
} 