import { getMetadata } from "@data/metadata";
import { type Tick, TicksSchema } from "@models/tick";
import { ExternalLinkIcon } from "@icons/social";
import csvToJson from "csvtojson";
import https from "https";
import type { Metadata } from "next";

const MP_TICKS_URL =
   "https://www.mountainproject.com/user/201271324/mason-mcelvain/tick-export";

export const metadata: Metadata = getMetadata({ suffix: "Climbing" });

export default async function Climbing() {
   const ticks = await fetchTicks();
   return (
      <div className="mt-12 flex flex-col justify-start space-y-4">
         {ticks.map((tick) => (
            <Tick
               key={`${tick.Date} - ${tick.Route} - ${tick.Notes}`}
               tick={tick}
            />
         ))}
      </div>
   );
}

function Tick({ tick }: { tick: Tick }) {
   const date = new Date(tick.Date).toLocaleString("en-IE", {
      timeZone: "UTC",
      day: "2-digit",
      month: "short",
      year: "numeric",
      weekday: "short",
   });
   return (
      <div className="mx-auto flex w-[22rem] flex-col space-y-2 rounded bg-blue-100 p-8 sm:w-[28rem] md:w-[30rem] xl:w-[64rem]">
         <div className="flex w-full items-center space-x-4">
            <h2>
               {date} - {tick.Route}
            </h2>
            <ExternalLinkIcon
               ariaLabel={`Visit ${tick.Route} on Mountain Project`}
               width="w-6"
               height="h-8"
               url={tick.URL}
            />
         </div>
         <div>
            <h3>{tick.Location}</h3>
         </div>
         <div>
            <p>{tick.Notes}</p>
         </div>
      </div>
   );
}

async function fetchTicks() {
   const csvString = await getCsvString(MP_TICKS_URL);
   const json = await csvToJson({
      checkType: true,
      colParser: { Rating: "string", "Your Rating": "string", Route: "string" },
   }).fromString(csvString);
   return TicksSchema.parse(json);
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
