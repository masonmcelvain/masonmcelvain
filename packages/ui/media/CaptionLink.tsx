type CaptionLinkProps = React.PropsWithChildren<{
   href: string;
}>;
export function CaptionLink({ children, href }: CaptionLinkProps) {
   return (
      <a className="text-[#2b6cb0]" href={href} target="_blank">
         {children}
      </a>
   );
}
