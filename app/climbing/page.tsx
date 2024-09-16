import { getMetadata } from "@data/metadata";
import { unique } from "@helpers/type-helpers";
import { type Tick, TicksSchema } from "@models/tick";
import { ExternalLinkIcon } from "@icons/social";
import csvToJson from "csvtojson";
import he from "he";
import https from "https";
import type { Metadata } from "next";

const MP_TICKS_URL =
   "https://www.mountainproject.com/user/201271324/mason-mcelvain/tick-export";

export const metadata: Metadata = getMetadata({ suffix: "Climbing" });

export default async function Climbing() {
   const ticks = await fetchTicks();
   const ticksByDay = ticks.reduce(
      (acc, tick) => {
         acc[tick.Date] ??= [];
         acc[tick.Date].push(tick);
         return acc;
      },
      {} as Record<string, Tick[]>,
   );
   return (
      <div className="mt-12 flex flex-col justify-start space-y-4">
         {Object.entries(ticksByDay).map(([date, ticks]) => (
            <DayOut key={date} date={date} ticks={ticks} />
         ))}
      </div>
   );
}

function DayOut({ date, ticks }: { date: string; ticks: Tick[] }) {
   const localizedDate = new Date(date).toLocaleString("en-IE", {
      timeZone: "UTC",
      day: "2-digit",
      month: "short",
      year: "numeric",
      weekday: "short",
   });
   const areas = ticks.map((tick) => tick.Location).filter(unique);
   const generalArea = closestCommonSubArea(areas);
   return (
      <div className="mx-auto flex w-[22rem] flex-col space-y-2 rounded bg-blue-100 p-8 sm:w-[28rem] md:w-[30rem] xl:w-[64rem]">
         <div className="flex flex-col space-y-4">
            <h2>{localizedDate}</h2>
            {generalArea ? <p>{generalArea}</p> : null}
            <div className="flex flex-col space-y-4">
               {ticks.map((tick) => (
                  <TickRow
                     key={`${tick.Route} ${tick.Notes} ${tick["Lead Style"]}`}
                     tick={tick}
                     generalArea={generalArea}
                  />
               ))}
            </div>
         </div>
      </div>
   );
}

function TickRow({ tick, generalArea }: { tick: Tick; generalArea: string }) {
   const subArea =
      generalArea === tick.Location
         ? null
         : tick.Location.replace(`${generalArea} > `, "");
   return (
      <div className="flex flex-col">
         <div className="flex items-center space-x-4">
            <h3>
               <span className="font-bold">{tick.Route}</span> {tick.Rating}{" "}
               {tick["Route Type"]}
            </h3>
            <ExternalLinkIcon
               ariaLabel={`Visit ${tick.Route} on Mountain Project`}
               width="w-5"
               height="h-5"
               url={tick.URL}
            />
         </div>
         {subArea ? (
            <p className="text-sm italic text-slate-600">{subArea}</p>
         ) : null}
         <p>{tick.Notes}</p>
      </div>
   );
}

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

function closestCommonSubArea(areas: string[]) {
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
