"use server";

import { Resend } from "resend";
import { RESEND_API_KEY, RESEND_AUDIENCE_ID } from "@/config/env";
import { captureException, captureMessage } from "@sentry/nextjs";

type SubscribeResult = { success: true } | { success: false; error: string };

export async function subscribe(
   email_address: string,
): Promise<SubscribeResult> {
   if (!email_address || !email_address.includes("@")) {
      return { success: false, error: "Please enter a valid email" };
   }

   try {
      const resend = new Resend(RESEND_API_KEY);
      const { error } = await resend.contacts.create({
         email: email_address,
         audienceId: RESEND_AUDIENCE_ID,
         unsubscribed: false,
      });

      if (error) {
         if (error.name === "validation_error") {
            return { success: false, error: "Please enter a valid email" };
         }
         captureMessage("Unhandled subscription failure", {
            extra: {
               error,
               email_address,
            },
            level: "warning",
         });
         return {
            success: false,
            error: "Subscription failed. Please try again.",
         };
      }

      return { success: true };
   } catch (e) {
      captureException(e);
      return {
         success: false,
         error: "Subscription failed. Please try again.",
      };
   }
}
