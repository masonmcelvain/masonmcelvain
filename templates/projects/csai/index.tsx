import { Text } from "@chakra-ui/react";
import { WithProvidersProps } from "@common/components";
import { ProjectLayout, WithLayoutProps } from "@layouts/project";
import { NextPageWithLayout } from "@pages/_app";

type CSAITemplateProps = WithProvidersProps<
   WithLayoutProps<Record<string, never>>
>;

const CSAITemplate: NextPageWithLayout<CSAITemplateProps> = () => {
   return <Text>CSAI Page</Text>;
};

CSAITemplate.getLayout = function getLayout(page) {
   return <ProjectLayout title="CSAI">{page}</ProjectLayout>;
};

export default CSAITemplate;
