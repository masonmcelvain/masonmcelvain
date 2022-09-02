import { Text } from "@chakra-ui/react";
import { WithProvidersProps } from "@common/components";
import { ProjectLayout, WithLayoutProps } from "@layouts/project";
import { NextPageWithLayout } from "@pages/_app";

type IFixitTemplateProps = WithProvidersProps<
   WithLayoutProps<Record<string, never>>
>;

const IFixitTemplate: NextPageWithLayout<IFixitTemplateProps> = () => {
   return <Text>Content coming soon!</Text>;
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
