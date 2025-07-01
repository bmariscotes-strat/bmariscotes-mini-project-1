import type { Metadata } from "next";

export function createPageMetadata(
  title: string,
  description: string,
  siteName = "Biella"
): Metadata {
  return {
    title: `${title} | ${siteName}`,
    description: description || `${title} page`,
  };
}
