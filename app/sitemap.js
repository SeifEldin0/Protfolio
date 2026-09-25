// app/sitemap.js
import projects from "@/data/projects.json";

const siteUrl = "https://seif-aldin-dev.vercel.app";

export default function sitemap() {
  const lastModified = new Date().toISOString();

  const projectRoutes = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: project.featured ? 0.9 : 0.7,
  }));

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...projectRoutes,
  ];
}