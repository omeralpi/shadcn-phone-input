"use client";
import Hero from "@/app/(home)/sections/hero";
import Setup from "@/app/(home)/sections/setup";
import { ModeToggle } from "@/components/mode-toggle";
import { SvgIcons } from "@/components/svg-icons";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import Variants from "./sections/variants";

export default function Home() {
  return (
    <>
      <div className="container flex max-w-5xl justify-between py-40">
        <ModeToggle />
        <main className="flex min-h-screen w-full flex-col items-center justify-between scroll-smooth">
          <Hero />
          <Setup />
          <Variants />
        </main>
        <aside className="ml-20 hidden text-sm xl:block">
          <div className="sticky top-10 text-sm">
            <h3 className="mb-6 whitespace-nowrap font-medium">On this page</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#setup" className="font-light text-muted-foreground">
                  Setup
                </a>
              </li>
              <li>
                <a
                  href="#variants"
                  className="font-light text-muted-foreground"
                >
                  Variants
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
      <footer className="border-t py-6 md:px-8 md:py-0">
        <div className="container flex max-w-5xl flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Omer Alpi
            </a>
            .
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-center">
            <div className="text-sm text-muted-foreground">Also available:</div>
            <Link
              href="https://shadcn-vue-phone-input.vercel.app"
              className={buttonVariants({
                size: "sm",
              })}
              target="_blank"
            >
              <SvgIcons.vue className="mr-2 size-5" />
              Shadcn Vue Phone Input
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
