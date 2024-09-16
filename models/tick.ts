import { z } from "zod";

export const TickSchema = z.object({
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
export type Tick = z.infer<typeof TickSchema>;

export const TicksSchema = z.array(TickSchema);
