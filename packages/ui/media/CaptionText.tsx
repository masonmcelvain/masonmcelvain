import { Text } from "@chakra-ui/react";

export function CaptionText({ children }: React.PropsWithChildren) {
   return (
      <Text mt={2} fontSize="sm" color="gray.500">
         {children}
      </Text>
   );
}
