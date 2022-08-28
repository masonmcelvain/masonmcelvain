import { HStack, StackProps } from "@chakra-ui/react";
import { EnvelopeIcon } from "./EnvelopeIcon";
import { GithubIcon } from "./GithubIcon";
import { TwitterIcon } from "./TwitterIcon";

export function SocialIconRow(props: StackProps) {
   return (
      <HStack gap={3} {...props}>
         <EnvelopeIcon />
         <GithubIcon />
         <TwitterIcon />
      </HStack>
   );
}
