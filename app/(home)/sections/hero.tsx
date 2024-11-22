import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { isValidPhoneNumber } from "react-phone-number-input";
import { z } from "zod";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PhoneInput } from "@/components/ui/phone-input";
import { toast } from "@/components/ui/use-toast";
import { siteConfig } from "@/config/site";

const FormSchema = z.object({
  phone: z
    .string()
    .refine(isValidPhoneNumber, { message: "Invalid phone number" }),
});

export default function Hero() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      phone: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <>
      <section className="z-10 flex w-full max-w-5xl flex-col items-center gap-5 text-center">
        <div className="z-10 flex w-full flex-col items-center gap-5 text-center">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            Shadcn Phone Input
          </h1>
          <p className="max-w-[450px] text-muted-foreground">
            An implementation of a Phone Input component for <b>React</b>, built
            on top of Shadcn UI&apos;s input component.
          </p>
          <div className="mt-1 flex gap-2">
            <Link
              href="#try"
              className={`${buttonVariants({
                variant: "default",
                size: "lg",
              })} min-w-[150px] shadow-sm`}
            >
              Try it out
            </Link>
            <Link
              href={siteConfig.links.github}
              className={`${buttonVariants({
                variant: "secondary",
                size: "lg",
              })} shadow-sm`}
            >
              Github
            </Link>
          </div>
        </div>

        <div id="try" className="w-full py-8">
          <div className="relative my-4 flex w-full flex-col space-y-2">
            <div className="preview relative mt-2 flex min-h-[350px] w-full items-start justify-center rounded-md border p-10 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-col items-start space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="flex flex-col items-start">
                        <FormLabel className="text-left">
                          Phone Number
                        </FormLabel>
                        <FormControl className="w-full">
                          <PhoneInput
                            placeholder="Enter a phone number"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="text-left">
                          Enter a phone number
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <pre>
                    <code className="text-foreground">
                      {JSON.stringify(form.watch("phone"), null, 2)}
                    </code>
                  </pre>
                  <Button type="submit">Submit</Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
