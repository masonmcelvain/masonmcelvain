import { Heading } from "@chakra-ui/react";
import { DefaultLayout } from "@layouts/default";
import { ProjectLayoutProps } from "../types";

export function ProjectLayout({
   title,
   children,
   ...props
}: React.PropsWithChildren<ProjectLayoutProps>) {
   return (
      <DefaultLayout headTitleSuffix={title} {...props}>
         <Heading>{title}</Heading>
         {children}
      </DefaultLayout>
   );
}
