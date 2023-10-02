import { getMetadata } from "@data/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = getMetadata({ suffix: "Hop" });
export { default } from "./Hop";
