import { type PropsWithChildren } from "react";

export function Stats({ children }: PropsWithChildren) {
   return (
      <dl className="not-prose my-8 grid grid-cols-2 gap-3 sm:grid-cols-[repeat(auto-fit,minmax(10rem,1fr))]">
         {children}
      </dl>
   );
}

type StatProps = {
   value: string;
   label: string;
};

export function Stat({ value, label }: StatProps) {
   // The label (dt) comes first in the DOM so screen readers announce
   // "label, value"; flex-col-reverse shows the value on top.
   return (
      <div className="border-border bg-surface flex flex-col-reverse justify-end rounded-lg border p-4">
         <dt className="text-foreground-subtle mt-1 text-sm">{label}</dt>
         <dd className="font-display text-foreground text-3xl font-bold">
            {value}
         </dd>
      </div>
   );
}
