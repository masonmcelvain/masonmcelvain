import { HopProse } from "@markdown/hop";
import { WithProvidersProps } from "@common/components";
import { NextPageWithLayout } from "@pages/_app";
import { ProjectLayout, WithLayoutProps } from "@layouts/project";

type HopTemplateProps = WithProvidersProps<
   WithLayoutProps<Record<string, never>>
>;

const HopTemplate: NextPageWithLayout<HopTemplateProps> = HopProse;

HopTemplate.getLayout = function getLayout(page) {
   return (
      <ProjectLayout title="Hop" ghUrl="https://github.com/masonmcelvain/hop">
         {page}
      </ProjectLayout>
   );
};

export default HopTemplate;
