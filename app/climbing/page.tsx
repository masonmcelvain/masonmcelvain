import { getMetadata } from "@data/metadata";
import { type Tick } from "@models/tick";
import type { Metadata } from "next";
import { getCachedTicks } from "./data";
import DaysOutList from "./DaysOutList";

export const metadata: Metadata = getMetadata({ suffix: "Climbing" });

export default async function Climbing() {
   const ticks = await getCachedTicks();
   const ticksByDay = ticks.reduce(
      (acc, tick) => {
         acc[tick.Date] ??= [];
         acc[tick.Date].push(tick);
         return acc;
      },
      {} as Record<string, Tick[]>,
   );
   const sortedDates = Object.keys(ticksByDay).sort(
      (a, b) => new Date(b).getTime() - new Date(a).getTime(),
   );
   const PAGE_SIZE = 20;
   const initialDates = sortedDates.slice(0, PAGE_SIZE);
   const initialDays = initialDates.map((date) => ({
      date,
      ticks: ticksByDay[date],
   }));
   const initialHasMore = sortedDates.length > PAGE_SIZE;

   return (
      <div className="mt-12 flex flex-col justify-start space-y-4">
         <DaysOutList
            initialDays={initialDays}
            initialHasMore={initialHasMore}
         />
      </div>
   );
}
