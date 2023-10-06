import type { Metadata } from "next";

type MetadataProps = {
   suffix: string;
};
export function getMetadata({ suffix }: MetadataProps): Metadata {
   return {
      description: "Mason's website",
      title: `Mason McElvain - ${suffix}`,
      themeColor: "#ffffff",
   };
}
