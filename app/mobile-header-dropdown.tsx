import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

type Links = {
   name: string;
   href: string;
};

export function MobileHeaderDropdown({
   links,
   title,
}: {
   links: Links[];
   title: string;
}) {
   return (
      <Menu as="div" className="relative inline-block text-left">
         <div>
            <MenuButton className="inline-flex w-full items-center gap-x-1.5 bg-white px-3 py-2 text-xl font-semibold">
               {title}
               <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 h-5 w-5 text-gray-400"
               />
            </MenuButton>
         </div>

         <MenuItems
            transition
            className="ring-opacity-5 absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
         >
            <div className="py-1">
               {links.map((link) => (
                  <MenuItem key={link.href}>
                     <Link
                        href={link.href}
                        className="block px-4 py-2 text-sm font-semibold text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900"
                     >
                        {link.name}
                     </Link>
                  </MenuItem>
               ))}
            </div>
         </MenuItems>
      </Menu>
   );
}
