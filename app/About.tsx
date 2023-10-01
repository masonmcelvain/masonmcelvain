import { SocialIconRow } from "@icons/social";
import HistoryProse from "@markdown/HistoryProse.mdx";

export function About() {
   return (
      <div className="flex flex-col space-y-8">
         <p>
            I&apos;m a 24 year old living in San Luis Obispo (he/him). I
            graduated from Cal Poly with a degree in computer science in March
            2022.
         </p>
         <div className="flex items-center justify-center">
            <SocialIconRow />
         </div>
         <h3>How silicon became my favorite element 🧪</h3>
         <div>
            <HistoryProse />
         </div>
      </div>
   );
}
