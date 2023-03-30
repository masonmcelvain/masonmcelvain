import { Box, Heading, HStack, VStack } from "@chakra-ui/react";
import { GithubIcon } from "@icons/social";
import { DefaultLayout } from "@layouts/default";
import { ProjectLayoutProps } from "../types";

export function ProjectLayout({
   title,
   ghUrl,
   ghColor,
   children,
   ...props
}: React.PropsWithChildren<ProjectLayoutProps>) {
   return (
      <DefaultLayout headTitleSuffix={title} {...props}>
         <VStack align="flex-start" gap={8}>
            <HStack justify="flex-start" gap={8}>
               <Heading as="h1" size="2xl">
                  {title}
               </Heading>
               <GithubIcon url={ghUrl} hoverColor={ghColor} />
            </HStack>
            <Box>{children}</Box>
         </VStack>
      </DefaultLayout>
   );
}
