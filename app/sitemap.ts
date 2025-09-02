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
      url: `${baseUrl}/#los-pibardos`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/#nuestros-productos`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/#experiencia-kybo`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/#nuestras-redes`,
      lastModified: new Date().toISOString(),
    },
  ];
}
