import { Avatar, AvatarFallback, AvatarImage } from "@littlehorse-enterprises/ui";
import { Section } from "../App";

export default function AvatarSection() {
  return (
    <Section>
      <h2 className="text-2xl font-semibold mb-4">Avatars</h2>
      <div className="flex space-x-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    </Section>
  );
} 