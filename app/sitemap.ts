import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const isProd = process.env.NODE_ENV === "production";
  const baseUrl = isProd ? process.env.PROD_URL : process.env.DEV_URL;

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
    },
  ];
}
