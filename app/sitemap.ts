import { type MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const isProd = process.env.NODE_ENV === "production";
  const baseUrl = isProd ? process.env.PROD_URL : process.env.DEV_URL;

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/#about-us`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/#bubble-teas`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/#bubble-waffles`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/#kybo-experience`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/#social-media`,
      lastModified: new Date().toISOString(),
    },
  ];
}
