import { Footer, MetaTitle } from "@common/components";
import { PageContentWrapper } from "@ui/layout";
import { DefaultLayoutProps } from "../types";

export function DefaultLayout({
   titleAddendum,
   children,
}: React.PropsWithChildren<DefaultLayoutProps>) {
   return (
      <PageContentWrapper>
         {children}
         <Footer />
         <MetaTitle addendum={titleAddendum} />
      </PageContentWrapper>
   );
}
