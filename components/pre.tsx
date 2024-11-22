import React from "react";
import { Check, Copy } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

export default function Pre({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLPreElement>) {
  const [copied, setCopied] = React.useState(false);
  const ref = React.useRef<HTMLPreElement>(null);

  React.useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (copied) {
      timer = setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [copied]);

  const onClick = () => {
    setCopied(true);
    const content = ref.current?.textContent;
    if (content) {
      navigator.clipboard.writeText(content);
    }
  };

  return (
    <div className="relative max-h-[500px] overflow-auto">
      <Button
        variant="ghost"
        className={cn(
          `absolute right-4 top-4 size-8 bg-transparent p-0 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50`,
          copied && "text-foreground",
        )}
        onClick={onClick}
      >
        {!copied ? <Copy className="size-3" /> : <Check className="size-3" />}
      </Button>
      <pre
        ref={ref}
        className={cn(
          "overflow-auto rounded-lg border border-border bg-zinc-950 p-4 text-sm text-white/80 dark:bg-zinc-900",
          className,
        )}
        {...props}
      >
        {children}
      </pre>
    </div>
  );
}
