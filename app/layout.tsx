import "./globals.css";
import { Wrapper } from "@ui/layout";
import { Footer } from "./Footer";
import { Providers } from "./providers";
import { Header } from "./Header";

type RootLayoutProps = {
   headTitleSuffix: string;
};

export default async function RootLayout({
   children,
}: React.PropsWithChildren<RootLayoutProps>) {
   const logoSrc = getRandomLogoPath();
   return (
      <html lang="en">
         <body>
            <Providers>
               <Wrapper>
                  <Header logoSrc={logoSrc} />
                  {children}
                  <Footer logoSrc={logoSrc} />
               </Wrapper>
            </Providers>
         </body>
      </html>
   );
}

function getRandomLogoPath() {
   const max = 24;
   const int = Math.floor(Math.random() * max + 1);
   return `/assets/images/logos/logo-${int}.png`;
}
