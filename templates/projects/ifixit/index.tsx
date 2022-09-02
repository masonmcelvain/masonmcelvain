import { Text } from "@chakra-ui/react";
import { WithProvidersProps } from "@common/components";
import { ProjectLayout, WithLayoutProps } from "@layouts/project";
import { NextPageWithLayout } from "@pages/_app";
import { MdxWrapper } from "@ui/layout";

type IFixitTemplateProps = WithProvidersProps<
   WithLayoutProps<Record<string, never>>
>;

const IFixitTemplate: NextPageWithLayout<IFixitTemplateProps> = () => {
   return (
      <MdxWrapper>
         <Text>Content coming soon!</Text>
      </MdxWrapper>
   );
};

IFixitTemplate.getLayout = function getLayout(page) {
   return (
      <ProjectLayout
         title="iFixit"
         ghUrl="https://github.com/iFixit"
         ghColor="#0071ce"
      >
         {page}
      </ProjectLayout>
   );
};

export default IFixitTemplate;
