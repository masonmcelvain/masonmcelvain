import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@ui/theme";

type AppProvidersProps = React.PropsWithChildren;

export type WithProvidersProps<T> = T & { appProps: AppProvidersProps };

export function AppProviders({ children }: AppProvidersProps) {
   return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
