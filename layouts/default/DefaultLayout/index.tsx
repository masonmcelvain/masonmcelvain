import { PageContentWrapper } from "@ui/layout";
import { DefaultLayoutProps } from "../types";
import { Footer } from "./Footer";
import { MetaTitle } from "./MetaTitle";

export function DefaultLayout({
   headTitleSuffix,
   children,
}: React.PropsWithChildren<DefaultLayoutProps>) {
   return (
      <PageContentWrapper>
         {children}
         <Footer />
         <MetaTitle addendum={headTitleSuffix} />
      </PageContentWrapper>
   );
}
