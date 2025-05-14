import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@littlehorse-enterprises/ui";
import { Section } from "../App";

export default function ContextMenuSection() {
  return (
    <Section>
      <h2 className="text-2xl font-semibold mb-4">Context Menu</h2>
      <div className="space-y-4">
        <ContextMenu>
          <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>Back</ContextMenuItem>
            <ContextMenuItem>Forward</ContextMenuItem>
            <ContextMenuItem>Reload</ContextMenuItem>
            <ContextMenuItem>Save</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </div>
    </Section>
  );
} 