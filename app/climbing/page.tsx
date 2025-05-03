import { getMetadata } from "@data/metadata";
import type { Metadata } from "next";
import { getCachedSessions } from "./data";
import SessionList from "./SessionList";

export const metadata: Metadata = getMetadata({ suffix: "Climbing" });

export default async function Climbing() {
   const allSessions = await getCachedSessions();
   const PAGE_SIZE = 20;
   const initialSessions = allSessions.slice(0, PAGE_SIZE);
   const initialHasMore = allSessions.length > PAGE_SIZE;

   return (
      <div className="mt-12 flex flex-col justify-start space-y-4">
         <SessionList
            initialSessions={initialSessions}
            initialHasMore={initialHasMore}
         />
      </div>
   );
}
