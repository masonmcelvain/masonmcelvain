import { HStack, StackProps } from "@chakra-ui/react";
import { EnvelopeIcon } from "./EnvelopeIcon";
import { GithubIcon } from "./GithubIcon";

export function SocialIconRow(props: StackProps) {
   return (
      <HStack spacing={8} {...props}>
         <EnvelopeIcon />
         <GithubIcon url="https://github.com/masonmcelvain" />
      </HStack>
   );
}
