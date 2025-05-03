import { ExternalLinkIcon } from "@icons/social";
import { type Tick } from "@models/tick";
import { type Session } from "../data";

export function SessionCard({ date, ticks, area }: Session) {
   const localizedDate = new Date(date).toLocaleString("en-IE", {
      timeZone: "UTC",
      day: "2-digit",
      month: "short",
      year: "numeric",
      weekday: "short",
   });

   return (
      <div className="mx-auto flex w-[22rem] flex-col space-y-2 rounded-sm bg-blue-50 p-8 sm:w-[28rem] md:w-[30rem] xl:w-[64rem]">
         <div className="flex flex-col space-y-4">
            <h2>{localizedDate}</h2>
            {area && <p>{area}</p>}
            <div className="flex flex-col space-y-4">
               {ticks.map((tick) => (
                  <TickRow
                     key={`${tick.Route} ${tick.Notes} ${tick["Lead Style"]}`}
                     tick={tick}
                     area={area}
                  />
               ))}
            </div>
         </div>
      </div>
   );
}

function TickRow({ tick, area }: { tick: Tick; area: string }) {
   const subArea =
      area === tick.Location ? null : tick.Location.replace(`${area} > `, "");

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
         {subArea && <p className="text-sm text-gray-800 italic">{subArea}</p>}
         <p>{tick.Notes}</p>
      </div>
   );
}
