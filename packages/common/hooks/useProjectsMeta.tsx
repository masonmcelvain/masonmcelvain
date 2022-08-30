import { ProjectMeta } from "@common/components";
import HopComposite from "@assets/images/hop-composite.png";
import iFixitProTechToolkit from "@assets/images/ifixit-pro-tech-toolkit.png";
import CSAIComposite from "@assets/images/csai-composite.png";

export function useProjectsMeta(): ProjectMeta[] {
   return [
      {
         src: HopComposite,
         alt: "Screenshots of the Hop browser extension",
         title: "Hop",
         caption:
            "See, click, go! An icon-first browser extension for your favorite bookmarks.",
         href: "/hop",
         gradientFrom: "#7928CA",
         gradientTo: "#FF0080",
      },
      {
         src: iFixitProTechToolkit,
         alt: "Workbench spotlighting an iFixit Pro Tech Toolkit.",
         title: "iFixit",
         caption:
            "Join the repair revolution! Learn about my first job as a software engineer.",
         href: "/ifixit",
         gradientFrom: "#d4145a",
         gradientTo: "#fbb03b",
      },
      {
         src: CSAIComposite,
         alt: "Collage of CSAI Nimbus apps",
         title: "CSAI",
         caption:
            "The Cal Poly club where I sunk my roots into web development.",
         href: "/csai",
         gradientFrom: "#009245",
         gradientTo: "#fced21",
      },
      // {
      //    src: HopComposite,
      //    alt: "Screenshot of the Hop browser extension",
      //    title: "Hop",
      //    caption:
      //       "See, click, go! An icon-first browser extension for your favorite bookmarks.",
      //    href: "/hop",
      //    gradientFrom: "#d485ff",
      //    gradientTo: "#00ffee",
      // },
   ];
}
