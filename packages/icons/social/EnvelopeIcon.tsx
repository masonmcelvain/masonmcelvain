import { FaEnvelope } from "react-icons/fa";
import { BaseIcon } from "./BaseIcon";

export function EnvelopeIcon() {
   return (
      <BaseIcon
         ariaLabel="Email Mason"
         Icon={FaEnvelope}
         url="mailto:masonmcelvain@gmail.com"
         color="#f15bb5"
      />
   );
}
