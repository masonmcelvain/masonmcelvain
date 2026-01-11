import HopComposite from "@public/images/hop-composite.png";
import iFixitProTechToolkit from "@public/images/ifixit-pro-tech-toolkit.png";
import CSAIComposite from "@public/images/csai-composite.png";
import HotPot from "@/public/blog/red-rocks-25/hotpot.jpg";
import type { ProjectCardProps } from "@common/components";

const projects: ProjectCardProps[] = [
   {
      src: HotPot,
      alt: "Friends gathered around a hot pot dinner",
      title: "My blog",
      caption: "A place for me to reflect on and share my climbing adventures.",
      href: "/blog",
      gradientFrom: "from-[#d4145a]",
      gradientTo: "to-[#fbb03b]",
   },
   {
      src: iFixitProTechToolkit,
      alt: "Workbench spotlighting an iFixit Pro Tech Toolkit.",
      title: "iFixit",
      caption:
         "Join the repair revolution! My first job as a software engineer.",
      href: "https://www.ifixit.com/Store/",
      gradientFrom: "from-[#222223]",
      gradientTo: "to-[#0071ce]",
   },
   {
      src: HopComposite,
      alt: "Screenshots of the Hop browser extension",
      title: "Hop",
      caption:
         "See, click, go! An icon-first browser extension for your favorite bookmarks.",
      href: "https://www.usehop.app/",
      gradientFrom: "from-[#7928ca]",
      gradientTo: "to-[#ff0080]",
   },
   {
      src: CSAIComposite,
      alt: "Collage of CSAI Nimbus apps",
      title: "CSAI",
      caption: "The Cal Poly club where I sunk my roots into web development.",
      href: "https://csaicalpoly.com/",
      gradientFrom: "from-[#009245]",
      gradientTo: "to-[#fced21]",
   },
];
export default projects;

// Other unused colors:
//    gradientFrom: "#d485ff",
//    gradientTo: "#00ffee",
