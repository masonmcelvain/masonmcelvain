import { ChakraProvider } from "@chakra-ui/react";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { AppProviders } from "@common/components";
import { theme } from "@ui/theme";

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
   P,
   IP
> & {
   getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
   Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
   const getLayout = Component.getLayout ?? ((page) => page);
   console.log(Component.getLayout);
   return (
      <AppProviders {...pageProps.appProps}>
         {getLayout(
            <ChakraProvider theme={theme}>
               <Component {...pageProps} />
            </ChakraProvider>
         )}
      </AppProviders>
   );
}
