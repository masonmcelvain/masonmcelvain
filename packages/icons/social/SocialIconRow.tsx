import { HStack, StackProps } from "@chakra-ui/react";
import { EnvelopeIcon } from "./EnvelopeIcon";
import { GithubIcon } from "./GithubIcon";
import { MountainProjectIcon } from "./MountainProjectIcon";

export function SocialIconRow(props: StackProps) {
   return (
      <HStack spacing={8} {...props}>
         <EnvelopeIcon />
         <GithubIcon url="https://github.com/masonmcelvain" />
         <MountainProjectIcon />
      </HStack>
   );
}
