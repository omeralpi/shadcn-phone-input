import { cn } from "@/lib/utils";
import CopyButton from "./copy-button";

function CodeBlock({
  value,
  className,
  copyable = true,
}: {
  value: string;
  className?: string;
  codeClass?: string;
  copyable?: boolean;
  codeWrap?: boolean;
  noCodeFont?: boolean;
  noMask?: boolean;
}) {
  value = value || "";

  return (
    <pre
      style={{ maxHeight: "500px", overflowY: "auto" }}
      className={cn(
        `} relative h-full w-full whitespace-pre-wrap rounded-lg border bg-zinc-950 p-4 text-sm text-white/75
          dark:bg-zinc-900 `,
        className,
      )}
    >
      <CopyButton value={value} copyable={copyable} />
      {value}
    </pre>
  );
}

export default CodeBlock;
