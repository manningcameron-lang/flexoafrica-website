// Per-page search engine tags: the canonical address and the share-link address.
// Both are relative paths; layout.jsx metadataBase turns them into full
// https://www.flexoafrica.com/... addresses.
import { site } from "@/lib/site";

export const baseOpenGraph = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  siteName: site.name,
  locale: "en_ZA",
  type: "website",
  // Spelled out so pages that set their own share address keep the preview picture.
  images: [{ url: "/opengraph-image.png", width: 1200, height: 630, type: "image/png" }],
};

export function pageSeo(path) {
  return {
    alternates: { canonical: path },
    openGraph: { ...baseOpenGraph, url: path },
  };
}
