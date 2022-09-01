import { Divider } from "@chakra-ui/react";
import { MetaTitle, WithProvidersProps } from "@common/components";
import { DefaultLayout } from "@layouts/default";
import { NextPageWithLayout } from "@pages/_app";
import { About } from "./About";
import { Collage } from "./Collage";
import { Hero } from "./Hero";
import { MobileCollage } from "./MobileCollage";
import { Work } from "./Work";

type HomeTemplateProps = WithProvidersProps<Record<string, never>>;

const HomeTemplate: NextPageWithLayout<HomeTemplateProps> = () => {
   return (
      <>
         <Hero />
         <About />
         <Work />
         <Divider my={16} />
         <Collage />
         <MobileCollage />
         <MetaTitle addendum="Home" />
      </>
   );
};

HomeTemplate.getLayout = function getLayout(page) {
   return <DefaultLayout>{page}</DefaultLayout>;
};

export default HomeTemplate;
