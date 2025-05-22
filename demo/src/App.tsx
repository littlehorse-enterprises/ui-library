import { Toaster } from "@littlehorse-enterprises/ui/sonner";
import AccordionSection from "./sections/accordion";
import AlertSection from "./sections/alert";
import AlertDialogSection from "./sections/alert-dialog";
import AspectRatioSection from "./sections/aspect-ratio";
import BadgeSection from "./sections/badge";
import ButtonSection from "./sections/button";
import CardSection from "./sections/card";
import CarouselSection from "./sections/carousel";
import CollapsibleSection from "./sections/collapsible";
import CommandSection from "./sections/command";
import ContextMenuSection from "./sections/context-menu";
import DialogSection from "./sections/dialog";
import DrawerSection from "./sections/drawer";
import DropdownMenuSection from "./sections/dropdown-menu";
import FormSection from "./sections/form";
import HoverCardSection from "./sections/hover-card";
import InputSection from "./sections/input";
import InputOTPSection from "./sections/input-otp";
import LabelSection from "./sections/label";
import MenubarSection from "./sections/menubar";
import NavigationMenuSection from "./sections/navigation-menu";
import PaginationSection from "./sections/pagination";
import PopoverSection from "./sections/popover";
import ProgressSection from "./sections/progress";
import RadioGroupSection from "./sections/radio-group";
import ResizableSection from "./sections/resizable";
import ScrollAreaSection from "./sections/scroll-area";
import SelectSection from "./sections/select";
import SeparatorSection from "./sections/separator";
import SheetSection from "./sections/sheet";
import SkeletonSection from "./sections/skeleton";
import SliderSection from "./sections/slider";
import SonnerSection from "./sections/sonner";
import SwitchSection from "./sections/switch";
import TableSection from "./sections/table";
import TabsSection from "./sections/tabs";
import TextareaSection from "./sections/textarea";
import ToggleSection from "./sections/toggle";
import ToggleGroupSection from "./sections/toggle-group";
import TooltipSection from "./sections/tooltip";

export default function App() {
  return (
    <>
      <Toaster />
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">LittleHorse UI Demo 🎨</h1>

          <AccordionSection />
          <AlertSection />
          <AlertDialogSection />
          <AspectRatioSection />
          <BadgeSection />
          <ButtonSection />
          <CarouselSection />
          <CardSection />
          <CollapsibleSection />
          <CommandSection />
          <ContextMenuSection />
          <DialogSection />
          <DrawerSection />
          <DropdownMenuSection />
          <FormSection />
          <HoverCardSection />
          <InputSection />
          <InputOTPSection />
          <LabelSection />
          <MenubarSection />
          <NavigationMenuSection />
          <PaginationSection />
          <PopoverSection />
          <ProgressSection />
          <RadioGroupSection />
          <ResizableSection />
          <ScrollAreaSection />
          <SelectSection />
          <SeparatorSection />
          <SheetSection />
          <SkeletonSection />
          <SliderSection />
          <SonnerSection />
          <SwitchSection />
          <TableSection />
          <TabsSection />
          <TextareaSection />
          <ToggleSection />
          <ToggleGroupSection />
          <TooltipSection />
        </div>
      </div>
    </>
  );
}

export function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-white rounded-lg p-6 shadow-sm mb-6">
      {children}
    </section>
  );
}
