const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://protfolio-kohl-sigma.vercel.app";

export default function sitemap() {
  const lastModified = new Date().toISOString();
  
  const routes = [
    {
      url: siteUrl,
      lastModified,
      changefreq: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/#about`,
      lastModified,
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/#projects`,
      lastModified,
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/#contact`,
      lastModified,
      changefreq: "monthly",
      priority: 0.7,
    },
  ];

  return routes;
}
