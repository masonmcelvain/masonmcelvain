"use client";

import { type FormEvent, useState } from "react";
import { subscribe } from "@/app/actions/subscribe";
import { cn } from "@/lib/utils";

export function EmailSubscription() {
   const [email, setEmail] = useState("");
   const [status, setStatus] = useState<
      "idle" | "loading" | "success" | "error"
   >("idle");
   const [message, setMessage] = useState("");

   async function handleSubmit(e: FormEvent) {
      e.preventDefault();
      setStatus("loading");

      const result = await subscribe(email);

      if (result.success) {
         setStatus("success");
         setMessage("Thanks for subscribing!");
         setEmail("");
      } else {
         setStatus("error");
         setMessage(result.error);
      }
   }

   return (
      <div className="w-full max-w-md">
         <p className="mb-2 text-sm font-semibold text-gray-700">
            Want to stay in touch? Subscribe to my newsletter:
         </p>
         <form
            onSubmit={handleSubmit}
            className="flex overflow-hidden rounded-lg bg-gradient-to-br from-cyan-400 from-15% via-pink-500 via-47% to-purple-500"
         >
            <input
               type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               placeholder="example@gmail.com"
               className="my-[3px] ml-[3px] min-w-0 flex-1 rounded-l-md bg-black px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none"
               disabled={status === "loading"}
            />
            <button
               type="submit"
               disabled={status === "loading"}
               className="shrink-0 cursor-pointer px-6 py-3 font-medium text-white transition-all duration-200 hover:scale-110 active:scale-125"
            >
               Subscribe
            </button>
         </form>
         <p
            className={cn(
               "mt-2 min-h-[20px] text-sm font-semibold",
               ["success", "error"].includes(status) || "invisible",
               status === "success" && "text-green-600",
               status === "error" && "text-red-500",
            )}
         >
            {message}
         </p>
      </div>
   );
}
