import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";

type SmartLinkProps = ComponentPropsWithoutRef<"a"> & {
   href?: string;
   /** Set false when the caller renders `ExternalLinkIcon` itself. */
   showExternalIcon?: boolean;
};

const EXTERNAL_PATTERN = /^(https?:)?\/\//;

export function isExternalHref(href: string) {
   return EXTERNAL_PATTERN.test(href);
}

export function ExternalLinkIcon() {
   return (
      <FiArrowUpRight
         aria-hidden
         className="ml-0.5 inline-block size-[0.75em] align-baseline"
      />
   );
}

/**
 * Link that opens external URLs in a new tab (with a visual and screen reader
 * cue) and routes site-relative paths through next/link.
 */
export function SmartLink({
   href,
   children,
   showExternalIcon = true,
   ...props
}: SmartLinkProps) {
   if (href && isExternalHref(href)) {
      return (
         <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
            {children}
            {showExternalIcon && <ExternalLinkIcon />}
            <span className="sr-only"> (opens in a new tab)</span>
         </a>
      );
   }
   if (href?.startsWith("/")) {
      return (
         <Link href={href} {...props}>
            {children}
         </Link>
      );
   }
   // Fragment, mailto:, tel: and other links stay plain anchors.
   return (
      <a href={href} {...props}>
         {children}
      </a>
   );
}
