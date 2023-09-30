"use client";

import { Wrapper } from "@ui/layout";

import { Footer } from "./Footer";
import { Providers } from "./providers";
import { Header } from "./Header";

type RootLayoutProps = {
   headTitleSuffix: string;
};

export default function RootLayout({
   children,
}: React.PropsWithChildren<RootLayoutProps>) {
   return (
      <html lang="en">
         <body>
            <Providers>
               <Wrapper>
                  <Header />
                  {children}
                  <Footer />
               </Wrapper>
            </Providers>
         </body>
      </html>
   );
}
