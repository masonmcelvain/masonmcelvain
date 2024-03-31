import { Wrapper } from "@ui/layout";
import { Viewport } from "next";
import "./globals.css";
import { Footer } from "./Footer";
import { Header } from "./Header";

type RootLayoutProps = {
   headTitleSuffix: string;
};

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

export const viewport: Viewport = {
   themeColor: "white",
};

function getRandomLogoPath() {
   const max = 24;
   const int = Math.floor(Math.random() * max + 1);
   return `/assets/images/logos/logo-${int}.png`;
}
