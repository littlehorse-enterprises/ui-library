import { Button } from "@littlehorse-enterprises/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@littlehorse-enterprises/ui/dialog";
import { Section } from "../App";

export default function DialogSection() {
  return (
    <Section>
      <h2 className="text-2xl font-semibold mb-4">Dialog</h2>
      <div className="space-y-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Join the Rebellion</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Welcome to the Rebel Alliance</DialogTitle>
              <DialogDescription>
                Help us restore freedom to the galaxy.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p>I find your lack of faith disturbing. The Force is what gives a Jedi his power. It's an energy field created by all living things. It surrounds us and penetrates us. It binds the galaxy together.</p>
            </div>
            <DialogFooter>
              <Button variant="outline">I'm with the Empire</Button>
              <Button>For the Rebellion!</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </Section>
  );
} 