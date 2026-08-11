import { renderPostEmail } from "@/lib/email/render";

type Props = {
   params: Promise<{ slug: string }>;
};

// Dev-only preview of the email version of a post, e.g.
// http://localhost:3000/email-preview/summer-26
export async function GET(_request: Request, { params }: Props) {
   if (process.env.NODE_ENV === "production") {
      return new Response("Not found", { status: 404 });
   }

   const { slug } = await params;
   const rendered = await renderPostEmail(slug);
   if (!rendered) {
      return new Response("Not found", { status: 404 });
   }

   return new Response(rendered.html, {
      headers: { "content-type": "text/html; charset=utf-8" },
   });
}
