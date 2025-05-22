import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@littlehorse-enterprises/ui-library/card";
import { Section } from "../App";

export default function CardSection() {
  return (
    <Section>
      <h2 className="text-2xl font-semibold mb-4">Cards</h2>
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Jedi Order</CardTitle>
            <CardDescription>Guardians of Peace and Justice</CardDescription>
          </CardHeader>
          <CardContent>
            <p>For over a thousand generations, the Jedi Knights were the guardians of peace and justice in the Old Republic.</p>
          </CardContent>
          <CardFooter>
            <p>May the Force be with you.</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Millennium Falcon</CardTitle>
            <CardDescription>Fastest hunk of junk in the galaxy</CardDescription>
          </CardHeader>
          <CardContent>
            <p>She may not look like much, but she's got it where it counts, kid. I've made a lot of special modifications myself.</p>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
} 