import { NextResponse, type NextRequest } from "next/server";
import { getCachedTicks } from "../../climbing/data";

export async function GET(req: NextRequest) {
   const url = new URL(req.url);
   const pageParam = url.searchParams.get("page") ?? "0";
   const sizeParam = url.searchParams.get("size") ?? "20";
   const page = parseInt(pageParam, 10);
   const size = parseInt(sizeParam, 10);

   const allDays = await getCachedTicks();
   const totalDays = allDays.length;
   const start = page * size;
   const end = start + size;
   const days = allDays.slice(start, end);
   const hasMore = end < totalDays;

   return NextResponse.json({ days, hasMore });
}
