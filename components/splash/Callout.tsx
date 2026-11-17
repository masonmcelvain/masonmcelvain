import { type PropsWithChildren } from "react";

type CalloutProps = PropsWithChildren<{
   title?: string;
}>;

export function Callout({ title, children }: CalloutProps) {
   return (
      <aside className="bg-surface relative my-8 rounded-r-lg px-5 py-4 before:absolute before:inset-y-0 before:left-0 before:w-1 before:bg-[linear-gradient(to_bottom,var(--accent-from),var(--accent-to))]">
         {title && (
            <p className="not-prose font-display text-foreground mb-1 font-semibold">
               {title}
            </p>
         )}
         <div className="*:first:mt-0 *:last:mb-0">{children}</div>
      </aside>
   );
}
