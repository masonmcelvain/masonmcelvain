import { Viewport } from "next";
import type { PropsWithChildren } from "react";
import "./globals.css";
import { Header, Footer } from "./header-footer";
import { Wrapper } from "./wrapper";
import { KeyboardShortcutsLegend } from "@/components/KeyboardShortcutsLegend";

type RootLayoutProps = {
   headTitleSuffix: string;
};

export default function RootLayout({
   children,
}: PropsWithChildren<RootLayoutProps>) {
   const logoSrc = getRandomLogoPath();
   return (
      <html lang="en">
         <body>
            <KeyboardShortcutsLegend />
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
   return `/images/logos/logo-${int}.png`;
}
