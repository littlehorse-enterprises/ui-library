import {
    Button, Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@littlehorse-enterprises/ui";
import { Section } from "../App";

export default function SheetSection() {
  return (
    <Section>
      <h2 className="text-2xl font-bold mb-4">Sheet</h2>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Open Sheet</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <p>Sheet content goes here</p>
          </div>
        </SheetContent>
      </Sheet>
    </Section>
  );
} 