import { type PropsWithChildren } from "react";

// The list stays inside the prose context so markdown children keep prose
// styles (typography can't be re-enabled under `not-prose`). The list's own
// prose styles are reset with utilities, which win over the prose layer.
export function Timeline({ children }: PropsWithChildren) {
   return (
      <ol className="border-border my-8 ml-3 flex list-none flex-col gap-8 border-l pl-6">
         {children}
      </ol>
   );
}

type TimelineItemProps = PropsWithChildren<{
   date: string;
   title: string;
}>;

export function TimelineItem({ date, title, children }: TimelineItemProps) {
   return (
      <li className="relative my-0 ps-0">
         <span
            aria-hidden
            className="ring-background absolute top-1.5 -left-[calc(1.875rem+0.5px)] size-3 rounded-full bg-[linear-gradient(135deg,var(--accent-from),var(--accent-to))] ring-4"
         />
         <div className="not-prose">
            <p className="text-foreground-subtle font-mono text-xs tracking-wide uppercase">
               {date}
            </p>
            <p className="font-display text-foreground text-lg font-semibold">
               {title}
            </p>
         </div>
         <div className="text-foreground-muted mt-2 *:first:mt-0 *:last:mb-0">
            {children}
         </div>
      </li>
   );
}
