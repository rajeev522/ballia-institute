export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://ballia-institute.vercel.app/sitemap.xml",
  };
}
