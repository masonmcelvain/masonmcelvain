import { type ComponentPropsWithoutRef } from "react";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingProps = ComponentPropsWithoutRef<"h2">;

function headingLink(Tag: HeadingTag) {
   function Heading({ id, children, ...props }: HeadingProps) {
      if (!id) {
         return <Tag {...props}>{children}</Tag>;
      }
      return (
         <Tag id={id} {...props}>
            <a
               href={`#${id}`}
               className="not-prose no-underline hover:underline"
            >
               {children}
            </a>
         </Tag>
      );
   }
   Heading.displayName = `HeadingLink(${Tag})`;
   return Heading;
}

export const headingLinkComponents = {
   h1: headingLink("h1"),
   h2: headingLink("h2"),
   h3: headingLink("h3"),
   h4: headingLink("h4"),
   h5: headingLink("h5"),
   h6: headingLink("h6"),
};
