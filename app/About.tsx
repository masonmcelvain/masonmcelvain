import { SocialIconRow } from "@icons/social";
import HistoryProse from "@markdown/HistoryProse.mdx";

export function About() {
   return (
      <div className="flex flex-col space-y-8">
         <p>
            I&apos;m a 25 year old living in Salt Lake City (he/him). I
            graduated from Cal Poly with a degree in computer science in March
            2022.
         </p>
         <div className="flex items-center justify-center">
            <SocialIconRow />
         </div>
         <h2>How silicon became my favorite element 🧪</h2>
         <div className="prose prose-lg prose-a:text-blue-600 max-w-none">
            <HistoryProse />
         </div>
      </div>
   );
}
