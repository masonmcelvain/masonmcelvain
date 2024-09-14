import { getMetadata } from "@data/metadata";
import csvToJson from "csvtojson";
import https from "https";
import type { Metadata } from "next";
import { z } from "zod";

const MP_TICKS_URL =
   "https://www.mountainproject.com/user/201271324/mason-mcelvain/tick-export";

const TickSchema = z.object({
   Date: z.string(),
   Route: z.string(),
   Rating: z.string(),
   Notes: z.string(),
   URL: z.string(),
   Pitches: z.number(),
   Location: z.string(),
   "Avg Stars": z.number(),
   "Your Stars": z.number(),
   Style: z.string(),
   "Lead Style": z.string(),
   "Route Type": z.string(),
   "Your Rating": z.string(),
   Length: z.union([z.number(), z.string()]),
   "Rating Code": z.number(),
});
type Tick = z.infer<typeof TickSchema>;
const TicksSchema = z.array(TickSchema);

export const metadata: Metadata = getMetadata({ suffix: "Climbing" });

export default async function Climbing() {
   const ticks = await fetchTicks();
   return ticks.map((tick) => (
      <Tick key={`${tick.Date} - ${tick.Route} - ${tick.Notes}`} tick={tick} />
   ));
}

function Tick({ tick }: { tick: Tick }) {
   return <pre>{JSON.stringify(tick, null, 2)}</pre>;
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
