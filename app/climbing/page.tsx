import { getMetadata } from "@data/metadata";
import csvToJson from "csvtojson";
import fs from "fs";
import fsPromises from "fs/promises";
import https from "https";
import path from "path";
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
   const ticksFilePath = getTicksFilePath();
   await downloadTicks(ticksFilePath);
   const json = await csvToJson({
      checkType: true,
      colParser: { Rating: "string", "Your Rating": "string", Route: "string" },
   }).fromFile(ticksFilePath);
   return TicksSchema.parse(json);
}

async function downloadTicks(ticksFilePath: string) {
   const ticksDirectory = path.dirname(ticksFilePath);
   ensureDirectoryExists(ticksDirectory);
   await downloadFile(new URL(MP_TICKS_URL), ticksFilePath);
}

function getTicksFilePath() {
   const directory = process.cwd() + "/.tmp";
   const fileName = "tick-export.csv";
   const importPath = path.join(directory, fileName);
   return importPath;
}

function downloadFile(url: URL, dest: string) {
   return new Promise((resolve, reject) => {
      const file = fs.createWriteStream(dest);
      https
         .get(url, (response) => {
            response.pipe(file);
            file.on("finish", () => {
               file.close();
               resolve(true);
            });
         })
         .on("error", (error) => {
            fs.unlink(dest, (err) => {
               console.log("Couldn't delete file: ", err);
            });
            reject(error);
         });
   });
}

async function ensureDirectoryExists(filePath: string): Promise<void> {
   fsPromises.mkdir(filePath, { recursive: true });
}
