import { extendTheme, ThemeOverride } from "@chakra-ui/react";
import { styles } from "./styles";

const themeOverrides: ThemeOverride = {
   styles,
};

export const theme = extendTheme(themeOverrides);
