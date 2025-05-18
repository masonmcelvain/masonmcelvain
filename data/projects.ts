import HopComposite from "@assets/images/hop-composite.png";
import iFixitProTechToolkit from "@assets/images/ifixit-pro-tech-toolkit.png";
import CSAIComposite from "@assets/images/csai-composite.png";
import SecretSanta from "@assets/images/secret-santa.png";
import type { ProjectCardProps } from "@common/components";

const projects: ProjectCardProps[] = [
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
      src: SecretSanta,
      alt: "Bust of Santa Claus dressed as a spy.",
      title: "Simple Secret Santa",
      caption: "The fastest way to play Secret Santa with remote friends.",
      href: "https://simple-secret-santa-mason-mcelvains-projects.vercel.app/",
      gradientFrom: "from-[#7928ca]",
      gradientTo: "to-[#ff0080]",
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
//    gradientFrom: "#d485ff",
//    gradientTo: "#00ffee",
