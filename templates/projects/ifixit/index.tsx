import { Text } from "@chakra-ui/react";
import { WithProvidersProps } from "@common/components";
import { DefaultLayout, WithLayoutProps } from "@layouts/default";
import { NextPageWithLayout } from "@pages/_app";

type IFixitTemplateProps = WithProvidersProps<
   WithLayoutProps<Record<string, never>>
>;

const IFixitTemplate: NextPageWithLayout<IFixitTemplateProps> = () => {
   return <Text>iFixit Page</Text>;
};

IFixitTemplate.getLayout = function getLayout(page) {
   return <DefaultLayout titleAddendum="iFixit">{page}</DefaultLayout>;
};

export default IFixitTemplate;
