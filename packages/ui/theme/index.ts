import { extendTheme, ThemeOverride } from "@chakra-ui/react";
import { Heading } from "./components/heading";
import { styles } from "./styles";

const themeOverrides: ThemeOverride = {
   styles,
   components: {
      Heading,
   },
};

export const theme = extendTheme(themeOverrides);
