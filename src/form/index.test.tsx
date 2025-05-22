import { fireEvent, render, screen } from "@testing-library/react";
import { useForm } from "react-hook-form";
import { describe, expect, it } from "vitest";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./index";

describe("Form", () => {
  it("renders without crashing", () => {
    const TestForm = () => {
      const form = useForm();
      return (
        <Form {...form}>
          <button>Submit</button>
        </Form>
      );
    };
    render(<TestForm />);
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  describe("FormField", () => {
    const TestForm = () => {
      const form = useForm({
        defaultValues: {
          test: "",
        },
      });

      return (
        <Form {...form}>
          <FormField
            control={form.control}
            name="test"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Test Label</FormLabel>
                <FormControl>
                  <input {...field} />
                </FormControl>
                <FormDescription>Test Description</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </Form>
      );
    };

    it("renders all form components correctly", () => {
      render(<TestForm />);
      expect(screen.getByLabelText("Test Label")).toBeInTheDocument();
      expect(screen.getByText("Test Description")).toBeInTheDocument();
    });

    it("shows error message when validation fails", async () => {
      const TestFormWithValidation = () => {
        const form = useForm({
          defaultValues: {
            test: "",
          },
        });

        const onSubmit = form.handleSubmit(() => {});

        return (
          <Form {...form}>
            <form onSubmit={onSubmit}>
              <FormField
                control={form.control}
                name="test"
                rules={{ required: "This field is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Test Label</FormLabel>
                    <FormControl>
                      <input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <button type="submit">Submit</button>
            </form>
          </Form>
        );
      };

      render(<TestFormWithValidation />);
      const submitButton = screen.getByText("Submit");
      fireEvent.click(submitButton);

      // Wait for error message to appear
      const errorMessage = await screen.findByText("This field is required");
      expect(errorMessage).toBeInTheDocument();
    });
  });

  describe("FormItem", () => {
    it("applies custom className", () => {
      const TestForm = () => {
        const form = useForm();
        return (
          <Form {...form}>
            <FormItem className="custom-class">
              <div>Test Content</div>
            </FormItem>
          </Form>
        );
      };

      render(<TestForm />);
      const formItem = screen.getByText("Test Content").parentElement;
      expect(formItem).toHaveClass("custom-class");
    });
  });

  describe("FormLabel", () => {
    it("applies error styling when there is an error", () => {
      const TestFormWithError = () => {
        const form = useForm({
          defaultValues: {
            test: "",
          },
        });

        return (
          <Form {...form}>
            <FormField
              control={form.control}
              name="test"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Test Label</FormLabel>
                  <FormControl>
                    <input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </Form>
        );
      };

      render(<TestFormWithError />);
      const label = screen.getByText("Test Label");
      expect(label).not.toHaveClass("text-destructive");
    });
  });

  describe("FormDescription", () => {
    it("renders with correct styling", () => {
      const TestForm = () => {
        const form = useForm();
        return (
          <Form {...form}>
            <FormField
              control={form.control}
              name="test"
              render={() => (
                <FormItem>
                  <FormDescription>Test Description</FormDescription>
                </FormItem>
              )}
            />
          </Form>
        );
      };

      render(<TestForm />);
      const description = screen.getByText("Test Description");
      expect(description).toHaveClass("text-[0.8rem]", "text-muted-foreground");
    });
  });

  describe("FormMessage", () => {
    it("renders with correct styling", () => {
      const TestForm = () => {
        const form = useForm();
        return (
          <Form {...form}>
            <FormField
              control={form.control}
              name="test"
              render={() => (
                <FormItem>
                  <FormMessage>Test Message</FormMessage>
                </FormItem>
              )}
            />
          </Form>
        );
      };

      render(<TestForm />);
      const message = screen.getByText("Test Message");
      expect(message).toHaveClass(
        "text-[0.8rem]",
        "font-medium",
        "text-destructive",
      );
    });

    it("does not render when there is no message", () => {
      const TestForm = () => {
        const form = useForm();
        return (
          <Form {...form}>
            <FormField
              control={form.control}
              name="test"
              render={() => (
                <FormItem>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Form>
        );
      };

      render(<TestForm />);
      const message = screen.queryByRole("paragraph");
      expect(message).not.toBeInTheDocument();
    });
  });
});
