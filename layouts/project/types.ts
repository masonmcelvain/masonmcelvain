import { DefaultLayoutProps } from "@layouts/default";

export interface ProjectLayoutProps
   extends Omit<DefaultLayoutProps, "headTitleSuffix"> {
   title: string;
}

export type WithLayoutProps<T> = T & { layoutProps: ProjectLayoutProps };
