import RockMason from "@assets/images/rock-mason.png";
import Image from "next/image";

export function Hero() {
   return (
      <div className="flex w-full flex-col items-center justify-between gap-8 px-4 md:flex-row md:gap-16 lg:px-8 xl:gap-32">
         <div className="flex flex-col md:space-y-4">
            <H1>Hi, I&apos;m Mason.</H1>
            <H1>Full Stack Developer</H1>
            <H1>at iFixit.</H1>
         </div>
         <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full lg:h-[375px] lg:w-[375px]">
            <Image
               src={RockMason}
               alt="Mason Climbing in Tuolomne Meadows"
               fill
               object-fit="cover"
               priority
            />
         </div>
      </div>
   );
}

function H1({ children }: React.PropsWithChildren) {
   return <h1 className="text-2xl sm:text-3xl md:text-5xl">{children}</h1>;
}
