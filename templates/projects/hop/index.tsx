import { Heading } from "@chakra-ui/react";
import { MdxWrapper } from "@ui/layout";
import { HopProse } from "@markdown/hop";
import { MetaTitle, WithProvidersProps } from "@common/components";
import { NextPageWithLayout } from "@pages/_app";
import { DefaultLayout } from "@layouts/default";

type HopTemplateProps = WithProvidersProps<Record<string, never>>;

const HopTemplate: NextPageWithLayout<HopTemplateProps> = () => {
   return (
      <>
         <Heading>Hop</Heading>
         <MdxWrapper>
            <HopProse />
         </MdxWrapper>
         <MetaTitle addendum="Hop" />
      </>
   );
};

HopTemplate.getLayout = function getLayout(page) {
   return <DefaultLayout>{page}</DefaultLayout>;
};

export default HopTemplate;
