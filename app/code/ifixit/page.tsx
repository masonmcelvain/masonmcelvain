import { getMetadata } from "@data/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = getMetadata({ suffix: "iFixit" });
export { default } from "./iFixit";
