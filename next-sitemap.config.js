const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://seif-eldin-dev.vercel.app";

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 1.0,
  sitemapSize: 7000,
  exclude: ['/api/*'],
};
