const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://protfolio-kohl-sigma.vercel.app";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
