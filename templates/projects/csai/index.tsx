import { Text } from "@chakra-ui/react";
import { WithProvidersProps } from "@common/components";
import { DefaultLayout } from "@layouts/default";
import { NextPageWithLayout } from "@pages/_app";

type CSAITemplateProps = WithProvidersProps<Record<string, never>>;

const CSAITemplate: NextPageWithLayout<CSAITemplateProps> = () => {
   return <Text>CSAI Page</Text>;
};

CSAITemplate.getLayout = function getLayout(page) {
   return <DefaultLayout>{page}</DefaultLayout>;
};

export default CSAITemplate;
