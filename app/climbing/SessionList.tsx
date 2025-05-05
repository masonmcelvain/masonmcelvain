"use client";
import { useState } from "react";
import useSWR from "swr";

import { SessionCard } from "./components";
import { PAGE_SIZE, type Session } from "./data";

type SessionsResponse = {
   sessions: Session[];
   hasMore: boolean;
   totalSessions: number;
};

const fetcher = (url: string) =>
   fetch(url, { cache: "no-store" }).then((res) => {
      if (!res.ok) {
         throw new Error(`Failed to fetch sessions: ${res.status}`);
      }
      return res.json() as Promise<SessionsResponse>;
   });

interface SessionListProps {
   initialSessions: Session[];
   initialTotalSessions: number;
}

export function SessionList({
   initialSessions,
   initialTotalSessions,
}: SessionListProps) {
   const [page, setPage] = useState(0);

   const { data, error } = useSWR<SessionsResponse>(
      `/api/climbing?page=${page}&size=${PAGE_SIZE}`,
      fetcher,
      page === 0
         ? {
              fallbackData: {
                 sessions: initialSessions,
                 hasMore: initialTotalSessions > PAGE_SIZE,
                 totalSessions: initialTotalSessions,
              },
           }
         : {},
   );

   if (error) {
      return <div className="text-red-500">Error loading sessions.</div>;
   }

   const sessionsToRender = data?.sessions ?? [];
   const totalPages = Math.ceil((data?.totalSessions ?? 0) / PAGE_SIZE);

   const paginationRange =
      page < 3
         ? [0, 1, 2, 3, 4]
         : page > totalPages - 4
           ? [5, 4, 3, 2, 1].map((v) => totalPages - v)
           : [-2, -1, 0, 1, 2].map((v) => page + v);

   return (
      <>
         <div className="flex flex-col justify-start space-y-4">
            {sessionsToRender.map((session) => (
               <SessionCard key={session.date} {...session} />
            ))}
         </div>

         <nav className="mt-4 flex justify-center">
            <ul className="inline-flex -space-x-px">
               <li>
                  <button
                     onClick={() => setPage((old) => Math.max(old - 1, 0))}
                     disabled={page === 0}
                     className="ml-0 cursor-pointer rounded-lg bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                     Previous
                  </button>
               </li>
               <span
                  className={page < 3 ? "hidden" : "px-1 py-2 text-gray-500"}
               >
                  ...
               </span>
               {paginationRange.map((index) => (
                  <PaginationButton
                     key={index}
                     page={index}
                     isCurrent={index === page}
                     setPage={setPage}
                  />
               ))}
               <span
                  className={
                     page > totalPages - 4
                        ? "hidden"
                        : "px-1 py-2 text-gray-500"
                  }
               >
                  ...
               </span>
               <li>
                  <button
                     onClick={() =>
                        setPage((old) => Math.min(old + 1, totalPages - 1))
                     }
                     disabled={page === totalPages - 1}
                     className="cursor-pointer rounded-lg bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                     Next
                  </button>
               </li>
            </ul>
         </nav>
      </>
   );
}

function PaginationButton({
   page,
   isCurrent,
   setPage,
}: {
   page: number;
   isCurrent: boolean;
   setPage: (page: number) => void;
}) {
   return (
      <li>
         <button
            onClick={() => setPage(page)}
            className={`cursor-pointer rounded-lg px-3 py-2 leading-tight ${
               isCurrent
                  ? "bg-blue-50 text-blue-600"
                  : "bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            }`}
         >
            {page + 1}
         </button>
      </li>
   );
}
