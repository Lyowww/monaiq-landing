import type { MetadataRoute } from "next";
import { defaultDescription, siteName } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: siteName,
    description: defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#F5F5F2",
    theme_color: "#D4AF37",
    categories: ["finance", "productivity", "lifestyle"],
    lang: "hy",
  };
}
