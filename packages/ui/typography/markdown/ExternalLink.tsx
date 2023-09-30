type ExternalLinkProps = React.PropsWithChildren<{
   href: string;
}>;
export function ExternalLink({ href, children }: ExternalLinkProps) {
   return (
      <a href={href} target="_blank" className="underline">
         {children}
      </a>
   );
}
