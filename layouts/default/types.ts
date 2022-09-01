export interface DefaultLayoutProps {
   headTitleSuffix: string;
}

export type WithLayoutProps<T> = T & { layoutProps: DefaultLayoutProps };
