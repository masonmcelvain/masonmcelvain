"use client";

import { useEffect } from "react";

const shortcuts = [
   { key: "j", label: "↓", description: "scroll down" },
   { key: "k", label: "↑", description: "scroll up" },
   { key: "g", label: "↑↑", description: "go to top" },
   { key: "G", label: "↓↓", description: "go to bottom" },
];

const SCROLL_AMOUNT = 150;

export function KeyboardShortcutsLegend() {
   useEffect(() => {
      function handleKeyDown(event: KeyboardEvent) {
         if (
            event.target instanceof HTMLInputElement ||
            event.target instanceof HTMLTextAreaElement
         ) {
            return;
         }

         switch (event.key) {
            case "j":
               window.scrollBy({ top: SCROLL_AMOUNT, behavior: "smooth" });
               break;
            case "k":
               window.scrollBy({ top: -SCROLL_AMOUNT, behavior: "smooth" });
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
      return () => window.removeEventListener("keydown", handleKeyDown);
   }, []);

   return (
      <div className="fixed top-1/2 right-6 z-50 hidden -translate-y-1/2 lg:block">
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
