import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@littlehorse-enterprises/ui/carousel";
import { Section } from "../App";

export default function CarouselSection() {
  return (
    <Section>
      <h2 className="text-2xl font-bold mb-4">Star Wars Timeline</h2>
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {[
            "Episode I: The Phantom Menace",
            "Episode II: Attack of the Clones",
            "Episode III: Revenge of the Sith",
            "Episode IV: A New Hope",
            "Episode V: The Empire Strikes Back",
            "Episode VI: Return of the Jedi"
          ].map((episode, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <div className="flex aspect-square items-center justify-center p-6 bg-gray-100 rounded-lg">
                  <span className="text-sm font-semibold text-center">{episode}</span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Section>
  );
} 