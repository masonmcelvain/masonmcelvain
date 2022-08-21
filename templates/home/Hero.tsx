import { Divider, Heading } from '@chakra-ui/react';

export function Hero() {
   return (
      <>
         <Heading as="h1" size="2xl">
            Hi, I'm Mason.
         </Heading>
         <Heading as="h1" size="2xl">
            Full-stack engineer at iFixit.
         </Heading>
         <Divider />
      </>
   );
}
