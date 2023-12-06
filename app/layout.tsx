import { Wrapper } from "@ui/layout";
import { Viewport } from "next";
import "./globals.css";
import { APP_ORIGIN } from "./env";
import { Footer } from "./Footer";
import { Header } from "./Header";

type RootLayoutProps = {
   headTitleSuffix: string;
};

export default async function RootLayout({
   children,
}: React.PropsWithChildren<RootLayoutProps>) {
   const logoSrc = await fetchLogoSrc();
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

async function fetchLogoSrc() {
   const endpoint = new URL("api/logo", APP_ORIGIN);
   const res = await fetch(endpoint, { cache: "no-store" });
   if (!res.ok) {
      console.error(`Failed to fetch logo from ${endpoint.href}`);
      return "";
   }
   try {
      return (await res.json()) as string;
   } catch (err) {
      console.error(`Failed to parse logo json from ${endpoint.href}`);
      return "";
   }
}

export const viewport: Viewport = {
   themeColor: "white",
};
