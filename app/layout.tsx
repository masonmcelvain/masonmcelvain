"use client";

import { Wrapper } from "@ui/layout";

import { Footer } from "./Footer";
import { Providers } from "./providers";

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
                  {children}
                  <Footer />
               </Wrapper>
            </Providers>
         </body>
      </html>
   );
}
