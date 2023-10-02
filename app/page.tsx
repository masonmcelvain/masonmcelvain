import { getMetadata } from "@data/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = getMetadata({ suffix: "Home" });
export { default } from "./App";
