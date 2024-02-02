"use client";

import { useMDXComponent } from "next-contentlayer/hooks";
import React from "react";
import Pre from "./pre";
import type { Snippet as SnippetType } from ".contentlayer/generated";

const components = {
  pre: Pre,
};

export function Snippet({ snippet }: { snippet: SnippetType }) {
  const MDXContent = useMDXComponent(snippet.body.code);
  return <MDXContent components={components} />;
}
