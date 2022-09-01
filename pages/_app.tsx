import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { AppProviders } from "@common/components";

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
   return (
      <AppProviders {...pageProps.appProps}>
         {getLayout(<Component {...pageProps} />)}
      </AppProviders>
   );
}
