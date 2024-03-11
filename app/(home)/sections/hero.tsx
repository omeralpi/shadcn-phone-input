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
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { isValidPhoneNumber } from "react-phone-number-input";
import { z } from "zod";

const FormSchema = z.object({
  phone: z.string().refine(isValidPhoneNumber, { message: "Invalid phone number" }),
});

export default function Hero() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
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
      <section className="z-10 max-w-5xl w-full flex flex-col items-center text-center gap-5">
        <div className="z-10 w-full flex flex-col items-center text-center gap-5">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Shadcn Phone Input</h1>
          <p className="text-muted-foreground max-w-[450px]">
            An implementation of a Phone Input component built on top of Shadcn UI&apos;s input component.
          </p>
          <div className="flex gap-2 mt-1">
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
          <div className="w-full relative my-4 flex flex-col space-y-2">
            <div className="preview flex min-h-[350px] w-full justify-center p-10 items-start mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col items-start">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="flex flex-col items-start">
                        <FormLabel className="text-left">Phone Number</FormLabel>
                        <FormControl className="w-full">
                          <PhoneInput placeholder="Enter a phone number" {...field} />
                        </FormControl>
                        <FormDescription className="text-left">Enter a phone number</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <pre>
                    <code className="text-foreground">{JSON.stringify(form.watch("phone"), null, 2)}</code>
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
