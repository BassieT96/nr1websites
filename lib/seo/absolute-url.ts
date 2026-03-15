import { siteConfig } from "@/content";

export function absoluteUrl(path = "/") {
  const normalizedPath = path === "/" ? "/" : `/${path.replace(/^\/+/, "")}`;
  return new URL(normalizedPath, siteConfig.url).toString();
}
