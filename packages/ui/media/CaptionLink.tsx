type CaptionLinkProps = React.PropsWithChildren<{
   href: string;
}>;
export function CaptionLink({ children, href }: CaptionLinkProps) {
   return (
      <a className="text-blue-600 underline" href={href} target="_blank">
         {children}
      </a>
   );
}
