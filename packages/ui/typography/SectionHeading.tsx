import { Heading, HeadingProps } from "@chakra-ui/react";

type SectionHeadingProps = React.PropsWithChildren & HeadingProps;

export function SectionHeading({ children, ...props }: SectionHeadingProps) {
   return (
      <>
         <Heading as="h3" size="lg" mt={8} {...props}>
            {children}
         </Heading>
      </>
   );
}
