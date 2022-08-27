import { Divider, Heading } from '@chakra-ui/react';

export function Hero() {
   return (
      <>
         <Heading as="h1" size="2xl" mt={3} lineHeight={1.35}>
            Hi, I&apos;m Mason.
            <br />
            Full Stack Developer at iFixit.
         </Heading>
         <Divider />
      </>
   );
}
