import { type CSSProperties, type ReactNode } from "react";
import { mediaUrl } from "@/lib/media";
import { type Post } from "@/lib/posts";
import { SITE_ORIGIN } from "./constants";

const FONT_STACK =
   "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

const colors = {
   text: "#1a1a1a",
   subtle: "#6b7280",
   link: "#2563eb",
   border: "#e5e7eb",
};

const text: CSSProperties = {
   fontFamily: FONT_STACK,
   fontSize: "16px",
   lineHeight: "1.6",
   color: colors.text,
   margin: "16px 0",
};

const heading: CSSProperties = {
   fontFamily: FONT_STACK,
   color: colors.text,
   lineHeight: "1.3",
};

const link: CSSProperties = {
   color: colors.link,
   textDecoration: "underline",
};

const caption: CSSProperties = {
   ...text,
   fontSize: "14px",
   color: colors.subtle,
   textAlign: "center",
   margin: "8px 0 0",
};

// Email clients don't run the Next.js image loader, so build optimizer URLs
// by hand. w=1200 is 2x the 600px email width and must be one of the sizes
// the optimizer allows (it's in Next's default deviceSizes).
function emailImageUrl(src: string) {
   const url = encodeURIComponent(mediaUrl(src));
   return `${SITE_ORIGIN}/_next/image?url=${url}&w=1200&q=75`;
}

type EmailFigureProps = {
   src: string;
   alt?: string;
   caption?: string;
   captionSuffix?: ReactNode;
   href?: string;
};

function EmailFigure({
   src,
   alt,
   caption: captionText,
   captionSuffix,
   href,
}: EmailFigureProps) {
   const image = (
      // eslint-disable-next-line @next/next/no-img-element
      <img
         src={emailImageUrl(src)}
         alt={alt ?? captionText ?? ""}
         width={600}
         style={{
            width: "100%",
            height: "auto",
            borderRadius: "8px",
            display: "block",
         }}
      />
   );
   return (
      <figure style={{ margin: "32px 0" }}>
         {href ? <a href={href}>{image}</a> : image}
         {(captionText || captionSuffix) && (
            <figcaption style={caption}>
               {captionText}
               {captionSuffix}
            </figcaption>
         )}
      </figure>
   );
}

type CarouselImage = {
   src: string;
   orientation: "portrait" | "landscape";
   caption?: string;
};

/**
 * Email variants of the MDX components used in blog posts, plus inline-styled
 * replacements for the markdown elements normally styled by Tailwind prose.
 * Everything must hold up without JavaScript or a stylesheet.
 */
export function getEmailComponents(postUrl: string) {
   return {
      ImageWithCaption: (props: {
         src: string;
         alt?: string;
         caption: string;
      }) => (
         <EmailFigure src={props.src} alt={props.alt} caption={props.caption} />
      ),
      // Carousels aren't possible in email: show the first image and link to
      // the full set on the site.
      ImageCarousel: (props: {
         images: CarouselImage[];
         alt?: string;
         caption?: string;
      }) => {
         const first = props.images[0];
         if (!first) return null;
         return (
            <EmailFigure
               src={first.src}
               alt={props.alt}
               caption={first.caption ?? props.caption}
               captionSuffix={
                  props.images.length > 1 && (
                     <>
                        {" "}
                        <a href={postUrl} style={link}>
                           See all {props.images.length} photos →
                        </a>
                     </>
                  )
               }
            />
         );
      },
      // Video can't play in email: show the poster frame linking to the post.
      VideoWithCaption: (props: {
         src: string;
         poster: string;
         caption: string;
      }) => (
         <EmailFigure
            src={props.poster}
            caption={props.caption}
            href={postUrl}
            captionSuffix={
               <>
                  {" "}
                  <a href={postUrl} style={link}>
                     ▶ Watch on the site
                  </a>
               </>
            }
         />
      ),
      h2: (props: { children?: ReactNode }) => (
         <h2 style={{ ...heading, fontSize: "24px", margin: "32px 0 12px" }}>
            {props.children}
         </h2>
      ),
      h3: (props: { children?: ReactNode }) => (
         <h3 style={{ ...heading, fontSize: "20px", margin: "28px 0 10px" }}>
            {props.children}
         </h3>
      ),
      h4: (props: { children?: ReactNode }) => (
         <h4 style={{ ...heading, fontSize: "18px", margin: "24px 0 8px" }}>
            {props.children}
         </h4>
      ),
      p: (props: { children?: ReactNode }) => (
         <p style={text}>{props.children}</p>
      ),
      a: (props: { href?: string; children?: ReactNode }) => (
         <a href={props.href} style={link}>
            {props.children}
         </a>
      ),
      ul: (props: { children?: ReactNode }) => (
         <ul style={{ ...text, paddingLeft: "24px" }}>{props.children}</ul>
      ),
      ol: (props: { children?: ReactNode }) => (
         <ol style={{ ...text, paddingLeft: "24px" }}>{props.children}</ol>
      ),
      li: (props: { children?: ReactNode }) => (
         <li style={{ margin: "4px 0" }}>{props.children}</li>
      ),
      blockquote: (props: { children?: ReactNode }) => (
         <blockquote
            style={{
               ...text,
               borderLeft: `3px solid ${colors.border}`,
               paddingLeft: "16px",
               color: colors.subtle,
            }}
         >
            {props.children}
         </blockquote>
      ),
      hr: () => (
         <hr
            style={{
               border: "none",
               borderTop: `1px solid ${colors.border}`,
               margin: "32px 0",
            }}
         />
      ),
   };
}

type PostEmailProps = {
   post: Post;
   postUrl: string;
   children: ReactNode;
};

export function PostEmail({ post, postUrl, children }: PostEmailProps) {
   // Frontmatter dates parse as UTC midnight; format in UTC so the date
   // doesn't shift when this renders on a laptop in a non-UTC timezone.
   const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
   });
   return (
      <html lang="en">
         <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width" />
            <title>{post.title}</title>
         </head>
         <body style={{ margin: 0, padding: 0, backgroundColor: "#ffffff" }}>
            {post.description && (
               // Preheader: shown next to the subject in inbox list views.
               <div
                  style={{
                     display: "none",
                     overflow: "hidden",
                     lineHeight: "1px",
                     maxHeight: 0,
                     maxWidth: 0,
                     opacity: 0,
                  }}
               >
                  {post.description}
               </div>
            )}
            <div
               style={{
                  maxWidth: "600px",
                  margin: "0 auto",
                  padding: "32px 16px",
               }}
            >
               <h1 style={{ ...heading, fontSize: "28px", margin: "0 0 8px" }}>
                  {post.title}
               </h1>
               <p style={{ ...caption, textAlign: "left", margin: "0" }}>
                  {formattedDate} ·{" "}
                  <a href={postUrl} style={link}>
                     Read on the site
                  </a>
               </p>
               {post.description && (
                  <p
                     style={{
                        ...text,
                        color: colors.subtle,
                        margin: "12px 0 0",
                     }}
                  >
                     {post.description}
                  </p>
               )}
               <EmailFigure src={post.image} caption={post.imageAlt} />
               {children}
               <hr
                  style={{
                     border: "none",
                     borderTop: `1px solid ${colors.border}`,
                     margin: "40px 0 16px",
                  }}
               />
               <p style={{ ...caption, textAlign: "left" }}>
                  You&apos;re receiving this because you subscribed at{" "}
                  <a href={SITE_ORIGIN} style={link}>
                     masonmcelvain.com
                  </a>
                  . <a href="{{{RESEND_UNSUBSCRIBE_URL}}}">Unsubscribe</a>
               </p>
            </div>
         </body>
      </html>
   );
}
