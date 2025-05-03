import { NextResponse, type NextRequest } from "next/server";
import { getCachedTicks } from "../../climbing/data";
import type { Tick } from "@models/tick";

export async function GET(req: NextRequest) {
   const url = new URL(req.url);
   const pageParam = url.searchParams.get("page") ?? "0";
   const sizeParam = url.searchParams.get("size") ?? "20";
   const page = parseInt(pageParam, 10);
   const size = parseInt(sizeParam, 10);

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
   const totalDays = sortedDates.length;
   const start = page * size;
   const end = start + size;
   const pageDates = sortedDates.slice(start, end);
   const days = pageDates.map((date) => ({
      date,
      ticks: ticksByDay[date],
   }));
   const hasMore = end < totalDays;

   return NextResponse.json({ days, hasMore });
}
