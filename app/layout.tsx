import "./globals.css";
import { Wrapper } from "@ui/layout";
import { Footer } from "./Footer";
import { Header } from "./Header";

type RootLayoutProps = {
   headTitleSuffix: string;
};

export const dynamic = "force-dynamic";

export default function RootLayout({
   children,
}: React.PropsWithChildren<RootLayoutProps>) {
   const logoSrc = getRandomLogoPath();
   return (
      <html lang="en">
         <body>
            <Wrapper>
               <Header logoSrc={logoSrc} />
               {children}
               <Footer logoSrc={logoSrc} />
            </Wrapper>
         </body>
      </html>
   );
}

function getRandomLogoPath() {
   const max = 24;
   const int = Math.floor(Math.random() * max + 1);
   return `/assets/images/logos/logo-${int}.png`;
}
