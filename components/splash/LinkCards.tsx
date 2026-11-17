import { type PropsWithChildren } from "react";
import { ExternalLinkIcon, isExternalHref, SmartLink } from "./SmartLink";

export function LinkCards({ children }: PropsWithChildren) {
   return (
      <ul className="not-prose my-8 grid gap-4 sm:grid-cols-2">{children}</ul>
   );
}

type LinkCardProps = {
   href: string;
   title: string;
   description?: string;
};

export function LinkCard({ href, title, description }: LinkCardProps) {
   return (
      <li>
         <SmartLink
            href={href}
            showExternalIcon={false}
            className="border-border bg-surface-elevated hover:border-border-hover block h-full rounded-lg border p-5 transition-[translate,border-color] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
         >
            <span className="font-display text-foreground block font-semibold">
               {title}
               {isExternalHref(href) && <ExternalLinkIcon />}
            </span>
            {description && (
               <span className="text-foreground-muted mt-1 block text-base">
                  {description}
               </span>
            )}
         </SmartLink>
      </li>
   );
}
