import { Skeleton } from "@littlehorse-enterprises/ui/skeleton";
import { Section } from "../App";

export default function SkeletonSection() {
  return (
    <Section>
      <h2 className="text-2xl font-semibold mb-4">Skeleton</h2>
      <div className="space-y-4">
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Text Skeleton</h4>
          <Skeleton className="h-4 w-[250px]" />
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Card Skeleton</h4>
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Avatar Skeleton</h4>
          <Skeleton className="h-12 w-12 rounded-full" />
        </div>
      </div>
    </Section>
  );
} 