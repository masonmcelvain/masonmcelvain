import { MdxWrapper } from "@ui/layout";
import { HopProse } from "@markdown/hop";
import { WithProvidersProps } from "@common/components";
import { NextPageWithLayout } from "@pages/_app";
import { ProjectLayout, WithLayoutProps } from "@layouts/project";

type HopTemplateProps = WithProvidersProps<
   WithLayoutProps<Record<string, never>>
>;

const HopTemplate: NextPageWithLayout<HopTemplateProps> = () => {
   return (
      <>
         <MdxWrapper>
            <HopProse />
         </MdxWrapper>
      </>
   );
};

HopTemplate.getLayout = function getLayout(page) {
   return <ProjectLayout title="Hop">{page}</ProjectLayout>;
};

export default HopTemplate;
