import { NextResponse, type NextRequest } from "next/server";
import { getCachedSessions } from "../../climbing/data";

export async function GET(req: NextRequest) {
   const url = new URL(req.url);
   const pageParam = url.searchParams.get("page") ?? "0";
   const sizeParam = url.searchParams.get("size") ?? "20";
   const page = parseInt(pageParam, 10);
   const size = parseInt(sizeParam, 10);

   const allSessions = await getCachedSessions();
   const totalSessions = allSessions.length;
   const start = page * size;
   const end = start + size;
   const sessions = allSessions.slice(start, end);
   const hasMore = end < totalSessions;

   return NextResponse.json({ sessions, hasMore });
}
