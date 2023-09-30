"use client";

import { MDXComponents } from "mdx/types";

import { CacheProvider } from "@chakra-ui/next-js";
import {
   ChakraProvider,
   Link,
   LinkProps,
   ListItem,
   ListItemProps,
   Text,
   UnorderedList,
} from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import { theme } from "@ui/theme";

const components: MDXComponents = {
   a: (props: LinkProps) => <Link isExternal color="blue.600" {...props} />,
   li: (props: ListItemProps) => <ListItem ml={4} {...props} />,
   p: Text,
   ul: UnorderedList,
};

export function Providers({ children }: React.PropsWithChildren) {
   return (
      <CacheProvider>
         <ChakraProvider theme={theme}>
            <MDXProvider components={components}>{children}</MDXProvider>
         </ChakraProvider>
      </CacheProvider>
   );
}
