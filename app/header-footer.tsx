import { SocialIconRow } from "@icons/social";
import Link from "next/link";
import { Suspense } from "react";
import { Signet } from "./Signet";
import { EmailSubscription } from "@/components/email-subscription";

type HeaderFooterProps = {
   logoSrc: string;
};

export function Header({ logoSrc }: HeaderFooterProps) {
   return (
      <header className="mb-8 flex items-center justify-between px-0 md:px-8">
         <HeaderFooterContent logoSrc={logoSrc} />
         <div className="flex space-x-8 text-xl">
            <Link href="/blog">Blog</Link>
            <SocialIconRow className="hidden sm:flex" />
         </div>
      </header>
   );
}

export function Footer({ logoSrc }: HeaderFooterProps) {
   return (
      <footer className="my-8 flex flex-col gap-6 px-0 md:my-16 md:px-8">
         <div className="lg:hidden">
            <EmailSubscription />
         </div>
         <div className="flex items-center justify-between">
            <HeaderFooterContent logoSrc={logoSrc} />
            <div className="flex items-center gap-8">
               <div className="hidden lg:block">
                  <EmailSubscription />
               </div>
               <SocialIconRow />
            </div>
         </div>
      </footer>
   );
}

function HeaderFooterContent({ logoSrc }: HeaderFooterProps) {
   return (
      <Link href="/">
         <div className="h-[6rem] w-[6rem] lg:h-[8rem] lg:w-[8rem]">
            <Suspense>
               <Signet logoSrc={logoSrc} />
            </Suspense>
         </div>
      </Link>
   );
}
