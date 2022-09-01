import { Footer } from "@common/components";
import { PageContentWrapper } from "@ui/layout";

type DefaultLayoutProps = React.PropsWithChildren;

export function DefaultLayout({ children }: DefaultLayoutProps) {
   return (
      <PageContentWrapper>
         {children}
         <Footer />
      </PageContentWrapper>
   );
}
