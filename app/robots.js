// app/robots.js
const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
const siteUrl =
  envUrl && !envUrl.includes("protfolio-kohl-sigma")
    ? envUrl
    : "https://seif-eldin-dev.vercel.app";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}