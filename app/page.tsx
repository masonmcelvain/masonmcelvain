import { getBaseMetadata } from "@helpers/app/metadata";
import { Metadata } from "next";

export const metadata: Metadata = getBaseMetadata({ suffix: "Home" });
export { default } from "./App";
