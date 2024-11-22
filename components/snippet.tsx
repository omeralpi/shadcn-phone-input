"use client";

import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";

import type { Snippet as SnippetType } from ".contentlayer/generated";
import Pre from "./pre";

const components = {
  pre: Pre,
};

export function Snippet({ snippet }: { snippet: SnippetType }) {
  const MDXContent = useMDXComponent(snippet.body.code);
  return <MDXContent components={components} />;
}
