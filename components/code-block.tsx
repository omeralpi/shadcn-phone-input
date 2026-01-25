"use client";

import { Terminal } from "lucide-react";

import { cn } from "@/lib/utils";

import CopyButton from "./copy-button";

export const packageManagers = ["pnpm", "npm", "yarn", "bun"] as const;

export type PackageManager = (typeof packageManagers)[number];

export type PackageManagerCommands = Record<PackageManager, string>;

function CodeBlock({
  commands,
  selectedPm,
  onPmChange,
  className,
}: {
  commands: PackageManagerCommands;
  selectedPm: PackageManager;
  onPmChange: (pm: PackageManager) => void;
  className?: string;
}) {
  const value = commands[selectedPm];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border bg-zinc-950 dark:bg-zinc-900",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-2">
        <Terminal className="size-4 text-zinc-400" />
        <div className="flex items-center gap-2">
          {packageManagers.map((pm) => (
            <button
              key={pm}
              onClick={() => onPmChange(pm)}
              className={cn(
                "rounded-md px-2 py-1 text-sm transition-colors",
                selectedPm === pm
                  ? "bg-zinc-800 text-zinc-100"
                  : "text-zinc-400 hover:text-zinc-300",
              )}
            >
              {pm}
            </button>
          ))}
        </div>
      </div>
      <pre
        style={{ maxHeight: "500px", overflowY: "auto" }}
        className="relative whitespace-pre-wrap p-4 text-sm text-white/75"
      >
        <CopyButton value={value} />
        {value}
      </pre>
    </div>
  );
}

export default CodeBlock;
