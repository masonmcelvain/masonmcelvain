import { unique } from "@helpers/type-helpers";
import { TicksSchema, type Tick } from "@models/tick";
import csvToJson from "csvtojson";
import he from "he";
import https from "https";
import { unstable_cache } from "next/cache";

export const PAGE_SIZE = 20;

const MP_TICKS_URL =
   "https://www.mountainproject.com/user/201271324/mason-mcelvain/tick-export";

export interface Session {
   date: string;
   ticks: Tick[];
   area: string;
}
export type Sessions = Session[];

export const getCachedSessions = unstable_cache(
   async (): Promise<Sessions> => {
      const ticks = await fetchTicks();
      const ticksByDay: Record<string, Tick[]> = {};
      for (const tick of ticks) {
         ticksByDay[tick.Date] ??= [];
         ticksByDay[tick.Date].push(tick);
      }
      const sortedDates = Object.keys(ticksByDay).sort(
         (a, b) => new Date(b).getTime() - new Date(a).getTime(),
      );
      return sortedDates.map((date) => ({
         date,
         ticks: ticksByDay[date],
         area: closestCommonSubArea(ticksByDay[date]),
      }));
   },
   ["climbing-sessions"],
   { revalidate: 3600 * 24 },
);

async function fetchTicks() {
   const csvString = await getCsvString(MP_TICKS_URL);
   const json = await csvToJson({
      checkType: true,
      colParser: { Rating: "string", "Your Rating": "string", Route: "string" },
   }).fromString(csvString);
   const encodedTicks = TicksSchema.parse(json);
   const decodedTicks = encodedTicks.map((tick) => ({
      ...tick,
      Notes: he.decode(tick.Notes),
   }));
   return decodedTicks;
}

function getCsvString(url: string) {
   return new Promise<string>((resolve, reject) => {
      let contents = "";
      https
         .get(url, (response) => {
            response.on("data", function (chunk) {
               contents += chunk;
            });
            response.on("end", function () {
               resolve(contents);
            });
         })
         .on("error", (error) => {
            reject(error);
         });
   });
}

function closestCommonSubArea(ticks: Tick[]) {
   const areas = ticks.map((tick) => tick.Location).filter(unique);
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
