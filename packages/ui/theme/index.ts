import { extendTheme, ThemeOverride } from "@chakra-ui/react";
import { Heading } from "./components/heading";
import { fonts } from "./foundations/fonts";
import { styles } from "./styles";

const themeOverrides: ThemeOverride = {
   styles,
   fonts,
   components: {
      Heading,
   },
};

export const theme = extendTheme(themeOverrides);
