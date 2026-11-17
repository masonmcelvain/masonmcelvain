import HotPot from "@/public/images/hotpot.jpg";
import type { ProjectCardProps } from "@common/components";
import { splashPages, type SplashSlug } from "@data/splash";

// The card shares its image and gradient with the splash page hero.
function splashCard(slug: SplashSlug) {
   const { heroImage, heroAlt, gradientFrom, gradientTo } = splashPages[slug];
   return {
      src: heroImage,
      alt: heroAlt,
      href: `/${slug}`,
      gradientFrom,
      gradientTo,
   };
}

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
      ...splashCard("ifixit"),
      title: "iFixit",
      caption:
         "Join the repair revolution! My first job as a software engineer.",
   },
   {
      ...splashCard("hop"),
      title: "Hop",
      caption:
         "See, click, go! An icon-first browser extension for your favorite bookmarks.",
   },
   {
      ...splashCard("csai"),
      title: "CSAI",
      caption: "The Cal Poly club where I sunk my roots into web development.",
   },
];
export default projects;

// Other unused colors:
//    gradientFrom: "#d485ff",
//    gradientTo: "#00ffee",
