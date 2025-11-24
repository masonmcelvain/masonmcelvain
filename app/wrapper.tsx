import type { PropsWithChildren } from "react";

export function Wrapper({ children }: PropsWithChildren) {
   return (
      <div className="mx-auto mt-2 w-full px-4 sm:px-6 md:mt-4 lg:w-[60rem] lg:px-0 xl:w-[68.75rem]">
         {children}
      </div>
   );
}
