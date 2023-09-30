"use client";

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
import { MDXComponents } from "mdx/types";

type AppProvidersProps = React.PropsWithChildren;

export type WithProvidersProps<T> = T & { appProps: AppProvidersProps };

const components: MDXComponents = {
   a: (props: LinkProps) => <Link isExternal color="blue.600" {...props} />,
   li: (props: ListItemProps) => <ListItem ml={4} {...props} />,
   p: Text,
   ul: UnorderedList,
};

export function AppProviders({ children }: AppProvidersProps) {
   return (
      <ChakraProvider theme={theme}>
         <MDXProvider components={components}>{children}</MDXProvider>
      </ChakraProvider>
   );
}
