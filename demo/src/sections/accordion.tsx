import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@littlehorse-enterprises/ui";
import { Section } from "../App";

export default function AccordionSection() {
  return (
    <Section>
      <h2 className="text-2xl font-semibold mb-4">Jedi Archives</h2>
      <div className="space-x-4">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is the Force?</AccordionTrigger>
            <AccordionContent>
              The Force is what gives a Jedi his power. It's an energy field created by all living things. It surrounds us and penetrates us. It binds the galaxy together.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What are the Jedi Code?</AccordionTrigger>
            <AccordionContent>
              There is no emotion, there is peace. There is no ignorance, there is knowledge. There is no passion, there is serenity. There is no chaos, there is harmony. There is no death, there is the Force.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What is a lightsaber?</AccordionTrigger>
            <AccordionContent>
              An elegant weapon for a more civilized age. Not as clumsy or random as a blaster. An elegant weapon for a more civilized age.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Section>
  );
}
