import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

import { siteConfig } from "../config/site";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shadcn Phone Input",
  description: `A phone input component implementation of Shadcn's input component`,
  keywords: [
    "shadcn",
    "phone input",
    "shadcn/ui",
    "shadcn phone input",
    "phone input component",
    "shadcn phone input component",
    "input",
    "radix ui",
    "react phone input",
  ],
  authors: [
    {
      name: "Omer Alpi",
      url: "https://jaleelbennett.com",
    },
  ],
  creator: "Omer Alpi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@omeralpi",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="smooth-scroll" lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
