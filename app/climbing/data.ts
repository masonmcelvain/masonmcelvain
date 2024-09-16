import { TicksSchema } from "@models/tick";
import csvToJson from "csvtojson";
import he from "he";
import https from "https";
import { unstable_cache } from "next/cache";

const revalidate = 300;
const MP_TICKS_URL =
   "https://www.mountainproject.com/user/201271324/mason-mcelvain/tick-export";

export const getCachedTicks = unstable_cache(
   async () => fetchTicks(),
   ["climbing-ticks"],
   { revalidate },
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
