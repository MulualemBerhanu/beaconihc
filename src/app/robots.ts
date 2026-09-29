import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  const isProductionHost =
    !siteConfig.url.includes("localhost") &&
    !siteConfig.url.includes("127.0.0.1") &&
    !siteConfig.url.includes("vercel.app");

  if (!isProductionHost) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
