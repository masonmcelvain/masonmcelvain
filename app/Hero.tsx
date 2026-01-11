import Ramen from "@public/images/ramen.jpg";
import Image from "next/image";
import type { PropsWithChildren } from "react";

export function Hero() {
   return (
      <div className="flex w-full flex-col items-center justify-between space-y-8 px-4 md:flex-row md:space-y-0">
         <div className="flex flex-col md:space-y-2 lg:space-y-4">
            <H1>Hi, I&apos;m Mason.</H1>
            <H1>Full stack developer</H1>
            <H1>and rock climber.</H1>
         </div>
         <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full lg:h-[375px] lg:w-[375px]">
            <Image
               src={Ramen}
               alt="Enjoying ramen at Lone Peak"
               preload
               title="Enjoying ramen at Lone Peak"
            />
         </div>
      </div>
   );
}

function H1({ children }: PropsWithChildren) {
   return (
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
         {children}
      </h1>
   );
}
