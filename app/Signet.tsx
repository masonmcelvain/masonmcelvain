import { headers } from "next/headers";
import Image from "next/image";

type SignetProps = {
   logoSrc: string;
};
export function Signet({ logoSrc }: SignetProps) {
   headers();
   return (
      <Image
         src={logoSrc}
         alt="Website logo"
         preload
         sizes="(max-width: 1024px) 6rem, 8rem"
         style={{
            width: "100%",
            height: "auto",
         }}
         width={128}
         height={128}
      />
   );
}
