import CSAIComposite from "@public/images/csai-composite.png";
import HopComposite from "@public/images/hop-composite.png";
import iFixitProTechToolkit from "@public/images/ifixit-pro-tech-toolkit.png";
import { type StaticImageData } from "next/image";

export type SplashSlug = "ifixit" | "hop" | "csai";

export type SplashConfig = {
   /** Tailwind gradient classes, matching the homepage card. */
   gradientFrom: string;
   gradientTo: string;
   /** Raw hex colors for the `--accent-from`/`--accent-to` CSS variables. */
   accentFrom: string;
   accentTo: string;
   heroImage: StaticImageData;
   heroAlt: string;
};

export const splashPages: Record<SplashSlug, SplashConfig> = {
   ifixit: {
      gradientFrom: "from-[#222223]",
      gradientTo: "to-[#0071ce]",
      accentFrom: "#222223",
      accentTo: "#0071ce",
      heroImage: iFixitProTechToolkit,
      heroAlt: "Workbench spotlighting an iFixit Pro Tech Toolkit.",
   },
   hop: {
      gradientFrom: "from-[#7928ca]",
      gradientTo: "to-[#ff0080]",
      accentFrom: "#7928ca",
      accentTo: "#ff0080",
      heroImage: HopComposite,
      heroAlt: "Screenshots of the Hop browser extension",
   },
   csai: {
      gradientFrom: "from-[#009245]",
      gradientTo: "to-[#fced21]",
      accentFrom: "#009245",
      accentTo: "#fced21",
      heroImage: CSAIComposite,
      heroAlt: "Collage of CSAI Nimbus apps",
   },
};

export const splashSlugs = Object.keys(splashPages) as SplashSlug[];
