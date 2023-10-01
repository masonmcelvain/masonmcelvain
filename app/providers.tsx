"use client";

import { MDXComponents } from "mdx/types";
import { MDXProvider } from "@mdx-js/react";

const components: MDXComponents = {
   a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <a
         target="_blank"
         className="text-[#2b6cb0] hover:underline"
         {...props}
      />
   ),
};

export function Providers({ children }: React.PropsWithChildren) {
   return <MDXProvider components={components}>{children}</MDXProvider>;
}
