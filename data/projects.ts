import HopComposite from "@assets/images/hop-composite.png";
import iFixitProTechToolkit from "@assets/images/ifixit-pro-tech-toolkit.png";
import CSAIComposite from "@assets/images/csai-composite.png";
import type { ProjectCardProps } from "@common/components";

const projects: ProjectCardProps[] = [
   {
      src: HopComposite,
      alt: "Screenshots of the Hop browser extension",
      title: "Hop",
      caption:
         "See, click, go! An icon-first browser extension for your favorite bookmarks.",
      href: "/code/hop",
      gradientFrom: "from-[#d4145a]",
      gradientTo: "to-[#fbb03b]",
   },
   {
      src: iFixitProTechToolkit,
      alt: "Workbench spotlighting an iFixit Pro Tech Toolkit.",
      title: "iFixit",
      caption:
         "Join the repair revolution! Learn about my first job as a software engineer.",
      href: "/code/ifixit",
      gradientFrom: "from-[#222223]",
      gradientTo: "to-[#0071ce]",
   },
   {
      src: CSAIComposite,
      alt: "Collage of CSAI Nimbus apps",
      title: "CSAI",
      caption: "The Cal Poly club where I sunk my roots into web development.",
      href: "/code/csai",
      gradientFrom: "from-[#009245]",
      gradientTo: "to-[#fced21]",
   },
];
export default projects;

// Other unused colors:
//    gradientFrom: "#7928CA",
//    gradientTo: "#FF0080",

//    gradientFrom: "#d485ff",
//    gradientTo: "#00ffee",
