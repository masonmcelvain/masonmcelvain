import "./globals.css";
import Logo1 from "@assets/images/logos/logo-1.png";
import Logo2 from "@assets/images/logos/logo-2.png";
import Logo3 from "@assets/images/logos/logo-3.png";
import Logo4 from "@assets/images/logos/logo-4.png";
import Logo5 from "@assets/images/logos/logo-5.png";
import Logo6 from "@assets/images/logos/logo-6.png";
import Logo7 from "@assets/images/logos/logo-7.png";
import Logo8 from "@assets/images/logos/logo-8.png";
import Logo9 from "@assets/images/logos/logo-9.png";
import Logo10 from "@assets/images/logos/logo-10.png";
import Logo11 from "@assets/images/logos/logo-11.png";
import Logo12 from "@assets/images/logos/logo-12.png";
import Logo13 from "@assets/images/logos/logo-13.png";
import Logo14 from "@assets/images/logos/logo-14.png";
import Logo15 from "@assets/images/logos/logo-15.png";
import Logo16 from "@assets/images/logos/logo-16.png";
import Logo17 from "@assets/images/logos/logo-17.png";
import Logo18 from "@assets/images/logos/logo-18.png";
import Logo19 from "@assets/images/logos/logo-19.png";
import Logo20 from "@assets/images/logos/logo-20.png";
import Logo21 from "@assets/images/logos/logo-21.png";
import Logo22 from "@assets/images/logos/logo-22.png";
import Logo23 from "@assets/images/logos/logo-23.png";
import Logo24 from "@assets/images/logos/logo-24.png";
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
   const Logo = getRandomLogo();
   return (
      <html lang="en">
         <body>
            <Wrapper>
               <Header Logo={Logo} />
               {children}
               <Footer Logo={Logo} />
            </Wrapper>
         </body>
      </html>
   );
}

function getRandomLogo() {
   return [
      Logo1,
      Logo2,
      Logo3,
      Logo4,
      Logo5,
      Logo6,
      Logo7,
      Logo8,
      Logo9,
      Logo10,
      Logo11,
      Logo12,
      Logo13,
      Logo14,
      Logo15,
      Logo16,
      Logo17,
      Logo18,
      Logo19,
      Logo20,
      Logo21,
      Logo22,
      Logo23,
      Logo24,
   ][Math.floor(Math.random() * 24)];
}
