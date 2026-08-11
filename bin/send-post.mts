import { Resend } from "resend";
import { RESEND_API_KEY, RESEND_AUDIENCE_ID } from "@/config/env";
import { EMAIL_FROM, EMAIL_REPLY_TO } from "@/lib/email/constants";
import { renderPostEmail } from "@/lib/email/render";

async function main() {
   const slug = process.argv[2];
   if (!slug) {
      console.error("Usage: pnpm email:draft <post-slug>");
      process.exit(1);
   }

   const rendered = await renderPostEmail(slug);
   if (!rendered) {
      console.error(`No post found for slug "${slug}"`);
      process.exit(1);
   }

   const resend = new Resend(RESEND_API_KEY);
   const { data, error } = await resend.broadcasts.create({
      audienceId: RESEND_AUDIENCE_ID,
      from: EMAIL_FROM,
      replyTo: EMAIL_REPLY_TO,
      subject: rendered.subject,
      html: rendered.html,
      text: rendered.text,
      name: `blog: ${slug}`,
   });

   if (error) {
      console.error("Failed to create broadcast:", error);
      process.exit(1);
   }

   console.log(`Draft broadcast created for "${rendered.subject}"`);
   console.log(`Review and send: https://resend.com/broadcasts/${data!.id}`);
}

void main();
