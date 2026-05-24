import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", priority: "1.0", changefreq: "weekly" },
          { path: "/about", priority: "0.8", changefreq: "monthly" },
          { path: "/therapies", priority: "0.8", changefreq: "monthly" },
          { path: "/impact", priority: "0.8", changefreq: "monthly" },
          { path: "/donate", priority: "0.9", changefreq: "weekly" },
          { path: "/get-involved", priority: "0.7", changefreq: "monthly" },
          { path: "/gallery", priority: "0.6", changefreq: "monthly" },
          { path: "/contact", priority: "0.6", changefreq: "yearly" },
        ];
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries
          .map((e) => `  <url><loc>${BASE_URL}${e.path}</loc><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`)
          .join("\n")}\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});
