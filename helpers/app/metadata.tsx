type GetTitleOptions = {
   suffix: string;
};

export function getTitle({ suffix }: GetTitleOptions) {
   return `Mason McElvain - ${suffix}`;
}

export function getBaseMetadata({ ...options }: GetTitleOptions) {
   return {
      title: getTitle(options),
      themeColor: "#ffffff",
   };
}
