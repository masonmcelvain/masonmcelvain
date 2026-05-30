import Ramen from "@public/images/ramen.jpg";
import Image from "next/image";
import type { PropsWithChildren } from "react";

export function Hero() {
   return (
      <div className="flex w-full flex-col items-center justify-between space-y-8 px-4 md:flex-row md:space-y-0">
         <div className="flex flex-col">
            <div className="flex flex-col md:space-y-2 lg:space-y-4">
               <H1>Hi, I&apos;m Mason.</H1>
               <H1>Full stack developer</H1>
               <H1>and rock climber.</H1>
            </div>
            <span className="text-foreground-muted mt-6 hidden max-w-sm text-xl md:block">
               Based in Salt Lake City, building iFixit&apos;s storefront &
               tooling. Cal Poly CS, &apos;22.
            </span>
         </div>
         <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full lg:h-[375px] lg:w-[375px]">
            <Image
               src={Ramen}
               alt="Enjoying ramen at Lone Peak"
               preload
               title="Enjoying ramen at Lone Peak"
            />
         </div>
         <span className="text-foreground-muted max-w-xs px-4 md:hidden">
            Based in Salt Lake City, building iFixit&apos;s storefront &
            tooling. Cal Poly CS, &apos;22.
         </span>
      </div>
   );
}

function H1({ children }: PropsWithChildren) {
   return (
      <h1 className="text-2xl/8 sm:text-3xl/9 md:text-4xl/9 lg:text-5xl/9">
         {children}
      </h1>
   );
}
