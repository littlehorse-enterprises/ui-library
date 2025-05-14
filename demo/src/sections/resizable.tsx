import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@littlehorse-enterprises/ui";
import { Section } from "../App";

export default function ResizableSection() {
  return (
    <Section>
      <h2 className="text-2xl font-bold mb-4">Resizable</h2>
      <ResizablePanelGroup direction="horizontal" className="min-h-[200px] w-full rounded-lg border">
        <ResizablePanel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Sidebar</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={75}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </Section>
  );
} 