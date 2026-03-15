/** @type {import('next').NextConfig} */
const path = require("path");

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repo = "portfolio-nextjs";
let assetPrefix = "";
let basePath = "";

// If we are deploying to GitHub Pages
if (isGithubActions) {
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "**.githubusercontent.com" },
      { protocol: "https", hostname: "**.github.com" },
      { protocol: "https", hostname: "**.amazonaws.com" },
    ],
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
