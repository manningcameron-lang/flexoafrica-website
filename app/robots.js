// app/robots.js — served at /robots.txt
import { site } from "@/lib/site";

export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
