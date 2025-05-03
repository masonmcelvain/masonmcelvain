"use client";
import { useState } from "react";
import { SessionCard } from "./components";
import { PAGE_SIZE, type Session } from "./data";

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
            {sessions.map((session) => (
               <SessionCard key={session.date} {...session} />
            ))}
         </div>
         {hasMore && (
            <div className="mt-4 flex justify-center">
               <button
                  onClick={loadMore}
                  disabled={loading}
                  className="rounded bg-gray-100 px-4 py-2 transition-colors hover:bg-gray-200 active:bg-gray-300"
               >
                  {loading ? "Loading..." : "Load more"}
               </button>
            </div>
         )}
      </>
   );
}
