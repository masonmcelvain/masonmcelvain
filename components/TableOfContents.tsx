"use client";

import { useEffect, useRef, useState } from "react";
import { FaListUl } from "react-icons/fa";
import { type TocEntry } from "@/lib/toc";
import { cn } from "@/lib/utils";

// Must exceed the headings' scroll-margin-top so a jumped-to heading
// registers as active.
const ACTIVE_OFFSET = 96;

const INDENT_CLASSES = ["", "pl-3", "pl-6"];

function useActiveHeading(entries: TocEntry[]): string | null {
   const [activeId, setActiveId] = useState<string | null>(null);

   useEffect(() => {
      let frame: number | null = null;

      function updateActiveHeading() {
         frame = null;
         const atBottom =
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 2;
         if (atBottom) {
            setActiveId(entries[entries.length - 1]?.id ?? null);
            return;
         }
         let current: string | null = null;
         for (const entry of entries) {
            const heading = document.getElementById(entry.id);
            if (
               heading &&
               heading.getBoundingClientRect().top <= ACTIVE_OFFSET
            ) {
               current = entry.id;
            }
         }
         setActiveId(current);
      }

      function scheduleUpdate() {
         frame ??= requestAnimationFrame(updateActiveHeading);
      }

      updateActiveHeading();
      window.addEventListener("scroll", scheduleUpdate, { passive: true });
      window.addEventListener("resize", scheduleUpdate);
      return () => {
         window.removeEventListener("scroll", scheduleUpdate);
         window.removeEventListener("resize", scheduleUpdate);
         if (frame !== null) {
            cancelAnimationFrame(frame);
         }
      };
   }, [entries]);

   return activeId;
}

function TocHeading() {
   return (
      <p className="text-foreground-muted mb-2 text-xs font-medium tracking-wide uppercase">
         On this page
      </p>
   );
}

function TocList({
   entries,
   activeId,
   onNavigate,
}: {
   entries: TocEntry[];
   activeId: string | null;
   onNavigate?: () => void;
}) {
   const minDepth = Math.min(...entries.map((entry) => entry.depth));
   return (
      <ul className="space-y-1.5 text-sm">
         {entries.map((entry) => (
            <li
               key={entry.id}
               className={
                  INDENT_CLASSES[
                     Math.min(entry.depth - minDepth, INDENT_CLASSES.length - 1)
                  ]
               }
            >
               <a
                  href={`#${entry.id}`}
                  title={entry.text}
                  onClick={onNavigate}
                  aria-current={activeId === entry.id ? "location" : undefined}
                  className={cn(
                     "block truncate transition-colors",
                     activeId === entry.id
                        ? "font-medium text-blue-600 dark:text-blue-400"
                        : "text-foreground-subtle hover:text-foreground",
                  )}
               >
                  {entry.text}
               </a>
            </li>
         ))}
      </ul>
   );
}

export function TableOfContents({ entries }: { entries: TocEntry[] }) {
   const activeId = useActiveHeading(entries);
   const popoverRef = useRef<HTMLElement>(null);

   if (entries.length === 0) {
      return null;
   }

   return (
      <>
         {/* Wide screens: pinned in the left gutter, mirroring the keyboard
             shortcuts legend on the right. */}
         <nav
            aria-label="Table of contents"
            className="fixed top-1/2 left-4 z-40 hidden w-48 -translate-y-1/2 2xl:block"
         >
            <div className="border-border bg-surface-elevated/90 max-h-[70vh] overflow-y-auto rounded-lg border px-4 py-3 shadow-lg backdrop-blur-sm">
               <TocHeading />
               <TocList entries={entries} activeId={activeId} />
            </div>
         </nav>

         {/* Smaller screens: floating button that opens a popover menu. */}
         <button
            type="button"
            popoverTarget="toc-popover"
            aria-label="Table of contents"
            className="border-border bg-surface-elevated/90 text-foreground-muted fixed right-4 bottom-4 z-50 flex size-12 cursor-pointer items-center justify-center rounded-full border shadow-lg backdrop-blur-sm 2xl:hidden"
         >
            <FaListUl aria-hidden />
         </button>
         <nav
            ref={popoverRef}
            id="toc-popover"
            popover="auto"
            aria-label="Table of contents"
            className="border-border bg-surface-elevated/95 inset-auto right-4 bottom-20 m-0 max-h-[60vh] w-64 translate-y-2 overflow-y-auto rounded-lg border px-4 py-3 opacity-0 shadow-lg backdrop-blur-sm transition-[opacity,transform,overlay,display] transition-discrete duration-200 ease-out open:translate-y-0 open:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none 2xl:hidden starting:open:translate-y-2 starting:open:opacity-0"
         >
            <TocHeading />
            <TocList
               entries={entries}
               activeId={activeId}
               onNavigate={() => popoverRef.current?.hidePopover()}
            />
         </nav>
      </>
   );
}
