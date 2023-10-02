type MetadataProps = {
   suffix: string;
};
export function getMetadata({ suffix }: MetadataProps) {
   return {
      title: `Mason McElvain - ${suffix}`,
      themeColor: "#ffffff",
   };
}
