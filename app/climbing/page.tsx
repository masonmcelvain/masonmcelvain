import { getMetadata } from "@data/metadata";
import type { Metadata } from "next";
import { getCachedSessions, PAGE_SIZE } from "./data";
import { SessionList } from "./SessionList";

export const metadata: Metadata = getMetadata({ suffix: "Climbing" });

export default async function Climbing() {
   const allSessions = await getCachedSessions();
   const initialSessions = allSessions.slice(0, PAGE_SIZE);
   const initialTotalSessions = allSessions.length;

   return (
      <div className="mt-12 flex flex-col justify-start space-y-4">
         <SessionList
            initialSessions={initialSessions}
            initialTotalSessions={initialTotalSessions}
         />
      </div>
   );
}
