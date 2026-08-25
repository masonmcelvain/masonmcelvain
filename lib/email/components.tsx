import { type CSSProperties, type ReactNode } from "react";
import { mediaUrl, videoAnchorId } from "@/lib/media";
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

const BODY_WIDTH = 600;
const MAX_FIGURE_HEIGHT = 640;
const PHOTO_ASPECT = { portrait: 3 / 4, landscape: 4 / 3 };
const VIDEO_ASPECT = { portrait: 9 / 16, landscape: 16 / 9 };
const MOBILE_VIDEO_HEIGHT = 840;
const MOBILE_VIDEO_WIDTH = Math.round(
   MOBILE_VIDEO_HEIGHT * VIDEO_ASPECT.portrait,
);
const CAROUSEL_HEIGHT = 320;

function figureWidth(aspectRatio: number) {
   return Math.min(BODY_WIDTH, Math.round(MAX_FIGURE_HEIGHT * aspectRatio));
}

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
   aspectRatio: number;
   capOnMobile?: boolean;
};

function EmailFigure({
   src,
   alt,
   caption: captionText,
   captionSuffix,
   href,
   aspectRatio,
   capOnMobile = false,
}: EmailFigureProps) {
   const width = figureWidth(aspectRatio);
   const image = (
      // eslint-disable-next-line @next/next/no-img-element
      <img
         src={emailImageUrl(src)}
         alt={alt ?? captionText ?? ""}
         width={width}
         className={
            capOnMobile ? "fit-viewport fit-viewport-mobile" : "fit-viewport"
         }
         style={{
            width: "100%",
            maxWidth: `${width}px`,
            height: "auto",
            borderRadius: "8px",
            display: "block",
            margin: "0 auto",
         }}
      />
   );
   return (
      <figure style={{ margin: "32px 0" }}>
         {href ? (
            <a href={href} style={{ display: "block" }}>
               {image}
            </a>
         ) : (
            image
         )}
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
 */
export function getEmailComponents(postUrl: string) {
   return {
      ImageWithCaption: (props: {
         src: string;
         alt?: string;
         caption: string;
         landscape?: boolean;
      }) => (
         <EmailFigure
            src={props.src}
            alt={props.alt}
            caption={props.caption}
            aspectRatio={
               props.landscape ? PHOTO_ASPECT.landscape : PHOTO_ASPECT.portrait
            }
         />
      ),
      // No JS in email, so the carousel becomes a CSS scroll-snap strip:
      // fixed-height images at natural widths, with the next photo peeking in
      // from the right so it reads as scrollable. Clients that strip overflow
      // (Outlook) stack the images vertically instead, and the caption links
      // to the post as a further fallback.
      ImageCarousel: (props: {
         images: CarouselImage[];
         alt?: string;
         caption?: string;
      }) => {
         const count = props.images.length;
         const first = props.images[0];
         if (!first) return null;
         if (count === 1) {
            return (
               <EmailFigure
                  src={first.src}
                  alt={props.alt}
                  caption={first.caption ?? props.caption}
                  aspectRatio={PHOTO_ASPECT[first.orientation]}
               />
            );
         }
         return (
            <figure style={{ margin: "32px 0" }}>
               <div
                  style={{
                     overflowX: "auto",
                     whiteSpace: "nowrap",
                     scrollSnapType: "x mandatory",
                     WebkitOverflowScrolling: "touch",
                  }}
               >
                  {props.images.map((image, i) => (
                     // eslint-disable-next-line @next/next/no-img-element
                     <img
                        key={image.src}
                        src={emailImageUrl(image.src)}
                        alt={
                           image.caption ??
                           props.alt ??
                           `Photo ${i + 1} of ${count}`
                        }
                        height={CAROUSEL_HEIGHT}
                        style={{
                           height: `${CAROUSEL_HEIGHT}px`,
                           width: "auto",
                           display: "inline-block",
                           verticalAlign: "top",
                           borderRadius: "8px",
                           marginRight: i < count - 1 ? "8px" : 0,
                           scrollSnapAlign: "start",
                        }}
                     />
                  ))}
               </div>
               <figcaption style={caption}>
                  {props.caption && <div>{props.caption}</div>}
                  <div
                     className="carousel-hint-desktop"
                     style={{ display: "none" }}
                  >
                     Shift+Scroll for all {count} photos
                  </div>
               </figcaption>
            </figure>
         );
      },
      VideoWithCaption: (props: {
         src: string;
         poster: string;
         caption: string;
         landscape?: boolean;
      }) => {
         const videoUrl = `${postUrl}#${videoAnchorId(props.src)}`;
         return (
            <EmailFigure
               src={props.poster}
               caption={props.caption}
               href={videoUrl}
               aspectRatio={
                  props.landscape
                     ? VIDEO_ASPECT.landscape
                     : VIDEO_ASPECT.portrait
               }
               capOnMobile={!props.landscape}
               captionSuffix={
                  <>
                     {" "}
                     <a href={videoUrl} style={link}>
                        Watch full video
                     </a>
                  </>
               }
            />
         );
      },
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
         {/* eslint-disable-next-line @next/next/no-head-element -- this is a
             standalone email document, not a Next.js page */}
         <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width" />
            <title>{post.title}</title>
            <style>{`
               @media (min-width: 600px) {
                  .carousel-hint-desktop { display: block !important; }
               }
               @media (max-width: 599px) {
                  .fit-viewport { max-width: 100% !important; }
                  .fit-viewport-mobile { max-width: ${MOBILE_VIDEO_WIDTH}px !important; }
               }
            `}</style>
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
               <EmailFigure
                  src={post.image}
                  caption={post.imageAlt}
                  aspectRatio={PHOTO_ASPECT.landscape}
               />
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
