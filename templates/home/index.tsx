import { Divider } from "@chakra-ui/react";
import { WithProvidersProps } from "@common/components";
import { DefaultLayout, WithLayoutProps } from "@layouts/default";
import { NextPageWithLayout } from "@pages/_app";
import { About } from "./About";
import { Collage } from "./Collage";
import { Hero } from "./Hero";
import { MobileCollage } from "./MobileCollage";
import { Work } from "./Work";

type HomeTemplateProps = WithProvidersProps<
   WithLayoutProps<Record<string, never>>
>;

const HomeTemplate: NextPageWithLayout<HomeTemplateProps> = () => {
   return (
      <>
         <Hero />
         <About />
         <Work />
         <Divider my={16} />
         <Collage />
         <MobileCollage />
      </>
   );
};

HomeTemplate.getLayout = function getLayout(page) {
   return <DefaultLayout headTitleSuffix="Home">{page}</DefaultLayout>;
};

export default HomeTemplate;
