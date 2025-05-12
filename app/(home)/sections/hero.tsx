import Link from "next/link";

import { FormInDialogExample } from "@/components/examples/form-in-dialog-example";
import { FormInSheetExample } from "@/components/examples/form-in-sheet-example";
import { StandaloneFormExample } from "@/components/examples/standalone-form-dialog-example";
import { buttonVariants } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { siteConfig } from "@/config/site";

export default function Hero() {
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
              <Tabs defaultValue="standalone-form">
                <TabsList className="mb-6">
                  <TabsTrigger value="standalone-form">
                    Standalone Form
                  </TabsTrigger>
                  <TabsTrigger value="dialog-form">Form in Dialog</TabsTrigger>
                  <TabsTrigger value="sheet-form">Form in Sheet</TabsTrigger>
                </TabsList>
                <TabsContent value="standalone-form">
                  <StandaloneFormExample />
                </TabsContent>
                <TabsContent value="dialog-form">
                  <FormInDialogExample />
                </TabsContent>
                <TabsContent value="sheet-form">
                  <FormInSheetExample />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
