"use client";

import { VStack } from "@chakra-ui/react";

export default function CodeLayout({ children }: React.PropsWithChildren) {
   return (
      <VStack align="flex-start" gap={8}>
         {children}
      </VStack>
   );
}
