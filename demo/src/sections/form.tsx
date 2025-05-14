import { Button, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Input } from "@littlehorse-enterprises/ui";
import { useForm } from "react-hook-form";
import { Section } from "../App";

export default function FormSection() {
  const form = useForm({
    defaultValues: {
      name: "",
    },
  });

  return (
    <Section>
      <h2 className="text-2xl font-semibold mb-4">Jedi Academy Application</h2>
      <div className="space-y-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit((data) => console.log(data))}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormDescription>
                    Remember: Your focus determines your reality.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Begin Jedi Training</Button>
          </form>
        </Form>
      </div>
    </Section>
  );
} 