import { getMetadata } from "@data/metadata";
import type { Metadata } from "next";
import { getCachedTicks } from "./data";
import DaysOutList from "./DaysOutList";

export const metadata: Metadata = getMetadata({ suffix: "Climbing" });

export default async function Climbing() {
   const allDays = await getCachedTicks();
   const PAGE_SIZE = 20;
   const initialDays = allDays.slice(0, PAGE_SIZE);
   const initialHasMore = allDays.length > PAGE_SIZE;

   return (
      <div className="mt-12 flex flex-col justify-start space-y-4">
         <DaysOutList
            initialDays={initialDays}
            initialHasMore={initialHasMore}
         />
      </div>
   );
}
