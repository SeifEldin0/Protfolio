// app/sitemap.js
import projects from "@/data/projects.json";

const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
const siteUrl =
  envUrl && !envUrl.includes("protfolio-kohl-sigma")
    ? envUrl
    : "https://seif-eldin-dev.vercel.app";

export default function sitemap() {
  const lastModified = new Date().toISOString();

  const projectRoutes = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: project.featured ? 0.9 : 0.7,
    alternates: {
      languages: {
        "en-US": `${siteUrl}/projects/${project.slug}`,
        "ar-EG": `${siteUrl}/projects/${project.slug}`,
      },
    },
  }));

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          "en-US": siteUrl,
          "ar-EG": siteUrl,
        },
      },
    },
    ...projectRoutes,
  ];
}
