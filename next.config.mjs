const isPages = process.env.GITHUB_PAGES === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isPages ? "export" : "standalone",
  images: {
    unoptimized: true,
  },
  trailingSlash: isPages,
  basePath: isPages ? "/talon" : "",
  assetPrefix: isPages ? "/talon" : "",
};

export default nextConfig;
