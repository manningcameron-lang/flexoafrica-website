import { redirect } from "next/navigation";
import { site } from "@/lib/site";

export const metadata = {
  title: "Client Portal",
  description:
    "Sign in to the Flexo Africa Client Portal to track your plate jobs in real time.",
};

// The Client Portal is now live at portal.flexoafrica.com.
// This route 307-redirects there so any old bookmarks or in-site links
// pointing to /portal still work.
export default function PortalRedirect() {
  redirect(site.portalUrl);
}
