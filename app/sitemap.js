// app/sitemap.js — served at /sitemap.xml
import { site } from "@/lib/site";

export default function sitemap() {
  const now = new Date();
  const base = site.url;

  return [
    { url: `${base}/`,             lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/about`,        lastModified: now, changeFrequency: "yearly",  priority: 0.7 },
    { url: `${base}/services`,     lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/studio`,       lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tools`,        lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/order-plates`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/faq`,          lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`,      lastModified: now, changeFrequency: "yearly",  priority: 0.8 },
    { url: `${base}/policies`,     lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
  ];
}
