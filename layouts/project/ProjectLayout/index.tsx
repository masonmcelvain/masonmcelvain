import { Heading, HStack } from "@chakra-ui/react";
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
         <HStack justify="flex-start" gap={8} mt={16}>
            <Heading as="h1" size="2xl">
               {title}
            </Heading>
            <GithubIcon url={ghUrl} hoverColor={ghColor} />
         </HStack>
         {children}
      </DefaultLayout>
   );
}