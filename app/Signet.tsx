import { headers } from "next/headers";
import Image from "next/image";

type SignetProps = {
   logoSrc: string;
   priority?: boolean;
};
export function Signet({ logoSrc, priority }: SignetProps) {
   headers();
   return (
      <Image
         src={logoSrc}
         alt="Website logo"
         sizes="(max-width: 1024px) 6rem, 8rem"
         style={{
            width: "100%",
            height: "auto",
         }}
         width={128}
         height={128}
         priority={priority}
      />
   );
}
