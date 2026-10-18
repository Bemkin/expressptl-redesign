import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permanent redirects from the legacy WordPress site (expressptl.com/wp-sitemap.xml) so
  // existing search rankings and bookmarks land on the new pages. The theme's leftover demo
  // pages (shop, cart, sample-page, home-2…5, demo team members, etc.) are left to 404.
  async redirects() {
    return [
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/team", destination: "/about#team", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/track-form", destination: "/contact", permanent: true },
      { source: "/work-here", destination: "/contact", permanent: true },
      { source: "/services-2", destination: "/services", permanent: true },
      { source: "/all-services", destination: "/services", permanent: true },
      { source: "/all-services/:slug", destination: "/services", permanent: true },
      { source: "/gallery", destination: "/operations#fleet", permanent: true },
    ];
  },
};

export default nextConfig;
