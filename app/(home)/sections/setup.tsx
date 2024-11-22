import { allSnippets, Snippet as SnippetType } from "contentlayer/generated";

import CodeBlock from "@/components/code-block";
import { Snippet } from "@/components/snippet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const snippets: SnippetType[] = allSnippets.sort((a, b) => a.order - b.order);

export default function Setup() {
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
        <CodeBlock value="npx shadcn-ui@latest init" className="mt-2" />
      </div>
      <div className="w-full">
        <h3 className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight">
          Install necessary Shadcn components:
        </h3>
        <p className="text-normal leading-7 [&:not(:first-child)]:mt-6">
          Run the{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            shadcn-ui
          </code>{" "}
          add command to add the necessary shadcn components to your project:
        </p>
        <div data-rehype-pretty-code-fragment="">
          <CodeBlock
            className="mt-2"
            value={`npx shadcn-ui@latest add input\nnpx shadcn-ui@latest add button\nnpx shadcn-ui@latest add command\nnpx shadcn-ui@latest add toast\nnpx shadcn-ui@latest add popover\nnpx shadcn-ui@latest add scroll-area`}
          />
        </div>
      </div>
      <div className="w-full">
        <h3 className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight">
          Install necessary React Phone Number Input package:
        </h3>
        <CodeBlock
          value={"npm install react-phone-number-input"}
          className="mt-2"
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
