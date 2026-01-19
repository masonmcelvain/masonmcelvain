"use client";

import { useEffect, useRef, useState } from "react";

const shortcuts = [
   { key: "j", label: "↓", description: "scroll down" },
   { key: "k", label: "↑", description: "scroll up" },
   { key: "g", label: "↑↑", description: "go to top" },
   { key: "G", label: "↓↓", description: "go to bottom" },
];

const SCROLL_AMOUNT = 150;
const SCROLL_SPEED = 1000; // pixels per second
const MAX_SCROLL_AHEAD = 150; // max distance target can be ahead of current position

export function KeyboardShortcutsLegend() {
   const [isDismissed, setIsDismissed] = useState(false);
   const [isScrollable, setIsScrollable] = useState(false);

   const scrollAnimationRef = useRef<{
      targetY: number;
      lastTime: number | null;
      animationId: number | null;
   } | null>(null);

   useEffect(() => {
      function checkScrollable() {
         setIsScrollable(
            document.documentElement.scrollHeight > window.innerHeight,
         );
      }

      checkScrollable();
      window.addEventListener("resize", checkScrollable);

      const observer = new MutationObserver(checkScrollable);
      observer.observe(document.body, { childList: true, subtree: true });

      return () => {
         window.removeEventListener("resize", checkScrollable);
         observer.disconnect();
      };
   }, []);

   useEffect(() => {
      function animateScroll(timestamp: number) {
         const animation = scrollAnimationRef.current;
         if (!animation) return;

         if (animation.lastTime === null) {
            animation.lastTime = timestamp;
         }

         const deltaTime = timestamp - animation.lastTime;
         animation.lastTime = timestamp;

         const currentScroll = window.scrollY;
         const remaining = animation.targetY - currentScroll;
         const direction = Math.sign(remaining);
         const moveAmount = (SCROLL_SPEED * deltaTime) / 1000;

         if (Math.abs(remaining) <= moveAmount) {
            window.scrollTo(0, animation.targetY);
            scrollAnimationRef.current = null;
         } else {
            window.scrollTo(0, currentScroll + direction * moveAmount);
            animation.animationId = requestAnimationFrame(animateScroll);
         }
      }

      function smoothScrollBy(delta: number) {
         const maxScroll =
            document.documentElement.scrollHeight - window.innerHeight;
         const currentScroll = window.scrollY;

         const currentTarget =
            scrollAnimationRef.current?.targetY ?? currentScroll;
         let newTarget = Math.max(
            0,
            Math.min(maxScroll, currentTarget + delta),
         );

         // Cap how far ahead the target can be from current position
         const maxTarget = currentScroll + MAX_SCROLL_AHEAD;
         const minTarget = currentScroll - MAX_SCROLL_AHEAD;
         newTarget = Math.max(minTarget, Math.min(maxTarget, newTarget));
         newTarget = Math.max(0, Math.min(maxScroll, newTarget));

         if (scrollAnimationRef.current) {
            scrollAnimationRef.current.targetY = newTarget;
         } else {
            scrollAnimationRef.current = {
               targetY: newTarget,
               lastTime: null,
               animationId: requestAnimationFrame(animateScroll),
            };
         }
      }

      function handleKeyDown(event: KeyboardEvent) {
         if (
            event.target instanceof HTMLInputElement ||
            event.target instanceof HTMLTextAreaElement
         ) {
            return;
         }

         switch (event.key) {
            case "j":
               smoothScrollBy(SCROLL_AMOUNT);
               break;
            case "k":
               smoothScrollBy(-SCROLL_AMOUNT);
               break;
            case "g":
               window.scrollTo({ top: 0, behavior: "smooth" });
               break;
            case "G":
               window.scrollTo({
                  top: document.documentElement.scrollHeight,
                  behavior: "smooth",
               });
               break;
         }
      }

      window.addEventListener("keydown", handleKeyDown);
      return () => {
         window.removeEventListener("keydown", handleKeyDown);
         if (scrollAnimationRef.current?.animationId) {
            cancelAnimationFrame(scrollAnimationRef.current.animationId);
         }
      };
   }, []);

   if (isDismissed || !isScrollable) {
      return null;
   }

   return (
      <div
         className="fixed top-1/2 right-6 z-50 hidden -translate-y-1/2 cursor-pointer lg:block"
         onClick={() => setIsDismissed(true)}
      >
         <div className="rounded-lg border border-gray-200 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm">
            <ul className="space-y-2 text-sm">
               {shortcuts.map(({ key, label }) => (
                  <li key={key} className="flex items-center gap-3">
                     <kbd className="inline-flex h-6 w-6 items-center justify-center rounded border border-gray-300 bg-gray-100 font-mono text-xs font-medium text-gray-700">
                        {key}
                     </kbd>
                     <span className="text-gray-500">{label}</span>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
}
