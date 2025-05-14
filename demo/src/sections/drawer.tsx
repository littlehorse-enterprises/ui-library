import {
	Button, Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger
} from "@littlehorse-enterprises/ui";
import { Section } from "../App";

export default function DrawerSection() {
  return (
    <Section>
      <h2 className="text-2xl font-bold mb-4">Drawer</h2>
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Edit profile</DrawerTitle>
            <DrawerDescription>Make changes to your profile here.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <p>Drawer content goes here</p>
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Section>
  );
} 