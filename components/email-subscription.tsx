"use client";

import { usePathname } from "next/navigation";
import {
   type CSSProperties,
   type FormEvent,
   useEffect,
   useRef,
   useState,
} from "react";
import { FaStar } from "react-icons/fa";
import { subscribe } from "@/app/actions/subscribe";
import { cn } from "@/lib/utils";

type Star = {
   id: number;
   x: number;
   y: number;
   dx: number;
   dy: number;
};

let starId = 0;

export function EmailSubscription() {
   const [email, setEmail] = useState("");
   const [status, setStatus] = useState<
      "idle" | "loading" | "success" | "error"
   >("idle");
   const [message, setMessage] = useState("");
   const [stars, setStars] = useState<Star[]>([]);
   const buttonRef = useRef<HTMLButtonElement>(null);
   const clickTimestamps = useRef<number[]>([]);
   const pathname = usePathname();

   useEffect(() => {
      setStatus("idle");
      setMessage("");
   }, [pathname]);

   function spawnStars() {
      if (!buttonRef.current) return;

      const buttonRect = buttonRef.current.getBoundingClientRect();
      const centerX = buttonRect.left + buttonRect.width / 2;
      const centerY = buttonRect.top + buttonRect.height / 2;

      const newStars: Star[] = [];
      const starCount = 8;

      for (let i = 0; i < starCount; i++) {
         const angle = (i / starCount) * Math.PI * 2;
         const radiusX = buttonRect.width / 2;
         const radiusY = buttonRect.height / 2;
         const x = centerX + Math.cos(angle) * radiusX;
         const y = centerY + Math.sin(angle) * radiusY;

         const dx = Math.cos(angle) * 60;
         const dy = Math.sin(angle) * 60;

         newStars.push({ id: starId++, x, y, dx, dy });
      }

      setStars((prev) => [...prev, ...newStars]);

      setTimeout(() => {
         setStars((prev) =>
            prev.filter((s) => !newStars.some((ns) => ns.id === s.id)),
         );
      }, 1000);
   }

   async function handleSubmit(e: FormEvent) {
      e.preventDefault();

      const now = Date.now();
      clickTimestamps.current.push(now);
      clickTimestamps.current = clickTimestamps.current.filter(
         (t) => now - t < 2000,
      );

      if (clickTimestamps.current.length >= 4) {
         setStatus("error");
         setMessage("You're silly");
         return;
      }

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
      <div className="relative w-full max-w-md">
         <p className="text-foreground-muted mb-2 text-sm font-semibold">
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
               ref={buttonRef}
               type="submit"
               disabled={status === "loading"}
               onMouseUp={spawnStars}
               className="shrink-0 cursor-pointer px-6 py-3 font-medium text-white transition-all duration-200 hover:scale-110 active:scale-125"
            >
               Subscribe
            </button>
         </form>
         {stars.map((star) => (
            <span
               key={star.id}
               className="animate-shoot pointer-events-none fixed text-amber-500"
               style={
                  {
                     left: star.x,
                     top: star.y,
                     "--dx": `${star.dx}px`,
                     "--dy": `${star.dy}px`,
                  } as CSSProperties
               }
            >
               <FaStar className="h-3 w-3" />
            </span>
         ))}
         <p
            className={cn(
               "mt-2 min-h-[20px] text-sm font-semibold",
               ["success", "error"].includes(status) || "invisible",
               status === "success" && "text-green-600 dark:text-green-400",
               status === "error" && "text-red-500 dark:text-red-400",
            )}
         >
            {message}
         </p>
      </div>
   );
}
