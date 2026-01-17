// app/sitemap.js
const siteUrl = "https://seif-aldin-dev.vercel.app";

export default function sitemap() {
  const lastModified = new Date().toISOString();
  
  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/#about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/#projects`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/#contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}