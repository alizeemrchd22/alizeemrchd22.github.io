import type { APIRoute } from "astro";
import { projects } from "../data/projects";

// Sitemap généré au build, sans dépendance externe : les pages fixes du site
// plus une entrée par projet du portfolio.
const staticPaths = ["/", "/competencies", "/about", "/portfolio", "/about-me", "/projects/data-warehouse"];

export const GET: APIRoute = ({ site }) => {
  const paths = [
    ...staticPaths,
    ...Object.keys(projects).map((slug) => `/projects/${slug}`),
  ];

  const urls = paths
    .map((p) => {
      const loc = new URL(p, site).href;
      const priority = p === "/" ? "1.0" : "0.8";
      return `  <url><loc>${loc}</loc><changefreq>monthly</changefreq><priority>${priority}</priority></url>`;
    })
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } }
  );
};
