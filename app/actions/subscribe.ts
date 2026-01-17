"use server";

import { BUTTONDOWN_API_KEY } from "@/config/env";

type SubscribeResult = { success: true } | { success: false; error: string };

export async function subscribe(
   email_address: string,
): Promise<SubscribeResult> {
   if (!email_address || !email_address.includes("@")) {
      return { success: false, error: "Please enter a valid email" };
   }

   try {
      const response = await fetch(
         "https://api.buttondown.email/v1/subscribers",
         {
            method: "POST",
            headers: {
               "X-Buttondown-Collision-Behavior": "overwrite",
               Authorization: `Token ${BUTTONDOWN_API_KEY}`,
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ email_address }),
         },
      );

      if (!response.ok) {
         const data = await response.json();
         if (response.status === 400 && data.email) {
            return { success: false, error: data.email[0] };
         }
         return {
            success: false,
            error: "Subscription failed. Please try again.",
         };
      }

      return { success: true };
   } catch {
      return {
         success: false,
         error: "Subscription failed. Please try again.",
      };
   }
}
