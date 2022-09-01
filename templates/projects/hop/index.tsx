import { Heading } from "@chakra-ui/react";
import { MdxWrapper } from "@ui/layout";
import { HopProse } from "@markdown/hop";
import { WithProvidersProps } from "@common/components";
import { NextPageWithLayout } from "@pages/_app";
import { DefaultLayout, WithLayoutProps } from "@layouts/default";

type HopTemplateProps = WithProvidersProps<
   WithLayoutProps<Record<string, never>>
>;

const HopTemplate: NextPageWithLayout<HopTemplateProps> = () => {
   return (
      <>
         <Heading>Hop</Heading>
         <MdxWrapper>
            <HopProse />
         </MdxWrapper>
      </>
   );
};

HopTemplate.getLayout = function getLayout(page) {
   return <DefaultLayout titleAddendum="Hop">{page}</DefaultLayout>;
};

export default HopTemplate;
