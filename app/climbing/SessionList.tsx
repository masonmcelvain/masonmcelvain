"use client";
import React, { useState } from "react";
import { type Tick } from "@models/tick";
import { unique } from "@helpers/type-helpers";
import { ExternalLinkIcon } from "@icons/social";
import { PAGE_SIZE } from "./data";

interface Session {
   date: string;
   ticks: Tick[];
}

interface SessionListProps {
   initialSessions: Session[];
   initialHasMore: boolean;
}

export function SessionList({
   initialSessions,
   initialHasMore,
}: SessionListProps) {
   const [sessions, setSessions] = useState<Session[]>(initialSessions);
   const [hasMore, setHasMore] = useState(initialHasMore);
   const [loading, setLoading] = useState(false);

   const loadMore = async () => {
      if (!hasMore || loading) return;
      setLoading(true);
      try {
         const page = sessions.length / PAGE_SIZE;
         const res = await fetch(
            `/api/climbing?page=${page}&size=${PAGE_SIZE}`,
            {
               cache: "no-store",
            },
         );
         if (!res.ok) {
            throw new Error(`Failed to load more: ${res.status}`);
         }
         const data: { sessions: Session[]; hasMore: boolean } =
            await res.json();
         setSessions((prev) => [...prev, ...data.sessions]);
         setHasMore(data.hasMore);
      } catch (error) {
         console.error(error);
      } finally {
         setLoading(false);
      }
   };

   return (
      <>
         <div className="flex flex-col justify-start space-y-4">
            {sessions.map(({ date, ticks }) => (
               <Session key={date} date={date} ticks={ticks} />
            ))}
         </div>
         {hasMore && (
            <div className="mt-4 flex justify-center">
               <button
                  onClick={loadMore}
                  disabled={loading}
                  className="rounded bg-blue-600 px-4 py-2 text-white"
               >
                  {loading ? "Loading..." : "Load More"}
               </button>
            </div>
         )}
      </>
   );
}

function Session({ date, ticks }: Session) {
   const localizedDate = new Date(date).toLocaleString("en-IE", {
      timeZone: "UTC",
      day: "2-digit",
      month: "short",
      year: "numeric",
      weekday: "short",
   });
   const areas = ticks.map((tick) => tick.Location).filter(unique);
   const generalArea = closestCommonSubArea(areas);

   return (
      <div className="mx-auto flex w-[22rem] flex-col space-y-2 rounded-sm bg-blue-50 p-8 sm:w-[28rem] md:w-[30rem] xl:w-[64rem]">
         <div className="flex flex-col space-y-4">
            <h2>{localizedDate}</h2>
            {generalArea && <p>{generalArea}</p>}
            <div className="flex flex-col space-y-4">
               {ticks.map((tick) => (
                  <TickRow
                     key={`${tick.Route} ${tick.Notes} ${tick["Lead Style"]}`}
                     tick={tick}
                     generalArea={generalArea}
                  />
               ))}
            </div>
         </div>
      </div>
   );
}

function TickRow({ tick, generalArea }: { tick: Tick; generalArea: string }) {
   const subArea =
      generalArea === tick.Location
         ? null
         : tick.Location.replace(`${generalArea} > `, "");

   return (
      <div className="flex flex-col">
         <div className="flex items-center space-x-4">
            <h3>
               <span className="font-bold">{tick.Route}</span> {tick.Rating}{" "}
               {tick["Route Type"]}
            </h3>
            <ExternalLinkIcon
               ariaLabel={`Visit ${tick.Route} on Mountain Project`}
               width="w-5"
               height="h-5"
               url={tick.URL}
            />
         </div>
         {subArea && <p className="text-sm text-gray-800 italic">{subArea}</p>}
         <p>{tick.Notes}</p>
      </div>
   );
}

function closestCommonSubArea(areas: string[]) {
   if (!areas[0] || areas.length === 1) {
      return areas[0] || "";
   }
   const subAreas = areas.map((area) => area.split(" > "));
   const firstAreaSubAreas = subAreas[0];
   let i = 0;
   while (
      firstAreaSubAreas[i] &&
      subAreas.every((a) => a[i] === firstAreaSubAreas[i])
   ) {
      i++;
   }
   return firstAreaSubAreas.slice(0, i).join(" > ");
}
