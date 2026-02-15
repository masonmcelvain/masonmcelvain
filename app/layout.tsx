import { KeyboardShortcutsLegend } from "@/components/KeyboardShortcutsLegend";
import { Viewport } from "next";
import NextTopLoader from "nextjs-toploader";
import type { PropsWithChildren } from "react";
import "./globals.css";
import { Header, Footer } from "./header-footer";

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
            <NextTopLoader showSpinner={false} />
            <KeyboardShortcutsLegend />
            <div className="mx-auto flex min-h-screen w-full flex-col px-4 pt-2 sm:px-6 md:pt-4 lg:w-[60rem] lg:px-0 xl:w-[68.75rem]">
               <Header logoSrc={logoSrc} />
               {children}
               <Footer logoSrc={logoSrc} />
            </div>
         </body>
      </html>
   );
}

export const viewport: Viewport = {
   themeColor: [
      { media: "(prefers-color-scheme: light)", color: "white" },
      { media: "(prefers-color-scheme: dark)", color: "#030712" },
   ],
};

function getRandomLogoPath() {
   const max = 24;
   const int = Math.floor(Math.random() * max + 1);
   return `/images/logos/logo-${int}.png`;
}
