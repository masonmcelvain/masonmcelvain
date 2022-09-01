export interface DefaultLayoutProps {
   titleAddendum?: string;
}

export type WithLayoutProps<T> = T & { layoutProps: DefaultLayoutProps };
