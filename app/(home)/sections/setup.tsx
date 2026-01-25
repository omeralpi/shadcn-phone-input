"use client";

import { useState } from "react";
import { allSnippets, Snippet as SnippetType } from "contentlayer/generated";

import CodeBlock, { PackageManager } from "@/components/code-block";
import { Snippet } from "@/components/snippet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const snippets: SnippetType[] = allSnippets.sort((a, b) => a.order - b.order);

export default function Setup() {
  const [selectedPm, setSelectedPm] = useState<PackageManager>("pnpm");

  return (
    <section id="setup" className="w-full max-w-5xl py-8">
      <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
        Setup
      </h2>
      <div className="w-full">
        <h3 className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight">
          Install Shadcn via CLI
        </h3>
        <p className="text-normal leading-7 [&:not(:first-child)]:mt-6">
          Run the{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            shadcn-ui
          </code>{" "}
          init command to setup your project:
        </p>
        <CodeBlock
          className="mt-2"
          selectedPm={selectedPm}
          onPmChange={setSelectedPm}
          commands={{
            pnpm: "pnpm dlx shadcn@latest init",
            npm: "npx shadcn@latest init",
            yarn: "yarn dlx shadcn@latest init",
            bun: "bunx --bun shadcn@latest init",
          }}
        />
      </div>
      <div className="w-full">
        <h3 className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight">
          Install necessary Shadcn components:
        </h3>
        <p className="text-normal leading-7 [&:not(:first-child)]:mt-6">
          Run the{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            shadcn
          </code>{" "}
          add command to add the necessary shadcn components to your project:
        </p>
        <div data-rehype-pretty-code-fragment="">
          <CodeBlock
            className="mt-2"
            selectedPm={selectedPm}
            onPmChange={setSelectedPm}
            commands={{
              pnpm: `pnpm dlx shadcn@latest add input
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add command
pnpm dlx shadcn@latest add toast
pnpm dlx shadcn@latest add popover
pnpm dlx shadcn@latest add scroll-area`,
              npm: `npx shadcn@latest add input
npx shadcn@latest add button
npx shadcn@latest add command
npx shadcn@latest add toast
npx shadcn@latest add popover
npx shadcn@latest add scroll-area`,
              yarn: `yarn dlx shadcn@latest add input
yarn dlx shadcn@latest add button
yarn dlx shadcn@latest add command
yarn dlx shadcn@latest add toast
yarn dlx shadcn@latest add popover
yarn dlx shadcn@latest add scroll-area`,
              bun: `bunx --bun shadcn@latest add input
bunx --bun shadcn@latest add button
bunx --bun shadcn@latest add command
bunx --bun shadcn@latest add toast
bunx --bun shadcn@latest add popover
bunx --bun shadcn@latest add scroll-area`,
            }}
          />
        </div>
      </div>
      <div className="w-full">
        <h3 className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight">
          Install necessary React Phone Number Input package:
        </h3>
        <CodeBlock
          className="mt-2"
          selectedPm={selectedPm}
          onPmChange={setSelectedPm}
          commands={{
            pnpm: "pnpm add react-phone-number-input",
            npm: "npm install react-phone-number-input",
            yarn: "yarn add react-phone-number-input",
            bun: "bun add react-phone-number-input",
          }}
        />
      </div>
      <div className="w-full">
        <h3 className="font-heading mt-8 scroll-m-20 pb-2 text-lg font-semibold tracking-tight">
          To use the phone input component:
        </h3>
        {/* <ul className="list-decimal list-outside ml-5 marker:text-muted-foreground space-y-3 text-sm">
          {snippets.map((snippet) => (
            <li key={snippet.file}>
              Copy & paste{" "}
              <a href={`#${snippet.file}`} className="font-mono underline hover:no-underline">
                {snippet.file}
              </a>
            </li>
          ))}
        </ul> */}
        <div className="mt-10 flex flex-col">
          <h3 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0">
            Snippets
          </h3>
          <Accordion type="single" collapsible defaultValue={snippets[0].file}>
            {snippets.map((snippet) => (
              <AccordionItem key={snippet.slug} value={snippet.file}>
                <AccordionTrigger id={snippet.file}>
                  <code>{snippet.file}</code>
                </AccordionTrigger>
                <AccordionContent>
                  <Snippet snippet={snippet} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
