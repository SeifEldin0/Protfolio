const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://protfolio-kohl-sigma.vercel.app";

export default function sitemap() {
  const lastModified = new Date().toISOString();

  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changefreq: "weekly",
      priority: 1,
    },
  ];
}
